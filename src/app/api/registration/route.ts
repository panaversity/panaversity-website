import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { eq, or, and } from "drizzle-orm";
import { UsersTable } from "@/lib/schema/users";
import { formCities, formQualifications } from "@/constants/constants";
import { otpCodes } from "@/lib/schema/otpCodes";
import sendEmail from "@/lib/transporter";
import RegistrationConfirmation from "../../../../emailTemplates/registrationconfirmation";

const validateInput = (input: any) => {
  const errors = [];

  if (input.fullName.length < 3 || input.fullName.length > 255) {
    errors.push("Invalid Full name length!");
  }

  if (input.fatherName.length < 3 || input.fatherName.length > 255) {
    errors.push("Invalid Full name length!");
  }

  if (input.email.length > 255) {
    errors.push("Invalid Email length!");
  }

  if (!formCities.includes(input.city)) {
    errors.push("Invalid City!");
  }

  if (!formQualifications.includes(input.highestQualification)) {
    errors.push("Invalid Qualification!");
  }

  if (input.phoneNumber.toString().length !== 11) {
    errors.push("Invalid phone number length!");
  }

  if (input.cnic.toString().length !== 13) {
    errors.push("Invalid cnic length!");
  }

  if (input.gender !== "female" && input.gender !== "male") {
    errors.push("Invalid Gender");
  }

  if (
    !input.fullName ||
    !input.email ||
    !input.phoneNumber ||
    !input.cnic ||
    !input.city ||
    !input.gender ||
    !input.highestQualification ||
    !input.dateOfBirth ||
    !input.otp
  ) {
    errors.push("Fields are empty!");
  }

  return errors;
};

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const expectedOrigin = process.env.BASE_URL;

  if (origin !== expectedOrigin) {
    return new Response(JSON.stringify({ message: "Invalid origin" }), {
      status: 403,
    });
  }
  const input = await request.json();

  const errors = validateInput(input);

  if (errors.length > 0) {
    return NextResponse.json({ message: errors[0] }, { status: 500 });
  }

  try {
    const oldUsers = await db
      .select()
      .from(UsersTable)
      .where(
        or(
          eq(UsersTable.email, input.email),
          eq(UsersTable.cnic, input.cnic),
          eq(UsersTable.phoneNumber, input.phoneNumber)
        )
      );

    if (oldUsers.length > 0) {
      throw new Error(
        "An application with this email, CNIC or phone number already exists."
      );
    }

    const otpUsers = await db
      .select()
      .from(otpCodes)
      .where(
        and(eq(otpCodes.email, input.email), eq(otpCodes.code, input.otp))
      );

    if (otpUsers.length === 0) {
      throw new Error("Incorrect OTP Entered!");
    }

    const otpUser = otpUsers[0];

    const expiryTime = otpUser.expiryTime.getTime();
    const currentTime = new Date().getTime();

    if (expiryTime < currentTime) {
      throw new Error("OTP expired. Please click on SEND OTP button.");
    }

    const users = await db.insert(UsersTable).values(input).returning();
    const user = users[0];

    await sendEmail({
      to: input.email,
      subject: "Addmision Confirmation",
      html: RegistrationConfirmation({
        userName: input.fullName,
        regNumber: `${user.id}`.padStart(8, "0"),
      }),
    });

    return NextResponse.json({
      message: "Applied Successfully",
      users,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

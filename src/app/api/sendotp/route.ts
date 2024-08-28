import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { otpCodes } from "@/lib/schema/otpCodes";
import { eq } from "drizzle-orm";
import sendEmail from "@/lib/transporter";
import sendEmailtemplate from "../../../../emailTemplates/sendotp";

const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

const getExpiryTime = () => {
  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() + 2);
  return currentDate;
};

const sendOtpEmail = async (email: string, code: number) => {
  // console.log("Sending email to:", email);
  await sendEmail({
    to: email,
    subject: "Email Verification",
    html: sendEmailtemplate(code),
  });
  // console.log("Email sent successfully!");
};

const updateOtpCode = async (email: string, code: number, expiryTime: Date) => {
  // console.log("Updating OTP code for:", email);
  const oldUser = await db
    .select()
    .from(otpCodes)
    .where(eq(otpCodes.email, email))
    .limit(1);

  // console.log("Old user:", oldUser);

  if (oldUser && oldUser.length > 0) {
    // console.log("Updating existing user...");
    await db
      .update(otpCodes)
      .set({ code, expiryTime })
      .where(eq(otpCodes.email, email))
      .returning({ updatedCode: otpCodes.code });
  } else {
    // console.log("Creating new user...");
    await db.insert(otpCodes).values({ email, code, expiryTime }).returning();
  }
  // console.log("OTP code updated successfully!");
};

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const expectedOrigin = process.env.BASE_URL;

  if (origin !== expectedOrigin) {
    return new Response(JSON.stringify({ message: "Invalid origin" }), {
      status: 403,
    });
  }

  const { email } = await request.json();

  if (!email) {
    throw new Error("Enter your email!");
  }

  const code = generateOtp();
  const expiryTime = getExpiryTime();

  // console.log("Generated OTP code:", code);
  // console.log("Expiry time:", expiryTime);

  try {
    await updateOtpCode(email, code, expiryTime);
    await sendOtpEmail(email, code);

    return NextResponse.json({
      message: "OTP sent successfully. Please check your email.",
    });
  } catch (error: any) {
    // console.error("Error:", error);
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { UsersTable } from "@/lib/schema/users";
// import { otpCodes } from "@/lib/schema/otpCodes";
import { and, eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const expectedOrigin = process.env.BASE_URL;

  if (origin !== expectedOrigin) {
    return new Response(JSON.stringify({ message: "Invalid origin" }), {
      status: 403,
    });
  }
  try {
    const { email, cnic } = await request.json();

    if (!email || !cnic) {
      return NextResponse.json(
        { message: "Email and CNIC are required" },
        { status: 400 }
      );
    }

    const users = await db
      .select()
      .from(UsersTable)
      .where(
        and(eq(UsersTable.email, email), eq(UsersTable.cnic, Number(cnic)))
      )
      .limit(1);

    if (!users || users.length === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const user = users[0];

    return NextResponse.json({
      fullName: user.fullName,
      fatherName: user.fatherName,
      cnic: user.cnic.toString(),
      dateOfRegistration: user.createdAt,
      studentId: user.id.toString(),
    });
  } catch (error: any) {
    console.error("Error:", error.message);

    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}

// otp
// export async function POST(request: NextRequest) {
//   try {
//     const { email, otp } = await request.json();

//     if (!email || !otp) {
//       return NextResponse.json(
//         { message: "Email and OTP are required" },
//         { status: 400 }
//       );
//     }

//     const otpRecord = await db
//       .select()
//       .from(otpCodes)
//       .where(and(eq(otpCodes.email, email), eq(otpCodes.code, otp)))
//       .limit(1);

//     if (!otpRecord || otpRecord.length === 0) {
//       return NextResponse.json({ message: "Invalid OTP" }, { status: 401 });
//     }

//     const { expiryTime } = otpRecord[0];
//     const currentTime = new Date();

//     if (expiryTime < currentTime) {
//       return NextResponse.json({ message: "OTP expired" }, { status: 401 });
//     }

//     const users = await db
//       .select()
//       .from(UsersTable)
//       .where(eq(UsersTable.email, email))
//       .limit(1);

//     if (!users || users.length === 0) {
//       return NextResponse.json({ message: "User not found" }, { status: 404 });
//     }

//     const user = users[0];

//     return NextResponse.json({
//       fullName: user.fullName,
//       fatherName: user.fatherName,
//       cnic: user.cnic,
//       dateOfRegistration: user.createdAt,
//       studentId: user.id,
//     });
//   } catch (error: any) {
//     // console.error("Error:", error.message);
//     return NextResponse.json(
//       { message: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { eq, and } from "drizzle-orm";
import { UsersTable } from "@/lib/schema/users";
import { EntranceResultTable } from "@/lib/schema/entrance_exam_result";

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const expectedOrigin = process.env.BASE_URL;

  if (origin !== expectedOrigin) {
    return new Response(JSON.stringify({ message: "Invalid origin" }), {
      status: 403,
    });
  }

  try {
    const { id, cnic } = await request.json();

    if (!id || !cnic) {
      return NextResponse.json(
        { message: "Please provide both Registration ID and CNIC." },
        { status: 400 }
      );
    }

    const applicants = await db
      .select()
      .from(UsersTable)
      .where(
        and(eq(UsersTable.id, Number(id)), eq(UsersTable.cnic, Number(cnic)))
      )
      .limit(1);

    if (!applicants || applicants.length === 0) {
      return NextResponse.json(
        {
          message:
            "Student not found. Please check your Registration ID and CNIC.",
        },
        { status: 404 }
      );
    }

    const applicant = applicants[0];

    const results = await db
      .select()
      .from(EntranceResultTable)
      .where(eq(EntranceResultTable.userId, applicant.id))
      .limit(1);

    if (!results || results.length === 0) {
      return NextResponse.json(
        { message: "Exam result not found for this student." },
        { status: 404 }
      );
    }

    const result = results[0];

    return NextResponse.json(
      {
        status: result.status,
        id: result.id,
        exam_date: result.examDate,
        name: applicant.fullName,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal Server Error. Please try again later." },
      { status: 500 }
    );
  }
}

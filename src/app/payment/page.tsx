import { PaymentsPagePlaceHolder } from "./_components/PaymentsPagePlaceHolder";
import { ProgramPayments } from "./_components/ProgramPayments";
// Dummy Data Import
import { studentPrograms } from "./_components/dummyData";

async function get_package_info(program_id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PAYMENT_URL}/api/v1/package/${program_id}`,
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch package info:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
}

export default async function Payments() {
  const packagInfo = await get_package_info(
    "123e4567-e89b-12d3-a456-426614174000",
  );

  return (
    <main className="mx-4 flex min-h-fit flex-col items-center justify-center gap-8 rounded-3xl bg-[#1eb2a6]/10 px-4 pb-20 pt-10 md:mx-6 md:px-10">
      <h2 className="text-center text-3xl font-bold tracking-tight text-custom-color sm:text-4xl">
        Payments
      </h2>
      {studentPrograms.length === 0 ? (
        <PaymentsPagePlaceHolder />
      ) : (
        <ProgramPayments
          currency={packagInfo.currency}
          fee_amount={packagInfo.fee_amount}
        />
      )}
    </main>
  );
}

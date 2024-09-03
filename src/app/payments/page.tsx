import { PaymentsPagePlaceHolder } from "./PaymentsPagePlaceHolder";
import { ProgramPayments } from "./ProgramPayments";
// Dummy Data Import
import { studentPrograms } from "./dummyData";

export default function Payments() {
  return (
    <main className="mx-4 flex min-h-fit flex-col items-center justify-center gap-8 rounded-3xl bg-[#1eb2a6]/10 px-4 pb-20 pt-10 md:mx-6 md:px-10">
      <h2 className="text-center text-3xl font-bold tracking-tight text-custom-color sm:text-4xl">
        Payments
      </h2>
      {studentPrograms.length === 0 ? (
        <PaymentsPagePlaceHolder />
      ) : (
        <ProgramPayments />
      )}
    </main>
  );
}

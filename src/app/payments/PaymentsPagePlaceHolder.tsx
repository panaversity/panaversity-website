import Link from "next/link";

export const PaymentsPagePlaceHolder = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-custom-color">
          You are not enrolled in any program
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Please enroll in a program to view payments.
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/programs"
            className="w-28 rounded-md bg-custom-color px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-custom-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-color sm:w-fit"
          >
            Explore Programs
          </Link>
          <Link
            href="/"
            className="w-28 text-sm font-semibold text-gray-900 sm:w-fit"
          >
            Go Back to Home <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

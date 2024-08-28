import Registeration from '@/components/Registration/RegistrationForm';
import StudentResult from '@/components/Result/StudentResult';
import Link from 'next/link';

const Result = () => {
  const email = process.env.USER_EMAIL;

  if (email === 'dummy') {
    return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-custom-color">
            Results will be available after exam
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Please come back later.
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Stay Tune for Updates.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-custom-color px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-custom-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-color"
            >
              Go back home
            </Link>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    );
  }

  return <StudentResult />;
};

export default Result;

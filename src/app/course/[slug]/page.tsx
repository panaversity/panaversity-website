import { possibleRoutes } from '@/constants/constants';
import { CourseData } from '@/types/types';
import { GetChildComponent } from '@/lib/helper-functions';

function ForwardRequest(pathname: string) {
  switch (pathname) {
    case 'introduction':
      return 'course/introduction';
    case 'q1':
    case 'q2':
    case 'q3':
      return `course/core/${pathname}`;
    case 'q4':
    case 'q5':
    case 'q6':
      return `course/mastery/${pathname}`;
    case 'q7':
      return `course/physical/${pathname}`;
    default:
      return `course/optional/${pathname}`;
  }
}

const getData = async ({ pathname }: { pathname: string }) => {
  // const baseUrl =
  //   process.env.NODE_ENV === 'development'
  //     ? process.env.DEV_BASE_URL
  //     : process.env.PROD_BASE_URL
  const baseUrl = process.env.BASE_URL;
  if (!baseUrl) {
    throw new Error('BASE_URL environment variable is not set');
  }

  const pathName = ForwardRequest(pathname);

  const res = await fetch(`${baseUrl}/api/${pathName}`, {
    cache: 'force-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data: CourseData = await res.json();

  return data;
};

const CourseContent = async ({ params }: { params: { slug: string } }) => {
  if (possibleRoutes.includes(params.slug)) {
    const courseData = await getData({ pathname: params.slug });

    return (
      <div className="mx-2 px-2 md:mx-5 md:px-10 pb-20 pt-10 bg-[#1eb2a6]/10 rounded-3xl min-h-dvh">
        <h1 className=" text-custom-color">{courseData.mainTitle}</h1>
        <p
          className={`${
            courseData.quarter?.includes('Master the Future')
              ? 'text-2xl pt-6 font-bold'
              : 'text-base pt-3 font-bold'
          } `}
        >
          {courseData.quarter}
        </p>
        {courseData.description.map((description, index) => (
          <p key={index} className="leading-7 [&:not(:first-child)]:mt-6">
            {description}
          </p>
        ))}
        {courseData.outline.map((outline, index) => (
          <div key={index}>
            <h3 className="mt-5">{outline.title}</h3>
            {outline.children.map((child, childIndex) => (
              <div className="py-1" key={childIndex}>
                {GetChildComponent(child)}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex h-[50vh] w-full items-center justify-center text-2xl font-semibold text-zinc-800">
        404 Not Found
      </div>
    );
  }
};

export default CourseContent;

export async function generateStaticParams() {
  return possibleRoutes.map((route) => ({
    slug: route,
  }));
}

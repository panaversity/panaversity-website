import { QcardsT } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import agents from '../../../../public/kpk/course/agents.jpeg';
import Humanoid from '../../../../public/kpk/course/Humanoid.jpeg';
import Kubernetes from '../../../../public/kpk/course/Kubernetes.jpeg';
import llama_3 from '../../../../public/kpk/course/llama_3.jpeg';
import microservices from '../../../../public/kpk/course/microservices.jpeg';
import python from '../../../../public/kpk/course/python.jpeg';
import pytorch from '../../../../public/kpk/course/pytorch.jpeg';

export default function Courses() {
  return (
    <div className="bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Qcards props={CoreLevel} />
        <Qcards props={MasteryLevel} />
        <Qcards props={PhysicalAI} />
      </div>
    </div>
  );
}

const Qcards = ({ props }: { props: QcardsT }) => {
  return (
    <div className="mx-auto pb-8 lg:max-w-4xl [&:not(:first-child)]:mt-5 ">
      <h2 className="text-2xl text-center md:text-justify font-bold tracking-tight text-custom-color sm:text-3xl">
        {props.LevelTitle}
      </h2>
      {/* <p className="mt-1 text-md leading-7 text-gray-600">{props.LevelDesc}</p> */}
      <div className="mx-auto mt-12 grid max-w-2xl auto-rows-fr grid-cols-1 gap-6 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {props.courses.map((course) => (
          <Link
            href={course.href}
            key={course.id}
            className="hover:scale-105 duration-300 relative isolate flex flex-col justify-end overflow-hidden rounded-xl bg-gray-900 px-6 pb-6 pt-64 sm:pt-40 lg:pt-64"
          >
            <Image
              width={500}
              height={500}
              placeholder="blur"
              src={course.imageUrl}
              alt={course.title}
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10" />

            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              {course.quarter}
            </div>
            <h3 className="mt-2 text-lg font-semibold leading-6 text-white">
              <span>
                <span className="absolute inset-0" />
                {course.title}
              </span>
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

const CoreLevel = {
  LevelTitle: 'Applied GenAI Core Level (3 Quarters)',
  courses: [
    {
      id: 1,
      title: 'Prompt Engineering and Modern Python',
      href: '/course/q1',
      imageUrl: python,
      quarter: 'First quarter',
      duration: '3 Months',
    },
    {
      id: 2,
      title: 'Developing Multi AI Agent Systems',
      href: '/course/q2',
      imageUrl: agents,
      quarter: 'Second quarter',
      duration: '3 Months',
    },
    {
      id: 3,
      title: 'Cloud Native Microservices',
      href: '/course/q3',
      imageUrl: microservices,
      quarter: 'Third quarter',
      duration: '3 Months',
    },
  ],
};

const MasteryLevel = {
  LevelTitle: 'Cloud Native GenAI Mastery Level (3 Quarters)',
  courses: [
    {
      id: 4,
      title: 'Generative AI with PyTorch',
      href: '/course/q4',
      imageUrl: pytorch,
      quarter: 'Fourth quarter',
      duration: '3 Months',
    },
    {
      id: 5,
      title: 'Fine-Tuning Open-Source LLM (Llama 3)',
      href: '/course/q5',
      imageUrl: llama_3,
      quarter: 'Fifth quarter',
      duration: '3 Months',
    },
    {
      id: 6,
      title: 'Kubernetes and Advanced CNAI',
      href: '/course/q6',
      imageUrl: Kubernetes,
      quarter: 'Sixth quarter',
      duration: '3 Months',
    },
  ],
};

const PhysicalAI = {
  LevelTitle: 'Physical AI and Humanoids',
  courses: [
    {
      id: 7,
      title: 'Humanoid Robotics Development',
      href: '/course/q7',
      imageUrl: Humanoid,
      quarter: 'Seventh quarter',
      duration: '3 Months',
    },
  ],
};

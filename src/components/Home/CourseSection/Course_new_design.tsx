import { QcardsT } from '@/types/types';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import python from '../../../../public/kpk/course/python.jpeg';
import agents from '../../../../public/kpk/course/agents.jpeg';
import microservices from '../../../../public/kpk/course/microservices.jpeg';
import pytorch from '../../../../public/kpk/course/pytorch.jpeg';
import llama_3 from '../../../../public/kpk/course/llama_3.jpeg';
import Kubernetes from '../../../../public/kpk/course/Kubernetes.jpeg';
import Humanoid from '../../../../public/kpk/course/Humanoid.jpeg';

export default function Courses() {
  return (
    <div className="bg-white py-24 sm:py-12" id="courses">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-custom-color sm:text-4xl mb-4">
            Master the Future
          </h2>
          <p className="text-lg text-gray-600">
            Getting You Ready For The $100 Trillion AI Industrial Revolution.
            Embark on a comprehensive learning journey structured across 7 quarters to acquire advanced technology skills.
          </p>
        </div>
        <Qcards props={CoreLevel} />
        <Qcards props={MasteryLevel} />
        <Qcards props={PhysicalAI} />
      </div>
    </div>
  );
}

const Qcards = ({ props }: { props: QcardsT }) => {
  return (
    <div className="mx-auto pb-16 lg:max-w-6xl [&:not(:first-child)]:mt-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {props.LevelTitle}
        </h2>
      </div>
      <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
        {props.courses.map((course) => (
          <Link
            href={course.href}
            key={course.id}
            className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-6 pb-8 pt-80 sm:pt-48 lg:pt-80 transition-all duration-500 hover:shadow-2xl hover:shadow-custom-color/20 hover:-translate-y-2"
          >
            <Image
              width={500}
              height={500}
              placeholder="blur"
              src={course.imageUrl}
              alt={course.title}
              className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 group-hover:via-gray-900/20 transition-all duration-500" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 mb-2">
              <span className="bg-custom-color/20 text-custom-color px-2 py-0.5 rounded-full text-xs font-bold backdrop-blur-md border border-custom-color/30">
                {course.quarter}
              </span>
              <span className="ml-2 text-gray-400">{course.duration}</span>
            </div>
            <h3 className="text-xl font-bold leading-7 text-white group-hover:text-custom-color transition-colors duration-300">
              <span className="absolute inset-0" />
              {course.title}
            </h3>
            <div className="mt-4 flex items-center text-custom-color opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span className="text-sm font-bold uppercase tracking-wider">Explore Course</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const CoreLevel = {
  LevelTitle: 'Applied GenAI Core Level',
  courses: [
    {
      id: 1,
      title: 'Prompt Engineering and Modern Python',
      href: '/course/q1',
      imageUrl: python,
      quarter: 'Quarter 1',
      duration: '3 Months',
    },
    {
      id: 2,
      title: 'Developing Multi AI Agent Systems',
      href: '/course/q2',
      imageUrl: agents,
      quarter: 'Quarter 2',
      duration: '3 Months',
    },
    {
      id: 3,
      title: 'Cloud Native Microservices',
      href: '/course/q3',
      imageUrl: microservices,
      quarter: 'Quarter 3',
      duration: '3 Months',
    },
  ],
};

const MasteryLevel = {
  LevelTitle: 'Cloud Native GenAI Mastery Level',
  courses: [
    {
      id: 4,
      title: 'Generative AI with PyTorch',
      href: '/course/q4',
      imageUrl: pytorch,
      quarter: 'Quarter 4',
      duration: '3 Months',
    },
    {
      id: 5,
      title: 'Fine-Tuning Open-Source LLM (Llama 3)',
      href: '/course/q5',
      imageUrl: llama_3,
      quarter: 'Quarter 5',
      duration: '3 Months',
    },
    {
      id: 6,
      title: 'Kubernetes and Advanced CNAI',
      href: '/course/q6',
      imageUrl: Kubernetes,
      quarter: 'Quarter 6',
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
      quarter: 'Quarter 7',
      duration: '3 Months',
    },
  ],
};

import CourseLevel from './CourseLevel'
import { CoreLevel, MasteryLevel, PhysicalAI } from './CourseData'

export default function CourseSection() {
  return (
    <div className='bg-white py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-6xl text-center'>
          <h2
            style={{ lineHeight: 'inherit' }}
            className='mt-2 text-3xl font-bold tracking-tight text-custom-color sm:text-4xl'
          >
            Master the Future
            <br /> Getting You Ready For The $100 Trillion AI Industrial
            Revolution
          </h2>
          <p className='mt-2 paragraph-center text-justify'>
            Embark on a 1-year learning journey, with 9 months of advanced
            training, structured across 7 quarters to acquire advanced
            technology skills. The first 3 core quarters provide a solid
            foundation in Python, AI, and cloud-native microservices, while the
            next 3 CNAI Mastery quarters focus on generative AI, Kubernetes, and
            large language models. A final quarter dedicated to future
            technologies ensures you stay at the forefront of the AI revolution.
            Regular breaks throughout the program allow for rest and
            reinforcement of concepts, positioning you to unlock opportunities
            in the lucrative $100 trillion industry.
            <span>
              The detailed outline of each course level and its quarters is
              provided below.
            </span>
          </p>
        </div>
        <CourseLevel level={CoreLevel} />
        <CourseLevel level={MasteryLevel} />
        <CourseLevel level={PhysicalAI} />
      </div>
    </div>
  )
}

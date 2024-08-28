import Image from 'next/image'
import ZiaKhan from '../../../public/kpk/team/ziakhan.webp'
import DaniyalNagori from '../../../public/kpk/team/daniyal_1.jpeg'
import SaadIrfan from '../../../public/kpk/team/saad_irfan.jpg'
import KhubaibKhan from '../../../public/kpk/team/khubaib.png'
import SajidKhan from '../../../public/kpk/team/sajid_khan.jpg'
// import WaniaKazmi from '../../../public/kpk/team/Wania.png';
import Lab from '../../../public/kpk/team/lab.webp'
import { OurTeamCards } from '@/constants/our-team'
import { team } from './teamData'

export default function OurTeam() {
  return (
    <div className='bg-white'>
      <main className='isolate'>
        {/* Hero section */}
        <div className='relative isolate -z-10'>
          <svg
            className='absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84'
                width={200}
                height={200}
                x='50%'
                y={-1}
                patternUnits='userSpaceOnUse'
              >
                <path d='M.5 200V.5H200' fill='none' />
              </pattern>
            </defs>
            <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
              <path
                d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
                strokeWidth={0}
              />
            </svg>
            <rect
              width='100%'
              height='100%'
              strokeWidth={0}
              fill='url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)'
            />
          </svg>
          <div
            className='absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
            aria-hidden='true'
          >
            <div
              className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#1eb2a6] to-[#1eb2a6] opacity-30'
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className='overflow-hidden'>
            <div className='mx-auto max-w-7xl px-6 pb-32 pt-20 lg:pt-0  lg:px-8'>
              <div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
                <div className='w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
                  <h1 className='text-4xl font-bold tracking-tight text-custom-color sm:text-6xl'>
                    Preparing for the Revolutionary Era of Generative AI
                  </h1>
                  <p className='relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none'>
                    Our program focuses on providing comprehensive education and
                    hands-on training in GenAI application development, cloud
                    computing, and Humanoid robots, ensuring that participants
                    are well-prepared to address the complex challenges and
                    opportunities presented by Generative AI. We empower
                    students to make meaningful contributions in their chosen
                    specializations, driving innovation and progress in this
                    rapidly evolving industry.
                  </p>
                </div>
                <div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
                  {/* col-1 */}
                  <div className='hidden sm:block ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'>
                    <div className='relative'>
                      <Image
                        width={500}
                        height={500}
                        src={SajidKhan}
                        alt='Zia Khan'
                        className='aspect-[2/3] w-full rounded-xl h-full bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                  </div>
                  {/* col-2 */}
                  <div className='mx-auto w-44 flex-none space-y-8  sm:pt-52 lg:pt-36'>
                    <div className='relative'>
                      <Image
                        width={500}
                        height={500}
                        src={DaniyalNagori}
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                    <div className='relative'>
                      <Image
                        width={500}
                        height={500}
                        src={SaadIrfan}
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                    <div className='relative sm:hidden'>
                      <Image
                        width={500}
                        height={500}
                        src={SajidKhan}
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                  </div>
                  {/* col-3 */}
                  <div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
                    <div className='relative'>
                      <Image
                        width={500}
                        height={500}
                        src={ZiaKhan}
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                    <div className='relative'>
                      <Image
                        width={500}
                        height={500}
                        src={KhubaibKhan}
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                    {/* <div className="relative">
                      <Image
                        width={500}
                        height={500}
                        src={WaniaKazmi}
                        alt="Wania Kazmi"
                        className="aspect-[2/3] w-full rounded-xl h-full bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission section */}
        <div className='mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8'>
          <div className='mx-auto max-w-5xl  '>
            <h2 className='text-3xl font-bold tracking-tight text-custom-color sm:text-4xl text-center'>
              OUR MISSION
            </h2>
            <div className='mt-6 flex   gap-x-8 gap-y-20'>
              <div className='lg:w-full  lg:flex-auto'>
                <p className='paragraph-center'>
                  The CM KPK Initiative for Generative AI and Cloud Computing
                  program is dedicated to preparing individuals for the
                  transformative era of Generative AI.To empower individuals
                  with cutting-edge skills in Cloud Native and Physical AI
                  technologies, enabling them to thrive in the evolving
                  technological landscape. Our mission is to provide
                  comprehensive training that bridges the gap between digital
                  intelligence and physical capabilities, positioning our
                  graduates at the forefront of innovation and industry
                  transformation. Through this program, we aim to foster
                  economic growth and technological advancement in Khyber
                  Pakhtunkhwa and beyond by equipping participants with the
                  expertise to develop world-class AI applications and
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className='mt-32  xl:mx-auto xl:max-w-7xl xl:px-8'>
          <Image
            width={1920}
            height={1080}
            src={Lab}
            alt=''
            className='aspect-[5/2] w-full object-cover xl:rounded-3xl'
          />
        </div>
        {/* Team section */}
        <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8'>
          <div className='mx-auto max-w-5xl '>
            <h2 className='text-3xl font-bold tracking-tight text-custom-color sm:text-4xl text-center'>
              OUR TEAM
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Our team consists of leaders, educators, and innovators who are
              committed to providing world-class education and mentorship.
              Let&apos;s meet the individuals guiding our mission to empower the
              next generation of AI and Cloud Native professionals.
            </p>
          </div>
          <ul
            role='list'
            className='mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6'
          >
            {team.map((person) => (
              <li key={person.name}>
                <Image
                  width={500}
                  height={500}
                  className='mx-auto h-24 w-24 rounded-full object-cover'
                  src={person.imageUrl}
                  alt=''
                />
                <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900'>
                  {person.name}
                </h3>
                <p className='text-sm leading-6 text-gray-600'>{person.role}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Values section */}
        <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
          <div className='mx-auto max-w-5xl '>
            <h2 className='text-3xl font-bold tracking-tight text-custom-color sm:text-4xl text-center'>
              OUR VALUES
            </h2>
            <p className='paragraph-center'>
              Our values include innovation, collaboration, excellence,
              diversity and inclusion, ethics and responsibility, and lifelong
              learning. We strive to create a supportive and inclusive learning
              environment that fosters creativity, excellence, and responsible
              practices in the field of Generative AI.
            </p>
          </div>
          <dl className='mx-auto  mt-16 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            {OurTeamCards.map((value) => (
              <div
                className='hover:bg-[#1eb2a6] duration-300  group rounded-xl p-3 border border-custom-color'
                key={value.name}
              >
                <dt className='font-semibold text-custom-color  group-hover:text-white '>
                  {value.name}
                </dt>
                <dd className='mt-1 text-gray-600 group-hover:text-white '>
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </div>
  )
}

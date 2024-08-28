import Link from 'next/link'
import { CarouselPlugin } from './Carousel'
import ParagraphImage from '../../../../public/kpk/Generative-AI-ChatGPT.webp'
import Image from 'next/image'
export default function CarouselSection() {
  return (
    <div className='bg-white py-12'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto lg:max-w-6xl max-w-3xl  md:text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-custom-color sm:text-4xl text-center'>
            Become a Certified Cloud Native Applied Generative AI Engineer
          </h2>
          {/* <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mastering Cloud Native and Physical AI for the Next Technological
            Frontier
          </p> */}
          <p className='mt-6 paragraph-center'>
            The future of Generative AI and cloud-native computing is poised to
            ignite the most transformative industrial revolution in human
            history, projected to drive a{' '}
            <Link href={'https://www.youtube.com/watch?v=e5Zol4RYq2o'}>
              $100 trillion economy
            </Link>
            . As these technologies converge, they will revolutionise every
            industry, from healthcare and finance to manufacturing and
            entertainment, by enabling unprecedented levels of automation,
            personalization, and innovation. This revolution will not only
            redefine how businesses operate but also reshape the very fabric of
            society, unlocking new potentials and opportunities that were once
            unimaginable. We stand at the brink of an era where intelligent,
            scalable systems will be at the heart of global progress, driving
            the biggest leap forward in the history of mankind.
          </p>
          <div className=' mt-6 max-w-4xl mx-auto '>
            <Image
              width={1920}
              height={1080}
              src={ParagraphImage}
              alt=''
              className='aspect-[3/2] md:aspect-[4/2] object-cover rounded-3xl'
            />
          </div>
          <p className='mt-6 paragraph-center'>
            Today&apos;s pivotal technological trends are Cloud Native (CN),
            Generative AI (GenAI), and Physical AI. Cloud Native technology
            offers a scalable and dependable platform for application operation,
            while AI equips these applications with intelligent, human-like
            capabilities. Physical AI aims to bridge the gap between digital
            intelligence and physical capability, creating systems that can
            understand and interact with the world in a human-like manner. Our
            aim is to train you to excel as a Cloud Native Applied Generative
            and Physical AI developer globally.
          </p>

          <p className='mt-2 paragraph-center'>
            {/* As the world rapidly embraces Cloud Native and Physical AI
            technologies, we stand on the edge of a new era of innovation.These
            advancements are set to revolutionize industries by enabling
            intelligent, human-like interactions in both digital and physical
            realms. This program is designed to equip you with the cutting-edge
            skills needed to excel as a Cloud Native Applied Generative and
            Physical AI developer, positioning you at the forefront of this
            transformative wave.  */}
            For the first time in Khyber Pakhtunkhwa, we are merging advanced AI
            training with practical, real-world applications, under the
            leadership of the provincial government. Our goal is to empower you
            to develop world-class AI applications, driving both technological
            innovation and economic growth in the region.
          </p>
          <p className='mt-2 paragraph-center'>
            Join us and become part of the next generation of tech leaders.
            <span className='font-semibold'>The future is yours to shape!</span>
          </p>
        </div>
        <CarouselPlugin />
      </div>
    </div>
  )
}

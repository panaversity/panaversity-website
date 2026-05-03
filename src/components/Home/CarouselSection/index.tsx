import { Link } from 'next-view-transitions'
import { CarouselPlugin } from './Carousel'
import ParagraphImage from '../../../../public/kpk/Generative-AI-ChatGPT.webp'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
export default function CarouselSection() {
  return (
    <div className='bg-white py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-8'>
            <h2 className='text-4xl sm:text-5xl font-black tracking-tight text-gray-900 leading-tight'>
              Become a Certified <br/>
              <span className="text-custom-color">Cloud Native Applied</span> <br/>
              Generative AI Engineer
            </h2>
            
            <div className="space-y-6">
              <p className='text-xl text-gray-600 leading-relaxed text-justify'>
                The future of Generative AI and cloud-native computing is poised to
                ignite the most transformative industrial revolution in human
                history, projected to drive a{' '}
                <Link href='https://www.youtube.com/watch?v=e5Zol4RYq2o' className="text-custom-color font-bold underline underline-offset-4 decoration-2 hover:text-custom-color/80">
                  $100 trillion economy
                </Link>
                .
              </p>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                 <Image
                  width={1000}
                  height={600}
                  src={ParagraphImage}
                  alt='AI Future'
                  className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white font-medium italic">"The biggest leap forward in the history of mankind."</p>
                </div>
              </div>

              <p className='text-lg text-gray-600 leading-relaxed text-justify'>
                Today&apos;s pivotal technological trends are Cloud Native,
                Generative AI, and Physical AI. Our aim is to train you to excel as a global 
                developer in this transformative wave. For the first time in KPK, we are 
                merging advanced AI training with practical applications under 
                government leadership.
              </p>
              
              <div className="pt-4">
                <Link href="/registration">
                   <span className="inline-flex items-center gap-2 text-custom-color font-black text-xl group">
                     Join the Revolution
                     <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                   </span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-custom-color/5 rounded-[3rem] blur-2xl -z-10" />
            <div className="bg-gray-50 rounded-[2.5rem] p-4 shadow-inner">
               <CarouselPlugin />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-3xl font-black text-custom-color mb-1">21</p>
                  <p className="text-sm font-bold text-gray-500 uppercase">Months Program</p>
               </div>
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-3xl font-black text-custom-color mb-1">07</p>
                  <p className="text-sm font-bold text-gray-500 uppercase">Quarters</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

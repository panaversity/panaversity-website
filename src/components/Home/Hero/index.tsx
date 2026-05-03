import Image from 'next/image'
import CM_Image from '../../../../public/kpk/ali-amin-gandapur_2.png'
import { Dialog, NavButtons } from '@/components/Header/navbar'
import KP_Logo from '../../../../public/kpk/kp_logo.png'
import { cn } from '@/lib/utils'
import { Link } from 'next-view-transitions'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageSquare } from 'lucide-react'
export default function Hero() {
  return (
    <div className='bg-white overflow-hidden'>
      <div className='relative isolate'>
        {/* Background blobs for depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full opacity-30 pointer-events-none overflow-hidden">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-custom-color/20 rounded-full blur-[120px] animate-pulse" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-custom-color/10 rounded-full blur-[120px]" />
        </div>

        <div className='mx-auto max-w-7xl flex h-full w-full justify-between px-4 py-6 lg:py-8 items-center'>
          <div className='flex items-center gap-8'>
            <Link href='/' className='transition-transform hover:scale-105 duration-300'>
              <span className='sr-only'>KP CM Initiative</span>
              <Image
                width={120}
                height={120}
                className='h-24 w-auto drop-shadow-sm'
                src={KP_Logo}
                alt='KPK GOV LOGO'
              />
            </Link>
          </div>
          <div className='hidden md:flex grow items-center justify-center gap-x-8 text-sm lg:text-base font-semibold text-gray-700 uppercase tracking-wide'>
            <NavButtons />
          </div>
          <div className='flex items-center gap-4'>
            <div className='hidden md:block'>
              <Link href='/registration'>
                <Button className="bg-custom-color hover:bg-custom-color/90 text-white font-bold px-8 py-6 rounded-xl shadow-lg shadow-custom-color/20 transition-all duration-300 hover:-translate-y-1">
                  APPLY NOW
                </Button>
              </Link>
            </div>
            <div className='md:hidden'>
              <Dialog />
            </div>
          </div>
        </div>

        <div className='mx-auto max-w-7xl px-6 py-12 lg:py-24 lg:px-8 relative'>
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            <div className='max-w-2xl'>
              <div className="inline-flex items-center gap-2 bg-custom-color/10 px-4 py-2 rounded-full text-custom-color font-bold text-sm mb-8 border border-custom-color/20 backdrop-blur-sm animate-bounce-subtle">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-custom-color opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-custom-color"></span>
                </span>
                ADMISSIONS OPEN 2024
              </div>
              <h1 className='text-4xl sm:text-6xl font-black tracking-tight text-gray-900 leading-[1.1] mb-6'>
                Chief Minister KP <br/>
                <span className="text-custom-color drop-shadow-sm">GenAI Initiative</span>
              </h1>
              <p className='text-xl sm:text-2xl font-medium leading-relaxed text-gray-600 mb-10'>
                Preparing Khyber Pakhtunkhwa for the <br className="hidden sm:block" /> 
                <span className="text-gray-900 font-bold">$100 Trillion Global AI Revolution.</span>
              </p>
              
              <div className='flex flex-wrap gap-6'>
                <Link href='/registration'>
                  <Button className="bg-custom-color hover:bg-custom-color/90 text-white font-black px-10 py-8 rounded-2xl text-lg shadow-xl shadow-custom-color/30 flex gap-3 group transition-all duration-500 hover:scale-105">
                    GET STARTED NOW
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link href='/announcements' target='_blank'>
                  <Button variant="outline" className="border-2 border-custom-color text-custom-color hover:bg-custom-color/5 font-black px-10 py-8 rounded-2xl text-lg flex gap-3 transition-all duration-500 hover:scale-105">
                    <MessageSquare className="w-6 h-6" />
                    JOIN WHATSAPP
                  </Button>
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
                       <div className="w-full h-full bg-custom-color/20" />
                     </div>
                   ))}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  <span className="text-gray-900 font-bold block">50,000+ Students</span>
                  Already joined the program
                </div>
              </div>
            </div>

            <div className='relative lg:mt-0'>
              <div className="absolute -inset-4 bg-custom-color/10 rounded-[3rem] blur-3xl -z-10" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                <Image
                  priority
                  src={CM_Image}
                  alt='CM Ali Amin Gandapur'
                  className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8">
                  <div className="text-white">
                    <p className="text-xl font-bold">Ali Amin Khan Gandapur</p>
                    <p className="text-sm text-gray-300">Chief Minister Khyber Pakhtunkhwa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

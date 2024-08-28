'use client'
import { Dialog, NavButtons } from './navbar'
import { usePathname } from 'next/navigation'
// import Link from 'next/link'
import Image from 'next/image'
import KP_Logo from '../../../public/kpk/kp_logo.png'
import { cn } from '@/lib/utils'
import { Link } from 'next-view-transitions'
const Header = () => {
  const pathname = usePathname()
  return (
    <div
      className={`mx-auto max-w-7xl flex h-full w-full justify-between px-3 py-5 lg:py-6 max-md:max-w-full max-md:flex-wrap md:justify-center xl:justify-between ${
        pathname === '/' || pathname.startsWith('/course') ? 'hidden' : ''
      }`}
    >
      <div className='my-auto flex items-stretch justify-between gap-12 max-md:max-w-full max-md:flex-wrap'>
        <div className='flex lg:flex-1 outline-none'>
          <Link href='/' className='-m-1.5 p-1.5 outline-none'>
            <span className='sr-only'>
              KPK Initiative for Generative AI and Cloud Computing
            </span>
            <Image
              //   placeholder='blur'
              width={100}
              height={100}
              className=' h-28 w-auto outline-none'
              src={KP_Logo}
              alt='KPK GOV LOGO'
            />
          </Link>
        </div>
      </div>
      <div className='my-auto hidden  grow items-center justify-center md:gap-x-5 lg:gap-x-7 xl:gap-x-12 self-start text-sm lg:text-base font-medium leading-5 text-zinc-800 max-md:max-w-full md:flex md:text-[13px]'>
        <NavButtons />
      </div>
      <div className='flex items-center md:hidden cursor-pointer '>
        <Dialog />
      </div>
      <div className='hidden items-center max-md:max-w-full max-md:flex-wrap md:flex'>
        <Link
          href='/registration'
          className={cn(
            `relative after:absolute after:left-0 after:-bottom-[5px] after:h-[3px] after:w-[0%] after:rounded-xl after:duration-300 hover:after:w-full`,
            'after:hover:w-0 bg-custom-color  py-3 px-4 rounded-md text-white hover:text-custom-color hover:bg-transparent border border-custom-color duration-300 md:text-xs lg:text-base'
          )}
        >
          APPLY NOW
        </Link>
      </div>
    </div>
  )
}

export default Header

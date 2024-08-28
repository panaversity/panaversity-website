'use client'
import { cn } from '@/lib/utils'
// import Link from 'next/link'
import { Link } from 'next-view-transitions'
import { MenuIcon } from 'lucide-react'
import { FC, ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import {
  Sheet,
  SheetClose,
  SheetTitle,
  SheetDescription,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from '@/components/ui/sheet'

import KP_Logo from '../../../public/kpk/kp_logo.png'
import Image from 'next/image'

// Navigation Links
export const NavigationList = [
  { name: 'HOME', href: '/' },
  { name: 'OUR TEAM', href: '/our-team' },
  { name: 'RESULT', href: '/result' },
  { name: 'COURSE CONTENT', href: '/course' },
  { name: 'ANNOUNCEMENTS', href: '/announcements' },
]

interface NavButtonProps {
  name?: string // Make optional if using children instead
  href?: string
  onClick?: () => void
  className?: string
  children?: ReactNode
}
// interface DialogProps {
//   dialogRef: MutableRefObject<HTMLDialogElement | null>
//   children: ReactNode
// }
interface MenuProps {
  onClose: () => void
}
export const NavButtons: FC<NavButtonProps> = ({ className = '' }) => {
  const pathname = usePathname() // Get the current pathname

  // You can use the pathname to add active styles or other logic

  return (
    <>
      {NavigationList.map((item) => (
        <Link
          target={`${item.href === '/announcements' ? '_blank' : '_self'}`}
          rel='noopener noreferrer'
          key={item.name}
          href={item.href}
          className={cn(
            `relative after:absolute after:left-0 after:-bottom-[5px] after:h-[3px] after:w-[0%] after:rounded-xl after:hover:bg-custom-color after:duration-300 hover:after:w-full`,
            pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href))
              ? 'after:w-full after:bg-custom-color after:hover:bg-none'
              : '',
            className
          )}
        >
          {item.name}
        </Link>
      ))}
    </>
  )
}

export const Dialog = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className='w-10 h-10' />
      </SheetTrigger>

      <SheetContent className=' bg-custom-color border-none'>
        <SheetHeader className=' items-center'>
          <SheetTitle className='w-fit'>
            <Link href='/' className=' outline-none '>
              <span className='sr-only'>
                KP Initiative for Generative AI and Cloud Computing
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
          </SheetTitle>
          <SheetDescription className='hidden'>
            KP CM IT PROGRAM.
          </SheetDescription>
        </SheetHeader>
        <div className='flex flex-col gap-y-6'>
          {NavigationList.map((item) => (
            <SheetClose key={item.name} asChild>
              <Link
                href={item.href}
                className={cn(
                  `relative after:absolute after:left-0 after:-bottom-[5px] after:h-[3px] after:w-[0%] after:rounded-xl after:duration-300 hover:after:w-full`,
                  'after:hover:bg-black text-lg font-medium leading-6 text-white hover:scale-105 duration-300 w-fit'
                )}
              >
                {item.name}
              </Link>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <Link
              href='/registration'
              className={cn(
                `relative after:absolute after:left-0 after:-bottom-[5px] after:h-[3px] after:w-[0%] after:rounded-xl after:duration-300 hover:after:w-full`,
                'after:hover:w-0 bg-custom-color py-2.5 px-4 rounded-md text-white border-2 border-white duration-300 text-lg font-medium hover:scale-105 leading-6 text-center'
              )}
            >
              APPLY NOW
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export const Menu: FC<MenuProps> = ({ onClose }) => (
  <nav className='flex h-full w-full min-w-[290px] flex-col px-6 pt-6'>
    <div className='flex justify-end pb-11'>
      <button onClick={onClose}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='14'
          fill='none'
          viewBox='0 0 14 14'
        >
          <path
            stroke='#fff'
            strokeLinecap='round'
            strokeWidth='2'
            d='M1 13L13 1M1 1l12 12'
          ></path>
        </svg>
      </button>
    </div>
    <div className='flex flex-col gap-y-6'>
      {NavigationList.map((item) => (
        <span
          key={item.name}
          className='text-lg font-medium leading-6 text-white'
        >
          <a href={item.href}>{item.name}</a>
        </span>
      ))}
      <Link
        href='/registration'
        className={cn(
          `relative after:absolute after:left-0 after:-bottom-[5px] after:h-[3px] after:w-[0%] after:rounded-xl after:duration-300 hover:after:w-full`,
          'after:hover:w-0 bg-custom-color py-2.5 px-4 rounded-md text-white hover:text-custom-color hover:bg-transparent border border-custom-color duration-300'
        )}
      >
        APPLY NOW
      </Link>
    </div>
  </nav>
)

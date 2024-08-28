import Image from 'next/image'

import KP_Logo from '../../../public/kpk/kp_logo.png'
import Link from 'next/link'
import NavigationData from '../Footer/NavigationData'

export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer
        className='relative mt-32 sm:mt-40'
        aria-labelledby='footer-heading'
      >
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='mx-auto max-w-7xl px-6 pb-8 lg:px-8'>
          <div className='my-6 border-gray-200 border-t-2 sm:mx-auto dark:border-gray-700 lg:my-8' />

          <div className=' space-y-8'>
            <div className='space-y-4'>
              <div className='w-full'>
                <Image
                  width={200}
                  height={200}
                  className=' h-28 w-full max-w-[110px] mx-auto outline-none'
                  src={KP_Logo}
                  alt='KPK GOV LOGO'
                />
              </div>
              <p className=' text-base leading-6 text-center text-gray-600'>
                CM KPK Initiative for Generative AI and Cloud Computing.
              </p>
              {/* <div className='flex space-x-6 justify-center'>
                {navigationData.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='text-gray-500 hover:text-gray-400'
                  >
                    <span className='sr-only'>{item.name}</span>
                    <item.icon className='h-6 w-6' aria-hidden='true' />
                  </a>
                ))}
              </div>
              <div className='border-t border-white/10 text-center'>
                <p className='text-sm leading-6 text-gray-600'>
                  &copy; 2024 KPK, GOV. All rights reserved.
                </p>
              </div> */}
            </div>
            <div className='mt-8 grid grid-cols-2 sm:grid-cols-3  max-w-3xl mx-auto xl:mt-0'>
              <div className='text-center'>
                <h3 className=' text-base font-semibold leading-6 text-gray-900'>
                  Navigation Links
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {NavigationData.navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`relative after:absolute after:hover:bg-custom-color after:left-0 after:-bottom-[5px] after:h-[3px] after:w-[0%] after:rounded-xl  after:duration-300 hover:after:w-full`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='text-center'>
                <h3 className='text-base font-semibold leading-6 text-gray-900'>
                  Course Content Links
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {NavigationData.course.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`relative after:absolute after:hover:bg-custom-color after:left-0 after:-bottom-[5px] after:h-[3px] after:w-[0%] after:rounded-xl  after:duration-300 hover:after:w-full`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='text-center col-span-2 sm:col-span-1 mt-3 sm:mt-0'>
                <div className=''>
                  <h3 className='text-base font-semibold leading-6 text-gray-900'>
                    Contact Us
                  </h3>
                  <ul role='list' className='mt-6 space-y-4 w-full'>
                    <li>
                      <Link
                        href={'mailto:education@cmkpk.org'}
                        className={`relative after:absolute after:hover:bg-custom-color after:left-0 after:-bottom-[5px] after:h-[3px] after:w-[0%] after:rounded-xl  after:duration-300 hover:after:w-full`}
                      >
                        education@cmkpk.org
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='space-y-4 mt-10 w-full '>
            <div className='flex gap-x-6 items-center justify-center'>
              {NavigationData.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-gray-500 hover:text-gray-400'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-6 w-6' aria-hidden='true' />
                </a>
              ))}
            </div>
            <div className='border-t border-white/10 text-center'>
              <p className='text-sm leading-6 text-gray-600 tracking-wider'>
                &copy; 2024 KPK, GOV. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

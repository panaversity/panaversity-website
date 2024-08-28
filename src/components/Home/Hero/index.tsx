import Image from 'next/image'
import CM_Image from '../../../../public/kpk/ali-amin-gandapur_2.png'
import Link from 'next/link'
import { Dialog, NavButtons } from '@/components/Header/navbar'
import KP_Logo from '../../../../public/kpk/kp_logo.png'
import { cn } from '@/lib/utils'
export default function Hero() {
  return (
    <div className='bg-white'>
      <div className='relative isolate overflow-hidden bg-gradient-to-b from-[#1eb2a6]/10 '>
        <div
          className={`mx-auto max-w-7xl flex h-full w-full justify-between  px-3 py-5  lg:py-6 max-md:max-w-full max-md:flex-wrap md:justify-center xl:justify-between`}
        >
          <div className='my-auto flex items-stretch justify-between gap-12 max-md:max-w-full max-md:flex-wrap'>
            <div className='flex lg:flex-1 outline-none'>
              <Link href='/' className='-m-1.5 p-1.5 outline-none'>
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
            </div>
          </div>
          <div className='my-auto hidden grow items-center justify-center md:gap-x-5 lg:gap-x-7 xl:gap-x-12 self-start text-sm lg:text-base font-medium leading-5 text-zinc-800 max-md:max-w-full md:flex md:text-[13px]'>
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
        <div
          className='absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96'
          aria-hidden='true'
        />
        <div className='mx-auto max-w-7xl  px-6 py-10 lg:py-28 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8'>
            <h1 className='max-w-2xl text-4xl font-bold tracking-tight text-custom-color sm:text-5xl lg:col-span-2 xl:col-auto'>
              Chief Minister Khyber Pakhtunkhwa Initiative for Generative AI and
              Cloud Computing
            </h1>
            <div className='mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1'>
              <p className='text-2xl font-semibold leading-8 text-gray-900'>
                Getting Khyber Pakhtunkhwa Ready For The $100 Trillion
                <br /> Global AI Industrial Revolution
              </p>
              <div className='my-10 flex sm:items-center items-start  flex-col sm:flex-row gap-6 '>
                <Link
                  href={'/registration'}
                  className={`bg-custom-color whitespace-nowrap py-4 px-4 order-last sm:order-first font-semibold relative rounded-lg text-white hover:bg-transparent duration-300 hover:text-custom-color border border-custom-color`}
                >
                  GET STARTED NOW{' '}
                  <span aria-hidden='true' className='pl-2'>
                    →
                  </span>
                </Link>
                <Link
                  href={'/announcements'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`bg-white whitespace-nowrap flex justify-between order-first sm:order-last items-center gap-3 py-4 px-4 relative font-semibold rounded-lg text-custom-color hover:bg-transparent duration-300 hover:scale-105  border border-custom-color`}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='25'
                    height='25'
                    viewBox='0 0 48 48'
                  >
                    <path
                      fill='#fff'
                      d='M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z'
                    ></path>
                    <path
                      fill='#fff'
                      d='M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z'
                    ></path>
                    <path
                      fill='#cfd8dc'
                      d='M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z'
                    ></path>
                    <path
                      fill='#40c351'
                      d='M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z'
                    ></path>
                    <path
                      fill='#fff'
                      fillRule='evenodd'
                      d='M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  JOIN OUR WHATSAPP CHANNEL{' '}
                  {/* <span className="-ml-[0.5rem]">→</span> */}
                </Link>
              </div>
            </div>
            <Image
              priority
              src={CM_Image}
              alt=''
              className='aspect-square w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2'
            />
          </div>
        </div>
        <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
      </div>
    </div>
  )
}

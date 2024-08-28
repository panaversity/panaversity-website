import React from 'react'
import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { QcardsT } from '@/types/types'

const CourseLevel = ({ level }: { level: QcardsT }) => {
  return (
    <div className='mt-10  max-w-5xl mx-auto'>
      <h2 className='text-3xl text-center md:text-justify  font-bold tracking-tight text-custom-color sm:text-4xl pb-10'>
        {level.LevelTitle}
      </h2>
      <div className='mx-auto  grid max-w-2xl auto-rows-fr grid-cols-1 gap-8  lg:mx-0 lg:max-w-none lg:grid-cols-3'>
        {level.courses.map((course) => (
          <Link
            href={course.href}
            key={course.id}
            className='hover:scale-105 duration-300 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80'
          >
            <Image
              width={500}
              height={500}
              placeholder='blur'
              src={course.imageUrl}
              alt=''
              className='absolute inset-0 -z-10 h-full w-full object-cover'
            />
            <div className='absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40' />
            <div className='absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10' />

            <div className='flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300'>
              {course.quarter}
            </div>
            <h3 className='mt-3 text-lg font-semibold leading-6 text-white'>
              <span>
                <span className='absolute inset-0' />
                {course.title}
              </span>
            </h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CourseLevel

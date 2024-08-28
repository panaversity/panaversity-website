'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image_1 from '../../../../public/kpk/students/1.webp'
import Image_2 from '../../../../public/kpk/students/2.webp'
import Image_3 from '../../../../public/kpk/students/3.webp'
import Image_4 from '../../../../public/kpk/students/4.webp'
import Image_5 from '../../../../public/kpk/students/5.webp'
const images = [Image_1, Image_2, Image_3, Image_4, Image_5]

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { useRef } from 'react'

export function CarouselPlugin() {
  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[plugin.current]}
      className='w-full mt-10 relative rounded-3xl  '
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className=' mb-5 rounded-3xl'>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className='p-1'>
              <div className=''>
                <Image
                  width={1920}
                  height={1080}
                  src={image}
                  alt=''
                  className='aspect-[3/2] md:aspect-[4/2] w-full object-cover rounded-3xl'
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  )
}

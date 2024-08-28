import Hero from '@/components/Home/Hero'
import CarousselSection from '@/components/Home/CarouselSection'
import CourseSection from '@/components/Home/CourseSection'
import FAQ from '@/components/Home/FAQ'
export default function Home() {
  return (
    <main className='w-full'>
      <Hero />
      <CarousselSection />
      <CourseSection />
      <FAQ />
    </main>
  )
}

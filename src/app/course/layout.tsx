import AdminPanelLayout from '@/components/admin-panel/admin-panel-layout'
import CourseFooter from '@/components/admin-panel/Footer'
import CourseHeader from '@/components/admin-panel/Header'
import { SheetMenu } from '@/components/admin-panel/sheet-menu'

export default function CourseLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <SheetMenu />
      <AdminPanelLayout>
        <CourseHeader />
        {children}
        <CourseFooter />
      </AdminPanelLayout>
    </section>
  )
}

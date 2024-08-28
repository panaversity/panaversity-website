'use client'

import { useStore } from '@/components/hooks/use-store'
import { cn } from '@/lib/utils'
import { Sidebar } from '@/components/admin-panel/sidebar'
import { useSidebarToggle } from '@/components/hooks/use-sidebar-toggle'

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sidebar = useStore(useSidebarToggle, (state) => state)

  if (!sidebar) return null

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          'min-h-[calc(100vh_-_56px)]  transition-[margin-left] ease-in-out duration-300',
          sidebar?.isOpen === false ? 'lg:ml-[90px]' : 'lg:ml-72'
        )}
      >
        {children}
      </main>
    </>
  )
}

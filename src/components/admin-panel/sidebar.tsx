import Link from 'next/link'
import { PanelsTopLeft } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useStore } from '@/components/hooks/use-store'
import { Button } from '@/components/ui/button'
import { Menu } from '@/components/admin-panel/menu'
import { useSidebarToggle } from '@/components/hooks/use-sidebar-toggle'
import { SidebarToggle } from '@/components/admin-panel/sidebar-toggle'

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state)

  if (!sidebar) return null

  return (
    <aside
      className={cn(
        'fixed bg-white top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300 ',
        sidebar?.isOpen === false ? 'w-[90px]' : 'w-72'
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className='relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800'>
        <Menu isOpen={sidebar?.isOpen} />
      </div>
    </aside>
  )
}

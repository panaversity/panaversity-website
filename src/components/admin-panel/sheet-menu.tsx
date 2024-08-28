import Link from 'next/link'
import { SquareChevronRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Menu } from '@/components/admin-panel/menu'
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger
        className='lg:hidden  fixed top-[50%] bottom-[50%] z-50'
        asChild
      >
        <Button
          className=' p-3 outline-none border-none'
          variant='outline'
          size='icon'
        >
          <SquareChevronRightIcon
            size={30}
            className=' shrink-0 stroke-custom-color'
          />
        </Button>
      </SheetTrigger>
      <SheetContent className='sm:w-72 px-3 h-full flex flex-col' side='left'>
        {/* <SheetHeader className="flex justify-center items-center pb-2 pt-1"> */}
        {/* <Button
            className="flex justify-center items-center pb-2 pt-1"
            variant="link"
            asChild
          > */}
        {/* <Link href="/dashboard" className="flex items-center gap-2"> */}
        {/* <PanelsTopLeft className="w-6 h-6 mr-1" /> */}
        {/* <SheetTitle className="font-bold text-lg">Course Sequence</SheetTitle> */}
        {/* </Link> */}
        {/* </Button> */}
        {/* </SheetHeader> */}
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  )
}

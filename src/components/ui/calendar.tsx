'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker, useDayPicker, useNavigation } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { format } from 'date-fns'
import { Select, SelectContent, SelectItem, SelectTrigger } from './select'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium hidden',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100'
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        day_outside:
          'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        caption_dropdowns: 'flex gap-1',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className='h-4 w-4' />,
        IconRight: ({ ...props }) => <ChevronRight className='h-4 w-4' />,
        Dropdown: (dropdownProps) => {
          console.log({ dropdownProps })
          const { currentMonth, goToMonth } = useNavigation()
          const { fromYear, fromMonth, fromDate, toYear, toMonth, toDate } =
            useDayPicker()

          let selectValues: { value: string; label: string }[] = []

          if (dropdownProps.name === 'months') {
            selectValues = Array.from({ length: 12 }, (_, i) => {
              return {
                value: i.toString(),
                label: format(new Date(new Date().getFullYear(), i, 1), 'MMM'),
              }
            })
          } else if (dropdownProps.name === 'years') {
            const earliestYear =
              fromYear || fromMonth?.getFullYear() || fromDate?.getFullYear()
            const latestYear =
              toYear || toMonth?.getFullYear() || toDate?.getFullYear()

            if (earliestYear && latestYear) {
              const yearsLength = latestYear - earliestYear + 1

              selectValues = Array.from({ length: yearsLength }, (_, i) => {
                return {
                  value: (earliestYear + i).toString(),
                  label: (earliestYear + i).toString(),
                }
              })
            }
          }

          const caption = format(
            currentMonth,
            dropdownProps.name === 'months' ? 'MMM' : 'yyyy'
          )

          return (
            <Select
              onValueChange={(newValue) => {
                if (dropdownProps.name === 'months') {
                  const newDate = new Date(currentMonth)
                  newDate.setMonth(parseInt(newValue))
                  goToMonth(newDate)
                } else if (dropdownProps.name === 'years') {
                  const newDate = new Date(currentMonth)
                  newDate.setFullYear(parseInt(newValue))
                  goToMonth(newDate)
                }
              }}
              value={dropdownProps.value?.toString()}
            >
              <SelectTrigger>{caption}</SelectTrigger>
              <SelectContent>
                {selectValues.map((selectValue) => (
                  <SelectItem key={selectValue.value} value={selectValue.value}>
                    {selectValue.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )
        },
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }

import React from 'react'
import {
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
  Tooltip
} from '@/components/ui/tooltip'


type Props = {
  label: string,
  children: React.ReactNode,
  side?: 'top' | 'bottom' | 'left' | 'right',
  align?: 'start' | 'center' | 'end',
  sideOffset?: number,
  alignOffset?: number
}

export function Hint ({
  children,
  label,
  align,
  alignOffset,
  side,
  sideOffset
}: Props) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>

        <TooltipContent 
        className="text-white bg-black border-black"
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        >
          <p className='font-semibold capitalize'>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

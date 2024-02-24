import { cn } from '@/lib/utils'
import React from 'react'
import {Star} from 'lucide-react';

type Props = {
  title: string,
  authorLabel: string,
  createdAtLabel: string,
  isFavorite: boolean,
  onClick: () => void,
  disabled: boolean
}

export default function Footer ({
  authorLabel,
  createdAtLabel,
  disabled,
  isFavorite,
  onClick,
  title
}: Props) {
  return (
    <div className='relative bg-white p-3'>
      <p className='text-[13px] truncate max-w-[100%-20px]'>{title}</p>
      <p className='opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncated'>
        {authorLabel}, {createdAtLabel}
      </p>

      <button
        disabled={disabled}
        onClick={onClick}
        className={cn (
          'opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600',
          disabled && 'cursor-not-allowed opacity-75'
        )}
      >
        <Star className={cn("h-4 w-4",isFavorite && "fill-blue-600 text-blue-600")}/>
      </button>
    </div>
  )
}

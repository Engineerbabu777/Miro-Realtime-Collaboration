'use client'

import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { SearchIcon } from 'lucide-react'
import SearchInput from './search-input'

type Props = {}

export default function Navbar ({}: Props) {
  return (
    <div className='flex items-center gap-x-4 p-5'>
      <div className='hidden lg:flex lg:flex-1'>
        <SearchInput />
      </div>
      <UserButton />
    </div>
  )
}

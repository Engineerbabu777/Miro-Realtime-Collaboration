'use client'

import React from 'react'
import { UserButton } from '@clerk/nextjs'

type Props = {}

export default function Navbar ({}: Props) {
  return (
    <div className='flex items-center gap-x-4 p-5 bg-green-500'>
      <div className='hidden lg:flex lg:flex-1'>{/* ADD SEARCH! */}
      </div>
      <UserButton />
    </div>
  )
}

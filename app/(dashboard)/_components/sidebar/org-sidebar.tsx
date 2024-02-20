'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import { OrganizationSwitcher } from '@clerk/nextjs'

type Props = {}

const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})

export default function OrgSidebar ({}: Props) {
  return (
    <div className='hidden lg:flex flex-col space-y-6 w-[200px] pl-5 h-full'>
      <Link href='/'>
        <div className='flex items-center gap-x-2'>
          <Image src='/logo2.png' height={60} width={60} alt='logo' />
          <span className={cn('font-semibold text-2xl', font.className)}>
            Board
          </span>
        </div>
      </Link>

      <OrganizationSwitcher hidePersonal
      appearance={{
        elements:{
          rootBox:{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100%"
          },
          organizationSwitcherTrigger:{
            padding:"6px",
            width:"100%",
            borderRadius:"8px",
            border:"1px solid #E5E7EB",
            justifyContent:"space-between",
            backgroundColor:"white"
          }
        }
      }}
      />
    </div>
  )
}

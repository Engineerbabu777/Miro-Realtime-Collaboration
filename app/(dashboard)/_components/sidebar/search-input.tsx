'use client';

import React, { useEffect, useState } from 'react'
import {Input} from '@/components/ui/input';
import {Search} from 'lucide-react';
import {useDebounce} from 'usehooks-ts';
import qs from 'query-string';
import { useRouter, useSearchParams,usePathname } from 'next/navigation';
type Props = {}

export default function SearchInput({}: Props) {

    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 0) {
            const currentParams = new URLSearchParams(searchParams.toString())
            currentParams.set('search', event.target.value)
            router.push(`${pathname}?${currentParams}`)
          } else {
            router.push(pathname)
          }
    }



  return (
    <div className='w-full relative'>
         <Search
        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4"
      />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search boards"
        onChange={handleChange}
      />
        
    </div>
  )
}
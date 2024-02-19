import React from 'react'
import Image from 'next/image'

type Props = {}

export default function Loading ({}: Props) {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full'>
      <Image
        src={'/logo2.png'}
        alt='test'
        width={120}
        height={120}
        className='animate-ping duration-1000'
      />
    </div>
  )
}

import React from 'react'
import Sidebar from './_components/sidebar'
import OrgSidebar from './_components/sidebar/org-sidebar'
import Navbar from './_components/sidebar/navbar'

type Props = {
  children: React.ReactNode
}

export default function layout ({ children }: Props) {
  return (
    <main className='h-full '>
      {/* SIDEBAR! */}
      <Sidebar />
      <div className='pl-[60px] h-full'>
        <div className='flex gap-x-3 h-full'>
          {/* ORGANIZATIONAL SIDEBAR! */}
          <OrgSidebar />
          <div className='h-full flex-1'>
            {/* NAVBAR! */}
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

import React from 'react'
import NewButton from './NewButton'
import List from './list'

type Props = {}

export default function Sidebar ({}: Props) {
  return (
    <aside className='fixed z-[1] left-0 bg-blue-950 gap-y-4 text-white flex-col flex p-3 w-[60px] h-full'>
      {/* ALL THE ORGANIZATIONS! */}
      <List />
      {/* CREATE NEW ORGANIZATION! */}
      <NewButton />
    </aside>
  )
}

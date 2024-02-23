


import React from 'react'

type Props = {
    title: string;
    authorLabel: string;
    createdAtLabel: string;
    isFavorite: boolean;
    onClick: ()=> void;
    disabled:boolean
}

export default function Footer({
authorLabel,createdAtLabel,disabled,isFavorite,onClick,title
}: Props) {
  return (
    <div className="relative bg-white p-3">
<p className="text-[13px] truncate max-w-[100%-20px]">
    {title}
</p>
<p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncated">
    {authorLabel}, {createdAtLabel}
</p>
    </div>
  )
}
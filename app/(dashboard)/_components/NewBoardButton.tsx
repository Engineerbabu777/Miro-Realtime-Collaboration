

'use client'
import { cn } from '@/lib/utils';
import React from 'react'
import {Plus} from 'lucide-react';
import {useApiMutation} from "@/hooks/use-api-mutation";
import {api} from '@/convex/_generated/api';
import {toast} from 'sonner';
import { useRouter } from 'next/navigation';

type Props = {
    orgId: string
    disabled?:boolean;
}

export default function NewBoardButton({
    orgId,disabled
}: Props) {

  const router = useRouter();

    const {pending,mutate} = useApiMutation(api.board.create)

    const onClickHandler = () => {
        mutate({
         orgId,
         title: "Untitled"
        }).then((id) => {
          toast.success("Board Created")
          router.push(`/board/${id}`)
        }).catch(() => {
          toast.error("Failed to create board.")
        })
    }


  return (
    <button
    disabled={pending || disabled}
    className={cn("col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",disabled && "opacity-75 hover:bg-blue-500 cursor-not-allowed")} onClick={onClickHandler} >
       <div />
       <Plus className="h-12 w-12 text-white stroke-1 "/>
       <p className="text-sm text-white font-light">New board</p>
    </button>
  )
}
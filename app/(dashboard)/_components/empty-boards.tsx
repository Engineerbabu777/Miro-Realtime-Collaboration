'use client';
import React from 'react'
import Image from 'next/image';
import {useOrganization} from '@clerk/nextjs';
import { api } from '@/convex/_generated/api';
import { Button } from '@/components/ui/button';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { toast } from 'sonner';
type Props = {}

export default function EmptyBoards ({}: Props) {
  
  const {mutate,pending} = useApiMutation(api?.board?.create);
  const {organization} = useOrganization();

  const onClick = () => {
    if(!organization) return;
    // Create a new board for the current organization.
    mutate({
      orgId: organization.id,
      title: "Untitled",
    }).then((id) => {
      toast.success("Board created!");
      // TODO:
    }).catch(() => toast.error("Failed to create board!"))
  }
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Image src={'/note.svg'} height={110} width={110} alt='Empty' />
      <h2 className='text-2xl font-semibold mt-6'>Create your first board!</h2>
      <p className='text-muted-foreground text-sm mt-2'>
        Start Creating a board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} size="lg" onClick={onClick}>
          Create board 
        </Button>
      </div>
    </div>
  )
}




import React from 'react'
import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Props = {}

export default function InviteButton({}: Props) {
  return (
    <Dialog>
        <DialogTrigger asChild>
             <Button>
                <Plus 
                className={"h-4 w-4 mr-2"}
                />
                Invite Members
             </Button>
        </DialogTrigger>
        <DialogContent className="p-0 bg-transparent border-none max-w-[800px]">
            <OrganizationProfile />
        </DialogContent>
    </Dialog>
  )
}
"use client";

import { ReactNode } from "react";
import { ClientSideSuspense } from "@liveblocks/react";

import { RoomProvider } from "@/liveblocks.config";

export const Room = ({ children, roomId }: { children: ReactNode, roomId:string }) => {
    return (
        <RoomProvider id={roomId} initialPresence={{}}>
            <ClientSideSuspense fallback={<div>loading...</div>}>
                {() => children}
            </ClientSideSuspense>

        </RoomProvider>
    )

}
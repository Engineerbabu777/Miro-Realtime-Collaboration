'use client'

import { Camera, CanvasMode,CanvasState } from '@/types/canvas'
import Info from './info'
import Participants from './participants'
import Toolbar from './toolbar'
import React, { useCallback, useState } from 'react'
import { useCanRedo, useCanUndo, useHistory, useMutation } from '@/liveblocks.config'
import { CursorPresence } from './CursorsPresence'
import { pointerEventToCanvasPoint } from '@/lib/utils'

type Props = {
  boardId: string
}
export default function Canvas ({ boardId }: Props) {

  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None
  })
  const [camera, setCamera] = useState<Camera>({x:0,y:0})
  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  const onWheelMove = useCallback((e:React.WheelEvent) => {
    setCamera((camera) => ({
      x:camera.x - e.deltaX,
      y:camera.y - e.deltaX,
    }))
  },[])

  const onPointerMove = useMutation(({setMyPresence},e:React.PointerEvent) => {
    e.preventDefault();
    const current = pointerEventToCanvasPoint(e,camera);
    setMyPresence({ cursor:current});
  },[]);

  return (
    <main className='h-full w-full relative bg-neutral-100 touch-none'>
      <Info boardId={boardId} />
      <Participants />
      <Toolbar canvasState={canvasState} setCanvasState={setCanvasState}
      canRedo={canRedo}
      canUndo={canUndo}
      undo={history.undo}
      redo={history.redo}
      />

      <svg 
      className="h-[100vh] w-[100vw]"
      onWheel={onWheelMove}
      onPointerMove={onPointerMove}
      >
        <g>
          <CursorPresence />
        </g>
      </svg>
    </main>
  )
}



import { useStorage } from '@/liveblocks.config';
import { LayerType } from '@/types/canvas';
import React from 'react'
import {Rectangle} from './rectangle';




type Props = {
    id: string;
    onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
    selectionColor?: string;
}

export default function LayerPreview({
    id,onLayerPointerDown,selectionColor
}: Props) {

    const layer = useStorage(root => root.layers.get(id));

    if(!layer){
        return null;
    }

    switch(layer.type){
        case LayerType.Rectangle:
      return (
        <Rectangle
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      );
    }
  return (
    <>Have a Good Coding Day!</>
  )
}


LayerPreview.displayName = "LayerPreview";
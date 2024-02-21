

import React from 'react'

type Props = {
    orgId: string;
    query:{
        search?: string;
        favorites?: string;
    }
}

export default function BoardList({
    orgId,query
}: Props) {
    const data = [];

    if(!data?.length && query.search){
       return (
        <div className=''>
          Try searching for something else.
        </div>
       )
    }

    if(!data?.length && query.favorites){
        return (
         <div className=''>
            No favorites
         </div>
        )
     }

     
    if(!data?.length){
        return (
         <div className=''>
            No boards at all
         </div>
        )
     }



  return (
    <div className="">

    </div>
  )
}
'use client'

import React from 'react'
import EmptySearch from './empty-search'
import EmptyFavorites from './empty-favorites'
import EmptyBoards from './empty-boards'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import BoardCard from './board-card'

type Props = {
  orgId: string,
  query: {
    search?: string,
    favorites?: string
  }
}

export default function BoardList ({ orgId, query }: Props) {
  const data = useQuery(api.boards.get, { orgId })

  if (data === undefined) {
    return <div className=''>Loading...</div>
  }

  if (!data?.length && query.search) {
    return <EmptySearch />
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorites />
  }

  if (!data?.length) {
    return <EmptyBoards />
  }

  return (
    <div className=''>
      <h2 className='text-3xl'>
        {query.favorites ? 'Favorite boards' : 'Team boards'}
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10'>
        {data?.map(board => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={false}
          />
        ))}
      </div>
    </div>
  )
}

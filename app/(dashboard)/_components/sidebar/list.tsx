'use client'

import { useOrganizationList } from '@clerk/nextjs';
import React from 'react';
import Item from './item';

type Props = {}

export default function List ({}: Props) {
  // HOOK THAT FETCH ALL ORGANIZATIONS IN CLERK!
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true
    }
  })

  // IF NO MEMBER SHIP EXISTS!
  if (!userMemberships.data?.length) return null

  //   IF MEMBERSHIP EXISTS!
  return (
    <ul className='space-y-4'>
      {userMemberships.data?.map(membership => (
       <Item 
       key={membership?.id}
       name={membership.organization.name}
       imageUrl={membership.organization.imageUrl}
       id={membership.organization.id}
       />
      ))}
    </ul>
  )
}

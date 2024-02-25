import { v } from 'convex/values'

import { mutation } from './_generated/server'

const images = [
  '/placeholders/1.svg',
  '/placeholders/2.svg',
  '/placeholders/3.svg',
  '/placeholders/4.svg',
  '/placeholders/5.svg',
  '/placeholders/6.svg',
  '/placeholders/7.svg',
  '/placeholders/8.svg',
  '/placeholders/9.svg',
  '/placeholders/10.svg'
]
export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string()
  },
  handler: async (ctx, args) => {
    // CHECKING USER IDENTITY!
    const identity = await ctx.auth.getUserIdentity()

    // IF USER IS NOT LOGGED IN!
    if (!identity) {
      throw new Error('You must be logged in to create a board')
    }

    const randomImage = images[Math.floor(Math.random() * images.length)]

    const board = await ctx.db.insert('boards', {
      orgId: args.orgId,
      title: args.title,
      authorId: identity.subject,
      imageUrl: randomImage,
      authorName: identity.name!
    })

    return board
  }
})

export const remove = mutation({
  args: { id: v.id('boards') },
  async handler (ctx, args) {
    // CHECKING USER IDENTITY!
    const identity = await ctx.auth.getUserIdentity()

    // IF USER IS NOT LOGGED IN!
    if (!identity) {
      throw new Error('You must be logged in to create a board')
    }

    await ctx.db.delete(args.id)
  }
})

export const update = mutation({
  args: { id: v.id('boards'), title: v.string() },
  async handler (ctx, args) {
    // CHECKING USER IDENTITY!
    const identity = await ctx.auth.getUserIdentity()

    // IF USER IS NOT LOGGED IN!
    if (!identity) {
      throw new Error('You must be logged in to create a board')
    }

    const title = args.title.trim();

    if(!title){
      throw new Error("Title is required!");
    }

    if(title.length > 60){
      throw new Error("Title is too long!");
    }

    const board = await ctx.db.patch(args.id, {
      title: args.title
    })

    return board;
  }
})

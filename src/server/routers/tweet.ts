import { z } from 'zod';
import { router, publicProcedure, protectedProcedure } from '../trpc';

export const tweetRouter = router({
  feed: publicProcedure.input(z.object({ cursor: z.string().optional(), limit: z.number().default(20) })).query(async ({ ctx, input }) => {
    const tweets = await ctx.prisma.tweet.findMany({
      take: input.limit + 1,
      cursor: input.cursor ? { id: input.cursor } : undefined,
      orderBy: { createdAt: 'desc' },
      where: { parentId: null },
      include: {
        user: { select: { id: true, name: true, username: true, avatar: true, verified: true } },
        _count: { select: { likes: true, retweets: true, replies: true } },
        likes: ctx.userId ? { where: { userId: ctx.userId }, select: { id: true } } : false,
        bookmarks: ctx.userId ? { where: { userId: ctx.userId }, select: { id: true } } : false,
      },
    });
    let nextCursor: string | undefined;
    if (tweets.length > input.limit) { const next = tweets.pop(); nextCursor = next!.id; }
    return { tweets: tweets.map(t => ({ ...t, isLiked: Array.isArray(t.likes) && t.likes.length > 0, isBookmarked: Array.isArray(t.bookmarks) && t.bookmarks.length > 0 })), nextCursor };
  }),

  create: protectedProcedure.input(z.object({ content: z.string().min(1).max(280), imageUrl: z.string().optional(), parentId: z.string().optional() })).mutation(async ({ ctx, input }) => {
    const tweet = await ctx.prisma.tweet.create({ data: { content: input.content, imageUrl: input.imageUrl, userId: ctx.userId, parentId: input.parentId } });
    return tweet;
  }),

  like: protectedProcedure.input(z.object({ tweetId: z.string() })).mutation(async ({ ctx, input }) => {
    const existing = await ctx.prisma.like.findUnique({ where: { userId_tweetId: { userId: ctx.userId, tweetId: input.tweetId } } });
    if (existing) { await ctx.prisma.like.delete({ where: { id: existing.id } }); return { liked: false }; }
    await ctx.prisma.like.create({ data: { userId: ctx.userId, tweetId: input.tweetId } });
    return { liked: true };
  }),

  retweet: protectedProcedure.input(z.object({ tweetId: z.string() })).mutation(async ({ ctx, input }) => {
    const existing = await ctx.prisma.retweet.findUnique({ where: { userId_tweetId: { userId: ctx.userId, tweetId: input.tweetId } } });
    if (existing) { await ctx.prisma.retweet.delete({ where: { id: existing.id } }); return { retweeted: false }; }
    await ctx.prisma.retweet.create({ data: { userId: ctx.userId, tweetId: input.tweetId } });
    return { retweeted: true };
  }),

  bookmark: protectedProcedure.input(z.object({ tweetId: z.string() })).mutation(async ({ ctx, input }) => {
    const existing = await ctx.prisma.bookmark.findUnique({ where: { userId_tweetId: { userId: ctx.userId, tweetId: input.tweetId } } });
    if (existing) { await ctx.prisma.bookmark.delete({ where: { id: existing.id } }); return { bookmarked: false }; }
    await ctx.prisma.bookmark.create({ data: { userId: ctx.userId, tweetId: input.tweetId } });
    return { bookmarked: true };
  }),

  thread: publicProcedure.input(z.object({ tweetId: z.string() })).query(async ({ ctx, input }) => {
    const tweet = await ctx.prisma.tweet.findUnique({
      where: { id: input.tweetId },
      include: { user: { select: { id: true, name: true, username: true, avatar: true, verified: true } }, _count: { select: { likes: true, retweets: true, replies: true } }, replies: { include: { user: { select: { id: true, name: true, username: true, avatar: true } }, _count: { select: { likes: true, replies: true } } }, orderBy: { createdAt: 'asc' } } },
    });
    return tweet;
  }),
});

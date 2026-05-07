import { z } from 'zod';
import { router, publicProcedure, protectedProcedure } from '../trpc';

export const userRouter = router({
  profile: publicProcedure.input(z.object({ username: z.string() })).query(async ({ ctx, input }) => {
    const user = await ctx.prisma.user.findUnique({ where: { username: input.username }, select: { id: true, name: true, username: true, bio: true, avatar: true, banner: true, verified: true, createdAt: true, _count: { select: { tweets: true, followers: true, following: true } } } });
    if (!user) return null;
    let isFollowing = false;
    if (ctx.userId) { const follow = await ctx.prisma.follow.findUnique({ where: { followerId_followingId: { followerId: ctx.userId, followingId: user.id } } }); isFollowing = !!follow; }
    return { ...user, isFollowing };
  }),

  follow: protectedProcedure.input(z.object({ userId: z.string() })).mutation(async ({ ctx, input }) => {
    if (ctx.userId === input.userId) return { error: 'Cannot follow yourself' };
    const existing = await ctx.prisma.follow.findUnique({ where: { followerId_followingId: { followerId: ctx.userId, followingId: input.userId } } });
    if (existing) { await ctx.prisma.follow.delete({ where: { id: existing.id } }); return { following: false }; }
    await ctx.prisma.follow.create({ data: { followerId: ctx.userId, followingId: input.userId } });
    return { following: true };
  }),

  search: publicProcedure.input(z.object({ query: z.string() })).query(async ({ ctx, input }) => {
    return ctx.prisma.user.findMany({ where: { OR: [{ name: { contains: input.query, mode: 'insensitive' } }, { username: { contains: input.query, mode: 'insensitive' } }] }, select: { id: true, name: true, username: true, avatar: true, verified: true, bio: true }, take: 10 });
  }),
});

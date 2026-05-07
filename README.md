# Twitter/X Clone — Full-Stack Social Media

> Complete Twitter clone with tRPC, cursor-paginated feed, threads, like/retweet/bookmark, follow system, real-time notifications (Pusher), and Cloudinary media upload.

## 🚀 Overview

A production-grade Twitter/X clone implementing the full social media experience with type-safe tRPC API, cursor-based infinite scroll pagination, threaded conversations (tweet → replies), social interactions (like, retweet, bookmark), follow/unfollow with counts, and real-time notifications via Pusher.

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🐦 Tweets | 280-char limit + image upload (Cloudinary) |
| 🧵 Threads | Reply chains with nested conversations |
| ❤️ Like/Retweet | Toggle interactions with optimistic UI |
| 🔖 Bookmarks | Save tweets for later |
| 👤 Profiles | Bio, avatar, banner, follower counts |
| 👥 Follow System | Follow/unfollow with mutual detection |
| 🔍 User Search | Search by name/username |
| 🔔 Notifications | Real-time via Pusher |
| ♾️ Infinite Scroll | Cursor-based pagination |
| ✅ Verified Badges | User verification status |
| 🔒 Type-Safe API | End-to-end TypeScript with tRPC |

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14, React, Tailwind CSS |
| API | tRPC (type-safe RPC) |
| Database | PostgreSQL + Prisma |
| Real-Time | Pusher |
| Media | Cloudinary |
| Auth | JWT + bcrypt |
| Validation | Zod |
| State | TanStack Query (via tRPC) |

## 📁 Project Structure

```
twitter-clone-fullstack/
├── prisma/schema.prisma        # User, Tweet, Like, Retweet, Bookmark, Follow, Notification
├── src/
│   ├── server/
│   │   ├── trpc.ts            # tRPC context + procedures
│   │   └── routers/
│   │       ├── tweet.ts       # feed, create, like, retweet, bookmark, thread
│   │       └── user.ts        # profile, follow, search
│   ├── lib/prisma.ts          # Prisma client
│   └── store/                 # Zustand stores
├── .env.example
└── package.json
```

## ⚡ Quick Start

```bash
npm install
cp .env.example .env
npx prisma db push
npm run dev
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_SECRET` | Token signing secret |
| `PUSHER_APP_ID` | Pusher app ID |
| `PUSHER_KEY` | Pusher key |
| `PUSHER_SECRET` | Pusher secret |
| `CLOUDINARY_URL` | Cloudinary upload URL |

## 📡 tRPC API Reference

| Procedure | Type | Description |
|-----------|------|-------------|
| `tweet.feed` | Query | Cursor-paginated feed (20 per page) |
| `tweet.create` | Mutation | Post tweet (content, imageUrl, parentId) |
| `tweet.like` | Mutation | Toggle like |
| `tweet.retweet` | Mutation | Toggle retweet |
| `tweet.bookmark` | Mutation | Toggle bookmark |
| `tweet.thread` | Query | Get tweet + all replies |
| `user.profile` | Query | Get profile by username |
| `user.follow` | Mutation | Toggle follow |
| `user.search` | Query | Search users by name |

## 📄 License

MIT

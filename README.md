# Twitter/X Clone - Full Stack Social Media Platform

Complete Twitter/X clone with tweets, threads, real-time notifications, bookmarks, and verified badges.

## Features
- 🐦 Tweet with 280-char limit + image upload
- 🧵 Thread / reply chains
- ❤️ Like, Retweet, Bookmark
- 👤 User profiles with follow system
- 🔍 User search
- 🔔 Real-time notifications (Pusher)
- ✅ Verified badges
- ♾️ Infinite scroll feed (cursor-based pagination)
- 📷 Image upload via Cloudinary

## Tech Stack
- **Frontend**: Next.js 14, React, Tailwind CSS, tRPC
- **Backend**: tRPC routers, Prisma ORM, PostgreSQL
- **Real-time**: Pusher
- **Media**: Cloudinary
- **Auth**: JWT + bcrypt

## Getting Started
```bash
npm install
cp .env.example .env
npx prisma db push
npm run dev
```

## API (tRPC)
- `tweet.feed` - Cursor-paginated feed
- `tweet.create` - Post a tweet
- `tweet.like` - Toggle like
- `tweet.retweet` - Toggle retweet
- `tweet.bookmark` - Toggle bookmark
- `tweet.thread` - Get thread with replies
- `user.profile` - Get user profile
- `user.follow` - Toggle follow
- `user.search` - Search users

## License
MIT

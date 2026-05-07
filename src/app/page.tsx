'use client';

import { useState } from 'react';

interface Tweet {
  id: string;
  content: string;
  user: { name: string; username: string; avatar: string; verified: boolean };
  likes: number;
  retweets: number;
  replies: number;
  createdAt: string;
}

const mockTweets: Tweet[] = [
  { id: '1', content: 'Just shipped a new feature! The tRPC + Prisma combo is incredible for type safety across the stack. #TypeScript #WebDev', user: { name: 'Abhishek', username: 'iabhishek18', avatar: 'https://picsum.photos/48/48?random=1', verified: true }, likes: 42, retweets: 12, replies: 5, createdAt: '2h' },
  { id: '2', content: 'Building in public: This Twitter clone now has infinite scroll, bookmarks, and real-time notifications via Pusher. What feature should I add next?', user: { name: 'Dev Builder', username: 'devbuilder', avatar: 'https://picsum.photos/48/48?random=2', verified: false }, likes: 128, retweets: 34, replies: 23, createdAt: '4h' },
  { id: '3', content: 'Hot take: Server Components + tRPC is the best DX for full-stack TypeScript apps in 2024. Fight me.', user: { name: 'Tech Hot Takes', username: 'techhotakes', avatar: 'https://picsum.photos/48/48?random=3', verified: true }, likes: 891, retweets: 156, replies: 89, createdAt: '6h' },
  { id: '4', content: 'Just learned about the 2-opt optimization algorithm for route planning. Implementing it for a drone delivery system — reduces total flight distance by 15-30% compared to naive nearest-neighbor. Math is beautiful.', user: { name: 'Algorithm Daily', username: 'algodaily', avatar: 'https://picsum.photos/48/48?random=4', verified: false }, likes: 267, retweets: 45, replies: 12, createdAt: '8h' },
  { id: '5', content: 'Reminder: Your API is not production-ready until it has:\n\n✓ Input validation (Zod/Pydantic)\n✓ Error codes (not just messages)\n✓ Rate limiting\n✓ Request IDs for tracing\n✓ Structured logging\n✓ Graceful shutdown\n\nAnything less is a prototype.', user: { name: 'Backend Mastery', username: 'backendmastery', avatar: 'https://picsum.photos/48/48?random=5', verified: true }, likes: 1432, retweets: 389, replies: 67, createdAt: '12h' },
];

export default function Home() {
  const [tweetContent, setTweetContent] = useState('');

  return (
    <div>
      <header className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4 z-10">
        <h2 className="text-xl font-bold">Home</h2>
      </header>

      <div className="border-b border-gray-800 p-4">
        <div className="flex gap-3">
          <img src="https://picsum.photos/48/48?random=0" alt="" className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <textarea value={tweetContent} onChange={(e) => setTweetContent(e.target.value)} placeholder="What is happening?!" className="w-full bg-transparent text-white text-lg resize-none outline-none placeholder-gray-500 min-h-[80px]" maxLength={280} />
            <div className="flex items-center justify-between mt-3">
              <span className="text-sm text-gray-500">{tweetContent.length}/280</span>
              <button disabled={!tweetContent.trim()} className="bg-blue-500 text-white px-5 py-2 rounded-full font-bold disabled:opacity-50 hover:bg-blue-600 transition">Post</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        {mockTweets.map((tweet) => (
          <article key={tweet.id} className="border-b border-gray-800 p-4 hover:bg-white/[0.03] transition cursor-pointer">
            <div className="flex gap-3">
              <img src={tweet.user.avatar} alt="" className="w-10 h-10 rounded-full" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="font-bold text-[15px]">{tweet.user.name}</span>
                  {tweet.user.verified && <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484z"/></svg>}
                  <span className="text-gray-500 text-sm">@{tweet.user.username} · {tweet.createdAt}</span>
                </div>
                <p className="text-[15px] mt-1 whitespace-pre-line">{tweet.content}</p>
                <div className="flex items-center gap-10 mt-3 text-gray-500">
                  <button className="flex items-center gap-1.5 hover:text-blue-400 transition group">
                    <svg className="w-[18px] h-[18px] group-hover:bg-blue-400/10 rounded-full p-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                    <span className="text-xs">{tweet.replies}</span>
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-green-400 transition">
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                    <span className="text-xs">{tweet.retweets}</span>
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-pink-400 transition">
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                    <span className="text-xs">{tweet.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-blue-400 transition">
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';

const trendingTopics = [
  { category: 'Technology', topic: '#NextJS14', posts: '45.2K' },
  { category: 'Programming', topic: 'TypeScript', posts: '32.1K' },
  { category: 'Technology', topic: '#ReactServer', posts: '28.9K' },
  { category: 'Business', topic: 'OpenAI', posts: '120K' },
  { category: 'Sports', topic: '#IPL2026', posts: '89.3K' },
  { category: 'Entertainment', topic: '#Oscars', posts: '156K' },
  { category: 'Science', topic: 'SpaceX', posts: '67.4K' },
  { category: 'Politics', topic: '#Budget2026', posts: '200K' },
];

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <header className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-3 z-10">
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search" className="w-full bg-[#202327] rounded-full px-5 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-black" />
      </header>

      <div className="border-b border-gray-800">
        <div className="flex">
          {['For you', 'Trending', 'News', 'Sports', 'Entertainment'].map((tab) => (
            <button key={tab} className="flex-1 py-4 text-sm font-medium text-gray-500 hover:bg-white/5 transition border-b-2 border-transparent first:border-blue-500 first:text-white">{tab}</button>
          ))}
        </div>
      </div>

      <div>
        {trendingTopics.filter((t) => !searchQuery || t.topic.toLowerCase().includes(searchQuery.toLowerCase())).map((trend, i) => (
          <div key={i} className="px-4 py-3 hover:bg-white/[0.03] transition cursor-pointer border-b border-gray-800/50">
            <p className="text-xs text-gray-500">{trend.category} · Trending</p>
            <p className="font-bold text-[15px] mt-0.5">{trend.topic}</p>
            <p className="text-xs text-gray-500 mt-0.5">{trend.posts} posts</p>
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';

export default function ProfilePage() {
  const user = {
    name: 'Abhishek Mishra',
    handle: 'iabhishek18',
    bio: 'Full-stack developer | Building cool stuff with Next.js, TypeScript & tRPC | Open source contributor',
    location: 'India',
    joined: 'Joined March 2022',
    following: 342,
    followers: 1247,
    verified: true,
    tweets: [
      { id: '1', content: 'Just deployed my 20th project to production. The stack: Next.js 14 + tRPC + Prisma + Tailwind. Type safety from database to UI. No compromises.', time: '2h', likes: 156, retweets: 34 },
      { id: '2', content: 'Building a real-time crypto portfolio tracker with WebSockets. Live price streaming every 30 seconds from CoinGecko. The P&L calculation engine handles partial fills and FIFO cost basis.\n\nStack: Node.js, Express, ws, CoinGecko API', time: '5h', likes: 89, retweets: 12 },
      { id: '3', content: 'Hot take: If your API doesn\'t have proper error codes, validation middleware, and consistent response formats — it\'s not production-ready.\n\n{ success: false, error: { code, message, details } } > { error: "something went wrong" }', time: '1d', likes: 432, retweets: 78 },
    ],
  };

  return (
    <div>
      <header className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4 z-10 flex items-center gap-6">
        <h1 className="text-xl font-bold">{user.name}</h1>
        <span className="text-sm text-gray-500">{user.tweets.length} posts</span>
      </header>

      <div className="h-48 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500" />

      <div className="px-4 pb-4 border-b border-gray-800">
        <div className="flex justify-between items-end -mt-16 mb-4">
          <div className="w-32 h-32 rounded-full border-4 border-black bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-4xl font-bold">A</div>
          <button className="border border-gray-600 text-white px-5 py-1.5 rounded-full font-bold text-sm hover:bg-white/10 transition mt-16">Edit profile</button>
        </div>
        <h2 className="text-xl font-extrabold flex items-center gap-1">
          {user.name}
          {user.verified && <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484z"/></svg>}
        </h2>
        <p className="text-gray-500">@{user.handle}</p>
        <p className="mt-3 text-[15px]">{user.bio}</p>
        <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
          <span>📍 {user.location}</span>
          <span>📅 {user.joined}</span>
        </div>
        <div className="flex gap-4 mt-3 text-sm">
          <span><strong className="text-white">{user.following}</strong> <span className="text-gray-500">Following</span></span>
          <span><strong className="text-white">{user.followers.toLocaleString()}</strong> <span className="text-gray-500">Followers</span></span>
        </div>
      </div>

      <div className="flex border-b border-gray-800">
        {['Posts', 'Replies', 'Media', 'Likes'].map((tab, i) => (
          <button key={tab} className={`flex-1 py-3 text-sm font-medium transition ${i === 0 ? 'text-white border-b-2 border-blue-500' : 'text-gray-500 hover:bg-white/5'}`}>{tab}</button>
        ))}
      </div>

      {user.tweets.map((tweet) => (
        <article key={tweet.id} className="border-b border-gray-800 p-4 hover:bg-white/[0.03] transition">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shrink-0 flex items-center justify-center text-sm font-bold">A</div>
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <span className="font-bold text-[15px]">{user.name}</span>
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484z"/></svg>
                <span className="text-gray-500 text-sm">@{user.handle} · {tweet.time}</span>
              </div>
              <p className="mt-1 text-[15px] leading-relaxed whitespace-pre-line">{tweet.content}</p>
              <div className="flex items-center gap-10 mt-3 text-gray-500 text-sm">
                <span>❤️ {tweet.likes}</span>
                <span>🔁 {tweet.retweets}</span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

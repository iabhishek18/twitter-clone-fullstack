'use client';

export default function BookmarksPage() {
  const bookmarks = [
    { id: '1', user: { name: 'Dan Abramov', handle: 'dan_abramov', verified: true }, content: 'React Server Components are not a replacement for client components. They complement each other. Use server components for data fetching, client for interactivity.', time: '2h', likes: 4521, retweets: 892 },
    { id: '2', user: { name: 'Guillermo Rauch', handle: 'raaborea', verified: true }, content: 'We just shipped Next.js 15. Partial prerendering is now stable. This changes everything for performance.', time: '5h', likes: 12300, retweets: 3400 },
    { id: '3', user: { name: 'Theo', handle: 't3dotgg', verified: true }, content: 'Hot take: tRPC + Prisma + Next.js is the best full-stack DX in 2026. Type safety from DB to UI with zero codegen.', time: '1d', likes: 8900, retweets: 1200 },
  ];

  return (
    <div>
      <header className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4 z-10">
        <h1 className="text-xl font-bold">Bookmarks</h1>
        <p className="text-sm text-gray-500">@you</p>
      </header>

      {bookmarks.length === 0 ? (
        <div className="text-center py-20 px-8">
          <h2 className="text-3xl font-extrabold">Save posts for later</h2>
          <p className="text-gray-500 mt-2 max-w-sm mx-auto">Bookmark posts to easily find them again in the future.</p>
        </div>
      ) : (
        <div>
          {bookmarks.map((tweet) => (
            <article key={tweet.id} className="border-b border-gray-800 p-4 hover:bg-white/[0.03] transition cursor-pointer">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 flex-wrap">
                    <span className="font-bold text-[15px]">{tweet.user.name}</span>
                    {tweet.user.verified && <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484z"/></svg>}
                    <span className="text-gray-500 text-sm">@{tweet.user.handle} · {tweet.time}</span>
                  </div>
                  <p className="mt-1 text-[15px] leading-relaxed">{tweet.content}</p>
                  <div className="flex items-center gap-10 mt-3 text-gray-500 text-sm">
                    <span>{tweet.likes.toLocaleString()} likes</span>
                    <span>{tweet.retweets.toLocaleString()} retweets</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

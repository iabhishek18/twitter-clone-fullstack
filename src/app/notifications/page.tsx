'use client';

export default function NotificationsPage() {
  const notifications = [
    { id: '1', type: 'like', user: 'Vercel', action: 'liked your post', content: '"tRPC + Prisma is the best DX..."', time: '2m' },
    { id: '2', type: 'retweet', user: 'Next.js', action: 'reposted your post', content: '"Just shipped my first Server Component..."', time: '15m' },
    { id: '3', type: 'follow', user: 'Tailwind CSS', action: 'followed you', content: '', time: '1h' },
    { id: '4', type: 'mention', user: 'Dan Abramov', action: 'mentioned you', content: '"Agree with @you about the RSC approach..."', time: '3h' },
    { id: '5', type: 'like', user: 'Guillermo Rauch', action: 'liked your post', content: '"The future of web is streaming HTML..."', time: '5h' },
  ];

  const icons: Record<string, string> = { like: '❤️', retweet: '🔁', follow: '👤', mention: '💬' };

  return (
    <div>
      <header className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4 z-10">
        <h1 className="text-xl font-bold">Notifications</h1>
        <div className="flex mt-3 border-b border-gray-800 -mx-4 -mb-4">
          <button className="flex-1 py-3 text-sm font-medium text-white border-b-2 border-blue-500">All</button>
          <button className="flex-1 py-3 text-sm font-medium text-gray-500 hover:bg-white/5">Mentions</button>
        </div>
      </header>

      <div>
        {notifications.map((notif) => (
          <div key={notif.id} className="flex items-start gap-3 px-4 py-4 border-b border-gray-800/50 hover:bg-white/[0.03] transition cursor-pointer">
            <span className="text-xl mt-1">{icons[notif.type]}</span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500" />
                <span className="font-bold text-sm">{notif.user}</span>
                <span className="text-gray-500 text-sm">{notif.action}</span>
                <span className="text-gray-600 text-xs ml-auto">{notif.time}</span>
              </div>
              {notif.content && <p className="text-gray-400 text-sm mt-1">{notif.content}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

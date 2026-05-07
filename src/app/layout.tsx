import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Twitter Clone',
  description: 'Full-stack social media platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <div className="flex max-w-7xl mx-auto min-h-screen">
          <Sidebar />
          <main className="flex-1 border-r border-gray-800 min-h-screen">
            {children}
          </main>
          <aside className="w-80 p-4 hidden lg:block sticky top-0 h-screen overflow-y-auto">
            <div className="bg-[#16181c] rounded-2xl p-4 mb-4">
              <h3 className="text-xl font-bold mb-4">Trends for you</h3>
              {['#NextJS', '#TypeScript', '#WebDev', '#AI', '#React'].map((tag, i) => (
                <div key={tag} className="py-3 hover:bg-white/5 px-2 rounded cursor-pointer">
                  <p className="text-xs text-gray-500">Trending in Technology</p>
                  <p className="font-bold text-sm">{tag}</p>
                  <p className="text-xs text-gray-500">{(i + 1) * 12}K posts</p>
                </div>
              ))}
            </div>
            <div className="bg-[#16181c] rounded-2xl p-4">
              <h3 className="text-xl font-bold mb-4">Who to follow</h3>
              {[{name: 'Vercel', handle: 'vercel'}, {name: 'Next.js', handle: 'nextjs'}, {name: 'Tailwind CSS', handle: 'tailwindcss'}].map((u) => (
                <div key={u.handle} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
                    <div><p className="font-bold text-sm">{u.name}</p><p className="text-gray-500 text-sm">@{u.handle}</p></div>
                  </div>
                  <button className="bg-white text-black text-sm font-bold px-4 py-1.5 rounded-full hover:bg-gray-200 transition">Follow</button>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </body>
    </html>
  );
}

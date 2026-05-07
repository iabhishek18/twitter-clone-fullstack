'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home', icon: 'M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5A2.5 2.5 0 005.5 22h13a2.5 2.5 0 002.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z' },
  { href: '/explore', label: 'Explore', icon: 'M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904l4.329 4.329 1.06-1.06-4.329-4.33A6.47 6.47 0 0016.75 10.25c0-3.59-2.91-6.5-6.5-6.5zm-8 6.5c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8z' },
  { href: '/notifications', label: 'Notifications', icon: 'M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.435-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2z' },
  { href: '/bookmarks', label: 'Bookmarks', icon: 'M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z' },
  { href: '/profile', label: 'Profile', icon: 'M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0z' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 p-4 border-r border-gray-800 hidden md:flex flex-col sticky top-0 h-screen">
      <h1 className="text-2xl font-bold mb-8 px-3">𝕏</h1>
      <nav className="space-y-1 flex-1">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={`flex items-center gap-4 px-3 py-3 rounded-full text-lg transition ${pathname === item.href ? 'text-white font-bold' : 'text-gray-300 hover:bg-white/10'}`}>
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d={item.icon} /></svg>
            {item.label}
          </Link>
        ))}
      </nav>
      <button className="w-full bg-blue-500 text-white py-3 rounded-full font-bold hover:bg-blue-600 transition mt-4">Post</button>
    </aside>
  );
}

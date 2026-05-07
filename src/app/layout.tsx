import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Twitter Clone',
  description: 'Full-stack social media platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}

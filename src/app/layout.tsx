import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Coy — Discover Your Mutual Crushes',
  description: 'Anonymous crush discovery with mutual matching. Find people around campus who liked you back.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">❤️‍🔥</text></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

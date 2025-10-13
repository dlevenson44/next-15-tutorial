import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* adding font here applies it throughout our app */}
      {/* antialiased is a tailwind class that's smooths out font, not necessary but nice */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

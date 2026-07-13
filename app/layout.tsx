import { Metadata } from 'next';
import './globals.css';
import { Noto_Sans, Noto_Sans_Thai } from 'next/font/google';
import { cn } from '@/lib/utils';

const notoSans = Noto_Sans({
  variable: '--font-sans-thai',
  subsets: ['latin'],
});

const notoSansThai = Noto_Sans_Thai({
  variable: '--font-noto-sans',
  subsets: ['latin', 'thai'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'My App',
  description: 'My app description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        // className={`${notoSansThai.variable} antialiased`}
        className={cn(
          notoSans.variable,
          notoSansThai.variable,
          'antialiased',
          'font-sans',
        )}
      >
        {children}
      </body>
    </html>
  );
}

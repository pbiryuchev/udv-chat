import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Roboto } from 'next/font/google';
import { Toaster } from '@/shared/ui';
import './globals.css';

export const dynamic = 'force-dynamic';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'UDV Chat',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${roboto.variable} antialiased px-1`}>
        <ThemeProvider
          attribute="class"
          storageKey="ui-theme"
          defaultTheme="dark"
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

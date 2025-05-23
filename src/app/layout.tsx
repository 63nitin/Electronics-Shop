import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster"
import { ClientProviders } from '@/components/layout/ClientProviders';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Electron Hub - Your Source for Home Electronics',
    template: '%s | Electron Hub',
  },
  description: 'Electron Hub offers a wide range of electronic items like fans, wires for home wiring, and equipment to help with home electronics. Interactive, SEO-friendly, and user-focused.',
  keywords: ['electronics, home wiring, fans, electronic equipment, online shop, electron hub'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <ClientProviders>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ClientProviders>
      </body>
    </html>
  );
}

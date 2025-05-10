import type { Metadata } from 'next';
import { Inter, Playfair_Display, Merienda } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from '@/components/navbar/Navbar';
import Providers from './providers';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' })
const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const merienda = Merienda({ subsets: ['latin'], variable: '--font-merienda' })

export const metadata: Metadata = {
  title: "Chetra Coffee Shop | Best Coffee Products Online",
  description: "Discover a wide range of premium coffee products, including instant coffee, sachet coffee, and more. Start your coffee journey with us today!",
  keywords: 'Chetra Coffee Shop, Coffee',
  icons: {
    icon: [
      { 
        url: '/favicon.ico',
        type: 'image/ico',
        sizes: '32x32',
      },
      { 
        url: '/favicon.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noimageindex: true,
  },
  openGraph: {
    title: "Chetra Coffee Shop | Best Coffee Products Online",
    description: "Discover a wide range of premium coffee products, including instant coffee, sachet coffee, and more. Start your coffee journey with us today!",
    url: "https://your-coffee-shop-domain.com",
    siteName: "Chetra Coffee Shop",
    images: [
      {
        url: "https://your-coffee-shop-domain.com/og-image.jpg",
        height: 630,
        alt: "Chetra Coffee Shop - Best Coffee Products Online",
      },
    ],
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Coffee Shop | Best Coffee Products Online",
    description: "Discover premium coffee products and start your coffee journey with us!",
    images: ["https://your-coffee-shop-domain.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={`${playfair.variable} ${inter.variable} ${merienda.variable}`}>
          <Providers>
            <Navbar />
            <main>
              {children}
            </main>
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}

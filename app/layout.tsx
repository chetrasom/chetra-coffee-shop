import type { Metadata } from 'next';
import { Inter, Playfair_Display, Merienda } from 'next/font/google';
import { Cormorant_Upright, Open_Sans, Poppins } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from '@/components/navbar/Navbar';
import Providers from './providers';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' })
const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const merienda = Merienda({ subsets: ['latin'], variable: '--font-merienda' })

const cormorant_upright = Cormorant_Upright({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant_upright',
});

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-open_sans',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Chetra Coffee Shop | Best Coffee Products Online",
  description: "Discover a wide range of premium coffee products, including instant coffee, sachet coffee, and more. Start your coffee journey with us today!",
  keywords: 'Chetra Coffee Shop, Coffee',
  icons: {
    icon: [
      { 
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
      { 
        url: '/favicon.png',
        type: 'image/png',
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
    url: "https://chetracoffee-shop.vercel.app/",
    siteName: "Chetra Coffee Shop",
    images: [
      {
        url: "https://ik.imagekit.io/phkgtl3vm/hero/hero2.jpg?updatedAt=1745052385780",
        height: 630,
        alt: "Chetra Coffee Shop - Best Coffee Products Online",
      },
    ],
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chetra Coffee Shop | Best Coffee Products Online",
    description: "Discover premium coffee products and start your coffee journey with us!",
    images: ["https://ik.imagekit.io/phkgtl3vm/hero/hero2.jpg?updatedAt=1745052385780"],
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
        <body className={`${playfair.variable} ${inter.variable} ${merienda.variable}
        ${cormorant_upright.variable} ${open_sans.variable} ${poppins.variable}`}>
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

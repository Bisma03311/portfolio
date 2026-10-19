import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedBackground from '@/components/AnimatedBackground';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bisma Ahmad | AI Engineer, Designer & Content Writer',
  description: 'Portfolio of Bisma Ahmad, an AI Engineer trainee, graphic and logo designer, and content writer combining technology, creativity, and marketing.',
  openGraph: {
    title: 'Bisma Ahmad | Portfolio',
    description: 'Portfolio of Bisma Ahmad, combining AI, design, and content.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bisma Ahmad | Portfolio',
    description: 'Portfolio of Bisma Ahmad, combining AI, design, and content.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-accent-secondary selection:text-white`}>
        <ScrollProgress />
        <Cursor />
        <AnimatedBackground />
        
        <div className="flex flex-col min-h-screen relative z-10">
          <Navbar />
          <main className="flex-grow pt-28">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

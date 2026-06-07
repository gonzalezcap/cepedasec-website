import { Playfair_Display, Montserrat } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['700'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Cepedas Event Center - Elegant Venue in Tulsa, OK',
  description:
    'Premier event center in Tulsa, Oklahoma. Perfect for weddings, quinceañeras, corporate galas, and celebrations. 334 guests, full AV, bridal suite.',
  keywords:
    'event center Tulsa, wedding venue Tulsa, event space, banquet hall, quinceañera venue, corporate event space',
  authors: [{ name: 'Cepedas Event Center' }],
  creator: 'Gonzalez Consulting',
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cepedasec.com',
    title: 'Cepedas Event Center - Elegant Venue in Tulsa, OK',
    description:
      'Premier event center in Tulsa for weddings, quinceañeras, corporate galas, and celebrations.',
    siteName: 'Cepedas Event Center',
    images: [
      {
        url: 'https://cepedasec.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cepedas Event Center',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cepedas Event Center',
    description: 'Premier event venue in Tulsa, OK',
    creator: '@cepedasec',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://cepedasec.com',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0f0f0f',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f0f0f" />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="bg-dark-900 text-white">
        <Navigation />
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

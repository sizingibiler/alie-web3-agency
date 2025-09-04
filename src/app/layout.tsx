import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { organizationSchema, websiteSchema, softwareApplicationSchema, sagaApplicationSchema, xAnalyzerSchema, servicesSchema, faqSchema } from "@/components/SEO";
import { GoogleTagManager, GoogleTagManagerNoscript } from "@/components/GoogleTagManager";

export const metadata: Metadata = {
  title: "Alie Network — Data-Driven Web3 Intelligence (S.A.G.A. • Phoenix Engine)",
  description: "Alie Network uses proprietary technology like S.A.G.A. Analysis and Phoenix Engine to evaluate and grow Web3 projects. From KOL campaigns to angel investor matchmaking.",
  keywords: "Web3, KOL campaigns, angel investor, crypto marketing, blockchain growth, DeFi marketing, CEX listing, DEX listing, Telegram Raiders, Web3 influencer marketing",
  authors: [{ name: "Alie Network Team" }],
  creator: "Alie Network",
  publisher: "Alie Network",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://alie.network'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Alie Network - Web3 Growth, Delivered",
    description: "From data-driven KOL campaigns to angel investor matchmaking, we architect success for the most ambitious projects in Web3.",
    type: "website",
    locale: "en_US",
    url: "https://alie.network",
    siteName: "Alie Network",
    images: [
      {
        url: '/images/logo.png',
        width: 512,
        height: 512,
        alt: 'Alie Network Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alie Network - Web3 Growth, Delivered",
    description: "From data-driven KOL campaigns to angel investor matchmaking, we architect success for the most ambitious projects in Web3.",
    creator: "@networkAlie",
    site: "@networkAlie",
    images: ['/images/logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/logo.png',
      },
    ],
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',  // Add your Google verification code here when available
    yandex: '',  // Add your Yandex verification code here when available
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Combine all schemas for the site
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      softwareApplicationSchema,
      sagaApplicationSchema,
      xAnalyzerSchema,
      ...servicesSchema,
      faqSchema
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <GoogleTagManager />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="antialiased">
        <GoogleTagManagerNoscript />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

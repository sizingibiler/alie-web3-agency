import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alie Web3 Agency - Web3 Growth, Delivered",
  description: "From data-driven KOL campaigns to angel investor matchmaking, we architect success for the most ambitious projects in Web3.",
  keywords: "Web3, KOL campaigns, angel investor, crypto marketing, blockchain growth, DeFi marketing",
  openGraph: {
    title: "Alie Web3 Agency - Web3 Growth, Delivered",
    description: "From data-driven KOL campaigns to angel investor matchmaking, we architect success for the most ambitious projects in Web3.",
    type: "website",
    locale: "en_US",
    url: "https://alie.agency",
    siteName: "Alie Web3 Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alie Web3 Agency - Web3 Growth, Delivered",
    description: "From data-driven KOL campaigns to angel investor matchmaking, we architect success for the most ambitious projects in Web3.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

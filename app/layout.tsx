import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Cape Carraholly Retreat",
  description: "Boat-access-only oceanside glamping sanctuary near Vancouver BC",
  url: "https://cape-carraholly-retreat.vercel.app",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Port Moody",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  telephone: "+1-604-000-0000",
  priceRange: "$$$",
  image: "https://cape-carraholly-retreat.vercel.app/og-hero.jpg",
  amenityFeature: ["Hot Tub", "Sauna", "Kayaking", "Hiking Trails"],
  currenciesAccepted: "CAD",
};

export const metadata: Metadata = {
  title: "Cape Carraholly Retreat | Boat-Access Oceanside Luxury Glamping",
  description: "Minutes from Vancouver, worlds away in serenity. Exclusive boat-access yurts, lodges with private hot tubs, sauna, kayaking & forest trails. Under new management for 2026 upgrades.",
  keywords: "boat access glamping, Vancouver luxury retreat, BC wilderness sanctuary, oceanside yurts, hot tub lodges near Vancouver",
  openGraph: {
    title: "Cape Carraholly Retreat – Boat In, Unplug, Reconnect",
    description: "75-acre oceanside wilderness sanctuary. Boat journey required. 2026 dates filling fast under new management.",
    url: "https://cape-carraholly-retreat.vercel.app",
    siteName: "Cape Carraholly Retreat",
    images: [
      {
        url: "https://cape-carraholly-retreat.vercel.app/og-hero.jpg", // placeholder – replace with real hero image later
        width: 1200,
        height: 630,
        alt: "Boat arriving at Cape Carraholly oceanside retreat",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cape Carraholly Retreat",
    description: "Minutes from Vancouver, worlds away. Boat-access luxury glamping.",
    images: ["https://cape-carraholly-retreat.vercel.app/og-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
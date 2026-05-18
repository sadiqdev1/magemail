import type { Metadata } from "next";
import { DM_Serif_Display, Geist_Mono } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
  display: "swap",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://magemail.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gmail Alias Generator — Free Gmail Dot Trick Tool | MageMail",
    template: "%s | MageMail",
  },
  description:
    "Generate every possible Gmail dot alias from your address instantly. Gmail ignores dots in usernames — use the dot trick to create unlimited free email aliases. No sign-up, no data stored.",
  keywords: [
    "gmail dot trick",
    "gmail alias generator",
    "gmail aliases",
    "free email tools",
    "gmail dot alias",
    "email alias generator",
    "googlemail alias",
    "gmail username dots",
    "gmail plus alias",
    "unlimited gmail aliases",
  ],
  authors: [{ name: "Abubakar Ibrahim", url: "https://sadiqdev-portfolio.vercel.app" }],
  creator: "Abubakar Ibrahim",
  publisher: "MageMail",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "MageMail",
    title: "Gmail Alias Generator — Free Gmail Dot Trick Tool",
    description:
      "Generate every possible Gmail dot alias from your address instantly. No sign-up, no data stored. 100% free.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "MageMail — Gmail Alias Generator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gmail Alias Generator — Free Gmail Dot Trick Tool",
    description: "Generate every possible Gmail dot alias from your address instantly. No sign-up, no data stored.",
    images: ["/og.png"],
    creator: "@sadiqdev1",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#080810]">
        {children}
      </body>
    </html>
  );
}
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const SITE_URL = "https://magemail.vercel.app";
const SITE_NAME = "MageMail";
const TITLE = "Gmail Alias Generator — Free Gmail Dot Trick Tool";
const DESCRIPTION =
  "Generate every possible Gmail dot alias from your address instantly. Gmail ignores dots in usernames — use the dot trick to create unlimited free email aliases. No sign-up, no data stored, 100% free.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${TITLE} | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,

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
    "gmail dot trick tool",
    "gmail email aliases free",
    "create gmail aliases",
    "gmail address variations",
  ],

  authors: [
    { name: "Abubakar Ibrahim", url: "https://sadiqdev-portfolio.vercel.app" },
  ],
  creator: "Abubakar Ibrahim",
  publisher: SITE_NAME,

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Gmail Alias Generator`,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@sadiqdev1",
    creator: "@sadiqdev1",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/og.png`],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#09090e] text-white">
        {children}
      </body>
    </html>
  );
}

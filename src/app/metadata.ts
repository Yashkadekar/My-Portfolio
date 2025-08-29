import type { Metadata } from "next";
import { keywords } from "@/constant";

export const metadata: Metadata = {
  applicationName: "Yash Kadekar",
  title: "Yash Kadekar",
  description:
    "Yash Kadekar is a student developer passionate about building modern web apps with Next.js, React, and open-source tools. Explore his projects, experiments, and developer portfolio.",
  authors: [
    {
      name: "Yash Kadekar",
      url: "https://yashkadekar.vercel.app",
    },
  ],
  creator: "Yash Kadekar",
  referrer: "origin-when-cross-origin",
  keywords: keywords,
  metadataBase: new URL("https://aarab.vercel.app"),

  // SEO Enhancements
  alternates: {
    canonical: "https://aarab.vercel.app",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }, // fallback
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",

  openGraph: {
    title: "Yash Kadekar",
    description:
      "Explore Yash Kadekar's portfolio featuring projects in React, Next.js, AI, and developer tools. Discover a world of creative web applications and open-source experiments.",
    url: "https://yashkadekar.vercel.app",
    siteName: "Yash Kadekar",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Yash Kadekar Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yash Kadekar",
    description:
      "Check out Yash Kadekar's personal portfolio and dev projects using Next.js, React, Tailwind, and modern web tech.",
    images: ["/images/thumbnail.png"],
    creator: "@yashkadekar",
  },
};

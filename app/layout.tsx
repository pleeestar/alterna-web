import type { Metadata } from "next"
import { Analytics } from '@vercel/analytics/next';
import { Source_Code_Pro, Geist, Geist_Mono, Inter, Noto_Sans_JP } from "next/font/google"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

import "./globals.css"

const code = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const noto = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ['latin'],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "圏外/仮初めの界隈",
  description: "俺達は飯食ってうんこするために生きている。電子ライ麦畑の僕はアルゴリズムの溝を眺む、君も2ちゃんねるスレ民ごっこにより仮初めの有機交流電燈に思いを馳せよう。",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "圏外/仮初めの界隈",
    description: "俺達は飯食ってうんこするために生きている。電子ライ麦畑の僕はアルゴリズムの溝を眺む、君も2ちゃんねるスレ民ごっこにより仮初めの有機交流電燈に思いを馳せよう。",
    url: "https://www.xn--eds00c.club/",
    siteName: "圏外/仮初めの界隈",
    images: [
      {
        url: "https://alterna-flax.vercel.app/og-image.png", // 1200x630 推奨
        width: 1200,
        height: 630,
        alt: "仮初めの界隈「圏外」へようこそ、古代サイバースペース民族の夢はふわふわする妄想"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "圏外/仮初めの界隈",
    description: "俺達は飯食ってうんこするために生きている。電子ライ麦畑の僕はアルゴリズムの溝を眺む、君も2ちゃんねるスレ民ごっこにより仮初めの有機交流電燈に思いを馳せよう。",
    images: ["https://alterna-flax.vercel.app/og-image.png"]
  },
  manifest: "/site.webmanifest"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${code.variable} ${geistSans.variable} ${geistMono.variable} ${inter.variable} ${noto.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

import type { Metadata } from "next"
import { Analytics } from '@vercel/analytics/next';
import { Source_Code_Pro, Geist, Geist_Mono, Inter, Noto_Sans_JP } from "next/font/google"
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
  title: "きのこたけのこノイズ研究所",
  description: "俺達は飯食ってうんこするために生きている。",
}

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
        {children}
        <Analytics />
      </body>
    </html>
  )
}

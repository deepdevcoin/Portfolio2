import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
// 1. Import the Script component from next/script
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// Your Google Analytics Measurement ID
const GA_MEASUREMENT_ID = "G-RVFVPVQDRY"

export const metadata: Metadata = {
  title: "Karthikeyan A - AI Engineer & Full Stack Developer",
  description:
    "Building smart, scalable, and AI-powered web experiences. AI Engineer, Full Stack Developer, and Robotics Enthusiast.",
  generator: "v0.app",
  openGraph: {
    title: "Karthikeyan A - AI Engineer & Full Stack Developer",
    description: "Building smart, scalable, and AI-powered web experiences.",
    type: "website",
  },
  icons: {
    icon: "/logo/Deepdev.png",
    shortcut: "/logo/Deepdev.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* 2. Add the first Google Analytics script (the loader) */}
      <Script
        strategy="afterInteractive" // Loads after the page becomes interactive
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />

      {/* 3. Add the second Google Analytics script (the config/initialization) */}
      <Script
        id="google-analytics-init" // Unique ID for this script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
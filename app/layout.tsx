import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"
import SnowfallClient from "@/components/snowfall-client"
import HappyNewYear from "@/components/happy-new-year"
import SplashCursor from "@/components/SplashCursorClientOnly"


const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NETLIFY === "true"
    ? (process.env.URL || process.env.DEPLOY_PRIME_URL || process.env.DEPLOY_URL)
    : undefined) ||
  "https://debasisbiswas.me"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Debasis Biswas - Cybersecurity Enthusiast & BCA Student",
  description:
    "Portfolio of Debasis Biswas - BCA Student, Cybersecurity Enthusiast, Network Engineering, and Linux Troubleshooter",
  keywords: "Debasis Biswas, Cybersecurity, BCA Student, Network Engineering, Linux, Portfolio",
  authors: [{ name: "Debasis Biswas" }],
  creator: "Debasis Biswas",
  openGraph: {
    title: "Debasis Biswas - Cybersecurity Enthusiast",
    description:
      "Portfolio of Debasis Biswas - BCA Student, Cybersecurity Enthusiast, Network Engineering, and Linux Troubleshooter",
    url: "https://debasisbiswas.me",
    siteName: "Debasis Biswas Portfolio",
    images: [
      {
        url: "/DEBASIS.jpg",
        width: 1200,
        height: 630,
        alt: "Debasis Biswas - Cybersecurity Enthusiast",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Debasis Biswas - Cybersecurity Enthusiast",
    description:
      "Portfolio of Debasis Biswas - BCA Student, Cybersecurity Enthusiast, Network Engineering, and Linux Troubleshooter",
    images: ["/DEBASIS.jpg"],
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
 
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Debasis Biswas - Cybersecurity Enthusiast & BCA Student</title>
        <meta name="description" content="Portfolio of Debasis Biswas - BCA Student, Cybersecurity Enthusiast, Network Engineering, and Linux Troubleshooter" />
        <meta name="keywords" content="Debasis Biswas, Cybersecurity, BCA Student, Network Engineering, Linux, Portfolio" />
        <meta name="author" content="Debasis Biswas" />
        <meta property="og:title" content="Debasis Biswas - Cybersecurity Enthusiast" />
        <meta property="og:description" content="Portfolio of Debasis Biswas - BCA Student, Cybersecurity Enthusiast, Network Engineering, and Linux Troubleshooter" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://debasisbiswas.me" />
        <meta property="og:site_name" content="Debasis Biswas Portfolio" />
        <meta property="og:image" content="/DEBASIS.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Debasis Biswas - Cybersecurity Enthusiast" />
        <meta name="twitter:description" content="Portfolio of Debasis Biswas - BCA Student, Cybersecurity Enthusiast, Network Engineering, and Linux Troubleshooter" />
        <meta name="twitter:image" content="/DEBASIS.jpg" />
        <link rel="canonical" href="https://debasisbiswas.me" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans">
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <SnowfallClient />
            <HappyNewYear />
            <SplashCursor />
            {children}
            <Toaster />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}

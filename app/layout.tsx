import type React from "react"
import type { Metadata } from "next"
// import { Inter } from "next/font/google" // Disabled due to network restrictions
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import GoogleAnalytics from "@/components/google-analytics"
import { Suspense } from "react"

// const inter = Inter({ subsets: ["latin"] }) // Disabled due to network restrictions

export const metadata: Metadata = {
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
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DEBASIS.jpg-cGsNmIEbGP4AphkJpHl8bmIw3mbWY6.jpeg",
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
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DEBASIS.jpg-cGsNmIEbGP4AphkJpHl8bmIw3mbWY6.jpeg"],
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
  verification: {
    google: "your-google-verification-code",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X31N429BP8"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-X31N429BP8');`}
        </script>

        {/* Microsoft Clarity */}
        <script type="text/javascript">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "sc0m5z0ymd");`}
        </script>

        {/* Hotjar Tracking Code for PORTFOLIO */}
        <script>
          {`(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:6460084,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </script>
      </head>
      <body className="font-sans">{/* Using fallback font due to network restrictions */}
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
            <GoogleAnalytics />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}

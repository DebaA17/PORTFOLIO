import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import GoogleAnalytics from "@/components/google-analytics"
import { Suspense } from "react"


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
        <meta property="og:image" content="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DEBASIS.jpg-cGsNmIEbGP4AphkJpHl8bmIw3mbWY6.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Debasis Biswas - Cybersecurity Enthusiast" />
        <meta name="twitter:description" content="Portfolio of Debasis Biswas - BCA Student, Cybersecurity Enthusiast, Network Engineering, and Linux Troubleshooter" />
        <meta name="twitter:image" content="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DEBASIS.jpg-cGsNmIEbGP4AphkJpHl8bmIw3mbWY6.jpeg" />
        <link rel="canonical" href="https://debasisbiswas.me" />
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
        
 {/* Tawk.to code added */}
<script type="text/javascript">
  {`
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/68eced4337441419507041aa/1j7entkub';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();
  `}
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  // === BUILD SETTINGS ===
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // === TYPESCRIPT ===
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    
    minimumCacheTTL: 60 * 60 * 24,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "debasisbiswas.me",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "unpkg.com",
        pathname: "/**",
      }
    ],
  },

  // === HEADERS ===
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // HSTS
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },

          // CSP (Cloudflare-compatible, Next.js-safe)
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https: wss:",
              "frame-src 'self'",
              "worker-src 'self' blob:",
              "media-src 'self' blob: data:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "manifest-src 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join("; "),
          },

          // Security
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },

          // Branding
          { key: "Server", value: "Debasis-Security-Server" },
          { key: "X-Author", value: "Debasis Biswas - Cybersecurity Expert" },
          { key: "X-Security-Contact", value: "forensic@debasisbiswas.me" },
        ],
      },

      // Next.js Image Optimization output
      // Do NOT force "must-revalidate" here, or images will re-fetch/re-optimize often.
      {
        source: "/_next/image",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },

      // Next.js static
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },

      {
        source: "/certifications/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, immutable" },
        ],
      },
      {
        source: "/(DEBASIS\\.jpg|add-project-bg\\.jpg)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, immutable" },
        ],
      },

      // Icons
      {
        source: "/(favicon.ico|favicon.png|favicon-16x16.png|favicon-32x32.png|apple-touch-icon.png)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // === REDIRECTS (Fix HTTPS + No WWW) ===
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          { type: "header", key: "x-forwarded-proto", value: "http" },
        ],
        destination: "https://debasisbiswas.me/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          { type: "host", value: "www.debasisbiswas.me" },
        ],
        destination: "https://debasisbiswas.me/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

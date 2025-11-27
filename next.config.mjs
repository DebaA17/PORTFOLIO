/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'debasisbiswas.me',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unpkg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      },
      // add more *image* providers if needed
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [

          // HSTS
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload"
          },

          // CSP (Optimized for Next.js 16)
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https: wss:",
              "media-src 'self' https: data: blob:",
              "worker-src 'self' blob:",
              "frame-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "manifest-src 'self'",
              "upgrade-insecure-requests"
            ].join("; ")
          },

          // Frame protection
          {
            key: "X-Frame-Options",
            value: "DENY"
          },

          // MIME sniff protection
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },

          // Referrer policy
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },

          // Prefetch
          {
            key: "X-DNS-Prefetch-Control",
            value: "on"
          },

          // Branding
          {
            key: "Server",
            value: "Debasis-Security-Server"
          },
          {
            key: "X-Author",
            value: "Debasis Biswas - Cybersecurity Expert"
          },
          {
            key: "X-Security-Contact",
            value: "forensic@debasisbiswas.me"
          },

          // Cache-Control for pages
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate"
          }
        ],
      },

      // Static assets (1 year immutable)
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      },

      // Icons
      {
        source: "/(favicon.ico|favicon.png|favicon-16x16.png|favicon-32x32.png|apple-touch-icon.png)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      },

      // API routes
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "X-Frame-Options",
            value: "DENY"
          },
          {
            key: "Cache-Control",
            value: "no-store"
          }
        ]
      }
    ];
  },

  compress: true,
  poweredByHeader: false,

  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
      {
        source: "/.well-known/security.txt",
        destination: "/api/security",
      },
    ];
  },

  async redirects() {
    return [
      // Force HTTPS
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://debasisbiswas.me/:path*",
        permanent: true,
      },
      // Remove "www"
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.debasisbiswas.me",
          },
        ],
        destination: "https://debasisbiswas.me/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

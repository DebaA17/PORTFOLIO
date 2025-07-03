/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blob.v0.dev',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unpkg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fonts.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fonts.gstatic.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // 🔒 STRICT TRANSPORT SECURITY (HSTS)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          
          // 🛡️ CONTENT SECURITY POLICY (CSP) - Maximum Security
          {
            key: 'Content-Security-Policy',
            value: [
              // Default source - only allow same origin
              "default-src 'self'",
              
              // Script sources - carefully controlled
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com https://static.cloudflareinsights.com",
              
              // Style sources - allow inline styles for React
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              
              // Font sources
              "font-src 'self' https://fonts.gstatic.com data:",
              
              // Image sources - comprehensive list
              "img-src 'self' data: https: blob: https://hebbkx1anhila5yf.public.blob.vercel-storage.com https://blob.v0.dev",
              
              // Media sources
              "media-src 'self' https: data: blob:",
              
              // Connection sources - API calls
              "connect-src 'self' https: wss: https://api.ipify.org https://ipapi.co https://static.cloudflareinsights.com",
              
              // Worker sources
              "worker-src 'self' blob:",
              
              // Child sources (for iframes, workers)
              "child-src 'self' blob:",
              
              // Frame sources - prevent clickjacking
              "frame-src 'none'",
              
              // Object sources - block plugins
              "object-src 'none'",
              
              // Base URI - prevent base tag injection
              "base-uri 'self'",
              
              // Form action - prevent form hijacking
              "form-action 'self'",
              
              // Frame ancestors - prevent embedding
              "frame-ancestors 'none'",
              
              // Manifest source
              "manifest-src 'self'",
              
              // Upgrade insecure requests
              "upgrade-insecure-requests",
              
              // Block mixed content
              "block-all-mixed-content"
            ].join('; ')
          },
          
          // 🚫 X-FRAME-OPTIONS - Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          
          // 📄 X-CONTENT-TYPE-OPTIONS - Prevent MIME sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          
          // 🔗 REFERRER-POLICY - Control referrer information
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          
          // 🎛️ PERMISSIONS-POLICY - Control browser features
          {
            key: 'Permissions-Policy',
            value: [
              'accelerometer=()',
              'ambient-light-sensor=()',
              'autoplay=()',
              'battery=()',
              'camera=()',
              'cross-origin-isolated=()',
              'display-capture=()',
              'document-domain=()',
              'encrypted-media=()',
              'execution-while-not-rendered=()',
              'execution-while-out-of-viewport=()',
              'fullscreen=(self)',
              'geolocation=()',
              'gyroscope=()',
              'keyboard-map=()',
              'magnetometer=()',
              'microphone=()',
              'midi=()',
              'navigation-override=()',
              'payment=()',
              'picture-in-picture=()',
              'publickey-credentials-get=()',
              'screen-wake-lock=()',
              'sync-xhr=()',
              'usb=()',
              'web-share=()',
              'xr-spatial-tracking=()',
              'clipboard-read=()',
              'clipboard-write=()',
              'gamepad=()',
              'speaker-selection=()',
              'conversion-measurement=()',
              'focus-without-user-activation=()',
              'hid=()',
              'idle-detection=()',
              'interest-cohort=()',
              'serial=()',
              'sync-script=()',
              'trust-token-redemption=()',
              'window-placement=()',
              'vertical-scroll=()'
            ].join(', ')
          },
          
          // 🛡️ ADDITIONAL SECURITY HEADERS
          
          // XSS Protection (legacy but still useful)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          
          // DNS Prefetch Control
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          
          // Cross-Origin Embedder Policy
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none'
          },
          
          // Cross-Origin Opener Policy
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups'
          },
          
          // Cross-Origin Resource Policy
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin'
          },
          
          // Server Information Hiding
          {
            key: 'Server',
            value: 'Debasis-Security-Server'
          },
          
          // Remove X-Powered-By for security
          {
            key: 'X-Powered-By',
            value: 'Debasis-Portfolio-v2.0'
          },
          
          // Custom Security Headers
          {
            key: 'X-Author',
            value: 'Debasis Biswas - Cybersecurity Enthusiast'
          },
          
          {
            key: 'X-Security-Contact',
            value: 'admin@debasisbiswas.me'
          },
          
          // Cache Control for security
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, must-revalidate'
          },
          
          // Expect-CT (Certificate Transparency)
          {
            key: 'Expect-CT',
            value: 'max-age=86400, enforce'
          },
          
          // NEL (Network Error Logging)
          {
            key: 'NEL',
            value: '{"report_to":"default","max_age":31536000,"include_subdomains":true}'
          },
          
          // Report-To for security reporting
          {
            key: 'Report-To',
            value: '{"group":"default","max_age":31536000,"endpoints":[{"url":"https://debasisbiswas.me/api/reports"}],"include_subdomains":true}'
          },
          
          // Force HTTPS
          {
            key: 'X-Forwarded-Proto',
            value: 'https'
          },
        ],
      },
      
      // 📁 STATIC ASSETS - Long-term caching with security
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      },
      {
        source: '/favicon.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      },
      {
        source: '/favicon-16x16.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      },
      {
        source: '/favicon-32x32.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      },
      {
        source: '/apple-touch-icon.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      },
      {
        source: '/site.webmanifest',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400'
          },
          {
            key: 'Content-Type',
            value: 'application/manifest+json'
          }
        ]
      },
      
      // 🚀 NEXT.JS STATIC FILES
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      },
      
      // 🔒 API ROUTES - Extra security
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate'
          },
          {
            key: 'Pragma',
            value: 'no-cache'
          },
          {
            key: 'Expires',
            value: '0'
          }
        ]
      }
    ]
  },
  
  // 🔧 ADDITIONAL SECURITY CONFIGURATIONS
  compress: true,
  poweredByHeader: false, // Remove X-Powered-By header
  
  // Experimental features for security
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Security-focused rewrites
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots'
      },
      // Security.txt for responsible disclosure
      {
        source: '/.well-known/security.txt',
        destination: '/api/security'
      }
    ]
  },
  
  // Redirects for security
  async redirects() {
    return [
      // Force HTTPS redirect
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://debasisbiswas.me/:path*',
        permanent: true,
      },
      // Redirect www to non-www (optional)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.debasisbiswas.me',
          },
        ],
        destination: 'https://debasisbiswas.me/:path*',
        permanent: true,
      },
    ]
  }
}

export default nextConfig

import { NextResponse } from "next/server";

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://debasisbiswas.me/sitemap.xml

# Security
User-agent: *
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /.env
Disallow: /config/

# Allow specific bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Block malicious crawlers
User-agent: SemrushBot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

# Crawl delay for respectful crawling
Crawl-delay: 1`;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

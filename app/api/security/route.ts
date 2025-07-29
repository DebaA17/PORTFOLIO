import { NextResponse } from "next/server"

export async function GET() {
  const securityTxt = `Contact: mailto:admin@debasisbiswas.me
Contact: https://debasisbiswas.me/#contact
Expires: 2025-12-31T23:59:59.000Z
Encryption: https://debasisbiswas.me/pgp-key.txt
Preferred-Languages: en
Canonical: https://debasisbiswas.me/.well-known/security.txt
Policy: https://debasisbiswas.me/security-policy
Hiring: https://debasisbiswas.me/#contact

# Security Policy
# 
# We take security seriously. If you discover a security vulnerability,
# please report it responsibly by contacting us at admin@debasisbiswas.me
#
# Please include:
# - Description of the vulnerability
# - Steps to reproduce
# - Potential impact
# - Your contact information
#
# We will acknowledge receipt within 24 hours and provide a detailed
# response within 72 hours indicating next steps.
#
# Thank you for helping keep our users safe!

-----BEGIN PGP SIGNATURE-----
# Debasis Biswas - Cybersecurity Portfolio
# Last updated: ${new Date().toISOString()}
-----END PGP SIGNATURE-----`

  return new NextResponse(securityTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "X-Content-Type-Options": "nosniff",
    },
  })
}

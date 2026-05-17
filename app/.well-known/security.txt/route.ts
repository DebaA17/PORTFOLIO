import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const securityTxt = `Contact: mailto:security@debasisbiswas.in
Contact: https://github.com/DebaA17/PORTFOLIO/security/advisories/new
Expires: 2026-12-31T23:59:59.000Z
Preferred-Languages: en
Canonical: https://debasisbiswas.in/.well-known/security.txt
Policy: https://debasisbiswas.in/security/reporting
Encryption: https://debasisbiswas.in/pgp.asc
`;

  return new NextResponse(securityTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}

import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const securityTxt = `Contact: mailto:forensic@debasisbiswas.me
Expires: 2026-12-31T23:59:59.000Z
Acknowledgements: https://debasisbiswas.me/security-policy.html
Policy: https://debasisbiswas.me/privacy-policy
Preferred-Languages: en
`;

  return new NextResponse(securityTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

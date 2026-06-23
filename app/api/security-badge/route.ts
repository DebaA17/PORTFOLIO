import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const targetUrl = "https://debasisbiswas.in"
    const response = await fetch(targetUrl, {
      method: "HEAD",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      next: { revalidate: 300 },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch headers: ${response.status}`)
    }

    const headers = response.headers
    const csp = headers.get("content-security-policy") || ""
    const hsts = headers.get("strict-transport-security") || ""
    const xfo = headers.get("x-frame-options") || ""
    const xcto = headers.get("x-content-type-options") || ""
    const rp = headers.get("referrer-policy") || ""
    const pp = headers.get("permissions-policy") || ""

    let grade = "A+"
    let color = "brightgreen"

    const hasUnsafe = csp.includes("'unsafe-inline'") || csp.includes("'unsafe-eval'")

    if (!csp) {
      grade = "F"
      color = "red"
    } else if (hasUnsafe) {
      grade = "A"
      color = "green"
    } else if (!hsts || !xfo || !xcto || !rp || !pp) {
      grade = "B"
      color = "yellow"
    }

    return NextResponse.json({
      schemaVersion: 1,
      label: "Security Headers",
      message: grade,
      color: color,
    })
  } catch (error) {
    console.error("Badge generation error:", error)
    return NextResponse.json({
      schemaVersion: 1,
      label: "Security Headers",
      message: "Error",
      color: "grey",
    })
  }
}

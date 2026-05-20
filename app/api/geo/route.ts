import { NextRequest, NextResponse } from "next/server"

function extractIPv4(value: string | null): string | null {
  if (!value) return null

  const candidates = value.split(",").map((part) => part.trim())
  const ipv4Regex = /^(?:\d{1,3}\.){3}\d{1,3}$/

  for (const candidate of candidates) {
    if (ipv4Regex.test(candidate)) return candidate
  }

  return null
}

function getClientIPv4(request: NextRequest): string | null {
  const cfConnectingIP = extractIPv4(request.headers.get("cf-connecting-ip"))
  const forwarded = extractIPv4(request.headers.get("x-forwarded-for"))
  const realIP = extractIPv4(request.headers.get("x-real-ip"))

  if (cfConnectingIP) return cfConnectingIP
  if (forwarded) return forwarded
  if (realIP) return realIP

  return null
}

function isPrivateIP(ip: string): boolean {
  return (
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    ip.startsWith("127.") ||
    ip.startsWith("::1") ||
    ip.startsWith("fc") ||
    ip.startsWith("fd") ||
    ip.startsWith("fe80") ||
    (ip.startsWith("172.") && Number(ip.split(".")[1]) >= 16 && Number(ip.split(".")[1]) <= 31)
  )
}

export async function GET(request: NextRequest) {
  const ip = getClientIPv4(request)
  const lookupIP = ip && !isPrivateIP(ip) ? ip : undefined
  const url = lookupIP ? `https://ipwho.is/${lookupIP}` : null

  try {
    if (!url) {
      throw new Error("No public IPv4 available")
    }

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
      cache: "no-store",
    })

    const data = await response.json()

    if (!data || data.success === false) {
      throw new Error("Geo lookup failed")
    }

    return NextResponse.json(
      {
        ip: lookupIP || data.ip || "Unavailable",
        city: data.city || "Unknown",
        region: data.region || "Unknown",
        country: data.country || "Unknown",
        org: data.org || data.isp || "Unknown ISP",
        isp: data.isp || data.org || "Unknown ISP",
      },
      {
        status: 200,
        headers: { "Cache-Control": "no-store" },
      }
    )
  } catch (error) {
    return NextResponse.json(
      {
        ip: lookupIP || "Unavailable",
        city: "N/A",
        region: "N/A",
        country: "N/A",
        org: "N/A",
        isp: "N/A",
      },
      {
        status: 200,
        headers: { "Cache-Control": "no-store" },
      }
    )
  }
}

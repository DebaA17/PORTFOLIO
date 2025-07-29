import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Log Certificate Transparency report
    console.log("CT Report:", {
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip"),
      report: body,
    })

    // In production, send to CT monitoring service
    // await sendToCTService(body)

    return NextResponse.json({ status: "received" }, { status: 200 })
  } catch (error) {
    console.error("CT report error:", error)
    return NextResponse.json({ error: "Invalid report" }, { status: 400 })
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}

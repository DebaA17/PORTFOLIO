import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Log security report (in production, send to monitoring service)
    console.log("Security Report:", {
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip"),
      report: body,
    })

    // In production, you might want to send this to a security monitoring service
    // await sendToSecurityService(body)

    return NextResponse.json({ status: "received" }, { status: 200 })
  } catch (error) {
    console.error("Security report error:", error)
    return NextResponse.json({ error: "Invalid report" }, { status: 400 })
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}

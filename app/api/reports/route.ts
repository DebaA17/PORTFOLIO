import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    // Parse the security report
    const report = await request.json()

    // Log security reports (in production, send to monitoring service)
    console.log("Security Report Received:", {
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip"),
      report: report,
    })

    // In production, you might want to:
    // 1. Send to security monitoring service
    // 2. Alert security team
    // 3. Store in secure database
    // 4. Analyze for patterns

    return NextResponse.json(
      {
        status: "received",
        message: "Security report logged successfully",
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "X-Content-Type-Options": "nosniff",
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      },
    )
  } catch (error) {
    console.error("Error processing security report:", error)

    return NextResponse.json(
      {
        error: "Failed to process security report",
      },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "X-Content-Type-Options": "nosniff",
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      },
    )
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "https://debasisbiswas.me",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  })
}

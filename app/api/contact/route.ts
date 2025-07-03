import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Format the email content
    const emailContent = `
      New message from your portfolio contact form:
      
      Name: ${name}
      Email: ${email}
      Subject: ${subject || "N/A"}
      
      Message:
      ${message}
    `

    // Use Vercel's built-in fetch to make a request to an external email service
    // This example uses a webhook URL (like Email.js, Zapier, Make.com, etc.)
    const webhookUrl = process.env.EMAIL_WEBHOOK_URL

    if (!webhookUrl) {
      console.error("EMAIL_WEBHOOK_URL environment variable is not set")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    const emailResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "admin@debasisbiswas.me",
        from_name: name,
        from_email: email,
        subject: `Portfolio Contact: ${subject || "New message from your portfolio"}`,
        message: emailContent,
      }),
    })

    if (!emailResponse.ok) {
      throw new Error(`Email service responded with ${emailResponse.status}`)
    }

    // Return success response
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}

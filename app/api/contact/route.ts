import { type NextRequest, NextResponse } from "next/server"
import sanitizeHtml from "sanitize-html"

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Clean up old entries every hour
setInterval(
  () => {
    const now = Date.now()
    for (const [key, value] of rateLimitStore.entries()) {
      if (now > value.resetTime) {
        rateLimitStore.delete(key)
      }
    }
  },
  60 * 60 * 1000,
)

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")
  const realIP = request.headers.get("x-real-ip")

  if (forwarded) {
    return forwarded.split(",")[0].trim()
  }

  if (realIP) {
    return realIP
  }

  return "unknown"
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 60 * 60 * 1000 // 1 hour
  const maxRequests = 5

  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return false
  }

  if (record.count >= maxRequests) {
    return true
  }

  record.count++
  return false
}

function sanitizeInput(input: string): string {
  // Remove all tags, allow only text
  return sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} }).trim()
}

function detectSpam(data: any): boolean {
  const spamPatterns = [
    /viagra|cialis|pharmacy/i,
    /casino|gambling|poker/i,
    /loan|mortgage|credit/i,
    /seo|marketing|promotion/i,
    /http[s]?:\/\/[^\s]+/g, // Multiple URLs
  ]

  const text = `${data.name} ${data.email} ${data.subject} ${data.message}`.toLowerCase()

  return spamPatterns.some((pattern) => pattern.test(text))
}

async function sendToTelegram(data: any): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    console.log("Telegram credentials not configured - skipping Telegram notification")
    return true // Return true to not fail the request
  }

  const message = `
🔔 *New Contact Form Submission*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📝 *Subject:* ${data.subject || "No subject"}

💬 *Message:*
${data.message}

🌐 *Website:* debasisbiswas.me
⏰ *Time:* ${new Date().toLocaleString()}
  `.trim()

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("Telegram API error:", response.status, errorData)
      return false
    }

    console.log("Message sent to Telegram successfully")
    return true
  } catch (error) {
    console.error("Telegram send error:", error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request)

    // Check rate limiting
    if (isRateLimited(clientIP)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
    }

    // Parse request body
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      subject: body.subject ? sanitizeInput(body.subject) : "",
      message: sanitizeInput(body.message),
    }

    // Check for spam
    if (detectSpam(sanitizedData)) {
      return NextResponse.json({ error: "Message flagged as spam" }, { status: 400 })
    }

    // Log the contact form submission
    console.log("Contact form submission:", {
      timestamp: new Date().toISOString(),
      name: sanitizedData.name,
      email: sanitizedData.email,
      subject: sanitizedData.subject,
      ip: clientIP,
    })

    // Try to send to Telegram (don't fail if this doesn't work)
    try {
      await sendToTelegram(sanitizedData)
    } catch (telegramError) {
      console.error("Telegram notification failed:", telegramError)
      // Continue with the request even if Telegram fails
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}

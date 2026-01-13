import { type NextRequest, NextResponse } from "next/server"
import sanitizeHtml from "sanitize-html";

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
  return sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} }).trim();
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

type TelegramSendResult =
  | { enabled: false; sent: false; reason: "missing_credentials" }
  | { enabled: true; sent: true }
  | { enabled: true; sent: false; status?: number; error?: string }

async function sendToTelegram(data: any): Promise<TelegramSendResult> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    console.log("Telegram credentials not configured - skipping Telegram notification")
    return { enabled: false, sent: false, reason: "missing_credentials" }
  }

  // Important: Don't use Markdown parse_mode here.
  // User input often contains characters that break Markdown and cause Telegram to reject the message.
  const message = [
    "New Contact Form Submission",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Subject: ${data.subject || "No subject"}`,
    "",
    "Message:",
    `${data.message}`,
    "",
    "Website: debasisbiswas.me",
    `Time: ${new Date().toLocaleString()}`,
  ].join("\n")

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        disable_web_page_preview: true,
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("Telegram API error:", response.status, errorData)
      return { enabled: true, sent: false, status: response.status, error: errorData }
    }

    console.log("Message sent to Telegram successfully")
    return { enabled: true, sent: true }
  } catch (error) {
    console.error("Telegram send error:", error)
    return {
      enabled: true,
      sent: false,
      error: error instanceof Error ? error.message : String(error),
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    if (isRateLimited(clientIP)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }
    const body = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }
    const sanitizedData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      subject: body.subject ? sanitizeInput(body.subject) : "",
      message: sanitizeInput(body.message),
    };
    if (detectSpam(sanitizedData)) {
      return NextResponse.json({ error: "Message flagged as spam" }, { status: 400 });
    }
    console.log("Contact form submission:", {
      timestamp: new Date().toISOString(),
      name: sanitizedData.name,
      email: sanitizedData.email,
      subject: sanitizedData.subject,
      ip: clientIP,
    });

    const telegramResult = await sendToTelegram(sanitizedData);
    // Safe diagnostic: does NOT include secrets.
    console.log("Telegram notification result:", telegramResult);

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
        telegram: telegramResult,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}

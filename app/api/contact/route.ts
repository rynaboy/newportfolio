import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    // Basic server-side validation (phone is optional)
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields (Name, Email, Subject, Message) are required.' },
        { status: 400 }
      )
    }

    const token = process.env.TELEGRAM_BOT_TOKEN 
    const chatId = process.env.TELEGRAM_CHAT_ID

    // Check if configuration is set up
    if (!token || !chatId) {
      console.error('Telegram bot credentials are not configured.')
      return NextResponse.json(
        { error: 'Server error: Telegram credentials are not properly configured.' },
        { status: 500 }
      )
    }

    // Get the submission source URL
    const origin = request.headers.get('referer') || request.headers.get('origin') || 'Unknown Origin'

    // Format the telegram message with HTML
    let text = `<b>📬 New Portfolio Message</b>\n\n` +
      `<b>🌐 Source URL:</b> ${escapeHtml(origin)}\n` +
      `<b>👤 Name:</b> ${escapeHtml(name)}\n` +
      `<b>📧 Email:</b> ${escapeHtml(email)}\n`

    if (phone) {
      text += `<b>📞 Phone:</b> ${escapeHtml(phone)}\n`
    }

    text += `<b>📝 Subject:</b> ${escapeHtml(subject)}\n\n` +
      `<b>💬 Message:</b>\n${escapeHtml(message)}`

    // Send post request to Telegram Bot API
    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML',
      }),
    })

    const responseData = await response.json()

    if (!response.ok || !responseData.ok) {
      console.error('Telegram API Response Error:', responseData)
      return NextResponse.json(
        { error: responseData.description || 'Failed to deliver the message to Telegram.' },
        { status: response.status || 500 }
      )
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully.' })
  } catch (error: any) {
    console.error('Contact Form Handling Error:', error)
    return NextResponse.json(
      { error: error.message || 'An internal server error occurred.' },
      { status: 500 }
    )
  }
}

// Helper to escape HTML characters in user input to prevent issues with Telegram parse_mode: HTML
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

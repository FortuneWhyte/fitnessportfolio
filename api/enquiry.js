/**
 * Vercel serverless function: POST /api/enquiry
 *
 * Emails a website enquiry to the coach via Resend (https://resend.com).
 *
 * Environment variables (Vercel → Project → Settings → Environment Variables):
 *   RESEND_API_KEY  required. Without it this returns 503 and the site
 *                   falls back to opening the visitor's email app.
 *   ENQUIRY_TO      inbox that receives enquiries (default below)
 *   ENQUIRY_FROM    sender; must be on a domain verified in Resend.
 *                   Default onboarding@resend.dev only delivers to the
 *                   email address that owns the Resend account.
 */

const DEFAULT_TO = 'greatfortunewhyte@yahoo.com'
const DEFAULT_FROM = 'Website enquiry <onboarding@resend.dev>'
const LIMITS = { name: 100, email: 200, phone: 40, interest: 100, message: 2000 }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const clean = (value, max) =>
  typeof value === 'string' ? value.replace(/[\r\n]+/g, ' ').trim().slice(0, max) : ''

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = typeof req.body === 'object' && req.body !== null ? req.body : {}

  // Honeypot: real visitors never see or fill this field
  if (body.company) return res.status(200).json({ ok: true })

  const name = clean(body.name, LIMITS.name)
  const email = clean(body.email, LIMITS.email)
  const phone = clean(body.phone, LIMITS.phone)
  const interest = clean(body.interest, LIMITS.interest)
  const message =
    typeof body.message === 'string' ? body.message.trim().slice(0, LIMITS.message) : ''

  if (!name) return res.status(400).json({ error: 'Please add your name.' })
  if (!email && !phone) {
    return res.status(400).json({ error: 'Please add an email or phone number.' })
  }
  if (email && !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'That email address doesn’t look right.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return res.status(503).json({ error: 'Email sending is not configured.' })

  const text = [
    `Name: ${name}`,
    `Email: ${email || '—'}`,
    `Phone: ${phone || '—'}`,
    `Interested in: ${interest || '—'}`,
    '',
    message || '(no message)',
  ].join('\n')

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.ENQUIRY_FROM || DEFAULT_FROM,
        to: [process.env.ENQUIRY_TO || DEFAULT_TO],
        reply_to: email || undefined,
        subject: `New enquiry from ${name}${interest ? ` · ${interest}` : ''}`,
        text,
      }),
    })

    if (!response.ok) {
      console.error('Resend error', response.status, await response.text())
      return res.status(502).json({ error: 'Could not send right now.' })
    }
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Resend request failed', err)
    return res.status(502).json({ error: 'Could not send right now.' })
  }
}

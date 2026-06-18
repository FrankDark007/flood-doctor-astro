interface Env {
  RESEND_API_KEY: string
  RESEND_FROM: string
  NOTIFICATION_EMAIL: string
}

interface ContactPayload {
  'first-name': string
  'last-name': string
  email: string
  'phone-number'?: string
  message: string
  consent?: boolean
  consentText?: string
  consentTimestamp?: string
  city?: string
}

interface RequestPayload {
  'first-name': string
  'last-name': string
  email: string
  phone: string
  address: string
  'service-type': string
  urgency: string
  message?: string
  consent?: boolean
  consentText?: string
  consentTimestamp?: string
  city?: string
}

const SERVICE_LABELS: Record<string, string> = {
  'water-damage': 'Water Damage Restoration',
  mold: 'Mold Remediation',
  flood: 'Flood Cleanup',
  storm: 'Storm Damage',
  sewage: 'Sewage Cleanup',
  'fire-smoke': 'Fire & Smoke Damage',
  commercial: 'Commercial Restoration',
  other: 'Other',
}

function titleCase(s: string): string {
  return s
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function getCorsHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get('Origin') || ''
  const allowed =
    origin.endsWith('.flood.doctor') ||
    origin === 'https://flood.doctor' ||
    origin.includes('localhost') ||
    origin.includes('127.0.0.1')

  return {
    'Access-Control-Allow-Origin': allowed ? origin : 'https://flood.doctor',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  }
}

function extractCity(request: Request, body: { city?: unknown }): string {
  // Prefer city from body (set by form)
  if (body.city && typeof body.city === 'string') return body.city

  // Fallback: extract from Origin header
  const origin = request.headers.get('Origin') || ''
  const match = origin.match(/https?:\/\/([^.]+)\.flood\.doctor/)
  if (match) return match[1]

  return 'unknown'
}

function contactEmailHtml(data: ContactPayload, city: string): string {
  const cityDisplay = titleCase(city)
  const consentText = data.consentText || 'User agreed to be contacted by Flood Doctor by phone, text, or email.'
  const consentTimestamp = data.consentTimestamp || 'Not provided'
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: #1e293b; border-radius: 12px; padding: 24px; color: #e2e8f0;">
    <h2 style="color: #818cf8; margin-top: 0;">New Contact Message</h2>
    <p style="color: #94a3b8; font-size: 14px;">From ${cityDisplay} website</p>
    <hr style="border: none; border-top: 1px solid #334155; margin: 16px 0;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; color: #94a3b8; width: 120px;">Name</td>
        <td style="padding: 8px 0; color: #f1f5f9;">${data['first-name']} ${data['last-name']}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #94a3b8;">Email</td>
        <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #818cf8;">${data.email}</a></td>
      </tr>
      ${data['phone-number'] ? `<tr>
        <td style="padding: 8px 0; color: #94a3b8;">Phone</td>
        <td style="padding: 8px 0;"><a href="tel:${data['phone-number']}" style="color: #818cf8;">${data['phone-number']}</a></td>
      </tr>` : ''}
    </table>
    <hr style="border: none; border-top: 1px solid #334155; margin: 16px 0;">
    <h3 style="color: #e2e8f0; margin-bottom: 8px;">Message</h3>
    <p style="color: #cbd5e1; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
    <hr style="border: none; border-top: 1px solid #334155; margin: 16px 0;">
    <h3 style="color: #e2e8f0; margin-bottom: 8px;">Consent</h3>
    <p style="color: #cbd5e1; line-height: 1.6; margin: 0;">Consent given: ${data.consent ? 'Yes' : 'No'}</p>
    <p style="color: #cbd5e1; line-height: 1.6; margin: 4px 0 0;">${consentText}</p>
    <p style="color: #94a3b8; line-height: 1.6; margin: 4px 0 0;">Timestamp: ${consentTimestamp}</p>
  </div>
</body>
</html>`
}

function requestEmailHtml(data: RequestPayload, city: string): string {
  const cityDisplay = titleCase(city)
  const serviceLabel = SERVICE_LABELS[data['service-type']] || data['service-type']
  const isEmergency = data.urgency === 'emergency'
  const consentText = data.consentText || 'User agreed to be contacted by Flood Doctor by phone, text, or email.'
  const consentTimestamp = data.consentTimestamp || 'Not provided'

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: #1e293b; border-radius: 12px; padding: 24px; color: #e2e8f0;">
    ${isEmergency ? '<div style="background: #dc2626; color: white; padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-weight: bold; font-size: 16px;">🚨 EMERGENCY REQUEST — Immediate Response Needed</div>' : ''}
    <h2 style="color: #818cf8; margin-top: 0;">New Service Request</h2>
    <p style="color: #94a3b8; font-size: 14px;">From ${cityDisplay} website</p>
    <hr style="border: none; border-top: 1px solid #334155; margin: 16px 0;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; color: #94a3b8; width: 120px;">Name</td>
        <td style="padding: 8px 0; color: #f1f5f9;">${data['first-name']} ${data['last-name']}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #94a3b8;">Email</td>
        <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #818cf8;">${data.email}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #94a3b8;">Phone</td>
        <td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #818cf8;">${data.phone}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #94a3b8;">Address</td>
        <td style="padding: 8px 0; color: #f1f5f9;">${data.address}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #94a3b8;">Service</td>
        <td style="padding: 8px 0; color: #f1f5f9;">${serviceLabel}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #94a3b8;">Urgency</td>
        <td style="padding: 8px 0; color: ${isEmergency ? '#ef4444' : data.urgency === 'urgent' ? '#f59e0b' : '#22c55e'}; font-weight: bold;">
          ${data.urgency === 'emergency' ? '🚨 Emergency (Now)' : data.urgency === 'urgent' ? '⚡ Urgent (24-48 hrs)' : '📋 Routine Estimate'}
        </td>
      </tr>
    </table>
    ${data.message ? `
    <hr style="border: none; border-top: 1px solid #334155; margin: 16px 0;">
    <h3 style="color: #e2e8f0; margin-bottom: 8px;">Damage Description</h3>
    <p style="color: #cbd5e1; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
    ` : ''}
    <hr style="border: none; border-top: 1px solid #334155; margin: 16px 0;">
    <h3 style="color: #e2e8f0; margin-bottom: 8px;">Consent</h3>
    <p style="color: #cbd5e1; line-height: 1.6; margin: 0;">Consent given: ${data.consent ? 'Yes' : 'No'}</p>
    <p style="color: #cbd5e1; line-height: 1.6; margin: 4px 0 0;">${consentText}</p>
    <p style="color: #94a3b8; line-height: 1.6; margin: 4px 0 0;">Timestamp: ${consentTimestamp}</p>
  </div>
</body>
</html>`
}

async function sendEmail(
  env: Env,
  to: string,
  subject: string,
  html: string,
  replyTo?: string,
): Promise<Response> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.RESEND_FROM,
      to: [to],
      subject,
      html,
      reply_to: replyTo,
    }),
  })
  return res
}

function jsonResponse(data: unknown, status = 200, corsHeaders: Record<string, string>): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders },
  })
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  const cors = getCorsHeaders(request)

  let body: ContactPayload
  try {
    body = await request.json()
  } catch {
    return jsonResponse({ success: false, error: 'Invalid JSON body' }, 400, cors)
  }

  // Validate required fields
  if (!body['first-name'] || !body['last-name'] || !body.email || !body.message) {
    return jsonResponse({ success: false, error: 'Missing required fields' }, 400, cors)
  }

  if (body.consent !== true) {
    return jsonResponse({ success: false, error: 'Consent is required' }, 400, cors)
  }

  // Basic email format check
  if (!body.email.includes('@') || !body.email.includes('.')) {
    return jsonResponse({ success: false, error: 'Invalid email address' }, 400, cors)
  }

  const city = extractCity(request, body)
  const cityDisplay = titleCase(city)
  const subject = `[Flood Doctor ${cityDisplay}] New Contact Message from ${body['first-name']} ${body['last-name']}`

  const html = contactEmailHtml(body, city)
  const emailRes = await sendEmail(env, env.NOTIFICATION_EMAIL, subject, html, body.email)

  if (!emailRes.ok) {
    const err = await emailRes.text()
    console.error('Resend error:', err)
    return jsonResponse({ success: false, error: 'Failed to send notification' }, 500, cors)
  }

  return jsonResponse({ success: true }, 200, cors)
}

async function handleRequest(request: Request, env: Env): Promise<Response> {
  const cors = getCorsHeaders(request)

  let body: RequestPayload
  try {
    body = await request.json()
  } catch {
    return jsonResponse({ success: false, error: 'Invalid JSON body' }, 400, cors)
  }

  // Validate required fields
  if (!body['first-name'] || !body['last-name'] || !body.email || !body.phone || !body.address || !body['service-type'] || !body.urgency) {
    return jsonResponse({ success: false, error: 'Missing required fields' }, 400, cors)
  }

  if (body.consent !== true) {
    return jsonResponse({ success: false, error: 'Consent is required' }, 400, cors)
  }

  if (!body.email.includes('@') || !body.email.includes('.')) {
    return jsonResponse({ success: false, error: 'Invalid email address' }, 400, cors)
  }

  const city = extractCity(request, body)
  const cityDisplay = titleCase(city)
  const serviceLabel = SERVICE_LABELS[body['service-type']] || body['service-type']
  const isEmergency = body.urgency === 'emergency'
  const prefix = isEmergency ? '🚨 ' : ''
  const subject = `${prefix}[Flood Doctor ${cityDisplay}] ${titleCase(body.urgency)} Service Request — ${serviceLabel}`

  const html = requestEmailHtml(body, city)
  const emailRes = await sendEmail(env, env.NOTIFICATION_EMAIL, subject, html, body.email)

  if (!emailRes.ok) {
    const err = await emailRes.text()
    console.error('Resend error:', err)
    return jsonResponse({ success: false, error: 'Failed to send notification' }, 500, cors)
  }

  return jsonResponse({ success: true }, 200, cors)
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    const cors = getCorsHeaders(request)

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors })
    }

    // Only POST
    if (request.method !== 'POST') {
      return jsonResponse({ success: false, error: 'Method not allowed' }, 405, cors)
    }

    // Route
    switch (url.pathname) {
      case '/api/contact':
        return handleContact(request, env)
      case '/api/request':
        return handleRequest(request, env)
      default:
        return jsonResponse({ success: false, error: 'Not found' }, 404, cors)
    }
  },
}

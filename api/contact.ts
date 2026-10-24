/**
 * Lead intake for the site's Contact form.
 *
 * Runs as a Vercel Function and relays each enquiry to the team inbox through
 * Resend. The mail is sent from the site's own domain (so it passes SPF/DKIM
 * and lands in the inbox, not spam) with Reply-To set to the visitor, so
 * answering a lead is a single click.
 *
 * Configuration (Vercel → Project → Settings → Environment Variables, or
 * .env.local for `npm run dev`):
 *   RESEND_API_KEY      required
 *   CONTACT_TO_EMAIL    where leads go; comma-separate for several inboxes
 *   CONTACT_FROM_EMAIL  must be on a domain verified in Resend
 */

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const DEFAULT_TO = 'adworksbymaheer@gmail.com';
const DEFAULT_FROM = 'Adworks by Maheer <contact@adworksbymaheer.com>';

// Generous for a hand-typed enquiry, small enough that nobody can use the
// endpoint to push large payloads through our mail quota.
const MAX_BODY_BYTES = 16_000;

const SOURCES = {
  contact: 'Proposal Request',
} as const;

type Source = keyof typeof SOURCES;

interface Lead {
  source: Source;
  name: string;
  phone: string;
  email: string;
  company: string;
  services: string[];
  message: string;
}

const json = (status: number, body: Record<string, unknown>) =>
  Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });

const str = (v: unknown, max: number) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Returns the cleaned lead, or a message saying what is wrong with it. */
function parseLead(raw: Record<string, unknown>): Lead | string {
  const source = raw.source as Source;
  if (!(source in SOURCES)) return 'Unknown form.';

  const lead: Lead = {
    source,
    name: str(raw.name, 100),
    phone: str(raw.phone, 30),
    email: str(raw.email, 254),
    company: str(raw.company, 120),
    services: Array.isArray(raw.services)
      ? raw.services.slice(0, 10).map(s => str(s, 100)).filter(Boolean)
      : [],
    message: str(raw.message, 5000),
  };

  if (lead.name.length < 2) return 'Please enter your name.';
  if ((lead.phone.match(/\d/g) ?? []).length < 7) return 'Please enter a valid phone number.';
  if (!EMAIL_RE.test(lead.email)) return 'Please enter a valid email address.';
  if (lead.message.length < 5) return 'Please add a few words about your project.';
  return lead;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

function renderEmail(lead: Lead) {
  const rows: Array<[string, string]> = [
    ['Name', lead.name],
    ['Phone / WhatsApp', lead.phone],
    ['Email', lead.email],
  ];
  if (lead.company) rows.push(['Company', lead.company]);
  if (lead.services.length) rows.push(['Services', lead.services.join(', ')]);
  if (lead.message) rows.push(['Message', lead.message]);

  const waNumber = lead.phone.replace(/\D/g, '');
  const subject = `New ${SOURCES[lead.source]}: ${lead.name}${lead.company ? ` (${lead.company})` : ''}`;

  const text = [
    `${SOURCES[lead.source]} from adworksbymaheer.com`,
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    'Reply to this email to answer the client directly.',
  ].join('\n');

  const html = `<!doctype html>
<html><body style="margin:0;background:#f4f4f5;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#18181b">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4e4e7">
        <tr><td style="background:#0b0a0d;padding:20px 28px;border-bottom:3px solid #e60000">
          <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#f87171;font-weight:700">New lead · adworksbymaheer.com</div>
          <div style="font-size:20px;font-weight:800;color:#ffffff;margin-top:6px">${escapeHtml(SOURCES[lead.source])}</div>
        </td></tr>
        <tr><td style="padding:12px 28px 4px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${rows
              .map(
                ([k, v]) => `<tr>
              <td style="padding:12px 0;border-bottom:1px solid #f4f4f5;width:150px;vertical-align:top;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:.5px">${escapeHtml(k)}</td>
              <td style="padding:12px 0;border-bottom:1px solid #f4f4f5;font-size:15px;line-height:1.5;white-space:pre-wrap">${escapeHtml(v)}</td>
            </tr>`
              )
              .join('')}
          </table>
        </td></tr>
        <tr><td style="padding:20px 28px 28px">
          <a href="mailto:${escapeHtml(lead.email)}" style="display:inline-block;background:#e60000;color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:11px 18px;border-radius:8px;margin-right:8px">Reply by email</a>
          ${waNumber ? `<a href="https://wa.me/${waNumber}" style="display:inline-block;background:#16a34a;color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:11px 18px;border-radius:8px">Open WhatsApp</a>` : ''}
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  return { subject, text, html };
}

export async function POST(request: Request): Promise<Response> {
  // Only accept submissions from our own pages. Browsers always send Origin
  // on a cross-site POST, so this stops other sites from using the endpoint.
  const origin = request.headers.get('origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return json(403, { ok: false, error: 'Forbidden.' });
  }

  const body = await request.text();
  if (body.length > MAX_BODY_BYTES) return json(413, { ok: false, error: 'Message is too long.' });

  let raw: Record<string, unknown>;
  try {
    raw = JSON.parse(body);
  } catch {
    return json(400, { ok: false, error: 'Invalid request.' });
  }

  // Honeypot: a field real visitors never see. Bots that fill it get a
  // success response so they have no signal to adapt to.
  if (str(raw.website, 200)) return json(200, { ok: true });

  const lead = parseLead(raw);
  if (typeof lead === 'string') return json(422, { ok: false, error: lead });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set; lead not delivered:', lead);
    return json(503, { ok: false, error: 'Our form is temporarily unavailable.' });
  }

  const { subject, text, html } = renderEmail(lead);
  const to = (process.env.CONTACT_TO_EMAIL || DEFAULT_TO).split(',').map(s => s.trim()).filter(Boolean);

  const res = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
      to,
      reply_to: lead.email,
      subject,
      text,
      html,
      tags: [{ name: 'source', value: lead.source }],
    }),
  });

  if (!res.ok) {
    // Keep the lead in the function logs so it can be recovered by hand.
    console.error('[contact] Resend rejected the email', res.status, await res.text(), lead);
    return json(502, { ok: false, error: 'We could not send your message.' });
  }

  return json(200, { ok: true });
}

/**
 * Sends an enquiry to /api/contact, which emails it to the team.
 *
 * Resolves on delivery; otherwise throws an Error whose message is safe to
 * show the visitor.
 */
export interface LeadPayload {
  source: 'contact';
  name: string;
  phone: string;
  email: string;
  company?: string;
  services?: string[];
  message?: string;
  /** Honeypot - bound to a field real visitors never see. */
  website?: string;
}

export async function submitLead(payload: LeadPayload): Promise<void> {
  let res: Response;
  try {
    res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error('No connection. Please check your internet and try again.');
  }

  if (res.ok) return;

  const data = await res.json().catch(() => null);
  throw new Error(data?.error ?? 'Something went wrong. Please try again.');
}

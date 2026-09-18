/**
 * Single source of truth for how to reach Adworks.
 *
 * These details were previously copy-pasted across the navbar, contact section
 * and footer - in three different formats for the same phone number - so
 * changing the number meant editing three files and hoping none were missed.
 */

/** Digits only, country code first: the form wa.me and tel: links need. */
export const PHONE_E164 = '923177272777';

/** How the number is shown to a human. */
export const PHONE_DISPLAY = '+92 317 7272777';

export const PHONE_HREF = `tel:+${PHONE_E164}`;

export const EMAIL = 'adworksbymaheer@gmail.com';
export const EMAIL_HREF = `mailto:${EMAIL}`;

/** Public social profiles. */
export const INSTAGRAM_URL = 'https://www.instagram.com/adworksbymaheer/';
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61590609124976';
// The shared link carried ?_r= and ?_t= share-session tokens. They are not
// needed for the profile to resolve, so only the canonical handle is stored.
export const TIKTOK_URL = 'https://www.tiktok.com/@adworksbymaheer';

/** Opens WhatsApp with a message already drafted. */
export const waLink = (message: string) =>
  `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_URL = waLink(
  'Hi Adworks Team, I would like to discuss marketing services.'
);

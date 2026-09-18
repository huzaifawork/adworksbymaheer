/**
 * Fires the success confetti burst.
 *
 * canvas-confetti is ~7 kB gzipped and is only ever needed after someone
 * submits a form, so it is pulled in on demand rather than shipped in the
 * initial bundle. If the chunk fails to load the form still succeeds - the
 * celebration is decoration, never a dependency of the submit path.
 */
export async function celebrate(particleCount = 90): Promise<void> {
  try {
    const { default: confetti } = await import('canvas-confetti');
    confetti({ particleCount, spread: 60, origin: { y: 0.65 } });
  } catch {
    /* no confetti, no problem */
  }
}

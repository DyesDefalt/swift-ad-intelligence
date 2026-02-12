export type LicenseResult = { valid: boolean; reason?: string; tier?: string };

/**
 * Stub: accept any non-empty key and store. Replace with Supabase/backend call when ready.
 */
export async function validateLicenseKey(key: string): Promise<LicenseResult> {
  const trimmed = key?.trim();
  if (!trimmed || trimmed.length < 4) {
    return { valid: false, reason: 'Please enter a valid license key.' };
  }
  // Stub: accept any key and treat as valid
  return { valid: true, tier: 'byok' };
}

import { getLoginUrl, getRegisterUrl } from '@/lib/constants';
import { setLicense } from '@/lib/storage';
import type { UserTier } from '@/lib/storage';

function openLogin(returnUrl: string) {
  window.open(getLoginUrl(returnUrl), '_blank', 'noopener,noreferrer');
}

function openRegister(returnUrl: string) {
  window.open(getRegisterUrl(returnUrl), '_blank', 'noopener,noreferrer');
}

export function AuthGate({ onAuthenticated }: { onAuthenticated: () => void }) {
  const returnUrl =
    typeof browser !== 'undefined'
      ? browser.runtime.getURL('sidepanel.html')
      : `${window.location.origin}${window.location.pathname}`;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--gapah-bg)] p-6">
      <div className="gapah-card w-full max-w-sm p-6 text-center">
        <h1 className="mb-2 text-lg font-semibold text-[var(--gapah-text)]">Gapah</h1>
        <p className="mb-4 text-sm text-[var(--gapah-text-secondary)]">
          Sign in to use Ad Copy and Data Lens. If you don’t have an account, register on the web app first.
        </p>
        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={() => openLogin(returnUrl)}
            className="gapah-btn-primary w-full py-2.5 text-sm"
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => openRegister(returnUrl)}
            className="gapah-btn-secondary w-full py-2.5 text-sm"
          >
            Register
          </button>
        </div>
        <p className="mt-4 text-xs text-[var(--gapah-text-secondary)]">
          After logging in on the web app, return here — the extension will work automatically.
        </p>
      </div>
    </div>
  );
}

/** Parse hash params from redirect: #access_token=...&tier=byok|managed_pro */
export function parseAuthHash(hash: string): { accessToken: string; tier: UserTier } | null {
  if (!hash || !hash.startsWith('#')) return null;
  const params = new URLSearchParams(hash.slice(1));
  const accessToken = params.get('access_token')?.trim();
  const tier = (params.get('tier') ?? 'byok') as UserTier;
  if (!accessToken) return null;
  if (tier !== 'managed_pro' && tier !== 'byok') return { accessToken, tier: 'byok' };
  return { accessToken, tier };
}

/** Apply auth from hash and persist; call after redirect from web app */
export async function applyAuthFromHash(): Promise<boolean> {
  const hash = window.location.hash;
  const parsed = parseAuthHash(hash);
  if (!parsed) return false;
  await setLicense({
    key: parsed.accessToken,
    tier: parsed.tier,
  });
  window.history.replaceState(null, '', window.location.pathname + window.location.search);
  return true;
}

export function getUserTierLabel(tier?: string): string {
  if (tier === 'managed_pro') return 'Managed Pro';
  return 'BYOK / BYOAI lifetime';
}

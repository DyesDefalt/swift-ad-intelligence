import { useState } from 'react';
import { validateLicenseKey } from '@/lib/auth/license';
import { setLicense } from '@/lib/storage';

export function LicenseGate({ onValid }: { onValid: () => void }) {
  const [key, setKey] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const result = await validateLicenseKey(key);
      if (result.valid) {
        await setLicense({ key: key.trim(), tier: result.tier });
        onValid();
      } else {
        setError(result.reason ?? 'Invalid license key');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--gapah-bg)] p-6">
      <div className="gapah-card w-full max-w-sm p-6">
        <h1 className="mb-2 text-lg font-semibold text-[var(--gapah-text)]">Gapah</h1>
        <p className="mb-4 text-sm text-[var(--gapah-text-secondary)]">Enter your license key to continue.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="License key"
            className="gapah-input"
            autoComplete="off"
          />
          {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="gapah-btn-primary mt-4 w-full py-2.5 text-sm disabled:opacity-50"
          >
            {loading ? 'Checking...' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  );
}

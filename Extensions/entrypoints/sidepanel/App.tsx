import { useState, useEffect } from 'react';
import { AuthGate, applyAuthFromHash, getUserTierLabel } from '@/components/AuthGate';
import { SettingsPanel } from '@/components/SettingsPanel';
import { AdCopyPanel } from '@/components/AdCopyPanel';
import { DataLensPanel } from '@/components/DataLensPanel';
import { Settings } from 'lucide-react';
import { getLicense, hasStorage } from '@/lib/storage';

type Tab = 'adcopy' | 'datalens';

export default function App() {
  const [licensed, setLicensed] = useState<boolean | null>(null);
  const [userTier, setUserTier] = useState<string | undefined>();
  const [tab, setTab] = useState<Tab>('adcopy');
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    if (!hasStorage()) {
      setLicensed(true);
      setUserTier('byok');
      return;
    }
    (async () => {
      const applied = await applyAuthFromHash();
      if (applied) {
        setLicensed(true);
        const l = await getLicense();
        setUserTier(l?.tier);
        return;
      }
      const l = await getLicense();
      setLicensed(Boolean(l?.key));
      setUserTier(l?.tier);
    })();
  }, []);

  const onAuthenticated = () => {
    setLicensed(true);
    getLicense().then((l) => setUserTier(l?.tier));
  };

  if (licensed === null) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4 bg-[var(--gapah-bg)]">
        <div className="text-[var(--gapah-text-secondary)]">Loading...</div>
      </div>
    );
  }

  if (!licensed) {
    return <AuthGate onAuthenticated={onAuthenticated} />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-[var(--gapah-bg)] text-[var(--gapah-text)]">
      <header className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--gapah-card-border)] bg-[var(--gapah-surface)] px-3">
        <div className="flex flex-col items-start gap-0">
          <span className="font-semibold text-[var(--gapah-text)]">Gapah</span>
          {userTier && (
            <span className="text-[10px] text-[var(--gapah-text-secondary)]">{getUserTierLabel(userTier)}</span>
          )}
        </div>
        <button
          type="button"
          onClick={() => setSettingsOpen(true)}
          className="rounded-lg p-1.5 text-[var(--gapah-text-secondary)] hover:bg-black/5 hover:text-[var(--gapah-text)]"
          aria-label="Open Settings"
        >
          <Settings className="h-4 w-4" />
        </button>
      </header>

      <div className="flex border-b border-[var(--gapah-card-border)] bg-[var(--gapah-surface)]">
        <button
          type="button"
          onClick={() => setTab('adcopy')}
          aria-label="Ad Copy tab"
          aria-pressed={tab === 'adcopy'}
          className={`flex-1 px-4 py-3 text-sm font-medium ${tab === 'adcopy' ? 'border-b-2 border-[var(--gapah-accent)] text-[var(--gapah-accent)]' : 'text-[var(--gapah-text-secondary)] hover:text-[var(--gapah-text)]'}`}
        >
          Ad Copy
        </button>
        <button
          type="button"
          onClick={() => setTab('datalens')}
          aria-label="Data Lens tab"
          aria-pressed={tab === 'datalens'}
          className={`flex-1 px-4 py-3 text-sm font-medium ${tab === 'datalens' ? 'border-b-2 border-[var(--gapah-accent)] text-[var(--gapah-accent)]' : 'text-[var(--gapah-text-secondary)] hover:text-[var(--gapah-text)]'}`}
        >
          Data Lens
        </button>
      </div>

      <main className="flex-1 overflow-auto p-3 bg-[var(--gapah-bg)]">
        {tab === 'adcopy' && <AdCopyPanel />}
        {tab === 'datalens' && <DataLensPanel />}
      </main>

      {settingsOpen && <SettingsPanel onClose={() => setSettingsOpen(false)} />}
    </div>
  );
}

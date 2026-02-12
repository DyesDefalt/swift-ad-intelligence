import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import type { AIProvider } from '@/lib/storage';
import {
  getApiKey,
  setApiKey,
  getModel,
  setModel,
  getDefaultLanguage,
  setDefaultLanguage,
  getAIProvider,
  setAIProvider,
  getAIBaseUrl,
  setAIBaseUrl,
  getAIOauthToken,
  setAIOauthToken,
  getAICustomModel,
  setAICustomModel,
} from '@/lib/storage';
import {
  PROVIDER_LABELS,
  MODELS_BY_PROVIDER,
  DEFAULT_BASE_URLS,
  providerNeedsBaseUrl,
} from '@/lib/ai/provider-models';
import { getEffectiveAIConfig } from '@/lib/ai/chat';

const PROVIDERS: AIProvider[] = ['openai', 'claude', 'gemini', 'grok', 'custom'];

export function SettingsPanel({ onClose }: { onClose: () => void }) {
  const [provider, setProviderLocal] = useState<AIProvider>('openai');
  const [baseUrl, setBaseUrlLocal] = useState('');
  const [apiKey, setApiKeyLocal] = useState('');
  const [oauthToken, setOauthTokenLocal] = useState('');
  const [model, setModelLocal] = useState('');
  const [customModel, setCustomModelLocal] = useState('');
  const [lang, setLang] = useState<'id' | 'en'>('en');
  const [saved, setSaved] = useState(false);
  const [verifyStatus, setVerifyStatus] = useState<'idle' | 'verifying' | 'ok' | 'error'>('idle');
  const [verifyMessage, setVerifyMessage] = useState('');

  useEffect(() => {
    Promise.all([
      getAIProvider(),
      getAIBaseUrl(),
      getApiKey(),
      getAIOauthToken(),
      getModel(),
      getAICustomModel(),
      getDefaultLanguage(),
    ]).then(([p, b, k, o, m, c, l]) => {
      const prov: AIProvider = PROVIDERS.includes((p ?? 'openai') as AIProvider) ? (p as AIProvider) : 'openai';
      setProviderLocal(prov);
      setBaseUrlLocal(b ?? DEFAULT_BASE_URLS[prov] ?? '');
      setApiKeyLocal(k ?? '');
      setOauthTokenLocal(o ?? '');
      const models = MODELS_BY_PROVIDER[prov];
      const hasCustom = models.some((x) => x.id === 'custom');
      const match = models.find((x) => x.id === m);
      if (match) {
        setModelLocal(m);
        setCustomModelLocal(c ?? '');
      } else if (hasCustom && m) {
        setModelLocal('custom');
        setCustomModelLocal(m ?? c ?? '');
      } else {
        setModelLocal(models[0]?.id ?? 'gpt-5.2');
        setCustomModelLocal(c ?? '');
      }
      setLang(l ?? 'en');
    });
  }, []);

  useEffect(() => {
    if (provider) {
      const models = MODELS_BY_PROVIDER[provider];
      const currentInList = models.some((m) => m.id === model);
      if (!currentInList && models.length) setModelLocal(models[0].id);
      if (!baseUrl && DEFAULT_BASE_URLS[provider]) setBaseUrlLocal(DEFAULT_BASE_URLS[provider] ?? '');
    }
  }, [provider]);

  const handleSave = async () => {
    await setAIProvider(provider);
    await setAIBaseUrl(baseUrl);
    await setApiKey(apiKey);
    await setAIOauthToken(oauthToken);
    const effectiveModel = model === 'custom' && customModel.trim() ? customModel.trim() : model;
    await setModel(effectiveModel);
    await setAICustomModel(model === 'custom' ? customModel : '');
    await setDefaultLanguage(lang);
    setSaved(true);
    setVerifyStatus('idle');
    setTimeout(() => setSaved(false), 2000);
  };

  const handleVerify = async () => {
    const token = oauthToken?.trim() || apiKey?.trim();
    if (!token) {
      setVerifyStatus('error');
      setVerifyMessage('Enter an API key or OAuth token first.');
      return;
    }
    setVerifyStatus('verifying');
    setVerifyMessage('');
    try {
      const { chat } = await import('@/lib/ai/chat');
      await setAIProvider(provider);
      await setAIBaseUrl(baseUrl);
      await setApiKey(apiKey);
      await setAIOauthToken(oauthToken);
      const effectiveModel = model === 'custom' && customModel.trim() ? customModel.trim() : model;
      await setModel(effectiveModel);
      await setAICustomModel(model === 'custom' ? customModel : '');
      const config = await getEffectiveAIConfig();
      if (!config.apiKey) throw new Error('No API key or token');
      await chat([{ role: 'user', content: 'Reply with exactly: OK' }], { max_tokens: 10 });
      setVerifyStatus('ok');
      setVerifyMessage('Token works.');
      setTimeout(() => setVerifyStatus('idle'), 3000);
    } catch (err) {
      setVerifyStatus('error');
      setVerifyMessage(err instanceof Error ? err.message : 'Verification failed.');
    }
  };

  const showBaseUrl = providerNeedsBaseUrl(provider);
  const showCustomModel = model === 'custom';
  const models = MODELS_BY_PROVIDER[provider] ?? [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="gapah-card w-full max-w-md shadow-xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between border-b border-[var(--gapah-card-border)] px-4 py-3 shrink-0">
          <h2 className="font-semibold text-[var(--gapah-text)]">Settings</h2>
          <button type="button" onClick={onClose} className="rounded-lg p-1.5 text-[var(--gapah-text-secondary)] hover:bg-black/5 hover:text-[var(--gapah-text)]" aria-label="Close Settings">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-4 p-4 overflow-y-auto">
          <div>
            <label className="gapah-label">AI Provider (BYOK / BYOAI)</label>
            <select value={provider} onChange={(e) => setProviderLocal(e.target.value as AIProvider)} className="gapah-input">
              {PROVIDERS.map((p) => (
                <option key={p} value={p}>{PROVIDER_LABELS[p]}</option>
              ))}
            </select>
          </div>

          {showBaseUrl && (
            <div>
              <label className="gapah-label">Base URL</label>
              <input
                type="url"
                value={baseUrl}
                onChange={(e) => setBaseUrlLocal(e.target.value)}
                placeholder={provider === 'gemini' ? 'https://generativelanguage.googleapis.com/v1beta/openai' : provider === 'grok' ? 'https://api.x.ai/v1' : 'https://your-endpoint.com/v1'}
                className="gapah-input"
              />
            </div>
          )}

          <div>
            <label className="gapah-label">API Key</label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKeyLocal(e.target.value)}
              placeholder="sk-... or API key"
              className="gapah-input"
            />
          </div>

          <div>
            <label className="gapah-label">OAuth / Bearer token (optional)</label>
            <input
              type="password"
              value={oauthToken}
              onChange={(e) => setOauthTokenLocal(e.target.value)}
              placeholder="Leave empty to use API Key"
              className="gapah-input"
            />
            <div className="mt-1 flex items-center gap-2">
              <button
                type="button"
                onClick={handleVerify}
                disabled={verifyStatus === 'verifying'}
                className="gapah-btn-secondary px-3 py-1.5 text-xs disabled:opacity-50"
              >
                {verifyStatus === 'verifying' ? 'Verifying…' : 'Verify token'}
              </button>
              {verifyStatus === 'ok' && <span className="text-xs text-green-600">{verifyMessage}</span>}
              {verifyStatus === 'error' && <span className="text-xs text-red-600">{verifyMessage}</span>}
            </div>
            <p className="mt-1 text-xs text-[var(--gapah-text-secondary)]">Use OAuth/Bearer if your provider uses it; otherwise use API Key. Click Verify to test.</p>
          </div>

          <div>
            <label className="gapah-label">Model</label>
            <select value={model} onChange={(e) => setModelLocal(e.target.value)} className="gapah-input">
              {models.map((m) => (
                <option key={m.id} value={m.id}>{m.label}</option>
              ))}
            </select>
          </div>

          {showCustomModel && (
            <div>
              <label className="gapah-label">Custom model name</label>
              <input
                type="text"
                value={customModel}
                onChange={(e) => setCustomModelLocal(e.target.value)}
                placeholder="Model ID"
                className="gapah-input"
              />
            </div>
          )}

          <div>
            <label className="gapah-label">Default language</label>
            <select value={lang} onChange={(e) => setLang(e.target.value as 'id' | 'en')} className="gapah-input">
              <option value="en">English</option>
              <option value="id">Indonesia</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end gap-2 border-t border-[var(--gapah-card-border)] px-4 py-3 shrink-0">
          <button type="button" onClick={onClose} className="gapah-btn-secondary px-4 py-2 text-sm">
            Cancel
          </button>
          <button type="button" onClick={handleSave} className="gapah-btn-primary px-4 py-2 text-sm">
            {saved ? 'Saved!' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}

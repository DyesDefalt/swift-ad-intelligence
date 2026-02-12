import { useState, useMemo } from 'react';
import { getEffectiveAIConfig } from '@/lib/ai/chat';
import { chat } from '@/lib/ai/chat';
import { TIKTOK_ADCOPY_SYSTEM, TIKTOK_ADCOPY_USER } from '@/lib/ai/prompts/adcopy-tiktok';
import { META_ADCOPY_SYSTEM, META_ADCOPY_USER } from '@/lib/ai/prompts/adcopy-meta';
import { GOOGLE_ADS_ADCOPY_SYSTEM, GOOGLE_ADS_ADCOPY_USER } from '@/lib/ai/prompts/adcopy-google';
import { TWITTER_X_ADCOPY_SYSTEM, TWITTER_X_ADCOPY_USER } from '@/lib/ai/prompts/adcopy-twitter';
import { ADVANCED_ADCOPY_SYSTEM, ADVANCED_ADCOPY_USER } from '@/lib/ai/prompts/adcopy-advanced';
import { analyzeCreativeImage } from '@/lib/ai/vision';
import { Copy, Check, ImageIcon, ChevronDown, ChevronUp } from 'lucide-react';
import type { AdPlatform } from '@/lib/platforms/types';
import { getPlatformSpec, getPrimaryCopyMaxForPlatform, getPrimaryCopyFieldForPlatform, getCopyFieldsForPlatform } from '@/lib/platforms';

type Platform = AdPlatform | 'advanced';

const PLATFORM_LABELS: Record<Platform, string> = {
  tiktok: 'TikTok',
  meta: 'Meta',
  google: 'Google Ads',
  twitter: 'X',
  advanced: 'Advanced',
};

export function AdCopyPanel() {
  const [platform, setPlatform] = useState<Platform>('tiktok');
  const [campaignTypeId, setCampaignTypeId] = useState<string | null>(null);
  const [assetTypeId, setAssetTypeId] = useState<string | null>(null);
  const [imageData, setImageData] = useState<string | null>(null);
  const [productName, setProductName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [keyMessage, setKeyMessage] = useState('');
  const [productUrl, setProductUrl] = useState('');
  const [tone, setTone] = useState('Casual');
  const [language, setLanguage] = useState<'id' | 'en'>('en');
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [copyCount, setCopyCount] = useState(3);
  const [maxChars, setMaxChars] = useState(125);
  const [useExclamation, setUseExclamation] = useState(true);
  const [useEmoji, setUseEmoji] = useState(true);
  const [variations, setVariations] = useState<Array<{ text: string; copied?: boolean }>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const platformSpec = useMemo(() => (platform !== 'advanced' ? getPlatformSpec(platform) : null), [platform]);
  const campaignTypes = platformSpec?.campaignTypes ?? [];
  const assetTypes = useMemo(() => {
    if (!platformSpec) return [];
    const campaign = campaignTypeId ? platformSpec.campaignTypes.find((c) => c.id === campaignTypeId) : null;
    if (campaign?.assetTypeIds?.length) {
      return platformSpec.assetTypes.filter((a) => campaign.assetTypeIds!.includes(a.id));
    }
    return platformSpec.assetTypes;
  }, [platformSpec, campaignTypeId]);
  const effectiveMaxChars =
    platform === 'advanced'
      ? maxChars
      : getPrimaryCopyMaxForPlatform(platform, campaignTypeId, assetTypeId);
  const primaryField = useMemo(
    () => (platform !== 'advanced' ? getPrimaryCopyFieldForPlatform(platform, campaignTypeId, assetTypeId) : null),
    [platform, campaignTypeId, assetTypeId]
  );
  const copyFields = useMemo(
    () => (platform !== 'advanced' ? getCopyFieldsForPlatform(platform, campaignTypeId, assetTypeId) : []),
    [platform, campaignTypeId, assetTypeId]
  );
  const specHint = primaryField?.spec.note ?? null;
  const countHint =
    primaryField && primaryField.countMax != null && primaryField.countMax > 1
      ? primaryField.countMin != null && primaryField.countMin === primaryField.countMax
        ? `${primaryField.countMax} variation(s)`
        : `Provide ${primaryField.countMin ?? 1}–${primaryField.countMax} variations`
      : null;

  const handlePaste = () => {
    setError('');
    navigator.clipboard.read().then((items) => {
      const item = items.find((i) => i.types.includes('image/png') || i.types.includes('image/jpeg'));
      if (item) {
        item.getType('image/png').then((blob) => {
          const reader = new FileReader();
          reader.onload = () => setImageData(reader.result as string);
          reader.readAsDataURL(blob);
        }).catch(() => {
          item.getType('image/jpeg').then((blob) => {
            const reader = new FileReader();
            reader.onload = () => setImageData(reader.result as string);
            reader.readAsDataURL(blob);
          });
        });
      } else setError('No image in clipboard');
    }).catch(() => setError('Clipboard access denied'));
  };

  const getSystemAndUser = (context: string) => {
    switch (platform) {
      case 'tiktok':
        return { system: TIKTOK_ADCOPY_SYSTEM, user: TIKTOK_ADCOPY_USER(context) };
      case 'meta':
        return { system: META_ADCOPY_SYSTEM, user: META_ADCOPY_USER(context) };
      case 'google':
        return { system: GOOGLE_ADS_ADCOPY_SYSTEM, user: GOOGLE_ADS_ADCOPY_USER(context) };
      case 'twitter':
        return { system: TWITTER_X_ADCOPY_SYSTEM, user: TWITTER_X_ADCOPY_USER(context) };
      case 'advanced':
        return {
          system: ADVANCED_ADCOPY_SYSTEM,
          user: ADVANCED_ADCOPY_USER(context, { count: copyCount, maxChars, useEmoji, useExclamation }),
        };
      default:
        return { system: TIKTOK_ADCOPY_SYSTEM, user: TIKTOK_ADCOPY_USER(context) };
    }
  };

  const handleGenerate = async () => {
    setError('');
    setLoading(true);
    setVariations([]);
    try {
      const config = await getEffectiveAIConfig();
      if (!config.apiKey) {
        setError('Set your API key or OAuth token in Settings first.');
        setLoading(false);
        return;
      }
      let context = [
        productName && `Product: ${productName}`,
        brandName && `Brand: ${brandName}`,
        keyMessage && `Key message: ${keyMessage}`,
        productUrl && `URL / Landing page: ${productUrl}`,
        `Tone: ${tone}. Language: ${language === 'id' ? 'Indonesian' : 'English'}.`,
      ].filter(Boolean).join('\n');
      if (imageData) {
        const base64 = imageData.replace(/^data:image\/\w+;base64,/, '');
        const analysis = await analyzeCreativeImage(base64, config.apiKey, config.provider, {
          baseUrl: config.baseUrl,
          model: config.model,
        });
        context = [context, analysis.description, analysis.keyMessage, analysis.suggestedCopy?.join(' ')].filter(Boolean).join('\n');
      }
      if (!context.trim()) context = 'Generate ad copy variations.';

      const count = platform === 'advanced' ? copyCount : 3;
      const maxLen = effectiveMaxChars;

      const { system, user } = getSystemAndUser(context);
      const { content } = await chat(
        [
          { role: 'system', content: system },
          { role: 'user', content: user },
        ],
        { max_tokens: 600 }
      );
      const lines = content.split(/\n/).map((s) => s.replace(/^[\d\.\-\*]+\s*/, '').trim()).filter((s) => s.length > 0 && s.length <= Math.max(maxLen, 300));
      const list = (lines.length >= count ? lines.slice(0, count) : lines.length ? lines : [content]).map((text) => ({ text }));
      setVariations(list);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Generation failed');
    } finally {
      setLoading(false);
    }
  };

  const copyVariation = (idx: number) => {
    const text = variations[idx]?.text;
    if (!text) return;
    navigator.clipboard.writeText(text);
    setVariations((prev) => prev.map((v, i) => (i === idx ? { ...v, copied: true } : v)));
    setTimeout(() => setVariations((prev) => prev.map((v, i) => (i === idx ? { ...v, copied: false } : v))), 1500);
  };

  const onPlatformChange = (p: Platform) => {
    setPlatform(p);
    setCampaignTypeId(null);
    setAssetTypeId(null);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="gapah-label">Platform</label>
        <div className="flex flex-wrap gap-2">
          {(['tiktok', 'meta', 'google', 'twitter', 'advanced'] as const).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => onPlatformChange(p)}
              className={`gapah-platform-pill ${platform === p ? 'gapah-platform-pill-active' : 'gapah-platform-pill-inactive'}`}
            >
              {PLATFORM_LABELS[p]}
            </button>
          ))}
        </div>
      </div>

      {platform !== 'advanced' && platformSpec && (
        <>
          {campaignTypes.length > 0 && (
            <div>
              <label className="gapah-label">Campaign type</label>
              <select
                value={campaignTypeId ?? ''}
                onChange={(e) => {
                  const v = e.target.value;
                  setCampaignTypeId(v || null);
                  setAssetTypeId(null);
                }}
                className="gapah-input"
              >
                <option value="">Default</option>
                {campaignTypes.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
          )}
          {assetTypes.length > 0 && (
            <div>
              <label className="gapah-label">Asset type</label>
              <select
                value={assetTypeId ?? ''}
                onChange={(e) => setAssetTypeId(e.target.value || null)}
                className="gapah-input"
              >
                <option value="">Default</option>
                {assetTypes.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.label}
                  </option>
                ))}
              </select>
            </div>
          )}
          {(primaryField || specHint || effectiveMaxChars) && (
            <div className="space-y-1 text-xs text-[var(--gapah-text-secondary)]">
              {primaryField && (
                <p>
                  <span className="font-medium text-[var(--gapah-text)]">{primaryField.label}:</span>{' '}
                  max {effectiveMaxChars} characters
                  {primaryField.spec.recommended != null && primaryField.spec.recommended !== primaryField.spec.max && (
                    <> (recommended {primaryField.spec.recommended})</>
                  )}
                  {countHint && <> · {countHint}</>}
                </p>
              )}
              {specHint && <p>{specHint}</p>}
              {copyFields.length > 1 && (
                <p>Other fields: {copyFields.slice(1).map((f) => `${f.label}${f.countMax && f.countMax > 1 ? ` (${f.countMin ?? 1}–${f.countMax})` : ''}`).join(', ')}</p>
              )}
            </div>
          )}
        </>
      )}

      <div>
        <label className="gapah-label">Image / Thumbnail (optional)</label>
        {imageData ? (
          <div className="relative">
            <img src={imageData} alt="Upload" className="max-h-24 rounded-[var(--gapah-radius)] border border-[var(--gapah-card-border)] object-cover" />
            <button type="button" onClick={() => setImageData(null)} className="absolute right-1 top-1 rounded bg-black/70 px-2 py-0.5 text-xs text-white hover:bg-black/80">Clear</button>
          </div>
        ) : (
          <button type="button" onClick={handlePaste} className="gapah-dashed-zone flex w-full items-center justify-center gap-2 py-6 text-sm">
            <ImageIcon className="h-5 w-5" /> Paste image from clipboard
          </button>
        )}
      </div>

      <div>
        <label className="gapah-label">Product name</label>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="e.g. Skincare Serum" className="gapah-input" />
      </div>
      <div>
        <label className="gapah-label">Brand name</label>
        <input type="text" value={brandName} onChange={(e) => setBrandName(e.target.value)} placeholder="e.g. Your Brand" className="gapah-input" />
      </div>
      <div>
        <label className="gapah-label">Key message</label>
        <input type="text" value={keyMessage} onChange={(e) => setKeyMessage(e.target.value)} placeholder="e.g. Glowing skin in 7 days" className="gapah-input" />
      </div>
      <div>
        <label className="gapah-label">URL (Product URL / Landing page)</label>
        <input type="url" value={productUrl} onChange={(e) => setProductUrl(e.target.value)} placeholder="https://..." className="gapah-input" />
      </div>
      <div className="flex gap-2">
        <div className="flex-1">
          <label className="gapah-label">Tone</label>
          <select value={tone} onChange={(e) => setTone(e.target.value)} className="gapah-input">
            <option value="Casual">Casual</option>
            <option value="Professional">Professional</option>
            <option value="Urgent">Urgent</option>
            <option value="Friendly">Friendly</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="gapah-label">Language</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value as 'id' | 'en')} className="gapah-input">
            <option value="en">EN</option>
            <option value="id">ID</option>
          </select>
        </div>
      </div>

      {platform === 'advanced' && (
        <div className="gapah-variation-card space-y-3">
          <button
            type="button"
            onClick={() => setAdvancedOpen(!advancedOpen)}
            className="flex w-full items-center justify-between text-left text-sm font-medium text-[var(--gapah-text)]"
          >
            Advanced options
            {advancedOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
          {advancedOpen && (
            <div className="space-y-3 border-t border-[var(--gapah-card-border)] pt-3">
              <div>
                <label className="gapah-label">Number of ad copy variations</label>
                <input type="number" min={1} max={10} value={copyCount} onChange={(e) => setCopyCount(Math.max(1, Math.min(10, Number(e.target.value) || 1)))} className="gapah-input" />
              </div>
              <div>
                <label className="gapah-label">Max characters per ad copy</label>
                <input type="number" min={30} max={500} value={maxChars} onChange={(e) => setMaxChars(Math.max(30, Math.min(500, Number(e.target.value) || 125)))} className="gapah-input" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--gapah-text-secondary)]">Use exclamation marks</span>
                <button type="button" role="switch" aria-checked={useExclamation} onClick={() => setUseExclamation(!useExclamation)} className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border transition-colors ${useExclamation ? 'border-[var(--gapah-accent)] bg-[var(--gapah-accent)]' : 'border-[var(--gapah-card-border)] bg-black/5'}`}>
                  <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${useExclamation ? 'translate-x-5' : 'translate-x-0.5'}`} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--gapah-text-secondary)]">Use emoji</span>
                <button type="button" role="switch" aria-checked={useEmoji} onClick={() => setUseEmoji(!useEmoji)} className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border transition-colors ${useEmoji ? 'border-[var(--gapah-accent)] bg-[var(--gapah-accent)]' : 'border-[var(--gapah-card-border)] bg-black/5'}`}>
                  <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${useEmoji ? 'translate-x-5' : 'translate-x-0.5'}`} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {error && <p className="text-xs text-red-500">{error}</p>}

      <button type="button" onClick={handleGenerate} disabled={loading} className="gapah-btn-primary w-full py-2.5 text-sm disabled:opacity-50">
        {loading ? 'Generating...' : 'Generate Copy'}
      </button>

      {variations.length > 0 && (
        <div className="space-y-2">
          <p className="gapah-label">Variations</p>
          {variations.map((v, i) => (
            <div key={i} className="gapah-variation-card flex items-start justify-between gap-2">
              <p className="flex-1 text-sm text-[var(--gapah-text)]">{v.text}</p>
              <div className="flex shrink-0 items-center gap-1">
                <span className={`text-xs ${v.text.length <= effectiveMaxChars ? 'text-[var(--gapah-emerald)]' : 'text-amber-600'}`}>{v.text.length} chars</span>
                <button type="button" onClick={() => copyVariation(i)} className="rounded p-1.5 text-[var(--gapah-text-secondary)] hover:bg-black/5 hover:text-[var(--gapah-text)]">
                  {v.copied ? <Check className="h-4 w-4 text-[var(--gapah-emerald)]" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

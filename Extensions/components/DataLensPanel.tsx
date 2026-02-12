import { useState } from 'react';
import { getEffectiveAIConfig } from '@/lib/ai/chat';
import { analyzeDataLensImage } from '@/lib/ai/vision';
import { Copy, ImageIcon } from 'lucide-react';

export function DataLensPanel() {
  const [imageData, setImageData] = useState<string | null>(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePaste = () => {
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

  const handleScreenshot = () => {
    browser.runtime.sendMessage({ type: 'CAPTURE_SCREENSHOT' }).then((res: { screenshot?: string; error?: string }) => {
      if (res.screenshot) setImageData(res.screenshot);
      else setError(res.error ?? 'Screenshot failed');
    }).catch((err: Error) => setError(err.message));
  };

  const handleAnalyze = async () => {
    if (!imageData) {
      setError('Paste an image or take a screenshot first.');
      return;
    }
    setError('');
    setLoading(true);
    setResult('');
    try {
      const config = await getEffectiveAIConfig();
      if (!config.apiKey) {
        setError('Set your API key or OAuth token in Settings first.');
        setLoading(false);
        return;
      }
      const base64 = imageData.replace(/^data:image\/\w+;base64,/, '');
      const analysis = await analyzeDataLensImage(base64, config.apiKey, config.provider, {
        baseUrl: config.baseUrl,
        model: config.model,
      });
      setResult(analysis);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Analysis failed');
    } finally {
      setLoading(false);
    }
  };

  const copyResult = () => {
    if (result) navigator.clipboard.writeText(result);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="gapah-label">Screenshot or paste image</label>
        {imageData ? (
          <div className="space-y-2">
            <img src={imageData} alt="Data" className="max-h-40 w-full rounded-[var(--gapah-radius)] border border-[var(--gapah-card-border)] object-contain bg-black/5" />
            <div className="flex gap-2">
              <button type="button" onClick={() => { setImageData(null); setResult(''); }} className="gapah-btn-secondary px-3 py-1.5 text-xs">Clear</button>
              <button type="button" onClick={handleScreenshot} className="gapah-btn-secondary px-3 py-1.5 text-xs">Take screenshot</button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <button type="button" onClick={handlePaste} className="gapah-dashed-zone flex w-full items-center justify-center gap-2 py-6 text-sm">
              <ImageIcon className="h-5 w-5" /> Paste from clipboard
            </button>
            <button type="button" onClick={handleScreenshot} className="flex w-full items-center justify-center gap-2 rounded-[var(--gapah-radius)] border border-[var(--gapah-card-border)] bg-white py-3 text-sm font-medium text-[var(--gapah-text)] hover:bg-black/5">
              Capture current tab
            </button>
          </div>
        )}
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}

      <button type="button" onClick={handleAnalyze} disabled={!imageData || loading} className="gapah-btn-primary w-full py-2.5 text-sm disabled:opacity-50">
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>

      {result && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="gapah-label">Analysis</p>
            <button type="button" onClick={copyResult} className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-[var(--gapah-text-secondary)] hover:bg-black/5 hover:text-[var(--gapah-text)]">
              <Copy className="h-3 w-3" /> Copy
            </button>
          </div>
          <pre className="max-h-64 overflow-auto rounded-[var(--gapah-radius)] border border-[var(--gapah-card-border)] bg-white p-3 text-xs text-[var(--gapah-text)] whitespace-pre-wrap font-sans">{result}</pre>
        </div>
      )}
    </div>
  );
}

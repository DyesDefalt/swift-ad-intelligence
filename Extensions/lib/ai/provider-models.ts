import type { AIProvider } from '@/lib/storage';

export const PROVIDER_LABELS: Record<AIProvider, string> = {
  openai: 'OpenAI (GPT)',
  claude: 'Claude (Anthropic)',
  gemini: 'Google Gemini',
  grok: 'xAI Grok',
  custom: 'Custom (OpenAI-compatible API)',
};

export const DEFAULT_BASE_URLS: Partial<Record<AIProvider, string>> = {
  gemini: 'https://generativelanguage.googleapis.com/v1beta/openai',
  grok: 'https://api.x.ai/v1',
  custom: '',
};

/** Latest models per provider (Feb 2026). */
export const MODELS_BY_PROVIDER: Record<AIProvider, Array<{ id: string; label: string }>> = {
  openai: [
    { id: 'gpt-5.2', label: 'GPT-5.2 (latest)' },
    { id: 'gpt-5-mini', label: 'GPT-5 mini' },
    { id: 'gpt-5-nano', label: 'GPT-5 nano' },
    { id: 'gpt-4.1', label: 'GPT-4.1' },
    { id: 'gpt-4o', label: 'GPT-4o' },
    { id: 'gpt-4o-mini', label: 'GPT-4o mini' },
  ],
  claude: [
    { id: 'claude-opus-4-6', label: 'Claude Opus 4.6' },
    { id: 'claude-opus-4-5-20251101', label: 'Claude Opus 4.5' },
    { id: 'claude-sonnet-4-5-20250929', label: 'Claude Sonnet 4.5' },
    { id: 'claude-haiku-4-5-20251001', label: 'Claude Haiku 4.5' },
  ],
  gemini: [
    { id: 'gemini-3-pro-preview', label: 'Gemini 3 Pro (preview)' },
    { id: 'gemini-3-flash-preview', label: 'Gemini 3 Flash (preview)' },
    { id: 'gemini-2.5-pro', label: 'Gemini 2.5 Pro' },
    { id: 'gemini-2.5-flash', label: 'Gemini 2.5 Flash' },
    { id: 'gemini-2.0-flash', label: 'Gemini 2.0 Flash' },
  ],
  grok: [
    { id: 'grok-4', label: 'Grok 4' },
    { id: 'grok-3', label: 'Grok 3' },
    { id: 'grok-3-mini', label: 'Grok 3 mini' },
  ],
  custom: [
    { id: 'custom', label: 'Model ID (enter below)' },
  ],
};

export function providerNeedsBaseUrl(provider: AIProvider): boolean {
  return provider === 'gemini' || provider === 'grok' || provider === 'custom';
}

export function providerUsesCustomModel(provider: AIProvider): boolean {
  return provider === 'custom';
}

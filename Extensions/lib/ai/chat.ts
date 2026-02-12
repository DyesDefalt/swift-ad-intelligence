import type { AIProvider } from '@/lib/storage';
import {
  getApiKey,
  getModel,
  getAIProvider,
  getAIBaseUrl,
  getAIOauthToken,
  getAICustomModel,
} from '@/lib/storage';
import { openaiChat } from './openai';
import { anthropicChat } from './anthropic';
import type { OpenAIMessage } from './openai';

export type ChatOptions = { max_tokens?: number };

const OPENAI_BASE = 'https://api.openai.com/v1';
const GEMINI_BASE = 'https://generativelanguage.googleapis.com/v1beta/openai';
const GROK_BASE = 'https://api.x.ai/v1';

const DEFAULT_MODELS: Record<AIProvider, string> = {
  openai: 'gpt-5-mini',
  claude: 'claude-sonnet-4-5-20250929',
  gemini: 'gemini-2.5-flash',
  grok: 'grok-3-mini',
  custom: '',
};

export async function getEffectiveAIConfig(): Promise<{
  provider: AIProvider;
  apiKey: string;
  model: string;
  baseUrl?: string;
}> {
  const [provider, apiKey, oauthToken, model, customModel, baseUrl] = await Promise.all([
    getAIProvider(),
    getApiKey(),
    getAIOauthToken(),
    getModel(),
    getAICustomModel(),
    getAIBaseUrl(),
  ]);
  const effectiveProvider = provider ?? 'openai';
  const effectiveKey = (oauthToken?.trim() || apiKey?.trim()) ?? '';
  const effectiveModel =
    model === 'custom' && customModel?.trim()
      ? customModel.trim()
      : model?.trim() || DEFAULT_MODELS[effectiveProvider];
  let effectiveBaseUrl = baseUrl?.trim() || undefined;
  if (effectiveProvider === 'gemini' && !effectiveBaseUrl) effectiveBaseUrl = GEMINI_BASE;
  if (effectiveProvider === 'grok' && !effectiveBaseUrl) effectiveBaseUrl = GROK_BASE;
  return {
    provider: effectiveProvider,
    apiKey: effectiveKey,
    model: effectiveModel,
    baseUrl: effectiveBaseUrl,
  };
}

export async function chat(
  messages: OpenAIMessage[],
  options?: ChatOptions
): Promise<{ content: string }> {
  const { provider, apiKey, model, baseUrl } = await getEffectiveAIConfig();
  if (!apiKey) throw new Error('Set your API key or OAuth token in Settings first.');

  const maxTokens = options?.max_tokens ?? 1024;

  if (provider === 'claude') {
    const system = (messages.find((m) => m.role === 'system')?.content as string) || '';
    const userContent = messages.filter((m) => m.role === 'user').map((m) => m.content);
    const userText = Array.isArray(userContent[0])
      ? String((userContent[0] as Array<{ type: string; text?: string }>).find((p) => p.type === 'text')?.text ?? '')
      : String(userContent[0] ?? '');
    return anthropicChat(apiKey, system, userText, { model, max_tokens: maxTokens });
  }

  // OpenAI, Gemini, Grok, Custom: OpenAI-compatible endpoint
  const openaiBase = baseUrl || OPENAI_BASE;
  return openaiChat(apiKey, messages, {
    model,
    max_tokens: maxTokens,
    baseUrl: openaiBase,
  });
}

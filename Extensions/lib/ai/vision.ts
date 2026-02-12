import { openaiChat } from './openai';
import { anthropicChat } from './anthropic';
import { DATALENS_SYSTEM, DATALENS_USER } from './prompts/datalens';

export type CreativeAnalysis = {
  description?: string;
  keyMessage?: string;
  suggestedCopy?: string[];
};

const CREATIVE_ANALYSIS_PROMPT = `Analyze this ad creative image. Return a short JSON with: description (what the image shows), keyMessage (main message), suggestedCopy (array of 2-3 short ad copy ideas, each under 100 chars for TikTok).`;

export async function analyzeCreativeImage(
  imageBase64: string,
  apiKey: string,
  provider: 'openai' | 'claude' | 'gemini' | 'grok' | 'custom',
  options?: { baseUrl?: string; model?: string }
): Promise<CreativeAnalysis> {
  const mime = imageBase64.startsWith('data:') ? '' : 'image/jpeg';
  const url = imageBase64.startsWith('data:') ? imageBase64 : `data:${mime};base64,${imageBase64}`;
  const isOpenAICompatible = provider !== 'claude';

  if (isOpenAICompatible) {
    const { content } = await openaiChat(apiKey, [
      { role: 'user', content: [{ type: 'image_url', image_url: { url } }, { type: 'text', text: CREATIVE_ANALYSIS_PROMPT }] },
    ], { model: options?.model ?? 'gpt-4o', max_tokens: 500, baseUrl: options?.baseUrl });
    try {
      return JSON.parse(content) as CreativeAnalysis;
    } catch {
      return { suggestedCopy: [content], description: content };
    }
  }

  const { content } = await anthropicChat(apiKey, CREATIVE_ANALYSIS_PROMPT, `[Image attached]. ${CREATIVE_ANALYSIS_PROMPT}`, { max_tokens: 500 });
  try {
    return JSON.parse(content) as CreativeAnalysis;
  } catch {
    return { suggestedCopy: [content], description: content };
  }
}

export async function analyzeDataLensImage(
  imageBase64: string,
  apiKey: string,
  provider: 'openai' | 'claude' | 'gemini' | 'grok' | 'custom',
  options?: { baseUrl?: string; model?: string }
): Promise<string> {
  const url = imageBase64.startsWith('data:') ? imageBase64 : `data:image/jpeg;base64,${imageBase64}`;
  const isOpenAICompatible = provider !== 'claude';

  if (isOpenAICompatible) {
    const { content } = await openaiChat(apiKey, [
      { role: 'system', content: DATALENS_SYSTEM },
      { role: 'user', content: [{ type: 'image_url', image_url: { url } }, { type: 'text', text: DATALENS_USER }] },
    ], { model: options?.model ?? 'gpt-4o', max_tokens: 1024, baseUrl: options?.baseUrl });
    return content;
  }

  const { content } = await anthropicChat(apiKey, DATALENS_SYSTEM, `[Image attached]. ${DATALENS_USER}`, { max_tokens: 1024 });
  return content;
}

export type OpenAIMessage = { role: 'system' | 'user' | 'assistant'; content: string | Array<{ type: 'text'; text: string } | { type: 'image_url'; image_url: { url: string } }> };

function useMaxCompletionTokens(model: string): boolean {
  return model.startsWith('gpt-5') || model.startsWith('o1') || model.startsWith('o3') || model.startsWith('o4');
}

const DEFAULT_OPENAI_BASE = 'https://api.openai.com/v1';

export async function openaiChat(
  apiKey: string,
  messages: OpenAIMessage[],
  options?: { model?: string; max_tokens?: number; baseUrl?: string }
): Promise<{ content: string }> {
  const model = options?.model ?? 'gpt-5-mini';
  const limit = options?.max_tokens ?? 1024;
  const baseUrl = (options?.baseUrl ?? DEFAULT_OPENAI_BASE).replace(/\/$/, '');
  const body: Record<string, unknown> = {
    model,
    messages,
  };
  if (useMaxCompletionTokens(model)) {
    body.max_completion_tokens = limit;
  } else {
    body.max_tokens = limit;
  }
  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenAI-compatible API error: ${res.status} ${err}`);
  }
  const data = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
  const content = data.choices?.[0]?.message?.content ?? '';
  return { content };
}

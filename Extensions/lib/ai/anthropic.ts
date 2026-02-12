export async function anthropicChat(
  apiKey: string,
  system: string,
  userMessage: string,
  options?: { model?: string; max_tokens?: number }
): Promise<{ content: string }> {
  const res = await fetch(
    `https://api.anthropic.com/v1/messages`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: options?.model ?? 'claude-sonnet-4-5-20250929',
        max_tokens: options?.max_tokens ?? 1024,
        system,
        messages: [{ role: 'user', content: userMessage }],
      }),
    }
  );
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Anthropic API error: ${res.status} ${err}`);
  }
  const data = (await res.json()) as { content?: Array<{ text?: string }> };
  const text = data.content?.[0]?.text ?? '';
  return { content: text };
}

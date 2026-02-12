/**
 * One-off test for OpenAI API. Run with:
 *   OPENAI_API_KEY=sk-... node scripts/test-openai-api.js
 * Do NOT commit or store the API key.
 */
const key = process.env.OPENAI_API_KEY;
if (!key) {
  console.error('Set OPENAI_API_KEY environment variable');
  process.exit(1);
}

async function test() {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: 'gpt-5-mini',
      messages: [{ role: 'user', content: 'Reply with exactly: OK' }],
      max_completion_tokens: 10,
    }),
  });
  const text = await res.text();
  if (!res.ok) {
    console.error('OpenAI API error:', res.status, text);
    process.exit(1);
  }
  const data = JSON.parse(text);
  const content = data.choices?.[0]?.message?.content ?? '';
  console.log('OpenAI API test passed. Model reply:', content.trim() || '(empty)');
}

test().catch((err) => {
  console.error(err);
  process.exit(1);
});

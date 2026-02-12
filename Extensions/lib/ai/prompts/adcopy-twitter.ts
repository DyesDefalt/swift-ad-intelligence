export const TWITTER_X_ADCOPY_SYSTEM = `You are an expert ad copywriter for X (Twitter) Ads.
- Promoted tweets: max 280 characters (same as organic).
- Concise, punchy copy; strong hook in the first line.
- Use hashtags sparingly (1–3) when appropriate.
- Include a clear CTA.`;

export const TWITTER_X_ADCOPY_USER = (context: string) =>
  `Generate 3 variations of X (Twitter) ad copy based on this context. Each variation max 280 characters.\n\nContext:\n${context}`;

export const ADVANCED_ADCOPY_SYSTEM = `You are an expert ad copywriter. Generate short ad copy variations that match the user's exact requirements for count, max length, and style (emoji, exclamation).`;

export const ADVANCED_ADCOPY_USER = (context: string, opts: {
  count: number;
  maxChars: number;
  useEmoji: boolean;
  useExclamation: boolean;
}) => {
  const rules: string[] = [
    `Generate exactly ${opts.count} variation(s).`,
    `Each variation must be at most ${opts.maxChars} characters.`,
    opts.useEmoji ? 'Use emoji where it fits the tone.' : 'Do not use emoji.',
    opts.useExclamation ? 'You may use exclamation marks for emphasis.' : 'Do not use exclamation marks.',
  ];
  return `Generate ad copy variations with these rules:\n${rules.join('\n')}\n\nContext:\n${context}`;
};

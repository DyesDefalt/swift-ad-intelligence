import type { PlatformAdSpec, CopyFieldDefinition } from './types';

/**
 * X (Twitter) ad specs: Text ads use Post copy (caption) 280 chars. Some formats add Headline (e.g. Conversation Button pre-populated: 23 chars).
 * @see https://business.x.com/en/help/campaign-setup/creative-ad-specifications
 * @see docs/AD_SPECS_PLATFORM_GUIDE.md
 */
export const TWITTER_X_SPEC: PlatformAdSpec = {
  platform: 'X (Twitter)',
  sourceUrl: 'https://business.x.com/en/help/campaign-setup/creative-ad-specifications',
  campaignTypes: [
    { id: 'promoted_tweet', label: 'Promoted Tweet' },
    { id: 'promoted_account', label: 'Promoted Account' },
    { id: 'takeover', label: 'Takeover' },
    { id: 'amplify_preroll', label: 'Amplify Pre-roll' },
  ],
  assetTypes: [
    {
      id: 'tweet',
      label: 'Tweet (text)',
      copyFields: [
        { id: 'caption', label: 'Post copy', spec: { max: 280, note: 'Same as organic tweet; each link reduces by 23' }, countMin: 1, countMax: 1 },
      ],
    },
    {
      id: 'account',
      label: 'Account / Bio',
      copyFields: [
        { id: 'caption', label: 'Bio', spec: { max: 160 }, countMin: 1, countMax: 1 },
      ],
    },
    {
      id: 'video_preroll',
      label: 'Video (Pre-roll)',
      copyFields: [
        { id: 'caption', label: 'Post copy', spec: { max: 280, note: 'Optional; video 15s recommended, max 2:20' }, countMin: 0, countMax: 1 },
      ],
    },
    {
      id: 'conversation',
      label: 'Conversation / Pre-populated',
      copyFields: [
        { id: 'caption', label: 'Post copy', spec: { max: 256 }, countMin: 1, countMax: 1 },
        { id: 'headline', label: 'Headline', spec: { max: 23 }, countMin: 0, countMax: 1 },
      ],
    },
  ],
  defaultCopyFields: [
    { id: 'caption', label: 'Post copy', spec: { max: 280, note: 'Same as organic tweet limit' }, countMin: 1, countMax: 1 },
  ],
  defaultTextSpecs: {
    caption: { max: 280, note: 'Same as organic tweet limit' },
  },
  bestPractices: [
    'Concise, punchy copy',
    'Hashtags sparingly (1–3)',
    'Strong hook in first line',
    'Clear CTA',
  ],
};

export const TWITTER_X_COPY_MAX = 280;

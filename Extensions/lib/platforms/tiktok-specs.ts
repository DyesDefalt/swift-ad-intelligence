import type { PlatformAdSpec, CopyFieldDefinition } from './types';

/**
 * TikTok ad specs: In-feed uses Caption (and optionally display/account name). No separate "headline" for standard in-feed.
 * Spark Ads: caption from organic post (max 4 lines). Carousel/TopView also use caption + display name.
 * @see https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads?lang=en
 * @see docs/AD_SPECS_PLATFORM_GUIDE.md
 */
export const TIKTOK_AD_SPEC: PlatformAdSpec = {
  platform: 'TikTok',
  sourceUrl: 'https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads?lang=en',
  campaignTypes: [
    { id: 'reach', label: 'Reach' },
    { id: 'traffic', label: 'Traffic' },
    { id: 'video_views', label: 'Video views' },
    { id: 'community_interaction', label: 'Community interaction' },
    { id: 'app_promotion', label: 'App promotion' },
    { id: 'lead_generation', label: 'Lead generation' },
    { id: 'sales', label: 'Sales' },
  ],
  assetTypes: [
    {
      id: 'in_feed',
      label: 'In-feed (Non-Spark)',
      copyFields: [
        { id: 'caption', label: 'Ad caption', spec: { min: 1, max: 100, recommended: 80, note: '12–80 recommended; no links, @, or #' }, countMin: 1, countMax: 1 },
        { id: 'displayName', label: 'Account name', spec: { max: 20, note: '10 chars CJK or 20 others' }, countMin: 0, countMax: 1 },
      ],
    },
    {
      id: 'spark',
      label: 'Spark Ads',
      copyFields: [
        { id: 'caption', label: 'Ad caption', spec: { note: 'From organic post; max 4 lines including emojis' }, countMin: 0, countMax: 1 },
      ],
    },
    {
      id: 'topview',
      label: 'TopView',
      copyFields: [
        { id: 'caption', label: 'Ad caption', spec: { min: 1, max: 100, recommended: 80 }, countMin: 1, countMax: 1 },
        { id: 'displayName', label: 'Account name', spec: { max: 20 }, countMin: 0, countMax: 1 },
      ],
    },
    {
      id: 'carousel',
      label: 'Carousel',
      copyFields: [
        { id: 'caption', label: 'Ad caption', spec: { min: 1, max: 100, recommended: 80 }, countMin: 1, countMax: 1 },
        { id: 'displayName', label: 'Account name', spec: { max: 20 }, countMin: 0, countMax: 1 },
      ],
    },
  ],
  defaultCopyFields: [
    { id: 'caption', label: 'Ad caption', spec: { min: 1, max: 100, recommended: 80, note: '12–80 characters recommended' }, countMin: 1, countMax: 1 },
    { id: 'displayName', label: 'Account name', spec: { max: 20, note: '10 chars CJK or 20 others' }, countMin: 0, countMax: 1 },
  ],
  defaultTextSpecs: {
    caption: { min: 1, max: 100, recommended: 80, note: '12–80 characters recommended' },
    displayName: { max: 20, note: '10 chars CJK or 20 others' },
  },
  bestPractices: [
    'Hook in the first 3 seconds',
    'Use casual, conversational language',
    'Include a clear CTA',
    'Use emoji in moderation',
  ],
};

export const TIKTOK_AD_TEXT_MAX = 100;
export const TIKTOK_DISPLAY_NAME_MAX = 20;

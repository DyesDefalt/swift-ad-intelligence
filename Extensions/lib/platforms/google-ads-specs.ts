import type { PlatformAdSpec, CopyFieldDefinition } from './types';

/**
 * Google Ads specs by campaign type and assets.
 * Ad copy fields vary: RSA has Headlines (3–15) + Descriptions (2–4); Pmax has Headlines, Long headline, Descriptions; some formats have no long headline.
 * @see https://support.google.com/google-ads/answer/13676244?hl=en
 * @see docs/AD_SPECS_PLATFORM_GUIDE.md
 */
export const GOOGLE_ADS_SPEC: PlatformAdSpec = {
  platform: 'Google Ads',
  sourceUrl: 'https://support.google.com/google-ads/answer/13676244?hl=en',
  campaignTypes: [
    { id: 'performance_max', label: 'Performance Max', assetTypeIds: ['image', 'video', 'text'] },
    { id: 'search', label: 'Search', assetTypeIds: ['responsive_search', 'ad_assets'] },
    { id: 'display', label: 'Display', assetTypeIds: ['responsive_display'] },
    { id: 'demand_gen', label: 'Demand Gen', assetTypeIds: ['image', 'video', 'text'] },
    { id: 'app', label: 'App campaigns', assetTypeIds: ['image', 'video', 'text'] },
  ],
  assetTypes: [
    {
      id: 'responsive_search',
      label: 'Responsive Search Ad',
      copyFields: [
        { id: 'headline', label: 'Headline', spec: { max: 30 }, countMin: 3, countMax: 15, countRecommended: 10 },
        { id: 'description', label: 'Description', spec: { max: 90 }, countMin: 2, countMax: 4, countRecommended: 4 },
      ],
    },
    {
      id: 'ad_assets',
      label: 'Ad assets / Business info',
      copyFields: [
        { id: 'headline', label: 'Headline', spec: { max: 25 }, countMin: 1, countMax: 20, countRecommended: 4 },
        { id: 'description', label: 'Description', spec: { max: 90 }, countMin: 0, countMax: 5, countRecommended: 4 },
        { id: 'businessName', label: 'Business name', spec: { max: 25 }, countMin: 1, countMax: 1 },
      ],
    },
    {
      id: 'responsive_display',
      label: 'Responsive Display',
      copyFields: [
        { id: 'headline', label: 'Headline', spec: { max: 30 }, countMin: 1, countMax: 5 },
        { id: 'longHeadline', label: 'Long headline', spec: { max: 90 }, countMin: 1, countMax: 1 },
        { id: 'description', label: 'Description', spec: { max: 90 }, countMin: 1, countMax: 5 },
        { id: 'businessName', label: 'Business name', spec: { max: 25 }, countMin: 1, countMax: 1 },
      ],
    },
    {
      id: 'image',
      label: 'Image / Visual (Pmax, Demand Gen)',
      copyFields: [
        { id: 'headline', label: 'Headline', spec: { max: 30, note: 'Include at least one ≤15 chars' }, countMin: 3, countMax: 15, countRecommended: 11 },
        { id: 'longHeadline', label: 'Long headline', spec: { max: 90 }, countMin: 1, countMax: 5, countRecommended: 2 },
        { id: 'description', label: 'Description', spec: { max: 90 }, countMin: 2, countMax: 5, countRecommended: 4 },
        { id: 'businessName', label: 'Business name', spec: { max: 25 }, countMin: 1, countMax: 1 },
      ],
    },
    {
      id: 'video',
      label: 'Video',
      copyFields: [
        { id: 'headline', label: 'Headline', spec: { max: 30 }, countMin: 1, countMax: 15 },
        { id: 'description', label: 'Description', spec: { max: 90 }, countMin: 0, countMax: 5 },
        { id: 'businessName', label: 'Business name', spec: { max: 25 }, countMin: 1, countMax: 1 },
      ],
    },
    {
      id: 'text',
      label: 'Text (Pmax / Demand Gen)',
      copyFields: [
        { id: 'headline', label: 'Headline', spec: { max: 30, note: 'At least one ≤15 chars' }, countMin: 3, countMax: 15 },
        { id: 'longHeadline', label: 'Long headline', spec: { max: 90 }, countMin: 1, countMax: 5 },
        { id: 'description', label: 'Description', spec: { max: 90 }, countMin: 2, countMax: 5 },
        { id: 'businessName', label: 'Business name', spec: { max: 25 }, countMin: 1, countMax: 1 },
      ],
    },
  ],
  defaultCopyFields: [
    { id: 'headline', label: 'Headline', spec: { max: 30 }, countMin: 1, countMax: 15 },
    { id: 'longHeadline', label: 'Long headline', spec: { max: 90 }, countMin: 0, countMax: 5 },
    { id: 'description', label: 'Description', spec: { max: 90 }, countMin: 0, countMax: 5 },
    { id: 'businessName', label: 'Business name', spec: { max: 25 }, countMin: 0, countMax: 1 },
  ],
  defaultTextSpecs: {
    headline: { max: 30 },
    longHeadline: { max: 90 },
    description: { max: 90 },
    businessName: { max: 25 },
  },
  bestPractices: [
    'Include keywords in headlines where natural',
    'Lead with benefit and clear CTA',
    'Use numbers and specifics',
    'Match message to landing page',
  ],
};

export const GOOGLE_ADS_HEADLINE_MAX = 30;
export const GOOGLE_ADS_DESCRIPTION_MAX = 90;

import type { PlatformAdSpec, CopyFieldDefinition } from './types';

/**
 * Meta (Facebook / Instagram) ad specs.
 * Ad copy fields: Primary Text, Headline, Description. Meta allows multiple variations per ad (e.g. 3–5 primary text, 3–5 headlines, 1 description).
 * @see https://www.facebook.com/business/ads-guide/update
 * @see docs/AD_SPECS_PLATFORM_GUIDE.md
 */
const META_PRIMARY: CopyFieldDefinition = {
  id: 'primaryText',
  label: 'Primary text',
  spec: { recommended: 125, max: 2200, note: '50–150 recommended; truncated after ~125 chars on mobile' },
  countMin: 1,
  countMax: 5,
  countRecommended: 5,
};
const META_HEADLINE: CopyFieldDefinition = {
  id: 'headline',
  label: 'Headline',
  spec: { recommended: 27, max: 40, note: '~27 visible before truncation on mobile' },
  countMin: 1,
  countMax: 5,
  countRecommended: 5,
};
const META_DESCRIPTION: CopyFieldDefinition = {
  id: 'description',
  label: 'Description',
  spec: { recommended: 30, max: 30, note: 'Optional; often hidden on some placements' },
  countMin: 0,
  countMax: 1,
};

export const META_AD_SPECS: PlatformAdSpec = {
  platform: 'Meta (Facebook/Instagram)',
  sourceUrl: 'https://www.facebook.com/business/ads-guide/update',
  campaignTypes: [
    { id: 'awareness', label: 'Awareness' },
    { id: 'traffic', label: 'Traffic' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'leads', label: 'Leads' },
    { id: 'app_promotion', label: 'App promotion' },
    { id: 'sales', label: 'Sales' },
  ],
  assetTypes: [
    {
      id: 'image',
      label: 'Image',
      copyFields: [
        META_PRIMARY,
        META_HEADLINE,
        { ...META_DESCRIPTION, countMax: 1 },
      ],
    },
    {
      id: 'video',
      label: 'Video',
      copyFields: [
        META_PRIMARY,
        META_HEADLINE,
        { ...META_DESCRIPTION, countMax: 1 },
      ],
    },
    {
      id: 'carousel',
      label: 'Carousel',
      copyFields: [
        { id: 'primaryText', label: 'Primary text', spec: { recommended: 80, max: undefined }, countMin: 1, countMax: 1 },
        { id: 'headline', label: 'Headline (per card)', spec: { recommended: 45, max: undefined, note: 'Per card' }, countMin: 2, countMax: 10 },
        { id: 'description', label: 'Description (per card)', spec: { recommended: 18, max: undefined, note: 'Per card' }, countMin: 2, countMax: 10 },
      ],
    },
    {
      id: 'collection',
      label: 'Collection',
      copyFields: [
        META_PRIMARY,
        META_HEADLINE,
      ],
    },
  ],
  defaultCopyFields: [META_PRIMARY, META_HEADLINE, META_DESCRIPTION],
  defaultTextSpecs: {
    primaryText: { recommended: 125, max: 2200, note: 'Truncated after ~125 chars on mobile' },
    headline: { recommended: 27, max: 40 },
    description: { recommended: 30, max: 30 },
  },
  bestPractices: [
    'Lead with benefit, not feature',
    'Use numbers and specifics',
    'Include social proof when possible',
    'Test emoji vs no-emoji variants',
  ],
};

export const META_PRIMARY_RECOMMENDED = 125;
export const META_HEADLINE_RECOMMENDED = 27;
export const META_DESCRIPTION_RECOMMENDED = 30;

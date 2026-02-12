/**
 * Platform ad specs: campaign types, asset types, and text limits.
 * When the user selects a platform (and optionally campaign/asset) in the Ad Copy tab,
 * the app uses these specs to set character limits and recommendations.
 * @see docs/AD_SPECS_PLATFORM_GUIDE.md
 */

import type { AdCopyTextSpecs, AdPlatform, PlatformAdSpec, CopyFieldDefinition } from './types';
import { META_AD_SPECS } from './meta-specs';
import { GOOGLE_ADS_SPEC } from './google-ads-specs';
import { TIKTOK_AD_SPEC } from './tiktok-specs';
import { TWITTER_X_SPEC } from './twitter-x-specs';

export type { AdPlatform, PlatformAdSpec, CampaignTypeOption, AssetTypeOption, AdCopyTextSpecs, TextSpec, CopyFieldDefinition } from './types';

export { META_AD_SPECS, META_PRIMARY_RECOMMENDED, META_HEADLINE_RECOMMENDED, META_DESCRIPTION_RECOMMENDED } from './meta-specs';
export { GOOGLE_ADS_SPEC, GOOGLE_ADS_HEADLINE_MAX, GOOGLE_ADS_DESCRIPTION_MAX } from './google-ads-specs';
export { TIKTOK_AD_SPEC, TIKTOK_AD_TEXT_MAX, TIKTOK_DISPLAY_NAME_MAX } from './tiktok-specs';
export { TWITTER_X_SPEC, TWITTER_X_COPY_MAX } from './twitter-x-specs';

const SPECS: Record<AdPlatform, PlatformAdSpec> = {
  meta: META_AD_SPECS,
  google: GOOGLE_ADS_SPEC,
  tiktok: TIKTOK_AD_SPEC,
  twitter: TWITTER_X_SPEC,
};

/**
 * Returns the full platform spec for the given platform (campaign types, asset types, best practices).
 */
export function getPlatformSpec(platform: AdPlatform) {
  return SPECS[platform];
}

/**
 * Returns the effective copy field definitions for the selected platform and optional campaign/asset.
 * Use this to show which fields exist (Primary text, Headline, Caption, etc.) and their min/max counts.
 */
export function getCopyFieldsForPlatform(
  platform: AdPlatform,
  campaignTypeId?: string | null,
  assetTypeId?: string | null
): CopyFieldDefinition[] {
  const spec = SPECS[platform];
  if (!spec) return [];

  if (assetTypeId) {
    const asset = spec.assetTypes.find((a) => a.id === assetTypeId);
    if (asset?.copyFields?.length) return asset.copyFields;
    if (asset?.textSpecs) return spec.defaultCopyFields ?? [];
  }

  if (campaignTypeId) {
    const campaign = spec.campaignTypes.find((c) => c.id === campaignTypeId);
    if (campaign?.assetTypeIds?.length && !assetTypeId) {
      const firstAssetId = campaign.assetTypeIds[0];
      const asset = spec.assetTypes.find((a) => a.id === firstAssetId);
      if (asset?.copyFields?.length) return asset.copyFields;
    }
  }

  return spec.defaultCopyFields ?? [];
}

/**
 * Returns the effective ad copy text specs for the selected platform and optional campaign/asset.
 * Used by the Ad Copy tab to set max/recommended character limits and hints.
 */
export function getSpecForPlatform(
  platform: AdPlatform,
  campaignTypeId?: string | null,
  assetTypeId?: string | null
): AdCopyTextSpecs {
  const spec = SPECS[platform];
  if (!spec) return {};

  const copyFields = getCopyFieldsForPlatform(platform, campaignTypeId, assetTypeId);
  if (copyFields.length) {
    const out: AdCopyTextSpecs = {};
    for (const f of copyFields) out[f.id] = f.spec;
    return out;
  }

  if (assetTypeId) {
    const asset = spec.assetTypes.find((a) => a.id === assetTypeId);
    if (asset?.textSpecs) return { ...spec.defaultTextSpecs, ...asset.textSpecs };
  }

  if (campaignTypeId) {
    const campaign = spec.campaignTypes.find((c) => c.id === campaignTypeId);
    if (campaign?.assetTypeIds?.length && !assetTypeId) {
      const firstAssetId = campaign.assetTypeIds[0];
      const asset = spec.assetTypes.find((a) => a.id === firstAssetId);
      if (asset?.textSpecs) return { ...spec.defaultTextSpecs, ...asset.textSpecs };
    }
  }

  return spec.defaultTextSpecs;
}

/** Primary field for “generate ad copy” flow: the first copy field (e.g. Primary text, Caption, Headline). */
export function getPrimaryCopyFieldForPlatform(
  platform: AdPlatform,
  campaignTypeId?: string | null,
  assetTypeId?: string | null
): CopyFieldDefinition | null {
  const fields = getCopyFieldsForPlatform(platform, campaignTypeId, assetTypeId);
  return fields.length ? fields[0] : null;
}

/**
 * Returns the effective max character limit for the primary ad copy field
 * (first field: Primary text, Caption, or Headline depending on platform/asset).
 */
export function getPrimaryCopyMaxForPlatform(
  platform: AdPlatform,
  campaignTypeId?: string | null,
  assetTypeId?: string | null
): number {
  const primary = getPrimaryCopyFieldForPlatform(platform, campaignTypeId, assetTypeId);
  if (primary) {
    if (primary.spec.max != null) return primary.spec.max;
    if (primary.spec.recommended != null) return primary.spec.recommended;
  }
  const textSpecs = getSpecForPlatform(platform, campaignTypeId, assetTypeId);
  const fallback = textSpecs.primaryText ?? textSpecs.caption ?? textSpecs.headline;
  if (fallback?.max != null) return fallback.max;
  if (fallback?.recommended != null) return fallback.recommended;
  switch (platform) {
    case 'meta':
      return 125;
    case 'google':
      return 90;
    case 'tiktok':
      return 100;
    case 'twitter':
      return 280;
    default:
      return 125;
  }
}

/**
 * Shared types for platform ad specs.
 * Used so the Ad Copy tab can enforce min/max/recommended per platform, campaign, and asset type.
 * @see docs/AD_SPECS_PLATFORM_GUIDE.md
 */

export type AdPlatform = 'meta' | 'google' | 'tiktok' | 'twitter';

/** Character limit: min/max/recommended for a single field (e.g. primary text, headline). */
export interface TextSpec {
  min?: number;
  max?: number;
  recommended?: number;
  /** Optional note (e.g. "Truncated on mobile after 125 chars") */
  note?: string;
}

/** Specs for ad copy text fields used in validation and UI hints. */
export interface AdCopyTextSpecs {
  /** Primary / body copy (e.g. Meta primary text). */
  primaryText?: TextSpec;
  /** Short headline (e.g. Meta headline, Google headlines). */
  headline?: TextSpec;
  /** Long headline (Google only). */
  longHeadline?: TextSpec;
  /** Description line (e.g. Meta carousel description, Google descriptions). */
  description?: TextSpec;
  /** Business name (Google). */
  businessName?: TextSpec;
  /** Display name / account name (TikTok). */
  displayName?: TextSpec;
  /** Caption / post copy (TikTok ad caption, X post copy / tweet). */
  caption?: TextSpec;
}

/**
 * Definition of one ad copy field (e.g. Headline, Primary Text, Caption).
 * Some platforms allow multiple variations per field (e.g. 15 headlines, 4 descriptions).
 */
export interface CopyFieldDefinition {
  id: keyof AdCopyTextSpecs;
  label: string;
  spec: TextSpec;
  /** Minimum number of variations required (e.g. RSA min 3 headlines). */
  countMin?: number;
  /** Maximum number of variations allowed (e.g. RSA max 15 headlines, Meta max 5 headlines). */
  countMax?: number;
  /** When countMax > 1, this is the recommended number to provide. */
  countRecommended?: number;
}

/** Single campaign type option (e.g. "Performance Max", "Search"). */
export interface CampaignTypeOption {
  id: string;
  label: string;
  /** Optional: asset types valid for this campaign. If empty, use platform defaults. */
  assetTypeIds?: string[];
}

/** Single asset type option (e.g. "Image", "Video", "Carousel"). */
export interface AssetTypeOption {
  id: string;
  label: string;
  /** Explicit list of copy fields for this asset (caption, headline, description, etc.) and their counts. */
  copyFields?: CopyFieldDefinition[];
  /** Legacy: text specs when this asset is selected. Override platform defaults. Used if copyFields not set. */
  textSpecs?: AdCopyTextSpecs;
}

/** Full platform spec: campaign types, asset types, copy fields, best practices. */
export interface PlatformAdSpec {
  platform: string;
  /** Campaign types (e.g. Pmax, Search for Google; Meta may have objective-only). */
  campaignTypes: CampaignTypeOption[];
  /** Asset/creative types (e.g. Image, Video, Carousel for Meta). */
  assetTypes: AssetTypeOption[];
  /** Default copy fields when no asset selected (e.g. single "primary" field for simple flow). */
  defaultCopyFields?: CopyFieldDefinition[];
  /** Legacy: default text specs when no campaign/asset selected. */
  defaultTextSpecs: AdCopyTextSpecs;
  bestPractices: string[];
  /** Official spec URL for reference. */
  sourceUrl?: string;
}

# Ad Specs: Minimum & Best Practices by Platform

This document summarizes **minimum requirements** and **recommendations** for ad copy and creative specs from official sources. When users select a platform in the Ad Copy tab, the app applies these standards automatically.

**Sources (latest as of 2025):**
- **Meta:** [Meta Ads Guide](https://www.facebook.com/business/ads-guide/update) (Image, Video, Carousel, Collection)
- **Google:** [Google Ads specs: ad formats, sizes, and best practices](https://support.google.com/google-ads/answer/13676244?hl=en)
- **X (Twitter):** [Creative ad specifications](https://business.x.com/en/help/campaign-setup/creative-ad-specifications) (Amplify Pre-roll / video)
- **TikTok:** [TikTok Auction In-Feed Ads](https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads?lang=en), [Ad formats](https://ads.tiktok.com/help/category?id=6dGs4bNMAZSdPr4pQ0KFuX)

---

## Ad copy field types and multiplicity (summary)

Each platform exposes different **ad copy fields** (e.g. Primary text, Headline, Description, Caption). Some fields support **multiple variations per ad** (e.g. Meta allows up to 5 primary text and 5 headlines; Google Responsive Search Ads allow 15 headlines and 4 descriptions). The app uses this to show the right labels and enforce min/max counts when generating copy.

| Platform | Copy fields (typical) | Multiplicity (min–max per field) | Notes |
|----------|------------------------|-----------------------------------|--------|
| **Meta** | Primary text, Headline, Description | Primary: 1–5, Headline: 1–5, Description: 0–1 | Image/Video: 3–5 variations each for primary & headline. Carousel: headline & description per card (2–10 cards). |
| **Google** | Headline, Long headline, Description, Business name | Varies by format. RSA: Headlines 3–15, Descriptions 2–4. Pmax: Headlines 3–15, Long 1–5, Descriptions 2–5. | Some formats have no long headline. Display: 5 headlines, 1 long headline, 5 descriptions. |
| **TikTok** | **Caption** (ad caption), Account name | Caption: 1, Account name: 0–1 | In-feed has no separate “headline”; main copy is the caption. Spark: caption from organic (max 4 lines). |
| **X (Twitter)** | **Caption** (post copy), Headline (some formats) | Post copy: 1 (280 chars), Headline: 0–1 (23 chars in Conversation/pre-populated) | Standard promoted tweet = post copy only. Bio: 160 chars. |

- **Meta:** Primary text, Headline, Description. Up to **5 primary text** and **5 headline** options per ad; **1 description** (optional).
- **Google:** Headline(s), Long headline (where applicable), Description(s), Business name. **Responsive Search Ad:** 3–15 headlines (30 chars), 2–4 descriptions (90 chars). **Performance Max:** 3–15 headlines, 1–5 long headlines, 2–5 descriptions.
- **TikTok:** **Caption** only for standard in-feed (no headline); optional Account name. Spark Ads use organic caption (max 4 lines).
- **X:** **Post copy** (caption) 280 characters; in Conversation Button / pre-populated formats, **Headline** 23 characters.

---

## 1. Meta (Facebook / Instagram)

Meta uses **objectives** (Awareness, Traffic, Engagement, Leads, App promotion, Sales) across placements. Specs are defined mainly by **ad format (asset type)**, not by a separate “campaign type” in the creative sense.

### Campaign / objective (same across formats)

- Awareness, Traffic, Engagement, Leads, App promotion, Sales.

### Type of assets (formats)

| Asset type | Use case |
|------------|----------|
| **Image** | Single image ads in Feed, Stories, Reels, etc. |
| **Video** | Single video ads in Feed, In-Stream, Reels, etc. |
| **Carousel** | Multiple images or videos (cards) in one ad. |
| **Collection** | Instant experience with cover image/video + product grid. |

### Ad copy & creative specs (minimum & recommendations)

#### Image ads (e.g. Facebook Feed)

| Spec | Minimum | Recommended | Notes |
|------|---------|-------------|------|
| **Primary text** | — | 50–150 characters | Truncated after ~125 chars on mobile. |
| **Headline** | — | 27 characters | Max 40 in some placements. |
| **Description** | — | — | Optional. |
| **File type** | — | JPG or PNG | — |
| **Aspect ratio** | 1.91:1 to 4:5 | 1:1 or 4:5 | 1:1 → 1440×1440; 4:5 → 1440×1800. |
| **Resolution** | 600px min width | 1440×1440 (1:1) or 1440×1800 (4:5) | 1:1 min height 600; 4:5 min height 750. |
| **File size** | — | — | Max 30 MB. |
| **Aspect ratio tolerance** | — | 3% | — |

#### Video ads (e.g. Facebook Feed)

| Spec | Minimum | Recommended | Notes |
|------|---------|-------------|------|
| **Primary text** | — | 50–150 characters | Same as image. |
| **Headline** | — | 27 characters | Same as image. |
| **File type** | — | MP4, MOV or GIF | — |
| **Aspect ratio** | — | 1:1 (desktop/mobile) or 4:5 (mobile only) | — |
| **Resolution** | 120×120 px | 1440×1440 (1:1) or 1440×1800 (4:5) | — |
| **Video duration** | 1 second | — | Max 241 minutes. |
| **File size** | — | — | Max 4 GB. |
| **Video settings** | — | H.264, square pixels, fixed frame rate, progressive scan; AAC stereo 128 kbps+ | — |
| **Captions / sound** | Optional | Recommended | — |

#### Carousel ads

| Spec | Minimum | Recommended | Notes |
|------|---------|-------------|------|
| **Primary text** | — | 80 characters | — |
| **Headline** | — | 45 characters | Per card. |
| **Description** | — | 18 characters | Per card. |
| **Landing page URL** | Required | — | — |
| **Number of cards** | 2 | 10 | — |
| **Image file** | — | JPG or PNG | Max 30 MB per image. |
| **Video file** | — | MP4, MOV or GIF | Max 4 GB; 1 s–240 min. |
| **Ratio** | — | 1:1 or 4:5 | — |
| **Resolution** | — | At least 1080×1080 | — |
| **Aspect ratio tolerance** | — | 3% | — |

### Best practices (Meta)

- Lead with benefit, not feature.
- Use numbers and specifics.
- Include social proof when possible.
- Test emoji vs no-emoji.
- Keep primary text in the 50–150 range; shorter often works better on mobile.

---

## 2. Google Ads

Google specs are defined by **campaign type** and **asset type** (text, image, video). Performance Max (Pmax) and Demand Gen are asset-heavy; Search is text/headline/description-focused.

### Type of campaign

| Campaign type | Description |
|---------------|-------------|
| **Performance Max (Pmax)** | Single campaign across Search, Display, YouTube, Discover, Gmail, Maps. Asset-based. |
| **Search** | Text/responsive search ads (RSA), ad assets, business info. |
| **Display** | Responsive display ads (asset-based). |
| **Demand Gen** | Feed-style ads on YouTube, Gmail Promotions, Discover. |
| **App campaigns** | Promote apps across Search, Play, YouTube, Discover, GDN. |

### Type of assets (by campaign)

- **Pmax:** Headlines, long headline, descriptions, business name, CTA, final URL, images (horizontal 1.91:1, square 1:1, vertical 4:5), logos (1:1, 4:1), video (16:9, 1:1, 9:16).
- **Search (RSA):** Headlines, descriptions, final URL.
- **Search (ad assets):** Headlines, descriptions, images (1:1, 1.91:1), business name, CTA.
- **Display (responsive):** Headlines, long headline, descriptions, images, logos, video.
- **Demand Gen:** Headlines, descriptions, business name, CTA, images, logos, video.
- **App:** Headlines, descriptions, images (1.91:1, 4:5, 1:1), video (16:9, 9:16, 1:1).

### Ad copy & asset specs (minimum & recommended)

#### Performance Max

| Asset | Min | Max / recommended | Required |
|------|-----|-------------------|----------|
| **Headlines** | 3 | 15; 30 chars each; ≥1 with ≤15 chars | ✓ |
| **Long headline** | 1 | 5; 90 chars | ✓ |
| **Descriptions** | 2 | 5; 90 chars | ✓ |
| **Business name** | 1 | 25 chars | ✓ |
| **Call to action** | 1 | Automated or list | ✓ |
| **Final URL** | 1 | 2048 chars | ✓ |
| **Display URL path** | 0 | 2; 15 chars each | ✗ |
| **Image horizontal 1.91:1** | 1 | 20; 1200×628 rec, 600×314 min; 5 MB | ✓ |
| **Image square 1:1** | 1 | 20; 1200×1200 rec, 300×300 min; 5 MB | ✓ |
| **Image vertical 4:5** | 0 | 20; 960×1200 rec, 480×600 min | ✗ |
| **Logo 1:1** | 1 | 5; 1200×1200 rec, 128×128 min; 5 MB | ✓ |
| **Logo 4:1** | 0 | 5; 1200×300 rec, 512×128 min | ✗ |
| **Video** | 0 | 5; 10+ seconds; 16:9, 1:1, 9:16 | ✗ (can be auto-generated) |

#### Search – Responsive search ads (RSA)

| Asset | Min | Max | Required |
|------|-----|-----|----------|
| **Headlines** | 1 | 15; 30 characters each | ✓ |
| **Descriptions** | 1 | 4; 90 characters each | ✓ |
| **Final URL** | 0 | 2048 characters | — |

#### Search – Ad assets / business info

| Asset | Min | Max | Required |
|------|-----|-----|----------|
| **Headlines** | 1 | 20; 25 characters each (rec 4) | ✓ |
| **Descriptions** | 0 | 5; 90 characters (rec 4) | ✗ |
| **Business name** | 1 | 25 characters | ✓ |
| **Final URL** | 1 | 2048 characters | ✓ |
| **Images square 1:1** | 1 | 20; 1200×1200 rec, 300×300 min | ✓ |
| **Images horizontal 1.91:1** | 0 | 20; 1200×628 rec, 600×314 min | ✗ |

#### Demand Gen

| Asset | Min | Max / recommended | Required |
|------|-----|-------------------|----------|
| **Headlines** | 1 | 5; 40 characters | ✓ |
| **Descriptions** | 1 | 5; 90 characters (rec 3) | ✓ |
| **Business name** | 1 | 25 characters | ✓ |
| **Final URL** | 1 | 2048 characters | ✓ |
| **Images** | 1 | 20; horizontal 1.91:1, square 1:1, vertical 4:5; logo 1:1 | ✓ (images) |
| **Videos** | 0 | 3; 10–60 s; 16:9, 9:16/4:5, 1:1 | ✗ |

#### Display (responsive display)

| Asset | Min | Max / recommended | Required |
|------|-----|-------------------|----------|
| **Headlines** | 1 | 5; 30 characters | ✓ |
| **Long headline** | 1 | 90 characters | ✓ |
| **Descriptions** | 1 | 5; 90 characters | ✓ |
| **Business name** | 1 | 25 characters | ✓ |
| **Images** | 1 | 15; 1.91:1, 1:1; logos 1:1, 4:1 | ✓ |
| **Videos** | 0 | 5; preferred 30 s; 16:9, 1:1, 2:3 | ✗ |

#### App campaigns

| Asset | Min | Max / recommended | Required |
|------|-----|-------------------|----------|
| **Headlines** | 1 | 5; 30 characters (rec 5) | ✓ |
| **Descriptions** | 1 | 5; 90 characters (rec 5) | ✓ |
| **Images** | 0 | 20; 1.91:1, 4:5, 1:1; 5 MB; rec min 1 | ✗ |
| **Videos** | 0 | 20; 10–60 s; 16:9, 9:16, 1:1 | ✗ |

### Best practices (Google)

- Include keywords in headlines where natural (Search).
- Lead with benefit and clear CTA.
- Use numbers and specifics.
- Match message to landing page.
- For Pmax: add 11+ headlines (at least one ≤15 chars), 2+ long headlines, 4+ descriptions for better strength.

---

## 3. X (Twitter)

X creative specs are often **placement-/product-specific** (e.g. Amplify Pre-roll). Campaign “type” is less about a separate creative structure and more about placement (Promoted Tweets, Promoted Account, Takeover, Amplify Pre-roll).

### Type of campaign / placement

| Type | Description |
|------|-------------|
| **Promoted Tweets** | Organic-style tweets promoted to a target audience. |
| **Promoted Account** | Promote @handle; bio and profile assets. |
| **Takeover** | Homepage or high-impact placements. |
| **Amplify Pre-roll** | Pre-roll video before premium publisher content. |

### Type of assets

| Asset type | Use case |
|------------|----------|
| **Text (Tweet)** | Copy for Promoted Tweets; 280 characters (same as organic). |
| **Account / bio** | For Promoted Account; bio max 160 characters. |
| **Video (Pre-roll)** | For Amplify Pre-roll and video placements. |

### Ad copy & creative specs

#### Promoted Tweet (text)

| Spec | Minimum | Maximum / recommended |
|------|---------|------------------------|
| **Tweet copy** | — | 280 characters (same as organic) |

#### Amplify Pre-roll (video)

| Spec | Minimum | Recommended | Maximum |
|------|---------|-------------|---------|
| **File size** | — | — | 1 GB |
| **Video length** | — | 15 seconds | 2 min 20 s |
| **File types** | — | MP4 or MOV | — |
| **Aspect ratio** | 640×360 (16:9) | 1:1 (1200×1200) | — |
| **Video size (1:1)** | 600×600 | 1200×1200 | — |
| **Video bitrate** | — | 6000–10000 kbps (1080p), 5000–8000 (720p) | — |
| **Frame rate** | — | 29.97 or 30 FPS | — |
| **Audio codec** | — | AAC LC | — |
| **Video codec** | — | H.264, baseline/main/high, 4:2:0 | — |
| **URL** | — | Optional; must start with http:// or https:// | — |
| **Captions** | — | Strongly recommended | — |

### Best practices (X)

- Concise, punchy copy.
- Hashtags sparingly (1–3).
- Strong hook in first line.
- Clear CTA.

---

## 4. TikTok

TikTok structures specs by **placement / product** (In-feed, TopView, Spark, Carousel, etc.) and **asset type** (video, caption, profile). “Campaign type” often maps to objective (Reach, Traffic, Video views, Conversions, etc.); creative specs are driven by **format/placement**.

### Type of campaign / objective

- Reach, Traffic, Video views, Community interaction, App promotion, Lead generation, Sales (e.g. Catalog, TikTok Shop, Website).

### Type of assets / placement

| Asset / placement | Description |
|-------------------|-------------|
| **In-feed (standard)** | Non-Spark in-feed video (single video ad). |
| **Spark Ads** | Use organic post as creative; caption from post, max 4 lines. |
| **TopView** | First view on open; reservation. |
| **Carousel** | Multiple images/cards in one ad. |
| **Playable** | Interactive playable ads. |

### Ad copy & creative specs (In-feed)

#### Spark Ads

| Spec | Minimum | Maximum / recommended |
|------|---------|------------------------|
| **Ad captions** | From organic video | Max 4 lines (including emojis) |
| **Video format** | — | .mp4 or .mov |
| **Video duration** | — | No restriction |

#### Non-Spark In-feed

| Spec | Minimum | Maximum / recommended |
|------|---------|------------------------|
| **Dimensions** | Vertical 540×960 (9:16); Horizontal 960×540 (16:9); Square 640×640 (1:1) | Vertical 9:16 recommended |
| **File formats** | — | .mp4, .mov, .mpeg, .3gp, .avi |
| **Video duration** | — | Up to 10 minutes |
| **File size** | — | ≤ 500 MB |
| **Bitrate** | ≥ 516 kbps | — |
| **Ad captions** | — | White, uniform font; no clickable links, @, or # |
| **Profile photo** | Optional | 98×98 px, 1:1; .jpg, .jpeg, .png; &lt; 50 KB |
| **Account name** | — | 1 line: 10 chars (CJK) or 20 chars (others) |

### Best practices (TikTok)

- Hook in the first 3 seconds.
- Casual, conversational tone.
- Clear CTA.
- Emoji in moderation.
- For Spark Ads: focus on hook in first 3 seconds; copy comes from organic post.

---

## How the app uses this

- **Platform selection:** User chooses **Meta**, **Google**, **X**, or **TikTok** in the Ad Copy tab.
- **Campaign type (where applicable):** e.g. Google → Performance Max, Search, Display, Demand Gen, App. Meta typically uses the same objectives; format is chosen via **asset type** (Image, Video, Carousel).
- **Asset type:** e.g. Meta → Image / Video / Carousel; Google → Text + Image / Video; TikTok → In-feed / Spark; X → Promoted Tweet / Video.
- **Automatic application:** Character limits (primary text, headline, description), recommended lengths, and hints in the UI are set from the specs above so generated copy stays within platform requirements and best practices.

See `Extensions/lib/platforms/` for the programmatic definitions and `index.ts` for `getSpecForPlatform(platform, campaignType?, assetType?)`.

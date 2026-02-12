# Technical Specifications
## AdLens v1.0 — MVP

**Date:** February 12, 2026
**Stack Philosophy:** Modern, vibecoding-friendly, actively maintained

---

## 1. Architecture Overview

```
┌──────────────────────────────────────────────┐
│                CHROME BROWSER                 │
│                                               │
│  ┌─────────────┐    ┌──────────────────────┐ │
│  │ Side Panel   │    │  Content Script      │ │
│  │ (React UI)   │◄──►│  (Screenshot capture │ │
│  │              │    │   + context detect)   │ │
│  └──────┬───────┘    └──────────────────────┘ │
│         │                                      │
│  ┌──────▼───────┐                              │
│  │ Background   │                              │
│  │ Service      │                              │
│  │ Worker       │                              │
│  └──────┬───────┘                              │
└─────────┼──────────────────────────────────────┘
          │
    ┌─────▼─────┐       ┌──────────────┐
    │ AI API    │       │  Supabase    │
    │ (OpenAI/  │       │  (Auth +     │
    │  Claude)  │       │   License)   │
    └───────────┘       └──────────────┘
```

---

## 2. Tech Stack

### Extension Framework: WXT (Web Extension Toolkit) ✅

**BUKAN Plasmo.** Alasan pergantian:

| Criteria | Plasmo | WXT | Winner |
|----------|--------|-----|--------|
| Maintenance Status | Concerning — community reports low activity | Active, healthy community | WXT |
| Build System | Custom bundler | Vite-based (faster, modern) | WXT |
| Framework Support | React-focused | Framework-agnostic (React, Vue, Svelte) | WXT |
| HMR Quality | React only | All frameworks + background workers | WXT |
| Maturity | Still self-labeled "alpha" | Production-ready | WXT |
| Auto-imports | No | Yes (DX boost) | WXT |
| File-based Entrypoints | Yes | Yes | Tie |

**Source:** "The 2025 State of Browser Extension Frameworks" comparative analysis

### Full Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Extension Framework | **WXT** (wxt.dev) | Best maintained, Vite-based, framework-agnostic |
| UI Library | **React 18** + **Tailwind CSS** + **shadcn/ui** | Fast iteration, clean components |
| AI Provider (BYOK) | **OpenAI API** (GPT-4o with vision) | Best vision model, widely available API keys |
| AI Provider (BYOK alt) | **Anthropic API** (Claude Sonnet) | Text-focused alternative, good for copy |
| Backend/Auth | **Supabase** (free tier) | Auth + Postgres + Edge Functions |
| License Management | **Supabase DB** + custom validation | Simple license key check |
| Landing Page | **Next.js** on Vercel OR **Lovable/Bolt** | Fast to build, professional look |
| Payment | **Xendit** (Indonesia) / **Lemonsqueezy** (Global) | IDR support, local payment methods |
| Analytics | **Mixpanel** free tier or **PostHog** | Product analytics, funnel tracking |

---

## 3. Extension Structure (WXT)

```
adlens/
├── .wxt/                       # WXT generated config
├── assets/
│   ├── icon-16.png
│   ├── icon-48.png
│   └── icon-128.png
├── entrypoints/
│   ├── sidepanel/              # Main UI
│   │   ├── index.html
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── components/
│   │       ├── AdCopyGenerator.tsx
│   │       ├── DataLens.tsx
│   │       ├── PlatformSelector.tsx
│   │       ├── ImageUploader.tsx
│   │       ├── OutputCard.tsx
│   │       ├── SettingsPanel.tsx
│   │       └── LicenseGate.tsx
│   ├── popup/                  # Quick settings popup
│   │   ├── index.html
│   │   └── App.tsx
│   ├── background.ts           # Service worker
│   └── content.ts              # Content script (screenshot + context)
├── lib/
│   ├── ai/
│   │   ├── openai.ts           # OpenAI API wrapper
│   │   ├── anthropic.ts        # Claude API wrapper
│   │   ├── vision.ts           # Image analysis handler
│   │   └── prompts/
│   │       ├── adcopy-tiktok.ts
│   │       ├── adcopy-meta.ts
│   │       └── datalens.ts
│   ├── platforms/
│   │   ├── tiktok-specs.ts     # TikTok ad format rules
│   │   └── meta-specs.ts       # Meta ad format rules
│   ├── auth/
│   │   ├── license.ts          # License key validation
│   │   └── supabase.ts         # Supabase client
│   ├── storage.ts              # Chrome storage wrapper
│   └── utils.ts
├── public/
│   └── sidepanel.html
├── wxt.config.ts               # WXT configuration
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 4. Key Technical Implementations

### 4a. Side Panel Setup (WXT)

```typescript
// wxt.config.ts
import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: 'AdLens - AI Marketing Copilot',
    description: 'AI-powered ad copy generator & data analyst for marketers',
    permissions: [
      'sidePanel',
      'activeTab',
      'storage',
      'clipboardRead',
    ],
    side_panel: {
      default_path: 'sidepanel/index.html',
    },
    action: {
      default_title: 'Open AdLens',
    },
  },
});
```

### 4b. Vision-Powered Ad Copy (Core Logic)

```typescript
// lib/ai/vision.ts
export async function analyzeCreativeImage(
  imageBase64: string,
  apiKey: string,
  provider: 'openai' | 'anthropic'
): Promise<CreativeAnalysis> {
  if (provider === 'openai') {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image_url',
              image_url: { url: `data:image/jpeg;base64,${imageBase64}` }
            },
            {
              type: 'text',
              text: CREATIVE_ANALYSIS_PROMPT
            }
          ]
        }],
        max_tokens: 500,
      }),
    });
    return parseCreativeAnalysis(await response.json());
  }
  // Anthropic implementation...
}
```

### 4c. Platform Specs Library

```typescript
// lib/platforms/tiktok-specs.ts
export const TIKTOK_AD_SPECS = {
  platform: 'TikTok',
  formats: {
    inFeedAd: {
      adText: { min: 1, max: 100, recommended: '12-80 characters' },
      displayName: { max: 40 },
      cta: [
        'Shop Now', 'Learn More', 'Sign Up', 'Download',
        'Contact Us', 'Apply Now', 'Book Now', 'Get Quote',
      ],
    },
    topViewAd: {
      adText: { min: 1, max: 100 },
      displayName: { max: 40 },
    },
    sparkAd: {
      // Uses organic post, no separate copy limits
      note: 'Copy from original post. Focus on hook in first 3 seconds.',
    },
  },
  bestPractices: [
    'Hook dalam 3 detik pertama',
    'Gunakan bahasa casual/conversational',
    'Include CTA yang jelas',
    'Emoji boleh, tapi jangan berlebihan',
  ],
};

// lib/platforms/meta-specs.ts
export const META_AD_SPECS = {
  platform: 'Meta (Facebook/Instagram)',
  formats: {
    singleImage: {
      primaryText: { recommended: 125, max: null, note: 'Truncated after ~125 chars on mobile' },
      headline: { recommended: 40, max: null },
      description: { recommended: 30, max: null },
    },
    carousel: {
      primaryText: { recommended: 125 },
      headline: { recommended: 40, perCard: true },
      description: { recommended: 20, perCard: true },
    },
    reels: {
      primaryText: { recommended: 72, note: 'Shorter = better for mobile' },
      headline: { recommended: 40 },
    },
  },
  bestPractices: [
    'Lead with benefit, not feature',
    'Use numbers and specifics',
    'Include social proof when possible',
    'Test emoji vs no-emoji variants',
  ],
};
```

### 4d. Screenshot Capture (Data Lens)

```typescript
// entrypoints/content.ts
export default defineContentScript({
  matches: ['<all_urls>'],
  main() {
    // Listen for screenshot request from side panel
    browser.runtime.onMessage.addListener(async (message) => {
      if (message.type === 'CAPTURE_SCREENSHOT') {
        // Use Chrome's captureVisibleTab API via background
        const response = await browser.runtime.sendMessage({
          type: 'TAKE_SCREENSHOT'
        });
        return response;
      }
    });
  },
});

// entrypoints/background.ts
export default defineBackground(() => {
  browser.runtime.onMessage.addListener(async (message, sender) => {
    if (message.type === 'TAKE_SCREENSHOT') {
      const tab = await browser.tabs.query({ active: true, currentWindow: true });
      const dataUrl = await browser.tabs.captureVisibleTab(null, {
        format: 'jpeg',
        quality: 85
      });
      return { screenshot: dataUrl };
    }
  });

  // Open side panel on extension icon click
  browser.action.onClicked.addListener((tab) => {
    browser.sidePanel.open({ tabId: tab.id });
  });
});
```

### 4e. License Key Validation

```typescript
// lib/auth/license.ts
export async function validateLicenseKey(key: string): Promise<LicenseResult> {
  const { data, error } = await supabase
    .from('licenses')
    .select('*')
    .eq('key', key)
    .eq('status', 'active')
    .single();

  if (error || !data) {
    return { valid: false, reason: 'Invalid or expired license key' };
  }

  // Check device limit (1 key = max 2 devices)
  if (data.devices_used >= data.max_devices) {
    return { valid: false, reason: 'Device limit reached. Contact support.' };
  }

  // Register device
  await supabase.from('license_devices').insert({
    license_id: data.id,
    device_fingerprint: await getDeviceFingerprint(),
    activated_at: new Date().toISOString(),
  });

  // Store in extension storage
  await browser.storage.local.set({
    license: { key, tier: data.tier, valid_until: data.valid_until }
  });

  return { valid: true, tier: data.tier };
}
```

---

## 5. Data Flow Diagrams

### Ad Copy Generation Flow
```
User Input (Image + Form)
    ↓
[Vision AI] ← Analyze image → Creative Context
    ↓
[Prompt Builder] ← Platform specs + user preferences
    ↓
[LLM API Call] (OpenAI / Claude)
    ↓
[Output Parser] → Validate char limits per platform
    ↓
[Display in Side Panel] → Copy buttons
```

### Data Lens Flow
```
User Trigger (Screenshot / Paste)
    ↓
[chrome.tabs.captureVisibleTab] OR [Clipboard read]
    ↓
[Image/Text preprocessing]
    ↓
[Vision AI] ← Marketing-specific analysis prompt
    ↓
[Structured Output] → Key Trends, Anomalies, Why, So What
    ↓
[Display in Side Panel] → Copy / Export
```

---

## 6. Database Schema (Supabase)

```sql
-- Licenses
CREATE TABLE licenses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key VARCHAR(32) UNIQUE NOT NULL,
  email VARCHAR(255) NOT NULL,
  tier VARCHAR(20) NOT NULL CHECK (tier IN ('byok', 'managed_basic', 'managed_pro')),
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'expired', 'revoked')),
  max_devices INT DEFAULT 2,
  devices_used INT DEFAULT 0,
  purchased_at TIMESTAMP DEFAULT now(),
  valid_until TIMESTAMP, -- NULL for lifetime
  created_at TIMESTAMP DEFAULT now()
);

-- Device tracking
CREATE TABLE license_devices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  license_id UUID REFERENCES licenses(id),
  device_fingerprint VARCHAR(64),
  activated_at TIMESTAMP DEFAULT now(),
  last_active TIMESTAMP DEFAULT now()
);

-- Usage tracking (for managed tier)
CREATE TABLE usage_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  license_id UUID REFERENCES licenses(id),
  feature VARCHAR(20) CHECK (feature IN ('adcopy', 'datalens')),
  tokens_used INT,
  model VARCHAR(50),
  created_at TIMESTAMP DEFAULT now()
);

-- Managed tier credits
CREATE TABLE managed_credits (
  license_id UUID PRIMARY KEY REFERENCES licenses(id),
  credits_remaining INT DEFAULT 0,
  credits_total INT DEFAULT 0,
  reset_at TIMESTAMP -- monthly reset
);
```

---

## 7. Security Considerations

1. **API Key Storage:** Encrypted in `chrome.storage.local` with user-specific salt. Never transmitted to our servers.
2. **License Validation:** Server-side check via Supabase Edge Function. Rate-limited to prevent brute force.
3. **Screenshot Data:** Processed client-side for BYOK. For managed tier, sent via HTTPS to Supabase Edge Function → AI API → deleted after response. Never stored.
4. **Permissions:** Minimal Chrome permissions. `activeTab` only (not `<all_urls>` for data access).

---

## 8. Development Roadmap

| Phase | Duration | Deliverable |
|-------|----------|------------|
| Setup | Week 1 | WXT project init, Tailwind + shadcn, basic Side Panel |
| Core UI | Week 2 | Ad Copy form, Data Lens UI, settings panel |
| AI Integration | Week 3 | OpenAI Vision API, prompt engineering, output formatting |
| Platform Library | Week 3-4 | TikTok + Meta specs, char limit validation |
| Screenshot | Week 4 | captureVisibleTab, image preprocessing |
| Auth | Week 5 | Supabase setup, license key system |
| Polish | Week 5-6 | Error handling, loading states, onboarding flow |
| Landing Page | Week 6 | Sales page + payment integration (Xendit) |
| Beta Test | Week 7-8 | 10-20 beta testers (free), collect feedback |

**Total Estimated: 6-8 weeks (vibecoding with Cursor/Claude Code)**

---

## 9. Known Technical Risks

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Vision API latency (2-5s) | Poor UX | Streaming responses + skeleton loading |
| Chrome MV3 restrictions tightening | Feature breakage | Follow WXT updates, stay within MV3 spec |
| API key exposure in extension | Security breach | Encrypt storage, never log keys |
| Screenshot quality varies | Bad AI analysis | Warn user if resolution too low |
| WXT breaking changes | Dev delay | Pin dependency versions, follow changelog |

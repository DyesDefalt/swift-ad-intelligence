# Branding & Visual Identity
## AdLens — AI Marketing Copilot

**Date:** February 12, 2026
**Brand Direction:** Professional, Fast, Clean, Trustworthy

---

## 1. Naming Analysis

### Recommended: **AdLens**

| Name | Pros | Cons | Verdict |
|------|------|------|---------|
| **AdLens** | Short, memorable, implies clarity + focus, covers both ad copy (Ad) and data analysis (Lens) | Possible trademark conflict — VERIFY | ✅ Best option |
| **Copilens** | Unique, "copilot + lens" | Sounds like contact lens brand | ❌ |
| **MarketerFlow** | Descriptive | Too long, generic | ❌ |
| **AdFlow** | Short | Too generic, many existing products | ❌ |
| **BidLens** | Performance marketing angle | Too niche (bidding only) | ❌ |
| **Flashcopy** | Implies speed | Ignores Data Lens feature | ❌ |

**ACTION REQUIRED:** Cek trademark "AdLens" di:
- DJKI (Direktorat Jenderal Kekayaan Intelektual) Indonesia
- USPTO (jika ingin expand ke US market)
- Google search + Chrome Web Store search

**Tagline Options:**
1. **"Marketer punya senjata baru."** (Bold, Indonesia-first)
2. **"From screen to insight. From image to copy."** (Descriptive, bilingual)
3. **"AI di browser, bukan di tab lain."** (Problem-aware)

---

## 2. Visual Identity

### Design Philosophy
**Keywords:** Professional, Simple, Fast, Clean, Neat, Trustworthy

**Mood:** Seperti tool yang dipakai agency top — bukan mainan, bukan juga enterprise boring. Think: linear.app meets Figma sidebar. Precision tanpa kesan cold.

### Color Palette

```
Primary:        #2563EB  (Blue 600 — Trust, Professional, Tech)
Primary Dark:   #1D4ED8  (Blue 700 — Hover states, depth)
Accent:         #10B981  (Emerald 500 — Growth, Data, Success)
Accent Warm:    #F59E0B  (Amber 500 — Alerts, highlights, urgency)

Background:
  Light Mode:   #FFFFFF  (White)
  Surface:      #F8FAFC  (Slate 50 — Cards, panels)
  Border:       #E2E8F0  (Slate 200)

  Dark Mode:    #0F172A  (Slate 900 — Primary bg)
  Surface Dark: #1E293B  (Slate 800 — Cards, panels)
  Border Dark:  #334155  (Slate 700)

Text:
  Primary:      #0F172A  (Slate 900) / #F8FAFC (Dark mode)
  Secondary:    #64748B  (Slate 500) / #94A3B8 (Dark mode)
  Muted:        #94A3B8  (Slate 400)
```

**Why NOT purple/gradient (yang umum di AI tools):**
- MaxAI, Sider, Monica semua pakai ungu/gradient → kita DIFERENSIASI dengan blue yang solid dan clean
- Blue = trust + professional. Marketer handle budget client, mereka butuh merasa "safe"
- Emerald accent = "growth" signal, cocok untuk data/performance context

### Typography

```
Heading Font:    "Plus Jakarta Sans" (Google Fonts)
                 — Modern, geometric, designed by Indonesian foundry
                 — Distinctive tanpa over-designed
                 — Weights: 600 (semibold), 700 (bold)

Body Font:       "Plus Jakarta Sans" (same family)
                 — Weights: 400 (regular), 500 (medium)
                 — Excellent readability di side panel (small space)

Monospace:       "JetBrains Mono" (for character counts, data)
                 — Clean, distinctive numerals
```

**Why Plus Jakarta Sans:**
- Dirancang oleh Tokotype, foundry Indonesia — brand story yang otentik
- Modern geometric sans-serif, professional tapi tidak boring
- Excellent di small sizes (penting untuk side panel)
- Free di Google Fonts

### Icon Style
- **Lucide React** icon set (clean lines, consistent stroke width)
- Stroke width: 1.5px (lighter feel, professional)
- Icon size in UI: 16px (inline), 20px (buttons), 24px (navigation)

---

## 3. Extension UI Design Specs

### Side Panel Dimensions
- **Width:** 360px (Chrome default side panel width)
- **Padding:** 16px (comfortable, not cramped)
- **Card Padding:** 12px internal

### Component Specs

```
┌─────────────────────────────────┐
│  🔷 AdLens                  ⚙️  │  ← Header: 48px height
├─────────────────────────────────┤
│                                 │
│  ┌─────────┐  ┌─────────┐     │
│  │  📝 Ad   │  │ 📊 Data │     │  ← Mode tabs: 40px
│  │  Copy    │  │  Lens   │     │
│  └─────────┘  └─────────┘     │
│                                 │
│  ┌─────────────────────────┐   │
│  │ Platform: [TikTok ▼]    │   │  ← Dropdown: 36px height
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │                          │   │
│  │   📷 Drop image here     │   │  ← Upload area: 120px
│  │   or click to browse     │   │
│  └─────────────────────────┘   │
│                                 │
│  Product: [_______________]    │  ← Input: 36px height
│  Message: [_______________]    │
│  Funnel:  [Awareness ▼]       │
│  Tone:    [Casual ▼]          │
│                                 │
│  ┌─────────────────────────┐   │
│  │     ✨ Generate Copy      │   │  ← Primary CTA: 44px
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ Variasi 1          📋    │   │  ← Output card
│  │ "Mau kulit glowing..."   │   │
│  │ 72 chars ✅ TikTok       │   │
│  ├─────────────────────────┤   │
│  │ Variasi 2          📋    │   │
│  │ "Rahasia kulit sehat..." │   │
│  │ 68 chars ✅ TikTok       │   │
│  └─────────────────────────┘   │
│                                 │
└─────────────────────────────────┘
```

### Visual States

| State | Visual Treatment |
|-------|-----------------|
| Loading | Skeleton shimmer (slate-200 pulse) + "Generating..." text |
| Success | Output cards fade in with subtle slide-up (150ms) |
| Error | Red border on relevant field + inline error message |
| Empty | Illustration + "Start by uploading your creative" |
| Character Limit OK | ✅ Green badge with count |
| Character Limit Warning | ⚠️ Amber badge (>90% of limit) |
| Character Limit Over | ❌ Red badge + strikethrough excess |

### Dark Mode (Default)
- Default to dark mode (marketer preference, matches Ads Manager dark themes)
- Toggle available in settings
- All colors shift to dark palette variants

---

## 4. Landing Page / Website Direction

### Homepage Structure

```
[Hero Section]
  Headline: "AI Copilot khusus Digital Marketer Indonesia"
  Subheadline: "Generate ad copy dari gambar. Analisa data dari screenshot.
               Langsung di browser, tanpa pindah tab."
  CTA: "Dapatkan Akses Awal — Rp 299.000" (with scarcity: "87/100 tersisa")
  Visual: Side panel mockup floating next to Ads Manager screenshot

[Problem Section]
  "Masih copy-paste antara ChatGPT dan Ads Manager?"
  3 pain points with icons

[Demo Section]
  GIF/Video showing: Upload image → Get copy → One-click copy
  GIF/Video showing: Screenshot dashboard → Get insight

[Features Grid]
  📝 Ad Copy Generator    📊 Data Lens
  🎯 Platform-Aware       🔑 BYOK (API Key Sendiri)
  🇮🇩 Bahasa Indonesia    ⚡ Langsung di Browser

[Pricing Section]
  Tiered cards with early access pricing

[Social Proof]
  Testimonials from beta users (collect during beta)
  "Dipercaya oleh marketer dari [agencies]"

[FAQ]
[Footer]
```

### Website Visual Style
- Same color palette as extension
- Plus Jakarta Sans typography
- Dark hero section (matches extension dark mode)
- Light content sections (readability)
- Subtle grid pattern background on hero
- No generic stock photos — use actual product screenshots and mockups

---

## 5. Logo Direction

### Concept: Lens + Play Button
- Geometric mark combining a "lens/circle" shape with a subtle "play/forward arrow"
- Represents: seeing clearly (lens) + taking action (arrow)
- Simple enough to work at 16px (extension icon) and large (website hero)

### Specifications
- Primary: Blue (#2563EB) mark + "AdLens" wordmark in Plus Jakarta Sans Bold
- Monochrome: White on dark / Dark on white
- Icon only: Used for extension icon (16px, 48px, 128px)
- Clear space: Minimum 50% of mark height on all sides

### Extension Icon Sizes
- 16×16px: Simplified mark only (toolbar)
- 48×48px: Mark with subtle detail (extension management)
- 128×128px: Full mark (Chrome Web Store listing)

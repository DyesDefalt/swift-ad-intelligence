# GAPAH — Brand Naming, Domain & Identity Strategy

## 🏆 Primary Recommendation: **GAPAH**

### Kenapa "Gapah"?

**Definisi KBBI:** *gapah* — adjektiva — cekatan, tangkas (swift, agile)

Ini 100% bahasa Indonesia dari KBBI, tapi ZERO orang yang tahu. Reaksi pertama siapapun:
"Itu bahasa apa? Jerman? Skandinavia?"

Persis yang lo minta — kata KBBI yang sangat jarang sampai orang mengira itu bahasa asing.

### Scoring Matrix

| Kriteria | Gapah | Bernas | Cerlang | Karsa |
|----------|-------|--------|---------|-------|
| Terdengar asing? | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Relevansi makna | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Mudah diucapkan | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Mudah diingat | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Domain available* | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| Brand conflict risk | LOW | MED (BERNAS=Malaysia rice) | LOW | MED (karsa.ai taken) |
| **Total** | **24/25** | **19/25** | **19/25** | **17/25** |

### Mengapa Alternatif Lain Kalah

- **Binar** ❌ — Sudah dipakai Binar Academy (edtech besar, raised $13.9M, binar.co.id)
- **Niskala** ❌ — Sudah ada Niskala Studio (Dribbble), Niskala Webflow template, Niskala Wellness (Four Seasons)
- **Cergas** ❌ — Sudah ada cergasdigital.id (digital marketing agency Indonesia!)
- **Karsa** ⚠️ — Makna bagus ("kehendak, niat") tapi karsa.ai/karsa.io likely taken, dan kurang sounds foreign
- **Bernas** ⚠️ — Makna sempurna ("berisi penuh, banyak isinya") tapi BERNAS adalah brand beras nasional Malaysia (conflict)
- **Cerlang** ✅ — Runner-up. "Bercahaya terang" = insight/clarity. Tapi 7 huruf vs 5 huruf Gapah

---

## 🌐 Domain Strategy

### Recommended Primary Domain

| Domain | Status | Notes |
|--------|--------|-------|
| **gapah.co** | ⚡ CHECK FIRST | .co = tech/startup standard, $12/yr |
| **gapah.ai** | ⚡ CHECK | Premium .ai = $50-80/yr, strong signal |
| **gapah.id** | ⚡ CHECK | Indonesian TLD, trust signal for local market |
| **gapah.com** | ⚡ CHECK | Classic TLD, search returned no existing site |
| **getgapah.com** | LIKELY AVAIL | Fallback pattern, always works |
| **usegapah.com** | LIKELY AVAIL | Alternative fallback |
| **gapah.app** | ⚡ CHECK | Modern, signals app/extension product |

### Registration Priority
1. **gapah.co** — Primary website (tech credible, affordable)
2. **gapah.ai** — Redirect to .co (AI brand signal)
3. **gapah.id** — Redirect to .co (local trust)

### Vercel API Note
Domain availability check via Vercel API sunsetted Nov 2025. Manual check required on:
- namecheap.com
- porkbun.com  
- cloudflare.com/products/registrar

Web search for "gapah.com" returned ZERO results — high probability available.

---

## 🎨 Visual Identity

### Logo Concept
**Lens + Forward Arrow (Speed + Clarity)**

The logo combines:
1. **Outer circle** — represents a lens (vision/analysis)
2. **Inner arrow/bolt** — represents speed and forward motion
3. **Lens flare accent** — represents the "aha moment" of insight

### Color Palette

```
Primary:     #10B981 (Emerald) — growth, success, go
Secondary:   #0EA5E9 (Sky)     — clarity, tech, trust
Accent:      #2563EB (Blue)    — premium, depth
Gradient:    135deg Emerald → Sky → Blue
Background:  #080C14 (Deep Navy) — dark mode default
Surface:     #0E1420 (Dark Panel)
Text:        #F1F5F9 (Snow)
Muted:       #94A3B8 (Slate)
```

**Deliberate differentiation from competitors:**
- MaxAI: Purple gradient ❌ → We use Emerald/Sky ✅
- Sider: Blue/Purple ❌ → We use Emerald as dominant ✅
- Jasper: Red/Orange ❌ → Completely different spectrum ✅

### Typography

**Primary: Plus Jakarta Sans**
- Indonesian foundry (Tokotype, Jakarta)
- Modern geometric sans-serif
- Built-in brand story: "Made in Indonesia, for Indonesia"
- Weights used: 600 (body), 700 (headings), 800 (display)

**Why not others:**
- Inter → Generic AI aesthetic, used by everyone
- Space Grotesk → Overused in AI/tech
- Roboto/Arial → No personality whatsoever

### Tagline Options

**Primary:** `Swift Ad Intelligence`
- English, global-sounding, matches tech positioning

**Indonesian variants:**
- `Cekatan bikin copy iklan` (Direct, colloquial)
- `Dari gambar ke copy. 10 detik.` (Benefit-driven)
- `Marketer punya senjata baru` (Emotional, aspirational)

**Rejected:**
- "Stop switching tabs" — Used by MaxAI, Sider, literally every competitor

---

## 📐 Extension Sidebar Design Specs

### Dimensions
- **Width:** 360px (Chrome Side Panel standard)
- **Min Height:** 480px
- **Max Height:** Screen height

### Layout Structure
```
┌──────────────────────────┐
│ Logo + Brand  [⚙️]       │ 48px header
├──────────────────────────┤
│ [Ad Copy] [Data Lens]   │ 40px tabs
├──────────────────────────┤
│                          │
│  ┌────────────────────┐  │
│  │  📸 Upload Zone    │  │ Image upload
│  └────────────────────┘  │
│                          │
│  [TikTok] [Meta]        │ Platform selector
│  (Casual)(FOMO)(Urgent) │ Tone chips
│                          │
│  [⚡ Generate 5 Copies]  │ CTA button
│                          │
│  ┌────────────────────┐  │
│  │ TIKTOK  [📋 Copy]  │  │ Result cards
│  │ Copy text here...  │  │ (5 variations)
│  │ ▓▓▓▓▓▓░░  52/100   │  │ Char count bar
│  └────────────────────┘  │
│                          │
│  Est. cost: ~Rp 1.500   │ Cost transparency
├──────────────────────────┤
│ Today: 23 gens │ Gapah  │ 32px footer
└──────────────────────────┘
```

### Key UX Principles
1. **One-hand operation** — Everything reachable in scrollable panel
2. **Progressive disclosure** — Don't show results until generated
3. **Copy-first** — Every result has prominent Copy button
4. **Cost transparency** — Always show estimated cost per batch
5. **Character count** — Visual bar + exact count for each platform

---

## 🌐 Website Sitemap

### Pages

```
gapah.co/
├── / (Landing — Hero, Features, Pricing, FAQ)
├── /docs
│   ├── /docs/quick-start
│   ├── /docs/api-key-setup
│   ├── /docs/vision-features
│   ├── /docs/custom-prompts
│   ├── /docs/data-lens
│   └── /docs/troubleshooting
├── /pricing
├── /changelog
├── /privacy
├── /terms
└── /blog (Phase 2)
```

### Landing Page Sections (in order)
1. **Hero** — Headline + Sidebar animation preview + CTA
2. **Stats Bar** — 10s generate, 5 variations, 40x faster, 100% ready
3. **Features** — 6 cards (Vision Copy, Data Lens, Specs Library, BYOK, Indonesia First, One-Click)
4. **How It Works** — 3 steps with visual demo
5. **Pricing** — 3 tiers (Starter/Pro/Agency) in IDR
6. **Docs Preview** — 6 quick-link cards
7. **FAQ** — 6 common questions
8. **Final CTA** — Install button with social proof
9. **Footer** — Links, KBBI easter egg

---

## 🔒 Risk Assessment

### Brand Name Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| "Gapah" too obscure, no SEO value | Medium | Invest in branded search, content marketing |
| Someone else registers gapah.ai first | High | Register ALL variants immediately |
| Pronunciation confusion | Low | Ga-pah (2 syllables, intuitive) |
| KBBI meaning unknown = no emotional connection | Medium | Lean into it as brand story ("Did you know...?") |
| Domain squatter finds this conversation | Low | Register within 48 hours |

### Devil's Advocate

**Problem 1: "Nobody can spell or find Gapah via search"**
→ True for Day 1. But so was "Canva" and "Figma". Once you're the only result for "gapah", you OWN that keyword forever. Zero competition = zero CAC for branded search.

**Problem 2: "The KBBI meaning adds zero brand value"**  
→ Disagree. It's a conversation starter. Every pitch deck, every tweet, every landing page can include: "Gapah = cekatan, tangkas (KBBI). We didn't invent the name — bahasa Indonesia did." That's a unique brand story NOBODY else has.

**Problem 3: "What if Gapah means something offensive in another language?"**
→ Quick check needed for Malay, Tagalog, Thai, Hindi. "Gapah" doesn't appear to have negative meanings in major ASEAN languages, but verify before launch.

---

## ✅ Immediate Action Items

1. **Register domains** — gapah.co, gapah.ai, gapah.id (within 48 hours)
2. **Claim social handles** — @gapahco on Twitter, Instagram, LinkedIn, TikTok
3. **Verify cross-language** — Check "gapah" meaning in Malay, Thai, Tagalog
4. **Setup Vercel project** — Deploy landing page placeholder immediately
5. **Chrome Web Store** — Reserve "Gapah" extension name (developer account needed)

---

*Document generated: Feb 12, 2026*
*Confidence: HIGH on naming recommendation, MEDIUM on domain availability (needs manual verification)*

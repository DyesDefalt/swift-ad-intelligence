# Product Requirement Document (PRD)
## AdLens v1.0 — MVP

**Status:** Draft v2.0 (Revised)
**Date:** February 12, 2026
**Target Launch:** Q2 2026

---

## 1. Executive Summary

AdLens adalah Chrome Extension (Side Panel) yang dirancang khusus untuk Digital Marketer di Indonesia dan Asia Tenggara. AdLens menggabungkan dua fungsi utama: **Vision-Powered Ad Copy Generation** dan **Data Lens (Screenshot-to-Insight)** — langsung di browser, tanpa berpindah tab.

**Core Differentiator:** Tool ini BUKAN general-purpose AI sidebar. Ini adalah senjata khusus performance marketer yang paham konteks platform iklan (TikTok, Meta) dan bisa menghasilkan copy dari visual asset (gambar/thumbnail).

---

## 2. Problem Statement

### Primary Problems
1. **Context Switching Tax:** Marketer kehilangan fokus karena berpindah antara Ads Manager ↔ ChatGPT ↔ Google Sheets ↔ Dashboard.
2. **Blank Page Syndrome:** Menulis 5-15 variasi ad copy untuk testing itu repetitif dan menghabiskan waktu.
3. **Data Paralysis:** Data kampanye berlimpah di spreadsheet dan dashboard, tapi marketer tidak punya waktu untuk menganalisis "So What?" dari setiap angka.
4. **Tool Affordability:** Tool global (Jasper $39/mo, Anyword $39/mo) terlalu mahal untuk freelancer dan agency kecil di Indonesia.

### Validation
- 92% AI workplace adoption di Indonesia (Stanford AI Index 2025)
- 73% US marketers sudah menggunakan AI untuk content creation (Statista)
- Belum ada dedicated AI marketing browser tool dengan harga IDR

---

## 3. User Personas

### Persona A: "Rizky" — Agency Media Buyer (Jakarta)
- **Profil:** 25-32 tahun, mengelola 5-15 akun klien di TikTok/Meta/Google
- **Gaji:** Rp 8-15 juta/bulan
- **Pain:** Habis 2+ jam/hari menulis copy variasi dan membuat weekly report
- **Budget Tools:** Rp 0-500.000/bulan (sering pakai ChatGPT free)
- **Trigger Beli:** "Kalau bisa hemat 1 jam/hari, worth it"

### Persona B: "Sari" — Solo UMKM Owner (Bandung)
- **Profil:** 28-40 tahun, jualan produk sendiri di TikTok Shop dan Shopee
- **Gaji/Revenue:** Rp 10-50 juta/bulan (bisnis)
- **Pain:** Ga bisa nulis copy yang menarik, ga ngerti data dashboard
- **Budget Tools:** Rp 0-300.000/bulan
- **Trigger Beli:** "Tinggal upload foto produk, langsung dapet caption bagus"

### Persona C: "Azzam" — Performance Marketing Lead (Agency/In-house)
- **Profil:** 28-35 tahun, manage team + budget $50K+/bulan
- **Gaji:** Rp 15-25 juta/bulan
- **Pain:** Butuh quick insight dari data tanpa request ke data team
- **Budget Tools:** Rp 500.000-2.000.000/bulan (company budget)
- **Trigger Beli:** "Screenshot dashboard, langsung dapet insight yang bisa gw present ke client"

---

## 4. Feature Specifications

### Feature A: Vision-Powered Ad Copy Generator

#### Flow:
1. User buka Side Panel (shortcut Ctrl+Shift+L atau klik icon)
2. Pilih Platform: **TikTok** atau **Meta** (MVP)
3. Upload Image/Thumbnail creative (drag-drop atau paste)
4. AI Vision menganalisis gambar → extract context visual
5. User mengisi form singkat:
   - Product/Service name (text, required)
   - Key message / USP (text, optional — AI bisa suggest dari gambar)
   - Funnel stage: Awareness / Consideration / Conversion (dropdown)
   - Tone: Professional / Casual / Urgent / Playful (dropdown)
   - Language: Indonesia / English (dropdown)
6. Klik "Generate"
7. Output: 3-5 variasi copy, sudah terformat sesuai platform specs
8. Tombol "Copy" per variasi, atau "Copy All"

#### Platform Specs Library (Built-in):

**TikTok Ads:**
- Ad Text: 1-100 characters (recommended 12-100)
- Display Name: Max 40 characters
- CTA Options: predefined list

**Meta Ads:**
- Primary Text: Max 125 characters recommended (bisa lebih)
- Headline: Max 40 characters recommended
- Description: Max 30 characters recommended
- Multiple format support: Single Image, Carousel, Reels

#### Output Format Example (TikTok):
```
--- Variasi 1 ---
Ad Text: [72 chars] ✅
Display Name: [28 chars] ✅

--- Variasi 2 ---
Ad Text: [89 chars] ✅
Display Name: [35 chars] ✅
```

Setiap output menampilkan character count + status (✅ dalam limit, ⚠️ mendekati limit, ❌ over limit).

#### Constraints & Risks:
- Vision AI mungkin miss product details → user HARUS bisa edit/override AI interpretation
- Butuh fallback ke text-only mode kalau user ga punya image
- AI hallucination risk → warning label: "Review & edit before publishing"

---

### Feature B: Data Lens (Screenshot-to-Insight)

#### Flow:
1. User sedang melihat data di browser (Google Sheets, TikTok Dashboard, Meta Ads Manager, dll)
2. Klik icon Data Lens di Side Panel atau shortcut
3. Pilih mode:
   - **Screenshot Mode:** Capture area layar (snipping tool)
   - **Clipboard Mode:** Copy data dari spreadsheet → paste ke panel
4. AI menganalisis data
5. Output di Side Panel:
   - **Key Trends:** Apa yang naik/turun signifikan
   - **Anomalies:** Data yang tidak biasa
   - **Why (Root Cause Hypothesis):** Mengapa hal ini terjadi
   - **So What (Recommendation):** Apa yang harus dilakukan selanjutnya
   - **One-liner Summary:** Kalimat ringkas siap paste ke report/Slack

#### Marketing-Specific Analysis Framework:
AI di-prompt khusus untuk mengenali metrik marketing:
- CTR, CPC, CPM, CPA, ROAS, CVR
- Creative fatigue indicators (CTR declining over time)
- Budget pacing anomalies
- Audience saturation signals

#### Output Example:
```
📊 DATA LENS ANALYSIS
━━━━━━━━━━━━━━━━━━━

🔑 Key Findings:
• CPA naik 23% di minggu ke-3 (Rp 45.000 → Rp 55.400)
• CTR turun dari 2.1% ke 1.4% — indikasi creative fatigue
• Adset "Lookalike 1%" masih perform, CPM stabil

⚠️ Anomaly Detected:
• Spend melonjak 40% pada hari Kamis tanpa peningkatan conversion

💡 Recommendation:
• Refresh creative untuk adset dengan CTR < 1.5%
• Reallocate budget dari broad targeting ke Lookalike 1%
• Investigasi Thursday spend spike — kemungkinan bidding war

📝 One-liner:
"CPA naik 23% WoW driven by creative fatigue di 3 adsets.
Immediate action: creative refresh + budget reallocation."
```

#### Constraints & Risks:
- Screenshot quality affects AI accuracy (low-res = bad analysis)
- Vision AI may misread numbers from dashboard charts
- Pastikan disclaimer: "AI-generated insight. Verify with actual data."

---

## 5. User Flow (End-to-End)

```
[Install Extension]
        ↓
[First Open → Enter License Key]
        ↓
[Choose: BYOK API Key OR Managed Tier]
        ↓
[Side Panel Opens → Home Screen]
        ↓
    ┌────────────────┐
    │  Choose Mode:   │
    │                 │
    │  📝 Ad Copy     │
    │  📊 Data Lens   │
    │  ⚙️ Settings    │
    └────────────────┘
        ↓                    ↓
   [Ad Copy Flow]      [Data Lens Flow]
        ↓                    ↓
   [Generated Output]  [Analysis Output]
        ↓                    ↓
   [Copy to Clipboard] [Copy / Export]
```

---

## 6. Success Metrics

### North Star Metric
**Weekly Active Generations (WAG):** Jumlah output yang di-generate per minggu oleh semua active users.

### Supporting Metrics

| Metric | Target (Month 1) | Target (Month 6) |
|--------|-------------------|-------------------|
| Total Installs | 200 | 1,000 |
| Activation Rate (generate ≥1 output) | 60% | 70% |
| WAG per User | 5 | 10 |
| Retention (Week 4) | 30% | 45% |
| NPS Score | 30+ | 50+ |
| Paid Conversion (trial → paid) | 15% | 25% |
| Churn Rate (monthly) | 15% | 10% |
| Referral Rate | 5% | 15% |

### Revenue Metrics (Phase 1)

| Metric | Target |
|--------|--------|
| Early Access Sales (100 units × Rp 299K) | Rp 29.900.000 |
| Second Batch (100 units × Rp 399K) | Rp 39.900.000 |
| Normal Price Sales (Month 3-6) | Rp 99.900.000 |
| **Total 6-Month Revenue Target** | **~Rp 170.000.000** |

---

## 7. Out of Scope (MVP)

- Google Ads RSA support (Phase 2)
- Google Sheets native Add-on (Phase 2)
- Video vision analysis (Phase 3)
- Team/collaboration features (Phase 3)
- ASEAN language support beyond ID/EN (Phase 3)
- Shopee Ads / Tokopedia Ads integration (Phase 3)
- Chrome Web Store publishing (MVP = Developer Mode, Phase 2 = Web Store)

---

## 8. Dependencies & Assumptions

### Assumptions
- Target users memiliki atau bersedia mendapatkan API key (BYOK tier)
- Vision AI (GPT-4o/Claude) accuracy cukup untuk marketing context
- Chrome Side Panel API stabil dan tidak akan deprecated
- Market Indonesia bersedia membayar untuk tool produktivitas

### Dependencies
- OpenAI API availability (Vision model)
- Chrome Extension Manifest V3 compatibility
- Supabase free tier adequate untuk MVP auth
- Landing page builder (Lovable/Bolt) untuk sales page

---

## 9. Open Questions

1. Apakah perlu support Firefox dari awal atau Chrome-only?
2. Bagaimana handling API key security di extension storage?
3. Apakah perlu offline mode / cached responses?
4. Bagaimana collect user feedback secara structured?
5. Legal: terms of service untuk BYOK (liability jika API key bocor)?

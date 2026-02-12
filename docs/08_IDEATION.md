# Ideation & Problem-Solution Framework
## AdLens — Origin Story & Concept

**Date:** February 12, 2026

---

## 1. The Problem (Why This Exists)

### Pain Point #1: Context Switching Tax
Seorang Media Buyer rata-rata membuka 7-12 tab setiap kali membuat kampanye:
1. Ads Manager (TikTok/Meta/Google)
2. ChatGPT / Claude (untuk generate copy)
3. Google Sheets (data campaign)
4. Dashboard analytics
5. Landing page (untuk referensi)
6. Creative assets (Canva/Drive)
7. Communication (Slack/WA)

Setiap perpindahan tab = 23 menit untuk kembali ke fokus penuh (University of California research). Kalau pindah tab 20x sehari, itu **jam-jam produktif yang hilang.**

### Pain Point #2: Blank Page Syndrome
Menulis ad copy itu TIDAK semudah "tulis aja." Marketer harus:
- Pahami format platform (karakter limit berbeda)
- Sesuaikan tone dengan brand
- Buat 3-15 variasi untuk A/B testing
- Pastikan hook kuat di 3 detik pertama (TikTok) atau first line (Meta)
- Iterate berdasarkan performa sebelumnya

Kebanyakan marketer akhirnya copy-paste ke ChatGPT, tulis prompt panjang, copy hasilnya, lalu format manual. **Proses yang seharusnya 30 detik jadi 10 menit.**

### Pain Point #3: Data Overload → Insight Deficit
Dashboard penuh angka. Spreadsheet penuh data. Tapi pertanyaan "So what?" sering tidak terjawab karena:
- Analisis butuh waktu yang tidak ada
- Data analyst tidak selalu available
- Report jadi ritual copy-paste angka tanpa interpretasi
- Client/boss tanya "Jadi gimana?" dan marketer freeze

### Pain Point #4: Tool Affordability
International tools priced in USD:
- Jasper: $39/mo = Rp 624.000/bulan
- Anyword: $39/mo = Rp 624.000/bulan
- Semrush AI: $119/mo = Rp 1.904.000/bulan

Untuk freelancer Indonesia dengan income Rp 5-15 juta/bulan, ini **4-12% dari income** hanya untuk 1 tool. Tidak masuk akal.

---

## 2. The Solution

### One-Sentence Solution
"Chrome Extension yang membuat ad copy dari gambar dan menganalisis data dari screenshot, langsung di browser, khusus untuk marketer Indonesia."

### How It Works (Simple)

```
MASALAH                          SOLUSI ADLENS
──────────                       ──────────────

Buka ChatGPT tab baru,          → Klik side panel,
tulis prompt panjang,              upload gambar,
copy hasilnya,                     pilih platform,
format manual                      copy 1-click ✅

Download data,                   → Screenshot area,
buka spreadsheet,                  AI analisis otomatis,
analisis manual,                   "Why & So What" langsung muncul,
tulis kesimpulan                   copy ke report ✅
```

---

## 3. Key Insight: Vision-First Approach

Marketer SELALU punya visual asset (gambar produk, thumbnail video, banner) sebelum menulis copy. Kebanyakan AI copy tools mulai dari TEXT input ("describe your product").

**AdLens flip the script:** mulai dari IMAGE.

Mengapa ini powerful:
1. Gambar mengandung informasi yang susah dideskripsikan dengan kata-kata
2. AI Vision bisa extract: warna, mood, produk, text overlay, komposisi
3. Copy yang dihasilkan jadi lebih KONTEKSTUAL dan aligned dengan visual creative
4. User experience lebih cepat: upload > describe

### Example Flow:
```
User uploads: Foto produk skincare dengan model tersenyum, background pink pastel

AI Vision detects:
- Product: skincare/beauty product (jar/tube)
- Model: young woman, smiling, healthy skin
- Mood: fresh, clean, soft, feminine
- Colors: pink, white, gold accent
- Text on image: "Glow Up Serum"

Generated Copy (TikTok, Casual tone):
1. "Rahasia kulit glowing tanpa ribet? Coba ini dulu ✨" (48 chars ✅)
2. "Bukan filter, ini beneran. Glow Up Serum favorit semua orang 💕" (61 chars ✅)
3. "Udah capek coba skincare mahal? Yang ini beda. Buktiin sendiri." (62 chars ✅)
```

---

## 4. Why Now? (Market Timing)

### Tailwinds
1. **AI API costs dropping rapidly** — GPT-4o Vision sekarang ~80% lebih murah dari setahun lalu
2. **Indonesia AI adoption di 92%** — Orang sudah terbiasa dengan AI, tinggal kasih tools yang tepat
3. **TikTok Shop dominance** — Indonesia #1 TikTok e-commerce market. Marketer butuh tools yang paham TikTok.
4. **Chrome Extension ecosystem matang** — WXT framework, Manifest V3 stable, tooling bagus
5. **Vibecoding tools available** — Cursor, Claude Code, Lovable memungkinkan solo developer build produk real

### Headwinds
1. **ChatGPT semakin integrated** — Browser extension ChatGPT semakin capable
2. **AI fatigue** — Beberapa marketer sudah bosan dengan "AI tools" yang overpromise
3. **Spending reluctance** — Ekonomi Indonesia agak melambat, marketer hati-hati spending
4. **Trust issue** — "Extension random yang minta akses browser? No thanks."

---

## 5. Design Principles

1. **Speed over features.** Setiap interaksi harus lebih cepat dari membuka ChatGPT.
2. **Context-aware, not context-required.** Minimal input dari user, maximal output dari AI.
3. **Copy-paste first.** Output utama = text yang siap di-paste. Tombol copy harus BESAR.
4. **Marketing brain, not AI brain.** Output harus pakai istilah marketer (CTR, CPA, ROAS), bukan bahasa AI generic.
5. **Indonesia first.** Default Bahasa Indonesia. Rupiah pricing. Contoh-contoh lokal. Bukan terjemahan dari English.

---

## 6. User Stories

### Ad Copy Generator
- **As a** media buyer, **I want to** upload my creative image and get platform-specific ad copy, **so that** I can launch campaigns faster without writing copy from scratch.
- **As a** UMKM owner, **I want to** get professional-sounding captions for my product photos, **so that** my ads look like they were written by an agency.
- **As a** marketing lead, **I want to** generate multiple copy variations quickly, **so that** my team can A/B test more aggressively.

### Data Lens
- **As a** media buyer, **I want to** screenshot my campaign dashboard and get instant insight, **so that** I know what to optimize without spending 30 minutes analyzing.
- **As a** marketing lead, **I want to** get a one-liner summary of campaign performance, **so that** I can quickly update my client/boss.
- **As a** freelancer, **I want to** turn spreadsheet data into professional insights, **so that** my weekly reports look impressive to clients.

---

## 7. What Success Looks Like

### For the User
"Gw buka Ads Manager, klik AdLens, upload gambar produk baru, 10 detik kemudian gw punya 5 caption siap pakai yang udah sesuai format TikTok. Langsung paste dan launch. Sebelumnya ini butuh 15 menit."

"Gw screenshot dashboard campaign yang lagi turun performanya. AdLens langsung bilang: 'CTR turun karena creative fatigue di adset X. Rekomendasi: refresh creative.' Gw copy itu langsung ke Slack buat update team. Done in 30 seconds."

### For the Business
"AdLens jadi standard tool di agency-agency Indonesia. Setiap media buyer baru onboard, dikasih license AdLens sebagai bagian dari toolkit. Revenue recurring dan stabil."

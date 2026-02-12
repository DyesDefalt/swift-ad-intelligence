# Financial Model & Unit Economics
## AdLens — Year 1 Projections

**Date:** February 12, 2026
**Currency:** IDR (Indonesian Rupiah)
**Exchange Rate Assumption:** 1 USD = Rp 16.000

---

## 1. Revenue Model

### BYOK Tier (Lifetime License)

| Phase | Units | Price | Revenue |
|-------|-------|-------|---------|
| Early Access (Batch 1) | 100 | Rp 299.000 | Rp 29.900.000 |
| Early Access (Batch 2) | 100 | Rp 399.000 | Rp 39.900.000 |
| Normal Price (Month 3-6) | 100 | Rp 999.000 | Rp 99.900.000 |
| Normal Price (Month 7-12) | 200 | Rp 999.000 | Rp 199.800.000 |
| **BYOK Subtotal** | **500** | | **Rp 369.500.000** |

### Managed Tier (Monthly Subscription)

| Tier | Users (avg) | Price/mo | Months | Revenue |
|------|------------|----------|--------|---------|
| Starter (50 credits) | 50 | Rp 49.000 | 10 avg | Rp 24.500.000 |
| Pro (500 credits) | 30 | Rp 149.000 | 10 avg | Rp 44.700.000 |
| **Managed Subtotal** | **80** | | | **Rp 69.200.000** |

### Annual Renewal (Year 2 prep)

| Item | Users | Price | Revenue |
|------|-------|-------|---------|
| BYOK Renewal (starts Month 13) | Est. 60% of 500 = 300 | Rp 199.000/yr | Rp 59.700.000/yr |

### **Total Year 1 Revenue Projection: Rp 438.700.000 (~$27.400 USD)**

**This is optimistic scenario.** Conservative = 60% of this = Rp 263 juta.

---

## 2. Cost Structure

### Fixed Costs (Monthly)

| Item | Cost/Month | Annual |
|------|-----------|--------|
| Supabase Pro (if needed) | Rp 400.000 ($25) | Rp 4.800.000 |
| Domain + Hosting (Vercel) | Rp 320.000 ($20) | Rp 3.840.000 |
| Chrome Web Store Fee | — (one-time $5) | Rp 80.000 |
| Xendit Payment Processing | ~2.5% of revenue | ~Rp 10.968.000 |
| Email Service (Resend/Loops) | Rp 0-160.000 | Rp 1.920.000 |
| **Fixed Cost Total** | | **~Rp 21.608.000/yr** |

### Variable Costs (Managed Tier Only)

| Metric | Value |
|--------|-------|
| Avg cost per AI generation (Vision) | Rp 2.000 (~$0.12) |
| Managed Starter users: 50 gens/mo × 50 users | 2,500 gens/mo |
| Managed Pro users: 300 gens/mo avg × 30 users | 9,000 gens/mo |
| Total managed gens/month | 11,500 |
| **Monthly AI API cost** | **Rp 23.000.000** (~$1,437) |
| **Annual AI API cost** | **~Rp 230.000.000** |

### ⚠️ CRITICAL INSIGHT: Managed Tier Unit Economics

| Tier | Revenue/user/mo | Cost/user/mo (est.) | Margin |
|------|----------------|---------------------|--------|
| Starter (50 gens) | Rp 49.000 | Rp 100.000 | **-51%** ❌ |
| Pro (500 gens) | Rp 149.000 | Rp 600.000 | **-303%** ❌ |

**MANAGED TIER IS UNPROFITABLE AT THESE PRICES.**

### Managed Tier Fix Options:

**Option A: Raise Prices**
- Starter: Rp 99.000/mo (50 gens)
- Pro: Rp 399.000/mo (200 gens, not 500)

**Option B: Lower Costs**
- Use cheaper models (GPT-4o-mini for text, GPT-4o only for vision)
- Batch requests, cache common patterns
- Average down to Rp 500/gen

**Option C: SKIP MANAGED TIER FOR MVP**
- Focus on BYOK only
- Add managed tier once you have revenue to subsidize
- **This is my recommendation**

---

## 3. Revised P&L (BYOK Only, Conservative)

| Item | Amount |
|------|--------|
| **Revenue (Conservative = 60% of target)** | |
| BYOK Lifetime Sales (300 units avg Rp 599K) | Rp 179.700.000 |
| **Total Revenue** | **Rp 179.700.000** |
| | |
| **Costs** | |
| Supabase + Hosting | Rp 8.640.000 |
| Payment Processing (2.5%) | Rp 4.493.000 |
| Domain + Misc | Rp 2.000.000 |
| Chrome Web Store | Rp 80.000 |
| **Total Costs** | **Rp 15.213.000** |
| | |
| **Net Profit (Before Tax/Labor)** | **Rp 164.487.000** |
| | |
| Monthly Net (avg over 12 months) | Rp 13.707.000/mo |

**Catatan:** Ini BELUM termasuk biaya waktu lu sendiri untuk development dan support. Kalau lu value waktu lu di Rp 18M/bulan (target salary), maka 6 bulan development = Rp 108M opportunity cost. Break-even memerlukan 300+ BYOK sales.

---

## 4. Break-Even Analysis

### Development Investment (Opportunity Cost)
- 6-8 minggu development × 40 jam/minggu = 240-320 jam
- Pada rate Rp 18M/bulan = Rp 27-36 juta opportunity cost
- (Lebih rendah dari full 6 bulan karena ini part-time/side project)

### Break-Even Point
- Avg revenue per BYOK sale: ~Rp 599.000 (blended early + normal price)
- Fixed costs Year 1: ~Rp 15M
- Development opportunity cost: ~Rp 30M
- **Break-even = 75 BYOK sales** (Rp 45M / Rp 599K per sale)

### Time to Break-Even (Scenarios)

| Scenario | Sales/Month | Break-Even Month |
|----------|------------|-----------------|
| Optimistic | 50 | Month 2 |
| Moderate | 25 | Month 3 |
| Conservative | 15 | Month 5 |
| Pessimistic | 5 | Month 15 (reconsider) |

---

## 5. Financial Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|------------|-----------|
| Managed tier hemorrhaging money | Cash negative | HIGH (jika tetap unlimited) | Skip managed for MVP |
| Lifetime deal = no recurring revenue | Cash flow dies after launch spike | HIGH | Add annual renewal + managed tier later |
| Refund requests | Revenue reversal | MEDIUM | Clear no-refund policy + 3-day trial |
| API price increases | Cost structure broken | LOW-MEDIUM | BYOK model shields you |
| Payment gateway fees eating margin | Lower net revenue | LOW | Xendit fees reasonable (2.5%) |

---

## 6. Year 2 Revenue Potential (If Year 1 Succeeds)

| Source | Projection |
|--------|-----------|
| New BYOK sales (500 more) | Rp 499.500.000 |
| Annual renewals (300 × Rp 199K) | Rp 59.700.000 |
| Managed tier (if unit economics fixed) | Rp 150.000.000 |
| Agency bulk deals | Rp 100.000.000 |
| **Year 2 Potential** | **~Rp 809.200.000 (~$50K USD)** |

**Ini masih side-project level revenue.** Untuk menjadi full-time business yang menggantikan gaji Rp 18M/bulan, lu butuh ~Rp 300M+ ARR (dengan margin 70%+). Itu achievable di Year 2-3 JIKA Year 1 menunjukkan product-market fit.

# Gapah — Swift Ad Intelligence

Generate platform-perfect ad copy from images and analyze campaign data—without leaving your browser. Built for Indonesian digital marketers.

---

## Features

- **Vision-powered copy** — Upload creatives; AI generates context-aware ad copy for TikTok, Meta, Google, and X
- **Data Lens** — Capture any dashboard and get marketing-grade analysis: trends, anomalies, and actionable recommendations
- **Universal mode** — Customize copy count, length, emoji, tone, and style
- **Platform specs** — Built-in character limits and best practices per platform (TikTok Ads, Meta Ads, Google Ads, X Ads)
- **Local pricing** — Plans in Indonesian Rupiah (Early Access, Managed Pro, Agency)

---

## Tech Stack

| Layer        | Stack |
|-------------|--------|
| Framework   | [Next.js](https://nextjs.org/) 16 (App Router) |
| UI          | [React](https://react.dev/) 19, [Tailwind CSS](https://tailwindcss.com/) 3, [shadcn/ui](https://ui.shadcn.com/) (Radix) |
| Icons       | [lucide-react](https://lucide.dev/) |
| Language    | TypeScript |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Install & run

```bash
# Clone the repo
git clone <your-repo-url>
cd swift-ad-intelligence

# Install dependencies
npm install

# Start development server (Webpack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command        | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Start dev server (Webpack)     |
| `npm run build`| Production build              |
| `npm run start`| Start production server       |
| `npm run lint`  | Run ESLint                     |

---

## Project Structure

```
swift-ad-intelligence/
├── app/                    # Next.js App Router (root)
│   ├── layout.tsx          # Root layout (Navigation, Footer, grain overlay)
│   ├── page.tsx            # Homepage
│   ├── about/
│   ├── contact/
│   ├── features/
│   ├── login/
│   └── pricing/
├── src/
│   ├── app/                # Shared app assets
│   │   └── globals.css      # Global styles, CSS variables, scroll-reveal
│   ├── components/         # Shared UI
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   └── views/              # Page-level views
│       ├── AboutPage.tsx
│       ├── ContactPage.tsx
│       ├── FeaturesPage.tsx
│       └── PricingPage.tsx
├── public/                 # Static assets
└── package.json
```

---

## Pages

| Route      | Description                    |
|------------|--------------------------------|
| `/`        | Home — hero, features, pricing, testimonials, CTA |
| `/features`| Capabilities, bento grid, platform specs |
| `/pricing`  | Plans, comparison, FAQ         |
| `/about`   | Mission, team, Jakarta story   |
| `/contact` | Contact form, early access CTA |
| `/login`   | Login                          |

---

## License

MIT — see [LICENSE](LICENSE).

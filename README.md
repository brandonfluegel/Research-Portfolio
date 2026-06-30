# Brandon Fluegel — Human Factors Research Portfolio

> Human Factors PhD · Connecting perceptual science to engineering targets and product decisions

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

---

## Overview

Single-page research portfolio showcasing human factors case studies from five Tier-1 companies. Each section presents research methodology, quantified outcomes, and evidence-based design decisions from applied HF work.

**Featured research:**

| Company | Focus Area | Highlight |
|---|---|---|
| **Amazon** | Alexa latency thresholds & multimodal interaction | $50M projected operational impact · US Patent (Named Inventor) |
| **Sling TV** | HF standards for AI systems & hardware | AI interaction framework across product lines |
| **Uber** | Driver growth & global strategy | Human factors applied to marketplace behavior |
| **NASA** | Human factors research | Operational impact in high-consequence environments |
| **Mercedes-Benz** | Automotive UX & HMI | Psychophysics applied to in-vehicle interaction |

Plus an **Agentic Trust** section covering an original framework for human–AI trust calibration.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 12 |
| Charts | Recharts 3 |
| Icons | Lucide React |
| Analytics | Google Analytics 4 + Vercel Analytics |
| Performance | Vercel Speed Insights |
| Deployment | Vercel |

---

## Architecture Highlights

**Performance-aware rendering** — `PerformanceModeProvider` detects low-power devices (hardware concurrency ≤ 4, device memory ≤ 4GB, `saveData` mode, `prefers-reduced-motion`) and sets a `data-performance-tier` attribute on `<html>` to gate heavy animations at the CSS/component level.

**Security headers** — All routes receive `Strict-Transport-Security`, `X-Frame-Options: DENY`, `X-Content-Type-Options`, `X-XSS-Protection`, `Referrer-Policy`, and `Permissions-Policy` via `next.config.ts`.

**Optimized asset caching** — Hashed static assets (`/_next/static/`) are served with `Cache-Control: immutable` (1 year). Public assets use `stale-while-revalidate`.

**Image optimization** — Next.js image pipeline configured for AVIF and WebP with a 30-day minimum cache TTL.

**SEO & discovery artifacts:**
- `app/robots.ts` — generates `robots.txt` with sitemap reference
- `app/sitemap.ts` — generates `sitemap.xml`
- `public/llms.txt` — machine-readable summary for LLM indexing and citation

---

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, providers
│   ├── page.tsx            # Hero section + credential strip
│   ├── globals.css         # Global styles & Tailwind base
│   ├── robots.ts           # Generated robots.txt
│   └── sitemap.ts          # Generated sitemap.xml
│
├── components/
│   ├── home/
│   │   └── HomeClientSections.tsx   # Lazy-loads all below-the-fold sections
│   ├── layout/
│   │   ├── Navbar.tsx               # Sticky nav with active section tracking
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── FrameworkSection.tsx     # Agentic Trust framework
│   │   ├── TrustNav.tsx             # Company logo navigation strip
│   │   └── projects/
│   │       ├── AmazonProjectSection.tsx
│   │       ├── SlingProjectSection.tsx
│   │       ├── UberProjectSection.tsx
│   │       ├── NASAProjectSection.tsx
│   │       └── MercedesProjectSection.tsx
│   └── ui/
│       ├── GoogleAnalytics.tsx      # GA4 pageview tracking
│       ├── GradientBackground.tsx
│       ├── LazyVideo.tsx            # IntersectionObserver-based video loader
│       ├── LogoBadge.tsx
│       ├── MotionProvider.tsx       # Wraps LazyMotion for tree-shaken animation
│       ├── PerformanceModeProvider.tsx
│       ├── ScrollProgress.tsx
│       ├── ScrollToTop.tsx
│       └── SectionDivider.tsx
│
├── hooks/
│   ├── useActiveSection.ts   # IntersectionObserver — drives navbar highlight
│   └── useScrollMetrics.ts   # Scroll position & velocity tracking
│
├── lib/
│   ├── constants/
│   │   └── sections.ts       # Nav section IDs & company logo config
│   └── utils/
│       ├── animationVariants.ts   # Shared Framer Motion variants
│       ├── performance.ts         # Low-power / reduced-motion detection
│       └── scroll.ts              # Scroll utility helpers
│
└── public/
    ├── llms.txt
    └── assets/                # Production media only
```

---

## Getting Started

**Prerequisites:** Node.js 20+

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build && npm start

# Lint
npm run lint
```

---

## Environment Variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | GA4 measurement ID. Omit to disable analytics. |

GA4 captures the initial pageview automatically via `gtag` config. Client-side navigations send manual `page_view` events. Device segmentation is handled natively by GA4 audience reports.

---

## Contact

- **LinkedIn:** [linkedin.com/in/fluegel](https://www.linkedin.com/in/fluegel/)
- **Email:** Brandon.uxr@gmail.com

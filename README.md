# Brandon Fluegel — Human Factors Research Portfolio

> Translating human behavior and perception research into engineering specifications and product decisions

**Stack:** Next.js 16 · TypeScript 5 · Tailwind CSS v4 · Framer Motion 12 · Recharts · Vercel

---

## What This Is

A single-page research portfolio built from scratch — no templates. Each section presents a real HF case study with methodology, quantified outcomes, and engineering-facing decisions. The goal was a portfolio that reads like a researcher's work, not a design showcase.

**Projects covered:** Amazon · Sling · Uber · NASA · Mercedes-Benz · Agentic Trust framework

---

## Design Decisions

**Performance-tiered rendering** — `PerformanceModeProvider` detects low-power devices (hardware concurrency, device memory, `saveData`, `prefers-reduced-motion`) and sets a `data-performance-tier` attribute on `<html>`. Heavy animations opt out at the CSS/component level rather than running a JavaScript check per component.

**Deferred section loading** — Below-the-fold sections are wrapped in an `IntersectionObserver`-based `DeferredSection` that delays rendering until the section is near the viewport. All lazy chunks are also pre-fetched at page idle so nav clicks resolve synchronously with no layout shift.

**Scroll-based active section tracking** — `useActiveSection` uses `IntersectionObserver` with calibrated thresholds rather than `scroll` event listeners, keeping the navbar highlight accurate without polling.

**Lazy video** — `LazyVideo` defers `src` assignment until the element enters the viewport, avoiding unnecessary media downloads on load.

**Tree-shaken animation** — `MotionProvider` wraps `LazyMotion` with `domAnimation` features only, keeping the Framer Motion bundle minimal.

**SEO artifacts** — `robots.ts` and `sitemap.ts` generate the respective files at build time. `public/llms.txt` provides a machine-readable summary for LLM indexing.

**Security headers** — `next.config.ts` sets `Strict-Transport-Security`, `X-Frame-Options: DENY`, `X-Content-Type-Options`, `X-XSS-Protection`, `Referrer-Policy`, and `Permissions-Policy` on all routes. Static assets use `Cache-Control: immutable` (1 year); public assets use `stale-while-revalidate`.

---

## Stack

Next.js 16 (App Router) · TypeScript 5 · Tailwind CSS v4 · Framer Motion 12 · Recharts · Vercel

---

## Getting Started

**Prerequisites:** Node.js 20+

```bash
npm install
npm run dev       # development
npm run build     # production build
npm run lint
```

**Optional:** Add `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` to `.env.local` to enable GA4.

---

## Contact

- **LinkedIn:** [linkedin.com/in/fluegel](https://www.linkedin.com/in/fluegel/)
- **Email:** Brandon.uxr@gmail.com


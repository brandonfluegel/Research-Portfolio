# Brandon Allan Fluegel — Human Factors Engineering Portfolio

**v2 - Fall 2026**

> Translating human behavior and perception research into engineering specifications and product decisions

## About Me

I'm Dr. Brandon Allan Fluegel, a Senior Human Factors Design Engineer with a Ph.D. in Human Factors Psychology. I turn research on human perception and behavior into engineering decisions. My work spans Alexa at Amazon, Lunar Gateway at NASA, and semi-autonomous driving at Mercedes-Benz. I also authored a human-AI trust audit framework.

**Stack:** Next.js 16 · TypeScript 6 · Tailwind CSS v4 · Framer Motion 14 · Vercel

---

## What This Is

A single-page research portfolio built from scratch — no templates. Each section presents a real HF case study with methodology, quantified outcomes, and engineering-facing decisions. The goal was a portfolio that reads like a researcher's work, not a design showcase.

**Projects covered:** Amazon · NASA · Mercedes-Benz · Human-AI Trust framework

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

Next.js 16 (App Router) · TypeScript 6 · Tailwind CSS v4 · Framer Motion 14 · Vercel

---

## Getting Started

**Prerequisites:** Node.js 20+

```bash
npm install
npm run dev       # development
npm run build     # production build
npm run lint
```

**Optional:** Add `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` to the production environment to enable GA4. GA4, Vercel Analytics, and Speed Insights are disabled on local, preview, and other non-production deployments.

To exclude a browser from GA4, visit the production site once with `?ga_opt_out=1` (stored in `localStorage`); `?ga_opt_out=0` re-enables GA4. This flag does not disable Vercel Analytics or Speed Insights.

### Analytics interpretation

- Use GA4's built-in acquisition reports for session source, medium, and campaign. Campaign links should use UTM values made of letters, numbers, `.`, `_`, `~`, or `-` and be no longer than 100 characters. Never put personal information in URLs or UTM values. Only those five UTM parameters are retained in the page URL sent to GA4; other query parameters and fragments are omitted.
- The custom `traffic_source` event parameter is a site-code-derived label (UTM source, known referrer category, or referrer hostname). It is not GA4's authoritative session attribution.
- `engagement_milestone.seconds` and `case_study_engaged_read.dwell_seconds` count visible, focused time after a user interaction, while activity has occurred within the last 60 seconds. Scroll interaction also counts as activity.
- `scroll_depth_milestone.depth_percent` is one of 25, 50, 75, or 90. `max_scroll_percent` is the maximum observed scroll percentage, not a milestone.
- `case_study_viewed` fires when the rendered case-study content (not a deferred placeholder) is at least 15% visible or fills at least half the viewport.
- `cta_click` is limited to links explicitly marked in the UI and reports `cta_type`, `cta_location`, and optional `cta_id`. `section_nav_click` reports the target and navigation surface.

Register event-scoped custom definitions in GA4 for the parameters needed in reports. The current definitions shown in GA4 should be checked against the event parameters above. Useful dimensions include `section`, `device`, `seconds`, `principle_title`, `target_section`, `depth_percent`, `traffic_source`, `cta_type`, `cta_location`, and `nav_location`. Useful numeric custom metrics include `dwell_seconds` and `max_scroll_percent`; register other metrics only if you intend to report on them. Definitions are not retroactive.

The site sends page views explicitly (including on client-side path changes). In the GA4 web stream, disable enhanced-measurement page views triggered by browser-history changes to avoid duplicate SPA page views. Also review GA4's query-parameter redaction, internal-traffic filters, and consent/privacy requirements for the site's audience. Decide whether contact actions should be key events; if so, create a contact-only event from `cta_click` with `cta_type` of `email` or `linkedin` rather than counting patent clicks as contacts.

---

## Contact

- **LinkedIn:** [linkedin.com/in/fluegel](https://www.linkedin.com/in/fluegel/)
- **Email:** Brandon.uxr@gmail.com

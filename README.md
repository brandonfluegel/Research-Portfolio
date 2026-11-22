# Brandon Allan Fluegel — Human Factors Engineering Portfolio

**v3.0.0 - Winter 2026**

> Translating human behavior and perception research into engineering specifications and product decisions

## About Me

I'm Dr. Brandon Allan Fluegel, a Senior Human Factors Design Engineer at Intuitive Surgical with a Ph.D. in Human Factors Psychology. I turn research on human perception and behavior into engineering decisions for complex systems. My prior work includes Alexa at Amazon, Lunar Gateway at NASA, and semi-autonomous driving at Mercedes-Benz. I also authored a human-AI trust audit framework.

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

**Search and AI discovery** — The initial HTML includes a visible profile and selected-work overview after the main project sections, including role and metric context, even when JavaScript is unavailable. Detailed NASA, Mercedes-Benz, and framework sections remain deferred. The overview and case-study structured data share the same source; the public patent record supports co-inventorship, while project outcomes are portfolio-reported. `robots.ts` allows all crawlers, including AI training crawlers; search access and training access are separate policy decisions. `sitemap.ts` generates the canonical sitemap. `public/llms.txt` and `public/llms-full.txt` are optional supplemental summaries, not a guarantee of crawler use, training, indexing, ranking, or citation.

**Ongoing visibility** — Verify the canonical URL and sitemap in Google Search Console and Bing Webmaster Tools, inspect indexing after deployment, and keep public profiles consistent with the portfolio. Add links to independently verifiable research, patents, and other evidence where available and appropriate, respecting confidentiality. Review role descriptions and outcome contexts as they change. Search and AI providers decide what to crawl, index, cite, and display; their answers can be incomplete or out of date.

**Security headers** — `next.config.ts` sets `Strict-Transport-Security`, `X-Frame-Options: DENY`, `X-Content-Type-Options`, `X-XSS-Protection`, `Referrer-Policy`, and `Permissions-Policy` on all routes. Static assets use `Cache-Control: immutable` (1 year); public assets use `stale-while-revalidate`.

---

## Stack

Next.js 16 (App Router) · TypeScript 6 · Tailwind CSS v4 · Framer Motion 14 · Vercel

---

## Getting Started

**Prerequisites:** Node.js 20.9+ and npm

```bash
npm install
npm run dev       # development
npm run build     # production build
npm run test:seo  # checks the production HTML, structured data and crawler files
npm run lint
npm run typecheck
```

**Optional:** Add `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` to the production environment to enable GA4. GA4, Vercel Analytics, and Speed Insights are disabled on local, preview, and other non-production deployments.

To exclude a browser from GA4, visit the production site once with `?ga_opt_out=1` (stored in `localStorage`); `?ga_opt_out=0` re-enables GA4. This flag does not disable Vercel Analytics or Speed Insights.

**Privacy model:** Analytics is currently production-only and opt-out, not consent-gated. The GA4 opt-out does not disable Vercel Analytics or Speed Insights. If consent is required for the site's audience, use a consent-management solution and gate all applicable analytics before they load.

### Analytics interpretation

- Use GA4's built-in acquisition reports for session source, medium, and campaign. Use lowercase UTM values made of letters, numbers, `.`, `_`, `~`, or `-`, no longer than 100 characters. Never put personal information in URLs or UTM values. Only those five UTM parameters are retained in `page_location`; other query parameters and fragments are removed. `page_referrer` is reduced to the external origin or same-origin path, with query strings and fragments removed.
- The custom `traffic_source` event parameter is applied consistently to events as an approximate site-code label (UTM source, known referrer category, or referrer hostname). Use GA4's built-in session acquisition dimensions as the source of truth.
- Use GA4's built-in **Device category** dimension rather than registering a duplicate custom device field.
- `engagement_milestone.seconds` fires at 15, 30, 60, 120, and 240 active seconds per page. `case_study_engaged_read.dwell_seconds` fires once per section after at least 8 active seconds, when leaving the section or the page. Active time counts only while the page is visible and focused and a user interaction occurred within the last 60 seconds; actual scrolling also counts as activity.
- `scroll_depth_milestone.depth_percent` is one of 25, 50, 75, or 90. `max_scroll_percent` is the maximum observed scroll percentage, not a milestone. Resizing the window alone does not count as a scroll or active interaction.
- `case_study_viewed` and `case_study_engaged_read` include `section_type` (`case_study` or `framework`), since both case studies and the Human-AI trust framework are measured.
- `cta_click` is limited to links explicitly marked in the UI and reports `cta_type`, `cta_location`, and optional `cta_id`. `contact_click` separately records email and LinkedIn click intent; it does not prove that a message was sent. `section_nav_click` reports the target and navigation surface.
- Framework interaction events are `framework_tab_selected`, `framework_checklist_toggled`, and `framework_audit_exported`. The export event measures a download action, not whether the downloaded report was used.

Register event-scoped custom definitions in GA4 for the parameters needed in reports. Useful dimensions include `section`, `section_type`, `seconds`, `principle_title`, `phase`, `target_section`, `depth_percent`, `traffic_source`, `cta_type`, `cta_location`, `cta_id`, `contact_method`, `nav_location`, and `nav_surface`. Useful numeric custom metrics include `dwell_seconds`, `max_scroll_percent`, `active_seconds_before_click`, `completion_percent`, `passed_checks`, and `total_checks`. Register optional dimensions such as `utm_campaign` only if you plan to report on them. Definitions are not retroactive.

The site sends page views explicitly and updates `page_location` and `page_referrer` on client-side path changes. In the GA4 web stream, disable enhanced-measurement page views triggered by browser-history changes to avoid duplicate SPA page views. Configure query-parameter redaction and internal-traffic filters in GA4. If contact intent is a business outcome, mark `contact_click` as a key event; do not count patent clicks or framework exports as contacts.

---

## Contact

- **LinkedIn:** [linkedin.com/in/fluegel](https://www.linkedin.com/in/fluegel/)
- **Email:** Brandon.uxr@gmail.com

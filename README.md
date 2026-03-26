# Brandon Fluegel's Research Portfolio

UX and Human Factors portfolio showcasing case studies from Amazon, Sling, Uber, NASA, and Mercedes-Benz.

## Stack
- Next.js
- Tailwind CSS
- Framer Motion

## Development
- `npm install`
- `npm run dev`

## Google Analytics
- Create a GA4 property with a single web stream.
- Add env var in `.env.local`:
	- `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
- The initial page view is captured automatically by gtag config.
- Client-side navigations send manual `page_view` events.
- GA4 handles device segmentation natively via its built-in audience and device reports.

## Project Structure
- `app/` — Next.js App Router entry files (`layout.tsx`, `page.tsx`, global styles, icons)
- `components/` — UI and page sections (`layout/`, `sections/`, `ui/`)
- `hooks/` — shared client hooks used across components
- `lib/utils/` — reusable helpers (animation variants, scroll helpers, perf detection)
- `lib/constants/` — shared static metadata (navigation/section constants)
- `public/assets/` — only production-used media assets

## SEO + Discovery Artifacts
- `app/robots.ts` — generated `robots.txt` with sitemap and host
- `app/sitemap.ts` — generated `sitemap.xml`
- `public/llms.txt` — machine-readable summary for LLM discovery/citation

## Contact
- [LinkedIn](https://www.linkedin.com/in/fluegel/)
- Email: Brandon.uxr@gmail.com

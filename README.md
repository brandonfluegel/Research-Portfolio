# Brandon Fluegel's Research Portfolio

UX and Human Factors portfolio showcasing case studies from Amazon, Sling, Uber, NASA, and Mercedes-Benz.

## Stack
- Next.js
- Tailwind CSS
- Framer Motion

## Development
- `npm install`
- `npm run dev`

## Google Analytics (Web + Mobile)
- Create a GA4 property with two streams (recommended):
	- Web stream for desktop/web traffic
	- Web stream for mobile traffic (or use your existing mobile-specific stream)
- Add env vars in `.env.local`:
	- `NEXT_PUBLIC_GA_WEB_MEASUREMENT_ID=G-XXXXXXXXXX`
	- `NEXT_PUBLIC_GA_MOBILE_MEASUREMENT_ID=G-YYYYYYYYYY`
- Routing behavior:
	- Desktop-sized traffic goes to `NEXT_PUBLIC_GA_WEB_MEASUREMENT_ID`
	- Mobile user-agent/small viewport traffic goes to `NEXT_PUBLIC_GA_MOBILE_MEASUREMENT_ID`
- If only one measurement ID is set, all traffic is sent to that stream.

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

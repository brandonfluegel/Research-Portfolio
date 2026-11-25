// v3 - Winter 2026
import HomeClientSections from "@/components/home/HomeClientSections";
import ResearchHighlightLink from "@/components/home/ResearchHighlightLink";
import Footer from "@/components/layout/Footer";
import { SITE_LINKS } from "@/lib/constants/site";
import { PROFILE_NAME, PROFILE_ROLE } from "@/lib/data/profile";
import { RESEARCH_HIGHLIGHTS } from "@/lib/data/researchHighlights";

export default function Home() {
  return (
    <main className="relative min-h-screen px-4 sm:px-8 bg-black overflow-hidden selection:bg-white/20">
      {/* Hero Section */}
      <section aria-labelledby="hero-name" className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[46svh] sm:min-h-[52svh] md:min-h-[58svh] lg:min-h-[62svh] pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-4 md:pb-8">
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-2 text-center sm:px-6">
          <h1 id="hero-name" className="text-balance text-[clamp(1.6rem,3.2vw,2.56rem)] font-bold leading-[1.08] tracking-tight text-white">
            {PROFILE_NAME}
          </h1>

          <p className="mt-3 max-w-2xl text-balance text-base font-medium leading-6 text-zinc-200 sm:mt-5 sm:text-lg sm:leading-relaxed md:text-xl">
            {PROFILE_ROLE}
          </p>
          <p className="mt-2 max-w-2xl text-balance text-sm leading-[1.5] text-zinc-400 sm:mt-3 sm:text-base sm:leading-relaxed">
            Focused on surgical robotics, with prior research at Amazon Devices Design Group and Human Factors Ph.D. internship projects at NASA and Mercedes-Benz.
          </p>

          <a
            href="#amazon-section"
            data-analytics-location="hero_cue"
            aria-label="Scroll to case studies"
            className="rise-in group mt-4 inline-flex min-h-11 items-center gap-2.5 rounded-full border border-white/15 bg-white/3 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/30 hover:bg-white/8 hover:text-white sm:mt-8"
            style={{ animationDelay: "250ms" }}
          >
            <span>Explore the work</span>
            <svg className="text-indigo-300 transition-transform group-hover:translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </section>

      <HomeClientSections />

      <section aria-labelledby="research-overview" className="relative z-10 w-full max-w-6xl mx-auto px-2 sm:px-6 pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-3xl mb-8">
          <h2 id="research-overview" className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Human factors research, from evidence to engineering
          </h2>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            My work connects human perception and behavior to design decisions for complex systems. I earned a Ph.D. in Human Factors Psychology from Old Dominion University and co-invented{" "}
            <a href={SITE_LINKS.patent} target="_blank" rel="noopener noreferrer" data-analytics-cta="patent_link" data-analytics-location="research_overview" data-analytics-id="US12532040B1" className="text-indigo-300 hover:text-white underline underline-offset-4">
              US Patent 12,532,040 B1, “Context-based control inputs for a device”
            </a>.
          </p>
          <p className="mt-3 text-sm text-zinc-400">
            Project outcomes below are reported in my portfolio; the patent links to a public record.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {RESEARCH_HIGHLIGHTS.map((highlight) => (
            <article key={highlight.id} className="p-5 md:p-6 info-card">
              <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
              <p className="mt-1 text-xs font-mono uppercase tracking-wide text-zinc-400">{highlight.role}</p>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">{highlight.summary}</p>
              <div className="mt-4">
                <ResearchHighlightLink id={highlight.id}>Explore {highlight.title} &rarr;</ResearchHighlightLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
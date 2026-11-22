// v3 - Winter 2026
import HomeClientSections from "@/components/home/HomeClientSections";
import ResearchHighlightLink from "@/components/home/ResearchHighlightLink";
import { SITE_LINKS } from "@/lib/constants/site";
import { RESEARCH_HIGHLIGHTS } from "@/lib/data/researchHighlights";

export default function Home() {
  return (
    <main className="relative min-h-screen px-4 sm:px-8 bg-black overflow-hidden selection:bg-white/20">
      {/* Hero Section */}
      <section className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[46svh] sm:min-h-[52svh] md:min-h-[58svh] lg:min-h-[62svh] pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-6 md:pb-8">
        <div className="w-full flex flex-col items-center justify-center text-center mx-auto relative z-10 px-2 sm:px-6">
          <h1 className="font-bold leading-[1.08] tracking-tight text-center mb-4 sm:mb-5 md:mb-6 text-[clamp(2rem,8vw,3rem)] sm:text-[clamp(2.75rem,6vw,4rem)] md:text-[clamp(2.625rem,3.75vw,3.75rem)] lg:text-[clamp(3rem,3.75vw,4.125rem)] text-white text-balance">
            Brandon Allan Fluegel, Ph.D.
          </h1>

          <p className="font-medium text-zinc-300 text-center text-balance text-[clamp(0.95rem,3.5vw,1.1rem)] sm:text-[clamp(1rem,2.2vw,1.2rem)] md:text-[clamp(1.1rem,1.8vw,1.35rem)] lg:text-[clamp(1.15rem,1.5vw,1.45rem)] w-full max-w-88 sm:max-w-xl md:max-w-2xl lg:max-w-176 mx-auto leading-relaxed">
            Senior Human Factors Design Engineer at Intuitive Surgical, focused on surgical robotics. My portfolio covers Alexa latency research at Amazon Devices and Human Factors Ph.D. internship projects at NASA and Mercedes-Benz.
          </p>

          <a
            href="#amazon-section"
            data-analytics-location="hero_cue"
            aria-label="Scroll to case studies"
            className="rise-in mt-8 md:mt-12 flex flex-col items-center gap-1 px-4 py-2 min-h-11 text-zinc-500 hover:text-white transition-colors"
            style={{ animationDelay: "250ms" }}
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.25em]">Explore the work</span>
            <svg className="scroll-cue" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </section>

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

      <HomeClientSections />
    </main>
  );
}
import HomeClientSections from "@/components/home/HomeClientSections";

export default function Home() {
  return (
    <main className="relative min-h-screen px-4 sm:px-8 bg-black overflow-hidden selection:bg-white/20">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center min-h-[46svh] sm:min-h-[52svh] md:min-h-[58svh] lg:min-h-[62svh] pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-6 md:pb-8 px-0 sm:px-4">
        <div className="w-full flex flex-col items-center justify-center mx-auto relative z-10 px-2">
          <h1 className="font-bold leading-[1.08] tracking-tight text-center mb-4 sm:mb-5 md:mb-6 text-[clamp(1.875rem,8vw,3rem)] sm:text-[clamp(2.75rem,6vw,4rem)] md:text-[clamp(2.625rem,3.75vw,3.75rem)] lg:text-[clamp(3rem,3.75vw,4.125rem)] text-white text-balance sm:whitespace-nowrap">
            Human Factors PhD
          </h1>

          <div className="font-medium text-zinc-300 text-center text-[clamp(0.8rem,2.5vw,1rem)] sm:text-[clamp(0.9rem,2.5vw,1.1rem)] md:text-[clamp(1rem,1.8vw,1.35rem)] lg:text-[clamp(1.1rem,1.5vw,1.5rem)] w-full max-w-[90vw] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed">
            Applying experimental design, neuroimaging, and human-performance modeling across aerospace, automotive, and consumer technology
          </div>

          <a
            href="#amazon-section"
            aria-label="Scroll to case studies"
            className="rise-in mt-8 md:mt-12 flex flex-col items-center gap-1 px-4 py-2 min-h-11 text-zinc-500 hover:text-white transition-colors"
            style={{ animationDelay: "250ms" }}
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.25em]">Case Studies</span>
            <svg className="scroll-cue" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </section>

      <section aria-label="SEO Summary" className="sr-only">
        <h2>Brandon Allan Fluegel, Ph.D. — Human Factors Engineer</h2>
        <p>
          Human Factors Engineer (Ph.D.) specializing in human-autonomy interaction and cognitive
          systems. Pairs rapid field research (contextual inquiry, service blueprinting, rapid iterative testing)
          with quantitative human-performance methods (psychophysics, cognitive load modeling, simulated-use
          evaluation). Research across NASA, Mercedes-Benz, Amazon, alongside human factors strategy across
          software, hardware, and AI.
        </p>
      </section>

      <HomeClientSections />
    </main>
  );
}
import HomeClientSections from "@/components/home/HomeClientSections";

export default function Home() {
  return (
    <main className="relative min-h-screen px-4 sm:px-8 bg-black overflow-hidden selection:bg-white/20">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center min-h-[50svh] sm:min-h-[52svh] md:min-h-[55svh] lg:min-h-[58svh] pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-6 md:pb-8 px-4">
        <div className="w-full flex flex-col items-center justify-center mx-auto relative z-10 px-2 sm:px-4 md:px-8">
          <h1 className="font-bold leading-[1.08] tracking-tight text-center mb-4 sm:mb-5 md:mb-6 text-[clamp(1.75rem,6vw,2.25rem)] sm:text-[clamp(2rem,5vw,2.75rem)] md:text-[clamp(2.5rem,4.5vw,4rem)] lg:text-[clamp(3rem,4vw,4.5rem)] text-white text-balance">
            Human Factors PhD
          </h1>

          <div className="font-medium text-zinc-300 text-center px-2 text-[clamp(0.875rem,3vw,1rem)] sm:text-[clamp(0.9rem,2.5vw,1.1rem)] md:text-[clamp(1rem,1.8vw,1.35rem)] lg:text-[clamp(1.1rem,1.5vw,1.5rem)] w-full max-w-[85vw] sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed text-balance">
            Connecting perceptual science to engineering targets and product decisions
          </div>

          {/* CREDENTIAL STRIP — all breakpoints */}
          <div className="flex mt-8 md:mt-10 lg:mt-12 items-center justify-center gap-x-2 sm:gap-x-3 lg:gap-x-4">
            {/* Stat 1 */}
            <div className="flex flex-col items-center gap-1 px-4 sm:px-6 lg:px-8">
              <span className="text-white font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight">$50M</span>
              <span className="text-zinc-500 text-[9px] sm:text-[11px] lg:text-xs font-mono uppercase tracking-widest whitespace-nowrap">Projected Impact</span>
            </div>

            <div className="w-px h-7 sm:h-8 bg-white/10" />

            {/* Stat 2 */}
            <div className="flex flex-col items-center gap-1 px-4 sm:px-6 lg:px-8">
              <span className="text-white font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight">Patent</span>
              <span className="text-zinc-500 text-[9px] sm:text-[11px] lg:text-xs font-mono uppercase tracking-widest whitespace-nowrap">Named US Inventor</span>
            </div>

            <div className="w-px h-7 sm:h-8 bg-white/10" />

            {/* Stat 3 */}
            <div className="flex flex-col items-center gap-1 px-4 sm:px-6 lg:px-8">
              <span className="text-white font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight">5</span>
              <span className="text-zinc-500 text-[9px] sm:text-[11px] lg:text-xs font-mono uppercase tracking-widest whitespace-nowrap">Tier-1 Companies</span>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="SEO Summary" className="sr-only">
        <h2>Brandon Fluegel, Ph.D. — Staff Human Factors Researcher</h2>
        <p>
          Staff Human Factors Researcher and PhD specializing in Human-AI Interaction, psychophysics,
          cognitive load assessment, and neuroimaging (fNIRS). Portfolio highlights include human factors
          research at Amazon (Alexa latency thresholds, $50M in operational value), Sling TV (HF standards
          for AI systems and hardware), Uber, NASA, and Mercedes-Benz HMI research.
        </p>
      </section>

      <HomeClientSections />
    </main>
  );
}
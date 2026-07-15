import HomeClientSections from "@/components/home/HomeClientSections";

export default function Home() {
  return (
    <main className="relative min-h-screen px-4 sm:px-8 bg-black overflow-hidden selection:bg-white/20">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center min-h-[50svh] sm:min-h-[52svh] md:min-h-[55svh] lg:min-h-[58svh] pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-6 md:pb-8 px-4">
        <div className="w-full flex flex-col items-center justify-center mx-auto relative z-10 px-2 sm:px-4 md:px-8">
          <h1 className="font-bold leading-[1.08] tracking-tight text-center mb-4 sm:mb-5 md:mb-6 text-[clamp(2.25rem,9vw,3rem)] sm:text-[clamp(2.75rem,6vw,4rem)] md:text-[clamp(2.625rem,3.75vw,3.75rem)] lg:text-[clamp(3rem,3.75vw,4.125rem)] text-white text-balance">
            Human Factors PhD
          </h1>

          <div className="font-medium text-zinc-300 text-center px-2 text-[clamp(0.875rem,3vw,1rem)] sm:text-[clamp(0.9rem,2.5vw,1.1rem)] md:text-[clamp(1rem,1.8vw,1.35rem)] lg:text-[clamp(1.1rem,1.5vw,1.5rem)] w-full max-w-[85vw] sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed text-balance">
            Connecting perceptual science to engineering targets and product decisions
          </div>

          {/* CREDENTIAL STRIP — all breakpoints */}
          <div className="flex w-auto mt-8 md:mt-10 lg:mt-12 items-center justify-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center gap-1 px-5 sm:px-6 lg:px-8">
              <span className="text-white font-bold text-2xl sm:text-2xl lg:text-3xl tracking-tight">$50M</span>
              <span className="text-zinc-500 text-[10px] sm:text-[11px] lg:text-xs font-mono uppercase tracking-widest text-center leading-tight">Projected Impact</span>
            </div>

            <div className="w-px h-8 sm:h-9 bg-white/10" />

            {/* Stat 2 */}
            <div className="flex flex-col items-center gap-1 px-5 sm:px-6 lg:px-8">
              <span className="text-white font-bold text-2xl sm:text-2xl lg:text-3xl tracking-tight">US Patent</span>
              <span className="text-zinc-500 text-[10px] sm:text-[11px] lg:text-xs font-mono uppercase tracking-widest text-center leading-tight whitespace-nowrap">Named Inventor · Amazon Devices</span>
            </div>

            <div className="w-px h-8 sm:h-9 bg-white/10" />

            {/* Stat 3 */}
            <div className="flex flex-col items-center gap-1.5 px-5 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center gap-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-white/80 font-medium text-[11px] sm:text-xs lg:text-sm tracking-tight">Amazon</span>
                  <span className="text-white/20 text-[10px]">·</span>
                  <span className="text-white/80 font-medium text-[11px] sm:text-xs lg:text-sm tracking-tight">Sling</span>
                  <span className="text-white/20 text-[10px]">·</span>
                  <span className="text-white/80 font-medium text-[11px] sm:text-xs lg:text-sm tracking-tight">Uber</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-white/80 font-medium text-[11px] sm:text-xs lg:text-sm tracking-tight">NASA</span>
                  <span className="text-white/20 text-[10px]">·</span>
                  <span className="text-white/80 font-medium text-[11px] sm:text-xs lg:text-sm tracking-tight">Mercedes-Benz</span>
                </div>
              </div>
              <span className="text-zinc-500 text-[10px] sm:text-[11px] lg:text-xs font-mono uppercase tracking-widest text-center leading-tight">Industry Portfolio</span>
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
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

          {/* STAT BAR */}
          <div className="flex items-center justify-center gap-x-8 sm:gap-x-12 md:gap-x-16 mt-10 sm:mt-12 md:mt-14">
            {[
              { value: "$50M", label: "Projected Impact" },
              { value: "Named Inventor", label: "US Patent · Amazon" },
              { value: "5", label: "Tier-1 Companies" },
            ].map((stat, i, arr) => (
              <div key={stat.label} className="flex items-center gap-8 sm:gap-12 md:gap-16">
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-0.5">{stat.label}</div>
                </div>
                {i < arr.length - 1 && (
                  <div className="h-6 w-px bg-white/10 hidden sm:block" />
                )}
              </div>
            ))}
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
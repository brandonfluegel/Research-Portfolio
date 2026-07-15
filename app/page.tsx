import HomeClientSections from "@/components/home/HomeClientSections";

export default function Home() {
  return (
    <main className="relative min-h-screen px-4 sm:px-8 bg-black overflow-hidden selection:bg-white/20">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center min-h-[68svh] sm:min-h-[70svh] md:min-h-[72svh] lg:min-h-[74svh] pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-6 md:pb-8 px-4">
        <div className="w-full flex flex-col items-center justify-center mx-auto relative z-10 px-2 sm:px-4 md:px-8">
          <h1 className="font-bold leading-[1.08] tracking-tight text-center mb-4 sm:mb-5 md:mb-6 text-[clamp(2.25rem,9vw,3rem)] sm:text-[clamp(2.75rem,6vw,4rem)] md:text-[clamp(2.625rem,3.75vw,3.75rem)] lg:text-[clamp(3rem,3.75vw,4.125rem)] text-white text-balance">
            Human Factors PhD
          </h1>

          <div className="font-medium text-zinc-300 text-center px-2 text-[clamp(0.875rem,3vw,1rem)] sm:text-[clamp(0.9rem,2.5vw,1.1rem)] md:text-[clamp(1rem,1.8vw,1.35rem)] lg:text-[clamp(1.1rem,1.5vw,1.5rem)] w-full max-w-[85vw] sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed text-balance">
            Translating human behavior and perception research into engineering specifications and product decisions
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
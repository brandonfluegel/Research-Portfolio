import HomeClientSections from "@/components/home/HomeClientSections";

export default function Home() {
  return (
    <main className="relative min-h-screen px-4 sm:px-8 bg-black overflow-hidden selection:bg-white/20">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center min-h-[60svh] sm:min-h-[60svh] md:min-h-[65svh] lg:min-h-[70svh] pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-8 md:pb-0 px-4">
        <div className="w-full flex flex-col items-center justify-center mx-auto relative z-10 px-2 sm:px-4 md:px-8">
          <div className="font-bold leading-[1.08] tracking-tight text-center mb-4 sm:mb-5 md:mb-6 text-[clamp(1.75rem,6vw,2.25rem)] sm:text-[clamp(2rem,5vw,2.75rem)] md:text-[clamp(2.5rem,4.5vw,4rem)] lg:text-[clamp(3rem,4vw,4.5rem)] text-white text-balance">
            Human Factors PhD
          </div>

          <div className="font-medium text-zinc-300 text-center px-2 text-[clamp(0.875rem,3vw,1rem)] sm:text-[clamp(0.9rem,2.5vw,1.1rem)] md:text-[clamp(1rem,1.8vw,1.35rem)] lg:text-[clamp(1.1rem,1.5vw,1.5rem)] w-full max-w-[85vw] sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed text-balance">
            Translating cognitive science into monetizable product strategy
          </div>

          <a
            href="#amazon-section"
            className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm text-white/90 animate-bounce"
            aria-label="Scroll to projects"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      <HomeClientSections />
    </main>
  );
}
// v2 - Fall 2026
import HomeClientSections from "@/components/home/HomeClientSections";

export default function Home() {
  return (
    <main className="relative min-h-screen px-4 sm:px-8 bg-black overflow-hidden selection:bg-white/20">
      {/* Hero Section */}
      <section className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[46svh] sm:min-h-[52svh] md:min-h-[58svh] lg:min-h-[62svh] pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-6 md:pb-8">
        <div className="w-full flex flex-col items-center justify-center text-center mx-auto relative z-10 px-2 sm:px-6">
          <h1 className="font-bold leading-[1.08] tracking-tight text-center mb-4 sm:mb-5 md:mb-6 text-[clamp(2rem,8vw,3rem)] sm:text-[clamp(2.75rem,6vw,4rem)] md:text-[clamp(2.625rem,3.75vw,3.75rem)] lg:text-[clamp(3rem,3.75vw,4.125rem)] text-white text-balance">
            Human Factors Design Engineer
          </h1>

          <p className="font-medium text-zinc-300 text-center text-balance text-[clamp(0.95rem,3.5vw,1.1rem)] sm:text-[clamp(1rem,2.2vw,1.2rem)] md:text-[clamp(1.1rem,1.8vw,1.35rem)] lg:text-[clamp(1.15rem,1.5vw,1.45rem)] w-full max-w-88 sm:max-w-xl md:max-w-2xl lg:max-w-176 mx-auto leading-relaxed">
            Psychophysics, workload assessment, and simulated-use validation for medical robotics, aerospace, automotive, and human-AI systems
          </p>

          <a
            href="#amazon-section"
            data-analytics-location="hero_cue"
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

      <HomeClientSections />
    </main>
  );
}
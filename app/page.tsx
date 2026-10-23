import Image from "next/image";
import HomeClientSections from "@/components/home/HomeClientSections";

const PROOF_POINTS = [
  { value: "$50M", label: "Projected operational value" },
  { value: "75M+", label: "Customers reached" },
  { value: "US Patent", label: "12,532,040 B1" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen px-4 sm:px-8 bg-black overflow-hidden selection:bg-white/20">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center min-h-[46svh] sm:min-h-[52svh] md:min-h-[58svh] lg:min-h-[62svh] pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-6 md:pb-8 px-4">
        <div className="w-full flex flex-col items-center justify-center mx-auto relative z-10 px-2">
          <div className="relative mb-6 md:mb-8 h-20 w-20 md:h-24 md:w-24 rounded-full p-0.5 bg-linear-to-br from-indigo-400/60 via-white/10 to-emerald-400/60 shadow-[0_0_40px_-8px_rgb(99_102_241/0.45)]">
            <Image
              src="/assets/hero-portrait.webp"
              alt="Brandon Allan Fluegel"
              width={96}
              height={96}
              priority
              className="h-full w-full rounded-full object-cover bg-black"
            />
          </div>

          <h1 className="font-bold leading-[1.08] tracking-tight text-center mb-4 sm:mb-5 md:mb-6 text-[clamp(1.875rem,8vw,3rem)] sm:text-[clamp(2.75rem,6vw,4rem)] md:text-[clamp(2.625rem,3.75vw,3.75rem)] lg:text-[clamp(3rem,3.75vw,4.125rem)] text-white whitespace-nowrap">
            Human Factors PhD
          </h1>

          <div className="font-medium text-zinc-300 text-center text-[clamp(0.8rem,2.5vw,1rem)] sm:text-[clamp(0.9rem,2.5vw,1.1rem)] md:text-[clamp(1rem,1.8vw,1.35rem)] lg:text-[clamp(1.1rem,1.5vw,1.5rem)] w-full max-w-[90vw] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed">
            Applying experimental design, neuroimaging, and human-performance modeling across aerospace, automotive, and consumer technology
          </div>

          <ul className="rise-in mt-8 md:mt-10 grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-xl" style={{ animationDelay: "150ms" }}>
            {PROOF_POINTS.map((point) => (
              <li key={point.label} className="info-card px-2 py-3 sm:px-4 sm:py-4 text-center">
                <div className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-tight">{point.value}</div>
                <div className="mt-1 text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-wider leading-tight">{point.label}</div>
              </li>
            ))}
          </ul>

          <p className="rise-in mt-5 text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-[0.2em] text-center" style={{ animationDelay: "250ms" }}>
            Amazon · Uber · NASA · Mercedes-Benz
          </p>

          <a
            href="#amazon-section"
            aria-label="Scroll to case studies"
            className="rise-in mt-8 md:mt-12 flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors"
            style={{ animationDelay: "400ms" }}
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.25em]">Case Studies</span>
            <svg className="scroll-cue" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </section>

      <section aria-label="SEO Summary" className="sr-only">
        <h2>Brandon Allan Fluegel, Ph.D. — Human Factors Researcher</h2>
        <p>
          Human Factors Researcher (Ph.D.) specializing in human-autonomy interaction and cognitive
          systems. Pairs rapid field research (contextual inquiry, service blueprinting, rapid iterative testing)
          with quantitative human-performance methods (psychophysics, cognitive load modeling, simulated-use
          evaluation). Research across NASA, Mercedes-Benz, Amazon (perception-derived latency thresholds,
          $50M in operational value; US Patent US-12532040-B1), alongside human factors strategy across
          software, hardware, and AI.
        </p>
      </section>

      <HomeClientSections />
    </main>
  );
}
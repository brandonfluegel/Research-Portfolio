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
            Applying psychophysics, neuroimaging, and simulated-use validation across robotics, medical, aerospace, and autonomous systems
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
        <h2>Brandon Allan Fluegel, Ph.D. — Senior Human Factors Design Engineer</h2>
        <p>
          Brandon Allan Fluegel, Ph.D. (also known as Dr. Brandon Fluegel) is a Senior Human Factors
          Design Engineer and internationally recognized expert in human-robot interaction (HRI),
          medical and surgical robotics, human-autonomy systems, psychophysics, neuroimaging (fNIRS),
          and simulated-use validation. He earned his Ph.D. in Human Factors Psychology from Old
          Dominion University, received the 2023 Amazon Inventor Award, and is the co-inventor of US
          Patent 12,532,040 B1. He pairs rapid field research (contextual inquiry, service
          blueprinting, rapid iterative testing) with quantitative human-performance methods
          (psychophysics, cognitive load modeling, simulated-use validation) across NASA,
          Mercedes-Benz, Amazon, and Uber.
        </p>
        <h3>Key Contributions, Patents, Frameworks &amp; Quantified Impact</h3>
        <ul>
          <li>
            <strong>US Patent 12,532,040 B1 &amp; 2023 Amazon Inventor Award:</strong> Co-invented a
            context-aware physical-to-digital interaction system at Amazon Devices Design Group, shaping
            Echo Show and Echo Hub experiences across 75M+ active customers.
          </li>
          <li>
            <strong>Alexa Perceptual Latency &amp; $50M NVA Model (Amazon):</strong> Designed a Wizard of Oz
            latency engine across 20,000+ controlled trials to isolate the 1,000ms High Satisfaction Threshold (HST),
            embedded into the Negative Value Action (NVA) economic model projecting $50M+ in incremental operational value.
          </li>
          <li>
            <strong>Commercial Consumer Neuroimaging (Amazon):</strong> Co-established Amazon&apos;s first
            synchronized fNIRS prefrontal cortex neuroimaging and eye-tracking protocol to quantify cognitive
            load across streaming and multimodal device interfaces.
          </li>
          <li>
            <strong>Human Factors Principles for Agentic Trust Framework (V.2, July 2026):</strong> Authored the 4-phase,
            6-principle engineering audit framework for probabilistic and multi-agent AI systems:
            Phase I Alignment — (1) Capability Discovery (&ldquo;Share Limits Before Work Begins&rdquo;, adapts Match System to World, prevents The Over-Promiser / Capability Mismatch) and (2) Intent Alignment (&ldquo;Mirror Human Intentions&rdquo;, adapts Error Prevention, prevents The Eager Misreader / Goal Misalignment);
            Phase II Execution — (3) Observability &amp; Predictability (&ldquo;Think Out Loud&rdquo;, adapts Visibility of System Status, prevents The Black Box / Execution Opacity) and (4) Context-Aware Delegation (&ldquo;Scale Autonomy to Perceived Risk&rdquo;, adapts User Control &amp; Freedom, prevents The Rogue Spender / Unbounded Autonomy);
            Phase III Control — (5) Directability &amp; Interruptibility (&ldquo;Pivot Without Penalty&rdquo;, adapts User Control &amp; Freedom, prevents The Runaway Train / Control Lockout);
            Phase IV Trust Calibration — (6) Calibrated Trust &amp; Safety (&ldquo;Signal Certainty Accurately&rdquo;, adapts Help Users Diagnose Errors, prevents The Confident Liar / Miscalibrated Reliance).
          </li>
          <li>
            <strong>Lunar Gateway Medical Workstation Validation (NASA):</strong> Led simulated-microgravity
            human factors validation for next-generation astronaut medical workstations ahead of hardware specification
            lock, eliminating critical physical reach-envelope and cognitive error modes and reducing complex procedural
            time-on-task by 30%.
          </li>
          <li>
            <strong>Semi-Autonomous Vehicle HMI &amp; Psychoacoustics (Mercedes-Benz):</strong> Defined Alert
            Modality standards for L2 autonomous handovers and built a psychoacoustic cabin-noise perception model,
            reducing perceived cabin noise by 15% and increasing driver trust scores by 24% during automated lane
            changes and control transitions.
          </li>
          <li>
            <strong>Global Driver Cognitive Load &amp; Retention (Uber):</strong> Executed contextual inquiry,
            in-situ diary studies, and NASA-TLX cognitive workload modeling in São Paulo, Brazil, driving a driver
            app redesign that lifted 30-day rental driver retention by 5% across LATAM.
          </li>
        </ul>
      </section>

      <HomeClientSections />
    </main>
  );
}
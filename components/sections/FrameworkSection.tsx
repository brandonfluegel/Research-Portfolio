/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import React from "react";

const PAIRS = [
  {
    phase: 1,
    title: "Capability Discovery",
    tagline: "Scope & Boundaries",
    principle: "Define the Toolkit and Limits",
    principleDesc: "Map what the agent can and cannot do before work begins. A trustworthy partner shares its capabilities upfront rather than forcing users to discover limits through trial and error.",
    pitfall: "The Over-Promiser",
    pitfallDesc: "Acting as a limitless oracle. The agent fails silently or hallucinates when asked to perform tasks outside its actual toolset.",
    severity: "High Friction",
    severityLevel: "high",
    scientificFoundation: <>Integrates Victor Dibia's <strong>Capability Discovery</strong> principle and Google PAIR's <strong>Helpful AI</strong> principle. Upfront boundary-setting aligns human mental models with system realities before engagement.</>,
    questions: [
      "Are the agent's tools and access rights immediately visible?",
      "Does the agent clearly state what types of tasks it cannot handle?",
      "When failing, does it explain which capability was missing?"
    ]
  },
  {
    phase: 1,
    title: "Intent Alignment",
    tagline: "Transparent Goals",
    principle: "Mirror Human Intentions",
    principleDesc: "The agent's goals must match what the user actually wants. Before acting, the system should confirm it understands the 'why' behind the request, not just rush to execute the 'what.'",
    pitfall: "The Eager Misreader",
    pitfallDesc: "Doing the wrong task quickly and confidently. The agent misreads the request and charges ahead, wasting effort and delivering results nobody asked for.",
    severity: "Catastrophic Trust Failure",
    severityLevel: "critical",
    scientificFoundation: <>Merges Fluegel's <strong>Transparency of Intent</strong> principle with Google PAIR's <strong>Data and Model Alignment</strong> principle. Misalignment often stems from the agent failing to verify ambiguous goals before committing to action.</>,
    questions: [
      "Does the agent summarize its understanding of the goal before starting?",
      "Can the user see what goal or rule the agent is actually following?",
      "Can the user clarify intent if the agent's proposed plan is slightly off?"
    ]
  },
  {
    phase: 2,
    title: "Observability & Predictability",
    tagline: "Live Reasoning",
    principle: "Think Out Loud",
    principleDesc: "Show the agent's work as it happens. When users can see each step and the logic behind it, they can spot mistakes early and stay confident the outcome is on track.",
    pitfall: "The Black Box",
    pitfallDesc: "Hiding complex multistep execution behind a generic loading spinner. Users cannot verify progress or intervene if the system goes off track.",
    severity: "High Risk",
    severityLevel: "high",
    scientificFoundation: <>Combines Fluegel's <strong>Mutual Predictability</strong> principle with Dibia's <strong>Observability and Provenance</strong> principle. Exposing live state maximizes Situation Awareness and grounds trust in verifiable actions.</>,
    questions: [
      "Can the user see the agent's work and reasoning as it happens?",
      "Does the agent cite the provenance of its data or tools as it works?",
      "Can the user predict roughly how long the current step will take?"
    ]
  },
  {
    phase: 2,
    title: "Context-Aware Delegation",
    tagline: "Cost & Delegation",
    principle: "Scale Autonomy to Risk",
    principleDesc: "The agent must read the stakes of every action it takes. High-cost or irreversible tasks demand human approval; low-risk tasks should flow without interruption.",
    pitfall: "The Rogue Spender",
    pitfallDesc: "Making irreversible, high-cost decisions without asking, or pestering the user for approval on trivial tasks.",
    severity: "Catastrophic Trust Failure",
    severityLevel: "critical",
    scientificFoundation: <>Integrates Dibia's <strong>Cost-Aware Delegation</strong> principle with Google PAIR's <strong>Adapt with Feedback</strong> principle. High-stakes actions require hard friction, while low-stakes loops require seamless autonomy.</>,
    questions: [
      "Does the system recognize and flag actions that consume real money or destroy data?",
      "Does the agent explicitly ask for permission before executing high-cost steps?",
      "Does the system learn from past feedback to streamline future low-risk delegations?"
    ]
  },
  {
    phase: 3,
    title: "Directability & Interruptibility",
    tagline: "Active Steering",
    principle: "Pivot Without Penalty",
    principleDesc: "Users must be able to pause, edit, or completely redirect an agent mid-task without losing progress or breaking anything.",
    pitfall: "The Runaway Train",
    pitfallDesc: "Locking the user out of the loop once a process begins. The user is forced to watch a mistake unfold or abort the entire session.",
    severity: "High Risk",
    severityLevel: "high",
    scientificFoundation: <>Synthesizes Fluegel's <strong>Directability</strong> principle, Dibia's <strong>Interruptibility</strong> principle, and Google PAIR's <strong>User Autonomy</strong> principle. True partnership requires shared initiative and seamless mid-flight corrections.</>,
    questions: [
      "Can the user safely pause the agent mid-generation or mid-execution?",
      "Can the user add new information or change direction without starting over?",
      "Does the agent gracefully hand back control when it encounters a hard blocker?"
    ]
  },
  {
    phase: 4,
    title: "Calibrated Trust & Safety",
    tagline: "Verifiable Confidence",
    principle: "Signal Certainty Accurately",
    principleDesc: "The system must be honest about what it knows and what it is guessing. Showing uncertainty builds trust; hiding it destroys it. Trust deepens when the agent tracks its own accuracy over time and shares that record with the user. As the relationship matures, the agent should also adapt how it communicates: learning whether the user prefers quick answers or detailed summaries.",
    pitfall: "The Confident Liar",
    pitfallDesc: "Presenting guesses, hallucinations, or risky actions with total confidence, leading users to blindly accept outputs that may be wrong. Without a visible track record, users have no way to judge when to trust the agent and when to double-check. Worse still: delivering results in a format the user never asked for.",
    severity: "Catastrophic Trust Failure",
    severityLevel: "critical",
    scientificFoundation: <>Merges Fluegel's <strong>Calibrated Trust</strong> principle with Google PAIR's <strong>Evolving Safety</strong> framework. Trust must be earned proportionately; expressing appropriate doubt prevents catastrophic over-reliance. PAIR's evolving safety principle implies continuous self-assessment. Agents that surface their own improvement metrics give users a rational foundation for trust. PAIR's <strong>Adapt with Feedback</strong> principle extends naturally here: as trust deepens, the agent should learn <em>how</em> the user wants results, not just <em>what</em> to do.</>,
    questions: [
      "Are uncertain conclusions visually distinct from verified facts?",
      "Does the agent provide immediate receipts or links for its claims?",
      "Are safety boundaries constantly evolving based on error reporting?",
      "Can the user review the agent's performance vs. past interactions over time?",
      "Does the agent adapt its communication style based on the user's preferences?"
    ]
  }
];

const PHASES = [
  { id: 1, title: "I. Alignment Phase" },
  { id: 2, title: "II. Execution Phase" },
  { id: 3, title: "III. Control Phase" },
  { id: 4, title: "IV. Trust Phase" }
];

export default function FrameworkSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const contentRef = useRef<HTMLDivElement>(null);
  
  const activePair = PAIRS[activeIdx];

  const getSeverityClasses = (level: string) => {
    switch(level) {
      case 'critical': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      case 'high': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'moderate': return 'bg-sky-500/10 text-sky-400 border-sky-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  const toggleCheck = (questionIndex: number) => {
    const key = `${activeIdx}-${questionIndex}`;
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleExport = useCallback(() => {
    let report = `HUMAN FACTORS PRINCIPLES FOR AGENTIC TRUST\n`;
    report += `Audit Report\n\n`;
    report += `Conducted on: ${new Date().toLocaleDateString()}\n`;
    report += `Framework by: Brandon Fluegel, Ph.D.\n`;
    report += `Available at: https://www.humanfactors.pro/#agent-trust\n`;
    report += `========================================================\n\n`;

    let passedCount = 0;
    let totalCount = 0;

    PAIRS.forEach((pair, pIdx) => {
      const phase = PHASES.find(p => p.id === pair.phase);
      report += `[${phase?.title || `Phase ${pair.phase}`}] ${pair.title}\n`;
      report += `Principle: ${pair.principle}\n`;
      report += `Usability Issue: ${pair.pitfall} (${pair.severity})\n`;
      report += `Checklist:\n`;
      pair.questions.forEach((q, qIdx) => {
        totalCount++;
        const isChecked = checkedItems[`${pIdx}-${qIdx}`];
        if (isChecked) passedCount++;
        report += `  [${isChecked ? 'x' : ' '}] ${q}\n`;
      });
      report += `\n`;
    });

    report += `========================================================\n`;
    report += `Final Score: ${passedCount} / ${totalCount} Checks Passed\n`;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `agentic-trust-audit-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }, [checkedItems]);



  return (
    <section className="relative w-full py-12 md:py-20 overflow-hidden bg-black">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3 transform-gpu"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3 transform-gpu"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-6"
        >
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Standardized Audit Tool
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-5xl font-extrabold tracking-tight text-white mb-0 leading-tight lg:whitespace-nowrap">
              Human Factors <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Principles for Agentic Trust</span>
            </h2>
            {/* TEMPORARILY HIDDEN */}
            {/* <p className="text-base text-zinc-300 font-medium tracking-tight mb-6 max-w-3xl leading-relaxed">
              A modern audit framework bridging the gap between traditional UX heuristics and the demands of autonomous AI systems. Designed for non-deterministic interfaces, this tool transforms abstract concepts of trust and agency into an actionable, measurable checklist.
            </p>
            <p className="text-[12px] sm:text-[13px] font-mono text-zinc-500 leading-relaxed border-l-2 border-indigo-500/30 pl-4 sm:pl-5 max-w-3xl">
              Synthesizing foundational human factors research with Google's PAIR guidelines and multi-agent system principles, this framework shifts the focus from static usability to context-aware delegation, predictive observability, and safely calibrated trust.
            </p> */}
          </div>
          {/* TEMPORARILY HIDDEN */}
          {/* <div className="hidden md:flex flex-col items-end shrink-0">
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-2">Version</p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 rounded-lg border border-indigo-500/20 shadow-inner">
              <span className="text-sm font-bold text-indigo-400 whitespace-nowrap">V.1</span>
              <span className="w-1 h-1 bg-indigo-500/50 rounded-full"></span>
              <span className="text-sm font-medium text-indigo-300/80 whitespace-nowrap">March '26</span>
            </div>
          </div> */}
        </motion.header>

        {/* Interface */}
        <div className="flex flex-col lg:flex-row gap-5 xl:gap-7 items-start">
          
          {/* Sidebar */}
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-56 xl:w-64 shrink-0 flex flex-col lg:sticky lg:top-24 z-20"
          >
            {/* Mobile Horizontal Navigation */}
            <div className="lg:hidden relative">
              <div className="absolute left-0 top-0 bottom-4 w-6 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-4 w-6 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
              <div className="flex overflow-x-auto gap-3 pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8 snap-x snap-proximity [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {/* Spacer after last item so it can scroll to center */}
              {PAIRS.map((pair, idx) => {
                const isActive = activeIdx === idx;
                const phaseTitle = PHASES.find(p => p.id === pair.phase)?.title.split('.')[0] || "I";
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveIdx(idx);
                      const el = document.getElementById(`mobile-nav-${idx}`);
                      if (!el) return;
                      // Center the tapped tab within the horizontal scroll strip.
                      const container = el.parentElement;
                      if (!container) return;
                      const scrollLeft = el.offsetLeft - container.offsetWidth / 2 + el.offsetWidth / 2;
                      container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' });
                      // Scroll the content panel into view so the user sees the new content.
                      requestAnimationFrame(() => {
                        contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                      });
                    }}
                    id={`mobile-nav-${idx}`}
                    className={`shrink-0 snap-center flex flex-col items-start px-5 py-4 rounded-2xl border transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                      isActive 
                        ? 'bg-white text-black border-white shadow-lg shadow-white/10' 
                        : 'bg-zinc-900/50 border-white/10 text-zinc-400 hover:bg-zinc-800'
                    }`}
                  >
                      <span className={`text-[10px] sm:text-[11px] font-black uppercase tracking-widest mb-1.5 ${isActive ? 'text-zinc-600' : 'text-zinc-500'}`}>
                      Phase {phaseTitle}
                    </span>
                    <span className="text-[13px] sm:text-sm font-bold whitespace-nowrap">{pair.title}</span>
                  </button>
                );
              })}
              </div>
            </div>

            {/* Desktop Vertical Navigation */}
            <div className="hidden lg:flex bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-white/10 p-4 xl:p-5 flex-col">
              <div className="flex-1">
                <div className="space-y-5">
                  {PHASES.map((phase) => (
                    <div key={phase.id}>
                      <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest px-1 mb-2">{phase.title}</h4>
                      <div className="space-y-1">
                        {PAIRS.map((pair, idx) => {
                          if (pair.phase !== phase.id) return null;
                          const isActive = activeIdx === idx;
                          return (
                            <button
                              key={idx}
                              onClick={() => setActiveIdx(idx)}
                              className={`w-full text-left px-3.5 py-2.5 rounded-lg text-[13px] font-bold transition-all duration-200 group flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 ${
                                isActive 
                                  ? 'bg-white text-black shadow-lg shadow-white/10' 
                                  : 'text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-200'
                              }`}
                            >
                              <span>{pair.title}</span>
                              {!isActive && (
                                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Attribution */}
              <div className="pt-4 mt-5 border-t border-white/10 shrink-0">
                <p className="text-center text-[10px] text-zinc-500 font-mono">
                  Framework by Brandon Fluegel
                </p>
              </div>
            </div>
          </motion.aside>

          {/* Main Content Area */}
          <motion.main 
            ref={contentRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-zinc-900/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden flex flex-col relative"
          >
              <motion.div 
                key={activeIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col xl:flex-row w-full"
              >

                {/* Name & Audit Checklist (Left on desktop, bottom on mobile) */}
                <div className="w-full xl:w-[340px] p-5 sm:p-6 lg:p-8 bg-black/40 border-t xl:border-t-0 xl:border-r border-white/5 shrink-0 flex flex-col order-2 xl:order-1">
                  <div className="hidden xl:block mb-5">
                    <h3 className="text-xl font-extrabold text-white mb-1.5 leading-tight">{activePair.title}</h3>
                    <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">{activePair.tagline}</p>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span> 
                        Audit Checklist
                      </h4>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                        {activePair.questions.filter((_, i) => checkedItems[`${activeIdx}-${i}`]).length} / {activePair.questions.length} Passed
                      </span>
                    </div>

                    <div className="space-y-2">
                      {activePair.questions.map((q, i) => {
                        const isChecked = checkedItems[`${activeIdx}-${i}`] || false;
                        return (
                          <button 
                            key={i}
                            onClick={() => toggleCheck(i)}
                            className={`w-full text-left flex gap-3 px-4 py-3.5 rounded-xl border transition-all active:scale-[0.98] ${
                              isChecked 
                                ? 'bg-indigo-500/10 border-indigo-500/50 shadow-inner' 
                                : 'bg-white/5 border-white/5 hover:border-white/20'
                            }`}
                          >
                            <div className={`w-[18px] h-[18px] rounded-[5px] border shrink-0 mt-0.5 flex items-center justify-center transition-colors duration-300 ${
                              isChecked 
                                ? 'bg-indigo-500 border-indigo-500' 
                                : 'border-zinc-600'
                            }`}>
                              {isChecked && (
                                <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7"></path>
                                </svg>
                              )}
                            </div>
                            <p className={`text-[13px] sm:text-[13px] leading-relaxed sm:leading-snug font-medium transition-colors duration-300 ${
                              isChecked ? 'text-indigo-200' : 'text-zinc-300'
                            }`}>
                              {q}
                            </p>
                          </button>
                        );
                      })}
                    </div>



                  </div>
                </div>

                {/* Principle & Pitfall Details (Right on desktop, top on mobile) */}
                <div className="flex-1 p-5 sm:p-6 lg:p-8 xl:p-10 flex flex-col justify-center order-1 xl:order-2">
                  <div className="space-y-7 w-full max-w-2xl">
                    
                    {/* Header contextual awareness */}
                    <div className="xl:hidden mb-4">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">{activePair.title}</h3>
                      <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">{activePair.tagline}</p>
                    </div>

                    {/* Principle */}
                    <div className="flex gap-4 sm:gap-5 flex-col sm:flex-row items-start">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/20 flex items-center justify-center shrink-0 text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <span className="text-emerald-400 font-black text-[10px] sm:text-xs uppercase tracking-widest block mb-1.5">The Principle</span>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-2.5 tracking-tight">{activePair.principle}</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">{activePair.principleDesc}</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 opacity-60">
                      <div className="h-px flex-1 bg-white/10"></div>
                      <span className="text-[10px] sm:text-[10px] font-black tracking-widest text-zinc-600 uppercase">Friction Analysis</span>
                      <div className="h-px flex-1 bg-white/10"></div>
                    </div>

                    {/* Pitfall */}
                    <div className="flex gap-4 sm:gap-5 flex-col sm:flex-row items-start">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-800 shadow-lg shadow-black/20 flex items-center justify-center shrink-0 text-white">
                        <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1.5">
                          <span className="text-zinc-500 font-black text-[10px] sm:text-xs uppercase tracking-widest">Usability Issue</span>
                          <span className={`px-2 py-0.5 rounded text-[9px] uppercase font-black tracking-widest border ${getSeverityClasses(activePair.severityLevel)}`}>
                            {activePair.severity}
                          </span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-2.5 tracking-tight">{activePair.pitfall}</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">{activePair.pitfallDesc}</p>
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>

              {/* Scientific Foundation - full-width bar below columns */}
              <motion.div
                key={`foundation-${activeIdx}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.05 }}
                className="border-t border-white/5 bg-black/20 px-5 sm:px-6 lg:px-8 xl:px-10 py-5 sm:py-5 order-last xl:order-3"
              >
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start sm:items-baseline">
                  <div className="flex items-center gap-2 shrink-0">
                    <svg className="w-3.5 h-3.5 text-indigo-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                    <span className="text-[9px] font-black text-indigo-400/60 uppercase tracking-widest whitespace-nowrap">Foundation</span>
                  </div>
                  <p className="text-zinc-500 text-[13px] leading-relaxed">
                    {activePair.scientificFoundation}
                  </p>
                </div>
              </motion.div>
          </motion.main>
        </div>

        {/* Export Button */}
        <div className="mt-6 flex flex-col items-center">
          <button
            onClick={handleExport}
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-5 sm:py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-[0.98]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Audit Report
          </button>
          <p className="text-[10px] text-zinc-500 font-mono mt-2">Export your checklist progress as a .txt file</p>
        </div>
      </div>
    </section>
  );
}

/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const PAIRS = [
  {
    phase: 1,
    title: "Capability Discovery",
    tagline: "Scope & Boundaries",
    principle: "Define the Toolkit and Limits",
    principleDesc: "Explicitly map what the agent can and cannot do upfront. A trustworthy partner proactively shares its capabilities rather than forcing users to discover limits through trial and error.",
    pitfall: "The Over-Promiser",
    pitfallDesc: "Acting as a limitless oracle. The agent fails silently or hallucinates when asked to perform tasks outside its actual toolset.",
    severity: "High Friction",
    severityLevel: "high",
    scientificFoundation: <>Integrates Victor Dibia's <strong>Capability Discovery</strong> and Google PAIR's <strong>Helpful AI</strong>. Upfront boundary-setting aligns human mental models with system realities before engagement.</>,
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
    principleDesc: "Ensure the agent's optimization goals perfectly match the user's true intent. The system must verify the 'why' before aggressively executing the 'what.'",
    pitfall: "Misaligned Optimization",
    pitfallDesc: "Executing the wrong task efficiently. The agent optimizes for a proxy metric or misunderstood prompt, wasting time and resources.",
    severity: "Catastrophic Trust Failure",
    severityLevel: "critical",
    scientificFoundation: <>Merges the original <strong>Transparency of Intent</strong> with Google's <strong>Data and Model Alignment</strong>. Misalignment often stems from the agent failing to verify ambiguous goals before committing to action.</>,
    questions: [
      "Does the agent summarize its understanding of the goal before starting?",
      "Is the underlying optimization metric or rule visible to the user?",
      "Can the user clarify intent if the agent's proposed plan is slightly off?"
    ]
  },
  {
    phase: 2,
    title: "Observability & Predictability",
    tagline: "Live Reasoning",
    principle: "Think Out Loud",
    principleDesc: "Expose the agent's intermediate steps and logical deductions. Streaming the reasoning process allows users to predict the outcome and catch logic errors early.",
    pitfall: "The Black Box",
    pitfallDesc: "Hiding complex multistep execution behind a generic loading spinner. Users cannot verify progress or intervene if the system goes off track.",
    severity: "High Risk",
    severityLevel: "high",
    scientificFoundation: <>Combines the original <strong>Mutual Predictability</strong> with Dibia's <strong>Observability and Provenance</strong>. Exposing live state maximizes Situation Awareness and grounds trust in verifiable actions.</>,
    questions: [
      "Are intermediate outputs or reasoning chains visible in real time?",
      "Does the agent cite the provenance of its data or tools as it works?",
      "Can the user predict roughly how long the current step will take?"
    ]
  },
  {
    phase: 2,
    title: "Context-Aware Delegation",
    tagline: "Cost & Adaptation",
    principle: "Scale Autonomy to Risk",
    principleDesc: "The agent must understand the stakes (financial, destructive, or social) of its actions, adapting its need for human feedback based on the cost of failure.",
    pitfall: "The Rogue Spender",
    pitfallDesc: "Taking irreversible, high-cost actions without permission, or constantly interrupting the user for trivial, low-risk micro-tasks.",
    severity: "Catastrophic Trust Failure",
    severityLevel: "critical",
    scientificFoundation: <>Integrates Dibia's <strong>Cost-Aware Delegation</strong> with Google's <strong>Adapt with Feedback</strong>. High-stakes actions require hard friction, while low-stakes loops require seamless autonomy.</>,
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
    principleDesc: "Users must maintain the autonomy to pause, edit, or entirely redirect an agent mid-task without losing progress or breaking the system state.",
    pitfall: "The Runaway Train",
    pitfallDesc: "Locking the user out of the loop once a process begins. The user is forced to watch a mistake unfold or abort the entire session.",
    severity: "High Risk",
    severityLevel: "high",
    scientificFoundation: <>Synthesizes my <strong>Directability</strong> principle, Dibia's <strong>Interruptibility</strong>, and Google's <strong>User Autonomy</strong>. True partnership requires shared initiative and seamless mid-flight corrections.</>,
    questions: [
      "Can the user safely pause the agent mid-generation or mid-execution?",
      "Is it possible to inject new context or steer the plan without starting over?",
      "Does the agent gracefully hand back control when it encounters a hard blocker?"
    ]
  },
  {
    phase: 4,
    title: "Calibrated Trust & Safety",
    tagline: "Verifiable Confidence",
    principle: "Signal Certainty Accurately",
    principleDesc: "The system must accurately convey its confidence limits. Presenting uncertain outputs with hesitation fosters calibrated trust, while evolving safety guardrails protect long-term use.",
    pitfall: "The Confident Liar",
    pitfallDesc: "Presenting hallucinations, guesses, or unsafe actions with absolute certainty, leading to automation bias and inevitable human-level errors.",
    severity: "Catastrophic Trust Failure",
    severityLevel: "critical",
    scientificFoundation: <>Merges the original <strong>Calibrated Trust</strong> with Google's <strong>Evolving Safety</strong> framework. Trust must be earned proportionately; expressing appropriate doubt prevents catastrophic over-reliance.</>,
    questions: [
      "Are uncertain conclusions visually distinct from verified facts?",
      "Does the agent provide immediate receipts or links for its claims?",
      "Are safety boundaries constantly evolving based on error reporting?"
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
  const [exported, setExported] = useState(false);
  
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
    let report = `HUMAN FACTORS PRINCIPLES FOR AGENTIC TRUST\nAudit Report\n\n`;
    report += `Conducted on: ${new Date().toLocaleDateString()}\n`;
    report += `Framework by: Brandon Fluegel, Ph.D.\n`;
    report += `Available at: https://www.humanfactors.pro\n`;
    report += `========================================================\n\n`;

    let passedCount = 0;
    let totalCount = 0;
    
    PAIRS.forEach((pair, pIdx) => {
      report += `[Phase ${pair.phase}] ${pair.title} | Priority: ${pair.severity}\n`;
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
    
    navigator.clipboard.writeText(report);
    setExported(true);
    setTimeout(() => setExported(false), 2000);
  }, [checkedItems]);

  return (
    <section className="relative w-full py-8 md:py-12 overflow-hidden bg-black">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3 transform-gpu"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3 transform-gpu"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-6"
        >
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Standardized Audit Tool
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
              Human Factors <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Principles for Agentic Trust</span>
            </h2>
            <p className="text-base text-zinc-300 font-medium tracking-tight mb-6 max-w-3xl leading-relaxed">
              A modern audit framework bridging the gap between traditional UX heuristics and the demands of autonomous AI systems. Designed for non-deterministic interfaces, this tool transforms abstract concepts of trust and agency into an actionable, measurable checklist.
            </p>
            <p className="text-[13px] font-mono text-zinc-500 leading-relaxed border-l-2 border-indigo-500/30 pl-5 max-w-3xl">
              Synthesizing foundational human factors research with Google's PAIR guidelines and multi-agent system principles, this "Gen 2" framework shifts the focus from static usability to context-aware delegation, predictive observability, and safely calibrated trust.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-end shrink-0">
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-2">Version</p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 rounded-lg border border-indigo-500/20 shadow-inner">
              <span className="text-sm font-bold text-indigo-400 whitespace-nowrap">V.1</span>
              <span className="w-1 h-1 bg-indigo-500/50 rounded-full"></span>
              <span className="text-sm font-medium text-indigo-300/80 whitespace-nowrap">March '26</span>
            </div>
          </div>
        </motion.header>

        {/* Interface */}
        <div className="flex flex-col lg:flex-row gap-6 xl:gap-8 items-start">
          
          {/* Sidebar */}
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-72 shrink-0 flex flex-col lg:sticky lg:top-24 z-20"
          >
            {/* Mobile Horizontal Navigation */}
            <div className="lg:hidden relative">
              <div className="absolute left-0 top-0 bottom-4 w-6 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-4 w-6 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
              <div className="flex overflow-x-auto gap-3 pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8 snap-x snap-proximity [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {PAIRS.map((pair, idx) => {
                const isActive = activeIdx === idx;
                const phaseTitle = PHASES.find(p => p.id === pair.phase)?.title.split('.')[0] || "I";
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveIdx(idx);
                      // On mobile, scroll slightly to show it's selected
                      const el = document.getElementById(`mobile-nav-${idx}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    }}
                    id={`mobile-nav-${idx}`}
                    className={`shrink-0 snap-center flex flex-col items-start px-5 py-4 rounded-2xl border transition-all active:scale-95 ${
                      isActive 
                        ? 'bg-white text-black border-white shadow-lg shadow-white/10' 
                        : 'bg-zinc-900/50 border-white/10 text-zinc-400 hover:bg-zinc-800'
                    }`}
                  >
                    <span className={`text-[10px] font-black uppercase tracking-widest mb-1.5 ${isActive ? 'text-zinc-600' : 'text-zinc-500'}`}>
                      Phase {phaseTitle}
                    </span>
                    <span className="text-sm font-bold whitespace-nowrap">{pair.title}</span>
                  </button>
                );
              })}
              </div>
            </div>

            {/* Desktop Vertical Navigation */}
            <div className="hidden lg:flex bg-zinc-900/50 backdrop-blur-md rounded-3xl border border-white/10 p-5 md:p-6 flex-col">
              <div className="flex-1">
                <div className="space-y-5">
                  {PHASES.map((phase) => (
                    <div key={phase.id}>
                      <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest px-1 mb-2.5">{phase.title}</h4>
                      <div className="space-y-1.5">
                        {PAIRS.map((pair, idx) => {
                          if (pair.phase !== phase.id) return null;
                          const isActive = activeIdx === idx;
                          return (
                            <button
                              key={idx}
                              onClick={() => setActiveIdx(idx)}
                              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all group flex items-center justify-between ${
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
              
              {/* Sticky Export Button */}
              <div className="pt-4 mt-5 border-t border-white/10 shrink-0">
                <button 
                  onClick={handleExport}
                  className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm justify-center font-bold transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20 active:scale-[0.98]"
                >
                  {exported ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                      Copied to Clipboard!
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      Export Audit Report
                    </>
                  )}
                </button>
                <p className="text-center text-[10px] text-zinc-500 mt-3 font-mono">
                  Framework by Brandon Fluegel
                </p>
              </div>
            </div>
          </motion.aside>

          {/* Main Content Area */}
          <motion.main 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-zinc-900/30 backdrop-blur-sm rounded-3xl sm:rounded-[40px] border border-white/10 overflow-hidden flex flex-col xl:flex-row relative"
          >
            <AnimatePresence mode="popLayout">
              <motion.div 
                key={activeIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col xl:flex-row w-full"
              >
                
                {/* Details (Middle) */}
                <div className="flex-1 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
                  <div className="space-y-8 w-full max-w-3xl mx-auto">
                    
                    {/* Header contextual awareness */}
                    <div className="xl:hidden mb-4">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">{activePair.title}</h3>
                      <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">{activePair.tagline}</p>
                    </div>

                    {/* Principle */}
                    <div className="flex gap-4 sm:gap-6 flex-col sm:flex-row items-start">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/20 flex items-center justify-center shrink-0 text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <span className="text-emerald-400 font-black text-[10px] sm:text-xs uppercase tracking-widest block mb-2 sm:mb-1">The Principle: Desired Behavior</span>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 tracking-tight">{activePair.principle}</h4>
                        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-medium">{activePair.principleDesc}</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 py-1 sm:py-2 opacity-80">
                      <div className="h-px flex-1 bg-white/10"></div>
                      <span className="text-[9px] sm:text-[10px] font-black tracking-widest text-zinc-500 uppercase">Friction Analysis</span>
                      <div className="h-px flex-1 bg-white/10"></div>
                    </div>

                    {/* Pitfall */}
                    <div className="flex gap-4 sm:gap-6 flex-col sm:flex-row items-start">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-800 shadow-lg shadow-black/20 flex items-center justify-center shrink-0 text-white">
                        <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-1">
                          <span className="text-zinc-500 font-black text-[10px] sm:text-xs uppercase tracking-widest">The Pitfall: System Risk</span>
                          <span className={`px-2.5 py-1 rounded-md text-[9px] uppercase font-black tracking-widest border ${getSeverityClasses(activePair.severityLevel)}`}>
                            {activePair.severity}
                          </span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 tracking-tight">{activePair.pitfall}</h4>
                        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-medium">{activePair.pitfallDesc}</p>
                      </div>
                    </div>

                    {/* Scientific Foundation */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <h5 className="text-[10px] font-black text-indigo-400/90 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg> 
                        Scientific Foundation
                      </h5>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        {activePair.scientificFoundation}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Audit Checklist (Right) */}
                <div className="w-full xl:w-[340px] p-6 lg:p-8 bg-black/40 border-t xl:border-t-0 xl:border-l border-white/5 shrink-0 flex flex-col">
                  <div className="hidden xl:block mb-8">
                    <h3 className="text-2xl font-extrabold text-white mb-2 leading-tight">{activePair.title}</h3>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{activePair.tagline}</p>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-5">
                      <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span> 
                        Audit Checklist
                      </h4>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                        {activePair.questions.filter((_, i) => checkedItems[`${activeIdx}-${i}`]).length} / {activePair.questions.length} Passed
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {activePair.questions.map((q, i) => {
                        const isChecked = checkedItems[`${activeIdx}-${i}`] || false;
                        return (
                          <button 
                            key={i}
                            onClick={() => toggleCheck(i)}
                            className={`w-full text-left flex gap-3.5 p-4 rounded-xl border transition-all active:scale-[0.98] ${
                              isChecked 
                                ? 'bg-indigo-500/10 border-indigo-500/50 shadow-inner' 
                                : 'bg-white/5 border-white/5 hover:border-white/20'
                            }`}
                          >
                            <div className={`w-4 h-4 rounded border border-zinc-500 shrink-0 mt-0.5 flex items-center justify-center transition-colors duration-300 ${
                              isChecked 
                                ? 'bg-indigo-500 border-indigo-500' 
                                : 'border-zinc-500'
                            }`}>
                              {isChecked && (
                                <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7"></path>
                                </svg>
                              )}
                            </div>
                            <p className={`text-xs leading-relaxed font-semibold transition-colors duration-300 ${
                              isChecked ? 'text-indigo-200' : 'text-zinc-300'
                            }`}>
                              {q}
                            </p>
                          </button>
                        );
                      })}
                    </div>

                    {/* Mobile Export Button */}
                    <div className="mt-8 pt-6 border-t border-white/10 lg:hidden">
                      <button 
                        onClick={handleExport}
                        className="w-full py-3.5 sm:py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm justify-center font-bold transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20 active:scale-[0.98]"
                      >
                        {exported ? (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                            Copied to Clipboard!
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                            </svg>
                            Export Audit Report
                          </>
                        )}
                      </button>
                      <p className="text-center text-[10px] text-zinc-500 mt-4 font-mono">
                        Framework by Brandon Fluegel
                      </p>
                    </div>

                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </motion.main>
        </div>
      </div>
    </section>
  );
}

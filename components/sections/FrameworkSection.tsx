"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const PAIRS = [
  {
    phase: 1,
    title: "Identify the Role",
    tagline: "Agent Persona",
    principle: "Introduce the Skillset",
    principleDesc: "State who the agent is and why it exists. Users must know if they are working with a general helper or a deep expert from the first interaction.",
    pitfall: "The Mystery Guest",
    pitfallDesc: "Acting without explaining a specific role. Users waste time testing the agent to see if it can actually do the job.",
    severity: "Moderate Friction",
    severityLevel: "moderate",
    scientificFoundation: <>Draws from Victor Dibia's <strong>Identity</strong> principle. Explicitly defining a persona instantly helps users form an accurate mental model, reducing explorative cognitive load.</>,
    questions: [
      "Does the agent state its job title or role in the first turn?",
      "Is it clear what data or tools the agent can access?",
      "Does the visual design reinforce the agent's specific role?"
    ]
  },
  {
    phase: 1,
    title: "Map the Limits",
    tagline: "Boundary Alignment",
    principle: "Set Capabilities Early",
    principleDesc: "Explicitly list what the agent cannot do. Honesty about limitations prevents users from being burned by unexpected failures later.",
    pitfall: "The Over-Promiser",
    pitfallDesc: "Acting as if it has no limits. The system breaks trust the moment it hits a real-world constraint it never mentioned.",
    severity: "Catastrophic Trust Failure",
    severityLevel: "critical",
    scientificFoundation: <>Rooted in Jakob Nielsen's heuristic of <strong>Visibility of System Status</strong> and Google PAIR's <strong>Mental Models</strong>. Explicitly defining constraints prevents the 'AI can do anything' trap, minimizing miscalibrated trust (Lee).</>,
    questions: [
      "Are the agent's limitations clearly stated before work starts?",
      "Does the agent suggest alternatives for tasks it cannot handle?",
      "Is there a way for users to see a 'skills list' or 'tools' view?"
    ]
  },
  {
    phase: 1,
    title: "Use Context",
    tagline: "Project Memory",
    principle: "Build on Shared History",
    principleDesc: "Remember past preferences and current project goals. The agent should know where it left off so the user never repeats themselves.",
    pitfall: "The Amnesiac",
    pitfallDesc: "Treating every chat like a blank slate. Users have to re-explain their context, which makes delegation feel like more work than doing the task alone.",
    severity: "Moderate Friction",
    severityLevel: "moderate",
    scientificFoundation: <>Integrates Victor Dibia's parameter of <strong>Context</strong>. Anchoring sequentially to historical states lowers friction and supports prolonged engagement without manual setup.</>,
    questions: [
      "Does the agent refer to past interactions or data when relevant?",
      "Can the agent resume a task from a previous session without help?",
      "Is the user's specific context used to personalize the output?"
    ]
  },
  {
    phase: 2,
    title: "Show the Path",
    tagline: "Live Reasoning",
    principle: "Think Out Loud",
    principleDesc: "Expose the agent's planned logic while it works. Streaming the reasoning process lets users catch logic errors before they compound.",
    pitfall: "The Black Box",
    pitfallDesc: "Hiding complex logic behind a static spinner. Users have no way to verify if the agent is making progress or just hallucinating.",
    severity: "High Risk",
    severityLevel: "high",
    scientificFoundation: <>Connects to Endsley's <strong>Situation Awareness (Level 2)</strong>. Exposing live reasoning allows users to intuitively comprehend and monitor autonomous logic pipelines.</>,
    questions: [
      "Can the user see the current sub-task being processed?",
      "Is the 'reasoning' or 'plan' visible during execution?",
      "Are the sources of information cited in real-time?"
    ]
  },
  {
    phase: 2,
    title: "Level of Effort",
    tagline: "Task Complexity",
    principle: "Signal Depth of Work",
    principleDesc: "Tell the user when a task is complex or time-consuming. Manage expectations by differentiating between a quick check and a deep audit.",
    pitfall: "The Frozen Agent",
    pitfallDesc: "Long periods of silence without progress updates. Users often think the system has crashed and abandon the workflow.",
    severity: "Moderate Friction",
    severityLevel: "moderate",
    scientificFoundation: <>Aligns with <a href="#amazon-section" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">Brandon Fluegel's research</a> on latency. Understanding computational effort increases delay tolerance and preserves perceived reliability.</>,
    questions: [
      "Does the agent estimate how long a complex task will take?",
      "Are there progress indicators for multi-minute processes?",
      "Does the system proactively explain delays?"
    ]
  },
  {
    phase: 3,
    title: "Intent Preview",
    tagline: "Planned Action",
    principle: "Show the Next Move",
    principleDesc: "Always show what the agent is about to do next. Let the user see the plan before it turns into an irreversible action.",
    pitfall: "The Jump Scare",
    pitfallDesc: "Taking a major, unannounced action that surprises the user. This makes the system feel unpredictable and dangerous.",
    severity: "Catastrophic Trust Failure",
    severityLevel: "critical",
    scientificFoundation: <>Connects to Endsley's <strong>Situation Awareness (Level 3)</strong>. Previewing future states empowers users, while Jakob Nielsen's <strong>Error Prevention</strong> heuristic prioritizes confirmation before irreversible actions.</>,
    questions: [
      "Does the agent announce a planned action before executing it?",
      "Is there a 'preview' mode for high-stakes steps?",
      "Can the user see the list of upcoming sub-tasks?"
    ]
  },
  {
    phase: 3,
    title: "Live Nudges",
    tagline: "Mid-Task Steering",
    principle: "Allow Active Steering",
    principleDesc: "Let the user correct the agent's path while it is in the middle of a task. The user should be able to pivot the work without starting over.",
    pitfall: "The Runaway Train",
    pitfallDesc: "Locking the user out until a multi-step plan is finished. Users have to watch a mistake unfold with no way to stop it.",
    severity: "High Risk",
    severityLevel: "high",
    scientificFoundation: <>Implements Dibia's protocol of <strong>Intervention</strong>. Mid-flight steering calibrates trust and directly applies Jakob Nielsen's heuristic for <strong>User Control and Freedom</strong>.</>,
    questions: [
      "Is there a 'Pause' or 'Correct' button available during execution?",
      "Can the user edit the agent's plan before it proceeds?",
      "Is the intervention process fast and responsive?"
    ]
  },
  {
    phase: 3,
    title: "The Handback",
    tagline: "Seamless Handoff",
    principle: "Provide a Clean Briefing",
    principleDesc: "Give the user all the context they need when passing the work back. Explain what was done and what needs human attention.",
    pitfall: "The Hot Potato",
    pitfallDesc: "Quitting abruptly when a task gets hard. The agent dumps the problem on the user without a summary or a suggested next step.",
    severity: "High Risk",
    severityLevel: "high",
    scientificFoundation: <>Reflects Dibia's <strong>Handoff</strong> principle and Google PAIR's <strong>Graceful Failure</strong>. Maintaining context during graceful degradation to human control is vital for perceived reliability.</>,
    questions: [
      "Does the agent summarize its work when handing back control?",
      "Are specific 'areas for review' highlighted for the user?",
      "Does the agent suggest what the user should do next?"
    ]
  },
  {
    phase: 4,
    title: "The Evidence",
    tagline: "Calibrated Trust",
    principle: "Show Your Receipts",
    principleDesc: "Always link back to sources or raw data. Users should be able to verify any fact or conclusion without taking the agent's word for it.",
    pitfall: "The Confident Liar",
    pitfallDesc: "Presenting guesses or hallucinations as facts. This is a terminal trust failure that stops users from delegating future tasks.",
    severity: "Catastrophic Trust Failure",
    severityLevel: "critical",
    scientificFoundation: <>Built on Lee's <strong>Trust in Automation</strong> and Google PAIR's <strong>Calibrating Trust</strong>. Accessible evidence empowers users to independently evaluate AI certainty and prevents over-automation bias.</>,
    questions: [
      "Is every major claim supported by a clickable citation?",
      "Can the user easily view the raw data used for an insight?",
      "Does the agent admit when it is unsure about a source?"
    ]
  },
  {
    phase: 4,
    title: "Critical Sign-off",
    tagline: "Permission-Based",
    principle: "Check High-Stakes Actions",
    principleDesc: "Ask for permission before spending money, deleting data, or changing external state. Treat the user's resources with respect.",
    pitfall: "The Rogue Spender",
    pitfallDesc: "Taking a permanent, expensive, or risky action based on a guess. Zero accountability for human-level consequences.",
    severity: "Catastrophic Trust Failure",
    severityLevel: "critical",
    scientificFoundation: <>Synthesizes Jakob Nielsen's <strong>Error Prevention</strong> heuristic with cost-awareness. High-stakes autonomy requires validation barriers to stop unintended loops across financial or system boundaries.</>,
    questions: [
      "Is a confirmation modal required for any financial transaction?",
      "Does the interface clearly display the financial, computational, or time cost of an action before the user hits approve?",
      "Does the system warn users before an irreversible data change?"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight md:whitespace-nowrap">
              Human Factors <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Principles for Agentic Trust</span>
            </h2>
            <p className="text-base text-zinc-300 font-medium tracking-tight mb-6 max-w-3xl leading-relaxed">
              A practical response to the gaps in traditional UX practices when evaluating autonomous systems. As agentic AI scales, there is an urgent need for a "Gen 2" set of evaluation tools designed specifically for non-deterministic interfaces.
            </p>
            <p className="text-[13px] font-mono text-zinc-500 leading-relaxed border-l-2 border-indigo-500/30 pl-5 max-w-3xl">
              Evolving from Nielsen's Heuristics and UI Tenets & Traps, this tool integrates Google's PAIR guidelines, modern AI patterns, and foundational human factors research. It shifts the primary focus from static usability towards Transparency of Intent, Calibrated Trust, and Directability.
            </p>
          </div>
          <div className="hidden md:block text-right shrink-0">
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-2">Status</p>
            <p className="text-sm font-bold text-white whitespace-nowrap px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">Tier One Framework</p>
          </div>
        </motion.header>

        {/* Interface */}
        <div className="flex flex-col lg:flex-row gap-6 xl:gap-8 items-start">
          
          {/* Sidebar */}
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-72 shrink-0 flex flex-col lg:sticky lg:top-20 z-20"
          >
            {/* Mobile Horizontal Navigation */}
            <div className="lg:hidden flex overflow-x-auto gap-3 pb-2 -mx-6 px-6 sm:-mx-8 sm:px-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {PAIRS.map((pair, idx) => {
                const isActive = activeIdx === idx;
                const phaseTitle = PHASES.find(p => p.id === pair.phase)?.title.split('.')[0] || "I";
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`shrink-0 snap-start flex flex-col items-start px-4 py-3 rounded-2xl border transition-all active:scale-95 ${
                      isActive 
                        ? 'bg-white text-black border-white shadow-lg shadow-white/10' 
                        : 'bg-zinc-900/50 border-white/10 text-zinc-400 hover:bg-zinc-800'
                    }`}
                  >
                    <span className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isActive ? 'text-zinc-600' : 'text-zinc-500'}`}>
                      Phase {phaseTitle}
                    </span>
                    <span className="text-sm font-bold whitespace-nowrap">{pair.title}</span>
                  </button>
                );
              })}
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
            className="flex-1 bg-zinc-900/30 backdrop-blur-sm rounded-[40px] border border-white/10 overflow-hidden flex flex-col xl:flex-row relative"
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col xl:flex-row w-full"
              >
                
                {/* Details (Middle) */}
                <div className="flex-1 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-8 w-full max-w-3xl mx-auto">
                    
                    {/* Header contextual awareness */}
                    <div className="xl:hidden mb-2">
                      <h3 className="text-3xl font-extrabold text-white mb-2 leading-tight">{activePair.title}</h3>
                      <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">{activePair.tagline}</p>
                    </div>

                    {/* Principle */}
                    <div className="flex gap-5 flex-col sm:flex-row items-start">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/20 flex items-center justify-center shrink-0 text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="text-emerald-400 font-black text-[10px] uppercase tracking-widest block mb-2">The Principle: Desired Behavior</span>
                        <h4 className="text-xl font-bold text-white mb-2 tracking-tight">{activePair.principle}</h4>
                        <p className="text-zinc-300 text-sm leading-relaxed font-medium">{activePair.principleDesc}</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 py-2 opacity-80">
                      <div className="h-px flex-1 bg-white/10"></div>
                      <span className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">Friction Analysis</span>
                      <div className="h-px flex-1 bg-white/10"></div>
                    </div>

                    {/* Pitfall */}
                    <div className="flex gap-5 flex-col sm:flex-row items-start">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-800 shadow-lg shadow-black/20 flex items-center justify-center shrink-0 text-white">
                        <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="text-zinc-500 font-black text-[10px] uppercase tracking-widest">The Pitfall: System Risk</span>
                          <span className={`px-2.5 py-1 rounded-md text-[9px] uppercase font-black tracking-widest border ${getSeverityClasses(activePair.severityLevel)}`}>
                            {activePair.severity}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2 tracking-tight">{activePair.pitfall}</h4>
                        <p className="text-zinc-300 text-sm leading-relaxed font-medium">{activePair.pitfallDesc}</p>
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
                        className="w-full py-3 px-4 bg-zinc-900 border border-indigo-500/20 hover:bg-indigo-600 text-white rounded-xl text-sm justify-center font-bold transition-all flex items-center gap-2 active:scale-95 shadow-lg"
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
                            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                            </svg>
                            Export Audit Report
                          </>
                        )}
                      </button>
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

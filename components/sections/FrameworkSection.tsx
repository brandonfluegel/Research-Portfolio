"use client";

import { useState, useCallback, useRef } from "react";
import { m } from "framer-motion";
import { trackAnalyticsEvent } from "@/components/ui/GoogleAnalytics";
import {
  PAIRS,
  PHASES,
  buildAuditReport,
} from "@/lib/data/humanAiTrustFramework";

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

  const selectPrincipleTab = (idx: number, navSurface: "mobile" | "desktop") => {
    setActiveIdx(idx);
    trackAnalyticsEvent("framework_tab_selected", {
      principle_title: PAIRS[idx]?.title || "",
      phase: PAIRS[idx]?.phase || 1,
      nav_surface: navSurface,
    });
  };

  const toggleCheck = (questionIndex: number) => {
    const key = `${activeIdx}-${questionIndex}`;
    setCheckedItems(prev => {
      const nextChecked = !prev[key];
      const nextState = { ...prev, [key]: nextChecked };
      const totalChecked = Object.values(nextState).filter(Boolean).length;
      trackAnalyticsEvent("framework_checklist_toggled", {
        principle_title: PAIRS[activeIdx]?.title || "",
        question_index: questionIndex + 1,
        checked: nextChecked,
        total_checked: totalChecked,
      });
      return nextState;
    });
  };

  const handleExport = useCallback(() => {
    const { report, passedCount, totalCount } = buildAuditReport(checkedItems);

    trackAnalyticsEvent("framework_audit_exported", {
      passed_checks: passedCount,
      total_checks: totalCount,
      completion_percent: totalCount > 0 ? Math.round((passedCount / totalCount) * 100) : 0,
    });

    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `human-ai-trust-audit-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }, [checkedItems]);



  return (
    <section className="relative w-full py-12 md:py-20 overflow-hidden bg-black">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-75 md:w-150 h-75 md:h-150 bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3 transform-gpu"></div>
      <div className="absolute bottom-0 left-0 w-75 md:w-125 h-75 md:h-125 bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3 transform-gpu"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <m.header 
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
              Audit Framework
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight lg:whitespace-nowrap">
              Human Factors <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-emerald-400">Principles for Human-AI Trust</span>
            </h2>
            <p className="text-base text-zinc-300 font-medium tracking-tight mb-6 max-w-3xl leading-relaxed">
              An audit framework for non-deterministic interfaces. Traditional HCI assumes deterministic interactions—a command in, a predictable output out. Modern multi-agent systems operate probabilistically, demanding a new standard: one that operationalizes trust, observability, and human control into measurable design criteria.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-end shrink-0">
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-2">Version</p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 rounded-lg border border-indigo-500/20 shadow-inner">
              <span className="text-sm font-bold text-indigo-400 whitespace-nowrap">V.2</span>
              <span className="w-1 h-1 bg-indigo-500/50 rounded-full"></span>
              <span className="text-sm font-medium text-indigo-300/80 whitespace-nowrap">July &apos;26</span>
            </div>
          </div>
        </m.header>

        {/* Interface */}
        <div className="flex flex-col lg:flex-row gap-5 xl:gap-7 items-start">
          
          {/* Sidebar */}
          <m.aside 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-56 xl:w-64 shrink-0 flex flex-col lg:sticky lg:top-24 z-20"
          >
            {/* Mobile Horizontal Navigation */}
            <div className="lg:hidden relative">
              <div className="absolute left-0 top-0 bottom-4 w-6 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-4 w-6 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />
              <div role="tablist" aria-label="Human-AI Trust Principles" className="flex overflow-x-auto gap-3 pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8 snap-x snap-proximity [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
              {/* Spacer after last item so it can scroll to center */}
              {PAIRS.map((pair, idx) => {
                const isActive = activeIdx === idx;
                const phaseTitle = PHASES.find(p => p.id === pair.phase)?.title.split('.')[0] || "I";
                return (
                  <button
                    key={idx}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      selectPrincipleTab(idx, "mobile");
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
            <div role="tablist" aria-label="Human-AI Trust Principles" className="hidden lg:flex bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-white/10 p-4 xl:p-5 flex-col">
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
                              type="button"
                              role="tab"
                              aria-selected={isActive}
                              onClick={() => selectPrincipleTab(idx, "desktop")}
                              className={`w-full text-left px-3.5 py-2.5 rounded-lg text-[13px] font-bold transition-all duration-200 group flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 ${
                                isActive 
                                  ? 'bg-white text-black shadow-lg shadow-white/10' 
                                  : 'text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-200'
                              }`}
                            >
                              <span>{pair.title}</span>
                              {!isActive && (
                                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                  Framework by Brandon Allan Fluegel
                </p>
              </div>
            </div>
          </m.aside>

          {/* Main Content Area */}
          <m.main 
            ref={contentRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-zinc-900/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden flex flex-col relative"
          >
              <m.div 
                key={activeIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col xl:flex-row w-full"
              >

                {/* Name & Audit Checklist (Left on desktop, bottom on mobile) */}
                <div className="w-full xl:w-85 p-5 sm:p-6 lg:p-8 bg-black/40 border-t xl:border-t-0 xl:border-r border-white/5 shrink-0 flex flex-col order-2 xl:order-1">
                  <div className="hidden xl:block mb-5">
                    <h3 className="text-xl font-extrabold text-white mb-1.5 leading-tight">{activePair.title}</h3>
                    <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-2">{activePair.tagline}</p>
                    <p className="text-[9px] font-mono text-indigo-400/40 uppercase tracking-widest">Adapts · {activePair.nielsenMapping}</p>
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
                            type="button"
                            role="checkbox"
                            aria-checked={isChecked}
                            onClick={() => toggleCheck(i)}
                            className={`w-full text-left flex gap-3 px-4 py-3.5 rounded-xl border transition-all active:scale-[0.98] ${
                              isChecked 
                                ? 'bg-indigo-500/10 border-indigo-500/50 shadow-inner' 
                                : 'bg-white/5 border-white/5 hover:border-white/20'
                            }`}
                          >
                            <div className={`w-4.5 h-4.5 rounded-[5px] border shrink-0 mt-0.5 flex items-center justify-center transition-colors duration-300 ${
                              isChecked 
                                ? 'bg-indigo-500 border-indigo-500' 
                                : 'border-zinc-600'
                            }`} aria-hidden="true">
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

                    {/* Scholarly Metadata */}
                    <div className="flex flex-wrap gap-2">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-800/60 border border-white/5 text-[10px] font-mono text-zinc-400">
                        <span className="font-sans font-black text-[9px] uppercase tracking-widest text-zinc-600">Adapts</span>
                        <span className="w-px h-3 bg-zinc-700 shrink-0"></span>
                        {activePair.nielsenMapping}
                      </div>
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[10px] font-mono ${getSeverityClasses(activePair.severityLevel)}`}>
                        <span className="font-sans font-black text-[9px] uppercase tracking-widest opacity-60">Failure State</span>
                        <span className="w-px h-3 opacity-20 shrink-0"></span>
                        {activePair.failureState}
                      </div>
                    </div>

                    {/* Principle */}
                    <div className="flex gap-4 sm:gap-5 flex-col sm:flex-row items-start">
                      <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/20 flex items-center justify-center shrink-0 text-white">
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
                      <div className="w-10 h-10 rounded-xl bg-linear-to-br from-zinc-700 to-zinc-800 shadow-lg shadow-black/20 flex items-center justify-center shrink-0 text-white">
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

              </m.div>

              {/* Scientific Foundation - full-width bar below columns */}
              <m.div
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
              </m.div>
          </m.main>
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

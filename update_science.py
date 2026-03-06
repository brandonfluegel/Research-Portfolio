import re

with open('components/sections/FrameworkSection.tsx', 'r') as f:
    content = f.read()

# Replace texts
replacements = {
    "Draws from Victor Dibia's principles of <strong>Identity</strong> in multi-agent systems. When an agent explicitly defines its persona and boundaries, users immediately form an accurate mental model, reducing explorative cognitive load and preventing early trust erosion.": "Draws from Victor Dibia's <strong>Identity</strong> principle. Explicitly defining a persona instantly helps users form an accurate mental model, reducing explorative cognitive load.",

    "Rooted in Steve Herbst's classic heuristics for <strong>Visibility of System Status</strong> and Google PAIR's research on setting <strong>Mental Models</strong>. Modern agents must proactively expose their constraints. PAIR emphasizes that onboarding users out of the \"AI can do anything\" trap by explicitly defining operational limits prevents miscalibrated trust, which John Lee notes is a primary driver of catastrophic automation failure.": "Rooted in Jakob Nielsen's heuristic of <strong>Visibility of System Status</strong> and Google PAIR's <strong>Mental Models</strong>. Explicitly defining constraints prevents the 'AI can do anything' trap, minimizing miscalibrated trust (Lee).",

    "Integrates Victor Dibia's parameter of <strong>Context</strong>. By persistently anchoring to the user's historical state, multi-agent systems lower interaction friction and support prolonged task engagement without repetitive, manual setup steps.": "Integrates Victor Dibia's parameter of <strong>Context</strong>. Anchoring sequentially to historical states lowers friction and supports prolonged engagement without manual setup.",

    "Based on Mica Endsley's pioneering work on <strong>Situation Awareness (SA)</strong>. Exposing live reasoning elevates the user to SA Level 2 (Comprehension), allowing humans to monitor autonomous logic pipelines intuitively without needing to decipher the underlying code execution.": "Connects to Endsley's <strong>Situation Awareness (Level 2)</strong>. Exposing live reasoning allows users to intuitively comprehend and monitor autonomous logic pipelines.",

    "Aligns with <a href=\"#amazon-section\" className=\"text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors\">Brandon Fluegel's psychophysics research at Amazon</a> on latency expectation management. When users understand the computational effort required, their psychological tolerance for delay increases dramatically, preserving perceived reliability.": "Aligns with <a href=\"#amazon-section\" className=\"text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors\">Brandon Fluegel's research</a> on latency. Understanding computational effort increases delay tolerance and preserves perceived reliability.",

    "Connects to Mica Endsley's <strong>Situation Awareness Level 3 (Projection)</strong>. By previewing the next state, users are empowered to forecast automation outcomes. Steve Herbst's heuristics on error prevention strictly advocate for user confirmation before executing potentially irreversible state changes.": "Connects to Endsley's <strong>Situation Awareness (Level 3)</strong>. Previewing future states empowers users, while Jakob Nielsen's <strong>Error Prevention</strong> heuristic prioritizes confirmation before irreversible actions.",

    "Directly implements Victor Dibia's protocol of <strong>Intervention</strong>. A hallmark of safe multi-agent behavior is the ability to steer deterministic execution mid-flight. Affording human intervention dynamically calibrates trust and embodies Herbst's heuristic of \"User Control and Freedom.\"": "Implements Dibia's protocol of <strong>Intervention</strong>. Mid-flight steering calibrates trust and directly applies Jakob Nielsen's heuristic for <strong>User Control and Freedom</strong>.",

    "Reflects Victor Dibia's principle of <strong>Handoff</strong> and Google PAIR's guidelines on <strong>Graceful Failure</strong>. When autonomous execution crosses the threshold of its capability, graceful degradation back to the human operator—while maintaining an unbroken narrative chain of context—is the primary measure of a system's true reliability and adherence to safe operational envelopes.": "Reflects Dibia's <strong>Handoff</strong> principle and Google PAIR's <strong>Graceful Failure</strong>. Maintaining context during graceful degradation to human control is vital for perceived reliability.",

    "Built upon John Lee's foundational framework of <strong>Trust in Automation</strong> and Google PAIR's guidelines for <strong>Calibrating Trust</strong>. Exposing raw evidence effortlessly is critical so the user can accurately evaluate the system's certainty. As PAIR research highlights, users must be given the tools to decide when to trust the AI and when to apply their own judgment, thereby protecting against dangerous over-automation bias.": "Built on Lee's <strong>Trust in Automation</strong> and Google PAIR's <strong>Calibrating Trust</strong>. Accessible evidence empowers users to independently evaluate AI certainty and prevents over-automation bias.",

    "Synthesizes Steve Herbst's robust error prevention heuristics and modern cost-awareness frameworks. Autonomy in high-stakes actions requires concrete validation barriers to prevent out-of-control autonomous loops natively, especially when computational resources or financial thresholds are crossed.": "Synthesizes Jakob Nielsen's <strong>Error Prevention</strong> heuristic with cost-awareness. High-stakes autonomy requires validation barriers to stop unintended loops across financial or system boundaries."
}

for old, new in replacements.items():
    content = content.replace(old, new)


# Update UI
old_ui = """                    {/* Scientific Foundation */}
                    <div className="mt-4 p-4 bg-white/[0.03] border border-white/10 rounded-xl">
                      <h5 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg> 
                        Scientific Foundation
                      </h5>
                      <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                        {activePair.scientificFoundation}
                      </p>
                    </div>"""

new_ui = """                    {/* Scientific Foundation */}
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <h5 className="text-[9px] font-black text-indigo-400/80 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg> 
                        Scientific Foundation
                      </h5>
                      <p className="text-zinc-500 text-[11px] leading-relaxed">
                        {activePair.scientificFoundation}
                      </p>
                    </div>"""

content = content.replace(old_ui, new_ui)

with open('components/sections/FrameworkSection.tsx', 'w') as f:
    f.write(content)


// v2 - Fall 2026
import type { ReactNode } from "react";
import { SITE_LINKS, SITE_URL } from "@/lib/constants/site";

type SeverityLevel = "critical" | "high" | "moderate";

export interface FrameworkPrinciplePair {
  phase: number;
  title: string;
  tagline: string;
  principle: string;
  principleDesc: string;
  pitfall: string;
  pitfallDesc: string;
  severity: string;
  severityLevel: SeverityLevel;
  nielsenMapping: string;
  failureState: string;
  scientificFoundation: ReactNode;
  questions: string[];
}

export const PHASES = [
  { id: 1, title: "I. Alignment Phase" },
  { id: 2, title: "II. Execution Phase" },
  { id: 3, title: "III. Control Phase" },
  { id: 4, title: "IV. Trust Calibration" },
] as const;

export const PAIRS: FrameworkPrinciplePair[] = [
  {
    phase: 1,
    title: "Capability Discovery",
    tagline: "Scope Before Start",
    principle: "Share Limits Before Work Begins",
    principleDesc:
      "A trustworthy agent shares its capabilities upfront rather than having users discover limits through trial and error [Amershi et al., 2019]. Surfacing tools, access rights, and hard boundaries before engagement aligns the user's mental model with system reality—preventing wasted effort and eroded confidence.",
    pitfall: "The Over-Promiser",
    pitfallDesc:
      "Acting as a limitless oracle—then failing silently or hallucinating when asked to perform tasks outside its actual toolset. The user only discovers capability gaps after investing time and trust in a request the agent was never equipped to handle.",
    severity: "High Friction",
    severityLevel: "high",
    nielsenMapping: "Match System to World",
    failureState: "Capability Mismatch",
    scientificFoundation: (
      <>
        Amershi et al.&apos;s [2019] <strong>Guidelines for Human-AI Interaction</strong> establish
        upfront capability disclosure as a prerequisite for meaningful collaboration. This adapts
        Nielsen&apos;s [1994] <em>Match System to World</em> heuristic for the agentic era: rather
        than simply using familiar language, the agent must surface what it can and cannot do before
        any work begins.
      </>
    ),
    questions: [
      "Are the agent's tools and access rights visible to the user upfront?",
      "Does the agent clearly state the specific types of tasks it cannot handle?",
      "When the agent encounters a request outside its boundaries, does it explicitly decline and explain why?",
    ],
  },
  {
    phase: 1,
    title: "Intent Alignment",
    tagline: "Transparent Goals",
    principle: "Mirror Human Intentions",
    principleDesc:
      "The agent's goals must match what the user actually wants. Before acting, the system should confirm it understands the 'why' behind the request, not just rush to execute the 'what.'",
    pitfall: "The Eager Misreader",
    pitfallDesc:
      "Doing the wrong task quickly and confidently. The agent misreads the request and charges ahead, wasting effort and delivering results nobody asked for.",
    severity: "Catastrophic Trust Failure",
    severityLevel: "critical",
    nielsenMapping: "Error Prevention",
    failureState: "Goal Misalignment",
    scientificFoundation: (
      <>
        Merges the framework&apos;s <strong>Transparency of Intent</strong> principle with Google
        PAIR&apos;s <strong>Data and Model Alignment</strong> principle. Misalignment often stems
        from the agent failing to verify ambiguous goals before committing to action.
      </>
    ),
    questions: [
      "Does the agent summarize its understanding of the goal before starting?",
      "Can the user see what goal or rule the agent is actually following?",
      "Can the user clarify intent if the agent's proposed plan is slightly off?",
    ],
  },
  {
    phase: 2,
    title: "Observability & Predictability",
    tagline: "Live Reasoning",
    principle: "Think Out Loud",
    principleDesc:
      "Show the agent's work as it happens. When users can see each step and the logic behind it, they can spot mistakes early and stay confident the outcome is on track.",
    pitfall: "The Black Box",
    pitfallDesc:
      "Hiding complex multistep execution behind a generic loading spinner. Users cannot verify progress or intervene if the system goes off track.",
    severity: "High Risk",
    severityLevel: "high",
    nielsenMapping: "Visibility of System Status",
    failureState: "Execution Opacity",
    scientificFoundation: (
      <>
        Combines the framework&apos;s <strong>Mutual Predictability</strong> principle with
        Dibia&apos;s <strong>Observability and Provenance</strong> principle. Exposing live state
        maximizes Situation Awareness and grounds trust in verifiable actions.
      </>
    ),
    questions: [
      "Can the user see the agent's work and reasoning as it happens?",
      "Does the agent cite the provenance of its data or tools as it works?",
      "Can the user predict roughly how long the current step will take?",
    ],
  },
  {
    phase: 2,
    title: "Context-Aware Delegation",
    tagline: "Risk-Scaled Autonomy",
    principle: "Scale Autonomy to Perceived Risk",
    principleDesc:
      "System friction must be proportional to action risk. Prior research shows users have greater tolerance for agent latency when perceived stakes justify the delay [Minaee et al., 2024]. Tasks involving irreversible actions on the user's data or finances must be flagged and require explicit permission before proceeding.",
    pitfall: "The Rogue Spender",
    pitfallDesc:
      "Making irreversible, high-cost decisions without seeking approval—or pestering the user for permission on trivial, low-stakes tasks. Both failure modes erode trust: one through catastrophic overreach, the other through constant friction that trains users to ignore safety gates entirely.",
    severity: "Catastrophic Trust Failure",
    severityLevel: "critical",
    nielsenMapping: "User Control & Freedom",
    failureState: "Unbounded Autonomy",
    scientificFoundation: (
      <>
        Minaee et al. [2024] show that users accept latency when perceived stakes justify
        friction—providing empirical grounding for cost-aware delegation gates. Bucinca et al.
        [2021] demonstrate that <strong>intentional friction during high-stakes decisions</strong>{" "}
        disrupts heuristic-based shortcuts and leads to deeper analytical reflection, validating
        hard &quot;pause and review&quot; gates as a safety mechanism for irreversible agent
        actions.
      </>
    ),
    questions: [
      "Does the system flag actions that are irreversible or consume significant resources?",
      "Does the agent explicitly request permission before executing high-stakes steps?",
      "Does the agent streamline routine, low-risk delegations without requiring repeated approval?",
    ],
  },
  {
    phase: 3,
    title: "Directability & Interruptibility",
    tagline: "Active Steering",
    principle: "Pivot Without Penalty",
    principleDesc:
      "Users must be able to pause, edit, or completely redirect an agent mid-task without losing progress or breaking anything.",
    pitfall: "The Runaway Train",
    pitfallDesc:
      "Locking the user out of the loop once a process begins. The user is forced to watch a mistake unfold or abort the entire session.",
    severity: "High Risk",
    severityLevel: "high",
    nielsenMapping: "User Control & Freedom",
    failureState: "Control Lockout",
    scientificFoundation: (
      <>
        Synthesizes the framework&apos;s <strong>Directability</strong> principle, Dibia&apos;s{" "}
        <strong>Interruptibility</strong> principle, and Google PAIR&apos;s{" "}
        <strong>User Autonomy</strong> principle. True partnership requires shared initiative and
        seamless mid-flight corrections.
      </>
    ),
    questions: [
      "Can the user safely pause the agent mid-generation or mid-execution?",
      "Can the user add new information or change direction without starting over?",
      "Does the agent gracefully hand back control when it encounters a hard blocker?",
    ],
  },
  {
    phase: 4,
    title: "Calibrated Trust & Safety",
    tagline: "Verifiable Confidence",
    principle: "Signal Certainty Accurately",
    principleDesc:
      "The system must be honest about what it knows and what it is guessing. Showing uncertainty builds trust; hiding it destroys it. Trust deepens when the agent tracks its own accuracy over time and shares that record with the user. As the relationship matures, the agent should also adapt how it communicates.",
    pitfall: "The Confident Liar",
    pitfallDesc:
      "Presenting guesses, hallucinations, or risky actions with total confidence, leading users to blindly accept outputs that may be wrong. Without a visible track record, users have no way to judge when to trust the agent and when to double-check.",
    severity: "Catastrophic Trust Failure",
    severityLevel: "critical",
    nielsenMapping: "Help Users Diagnose Errors",
    failureState: "Miscalibrated Reliance",
    scientificFoundation: (
      <>
        Merges the framework&apos;s <strong>Calibrated Trust</strong> principle with Google
        PAIR&apos;s <strong>Evolving Safety</strong> framework. Trust must be earned
        proportionately; expressing appropriate doubt prevents catastrophic over-reliance.
        PAIR&apos;s evolving safety principle implies continuous self-assessment. Agents that
        surface their own improvement metrics give users a rational foundation for trust.
        PAIR&apos;s <strong>Adapt with Feedback</strong> principle extends naturally here: as trust
        deepens, the agent should learn <em>how</em> the user wants results, not just <em>what</em>{" "}
        to do.
      </>
    ),
    questions: [
      "Are uncertain conclusions visually distinct from verified facts?",
      "Does the agent provide immediate receipts or links for its claims?",
      "Are safety boundaries constantly evolving based on error reporting?",
      "Can the user review the agent's performance vs. past interactions over time?",
      "Does the agent adapt its communication style based on the user's preferences?",
    ],
  },
];

export function buildAuditReport(checkedItems: Record<string, boolean>) {
  let report = `HUMAN FACTORS PRINCIPLES FOR HUMAN-AI TRUST\n`;
  report += `An Audit Framework for Non-Deterministic Interfaces\n`;
  report += `Version 2 · July 2026\n\n`;
  report += `Audit Report\n`;
  report += `Conducted on: ${new Date().toLocaleDateString()}\n`;
  report += `Framework by: Brandon Allan Fluegel, Ph.D. · ${SITE_LINKS.email}\n`;
  report += `Available at: ${SITE_URL}/#agent-trust\n`;
  report += `========================================================\n\n`;

  let passedCount = 0;
  let totalCount = 0;

  PAIRS.forEach((pair, pIdx) => {
    const phase = PHASES.find((p) => p.id === pair.phase);
    report += `[${phase?.title || `Phase ${pair.phase}`}] ${pair.title}\n`;
    report += `Principle: ${pair.principle}\n`;
    report += `Usability Issue: ${pair.pitfall} (${pair.severity})\n`;
    report += `Checklist:\n`;
    pair.questions.forEach((q, qIdx) => {
      totalCount++;
      const isChecked = checkedItems[`${pIdx}-${qIdx}`];
      if (isChecked) passedCount++;
      report += `  [${isChecked ? "x" : " "}] ${q}\n`;
    });
    report += `\n`;
  });

  report += `========================================================\n`;
  report += `Final Score: ${passedCount} / ${totalCount} Checks Passed\n`;

  return { report, passedCount, totalCount };
}

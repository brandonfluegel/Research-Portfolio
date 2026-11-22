// v3 - Winter 2026
import { SITE_URL } from "@/lib/constants/site";

export const RESEARCH_HIGHLIGHTS = [
  {
    id: "amazon-section",
    title: "Amazon Devices: Alexa latency and cognitive workload",
    role: "Human Factors Researcher",
    summary:
      "Led Alexa latency research across 20,000+ trials, identifying a 1,000 ms satisfaction threshold. Alexa Economics projected $50M in operational value over 15 months if latency targets were met. Separate fNIRS and eye-tracking research informed Echo products serving 75M+ active customers.",
    organization: "Amazon",
  },
  {
    id: "nasa-section",
    title: "NASA: Lunar Gateway medical workstation",
    role: "Human Factors Ph.D. Intern",
    summary:
      "Evaluated a medical workstation under simulated microgravity. The redesigned interface and physical layout reduced time-on-task for complex procedures by 30% versus the baseline configuration.",
    organization: "NASA",
  },
  {
    id: "mercedes-section",
    title: "Mercedes-Benz: Semi-autonomous driving interfaces",
    role: "Human Factors Ph.D. Intern",
    summary:
      "Studied handover alerts and cabin acoustics. The portfolio reports 15% lower perceived cabin noise and a 24% increase in driver trust scores in structured evaluations.",
    organization: "Mercedes-Benz",
  },
  {
    id: "agent-trust",
    title: "Human Factors Principles for Human-AI Trust",
    role: "Author",
    summary:
      "Authored a four-phase, six-principle audit framework for evaluating trust, observability, and human control in non-deterministic AI interfaces.",
  },
] as const;

export const researchHighlightUrl = (id: string) => `${SITE_URL}/#${id}`;

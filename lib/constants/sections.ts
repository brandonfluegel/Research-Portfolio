// v2 - Fall 2026
export const NAV_SECTIONS = [
  { id: "amazon-section", name: "Amazon", href: "#amazon-section" },
  { id: "nasa-section", name: "NASA", href: "#nasa-section" },
  { id: "mercedes-section", name: "Mercedes", href: "#mercedes-section" },
  { id: "agent-trust", name: "Human-AI Trust", href: "#agent-trust" },
] as const;

export type SectionId = (typeof NAV_SECTIONS)[number]["id"];

export const SECTION_IDS: readonly SectionId[] = NAV_SECTIONS.map((section) => section.id);



export const NAV_SECTIONS = [
  { id: "amazon-section", name: "Amazon", href: "#amazon-section" },
  { id: "agent-trust", name: "Agentic Trust", href: "#agent-trust" },
  { id: "uber-section", name: "Uber", href: "#uber-section" },
  { id: "nasa-section", name: "NASA", href: "#nasa-section" },
  { id: "mercedes-section", name: "Mercedes", href: "#mercedes-section" },
] as const;

export type SectionId = (typeof NAV_SECTIONS)[number]["id"];

export const SECTION_IDS: readonly SectionId[] = NAV_SECTIONS.map((section) => section.id);



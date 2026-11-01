export const NAV_SECTIONS = [
  { name: "Amazon", href: "#amazon-section" },
  { name: "Agentic Trust", href: "#agent-trust" },
  { name: "Uber", href: "#uber-section" },
  { name: "NASA", href: "#nasa-section" },
  { name: "Mercedes", href: "#mercedes-section" },
] as const;

export const SECTION_IDS = NAV_SECTIONS.map((section) => section.href.slice(1));


export function scrollToSectionId(sectionId: string, offset = -30) {
  if (typeof window !== "undefined") {
    // Eagerly render all sleeping components so height calculation is accurate
    window.dispatchEvent(new CustomEvent("force-render-all"));
  }

  // Allow enough repaint frames for the DOM to fully expand before measuring
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, 150); // Increased timeout to ensure dynamic lazy-loaded sections mount properly
}

export function scrollToTopSmooth() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function scrollToSectionId(sectionId: string, offset = -100) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export function scrollToTopSmooth() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function scrollToSectionId(sectionId: string) {
  if (typeof window === "undefined") return;

  // Force all deferred (lazy) sections to mount their real content.
  window.dispatchEvent(new CustomEvent("force-render-all"));

  // Problem 1 (race condition): deferred sections expand from their placeholder
  // min-h to their true height after React commits renders. A fixed timeout
  // measures position mid-expansion and lands in the wrong section.
  //
  // Problem 2 (content-visibility containment): .deferred-section uses
  // `content-visibility: auto` + `contain-intrinsic-size`. Off-screen sections
  // have their layout computed from the intrinsic size, so getBoundingClientRect()
  // returns stale positions even after content renders.
  //
  // Fix: poll scrollHeight each rAF until stable (layout settled), then use
  // scrollIntoView which the browser resolves correctly against its own layout
  // engine — bypassing any containment measurement inaccuracies. The fixed-nav
  // offset is handled by `scroll-margin-top` on .deferred-section in globals.css.

  let lastHeight = 0;
  let stableFrames = 0;
  let attempts = 0;
  const MAX_ATTEMPTS = 120; // ~2s safety cap at 16ms/frame

  const tryScroll = () => {
    attempts++;
    const currentHeight = document.body.scrollHeight;

    if (currentHeight !== lastHeight) {
      stableFrames = 0;
      lastHeight = currentHeight;
    } else {
      stableFrames++;
    }

    if (stableFrames >= 5 || attempts >= MAX_ATTEMPTS) {
      const element = document.getElementById(sectionId);
      if (!element) return;
      // Measure the fixed navbar height dynamically instead of relying
      // solely on CSS scroll-margin-top. This ensures an accurate offset
      // regardless of the nav's current padding state.
      const nav = document.querySelector("nav");
      const offset = nav ? nav.getBoundingClientRect().height : 80;
      const top =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    } else {
      requestAnimationFrame(tryScroll);
    }
  };

  requestAnimationFrame(tryScroll);
}

export function scrollToTopSmooth() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

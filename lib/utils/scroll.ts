export function scrollToSectionId(sectionId: string) {
  if (typeof window === "undefined") return;

  // Force all deferred (lazy) sections to mount their real content.
  // Idempotent — harmless if already dispatched by the Navbar click handler.
  window.dispatchEvent(new CustomEvent("force-render-all"));

  // Wait for layout to stabilise after deferred sections expand from
  // placeholder min-heights to real content heights. We poll scrollHeight
  // each rAF and consider layout "settled" once it stays constant.
  //
  // Mobile devices are slower to settle, so we require more stable frames
  // than a single check and give a generous attempt budget.

  let lastHeight = 0;
  let stableFrames = 0;
  let attempts = 0;
  const MAX_ATTEMPTS = 120; // ~2s safety cap at 16ms/frame
  const STABLE_THRESHOLD = 8; // extra frames for slower mobile GPUs

  const tryScroll = () => {
    attempts++;
    const currentHeight = document.body.scrollHeight;

    if (currentHeight !== lastHeight) {
      stableFrames = 0;
      lastHeight = currentHeight;
    } else {
      stableFrames++;
    }

    if (stableFrames >= STABLE_THRESHOLD || attempts >= MAX_ATTEMPTS) {
      const element = document.getElementById(sectionId);
      if (!element) return;
      // Measure the fixed navbar height dynamically. The nav padding differs
      // between scrolled (py-3) and top-of-page (py-4/py-5) states, so a
      // hard-coded CSS value would be wrong in one of those states.
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

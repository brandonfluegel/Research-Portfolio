// v3 - Winter 2026
import { prefersReducedMotion } from "@/lib/utils/performance";

export function scrollToTopSmooth() {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "instant" : "smooth" });
}

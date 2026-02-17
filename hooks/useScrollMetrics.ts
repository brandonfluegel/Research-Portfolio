"use client";

import { useSyncExternalStore } from "react";

type ScrollSnapshot = {
  scrollY: number;
  progress: number;
};

const listeners = new Set<() => void>();

let snapshot: ScrollSnapshot = {
  scrollY: 0,
  progress: 0,
};

let listening = false;
let rafId: number | null = null;

function computeSnapshot(): ScrollSnapshot {
  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? scrollY / docHeight : 0;

  return {
    scrollY,
    progress,
  };
}

function emitIfChanged() {
  const next = computeSnapshot();
  if (next.scrollY === snapshot.scrollY && next.progress === snapshot.progress) {
    return;
  }

  snapshot = next;
  listeners.forEach((listener) => listener());
}

function onScrollOrResize() {
  if (rafId !== null) return;

  rafId = window.requestAnimationFrame(() => {
    rafId = null;
    emitIfChanged();
  });
}

function startListening() {
  if (listening) return;
  listening = true;

  snapshot = computeSnapshot();
  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize, { passive: true });
}

function stopListening() {
  if (!listening || listeners.size > 0) return;
  listening = false;

  window.removeEventListener("scroll", onScrollOrResize);
  window.removeEventListener("resize", onScrollOrResize);

  if (rafId !== null) {
    window.cancelAnimationFrame(rafId);
    rafId = null;
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  startListening();

  return () => {
    listeners.delete(listener);
    stopListening();
  };
}

function getSnapshot() {
  return snapshot;
}

function getServerSnapshot(): ScrollSnapshot {
  return {
    scrollY: 0,
    progress: 0,
  };
}

export default function useScrollMetrics() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

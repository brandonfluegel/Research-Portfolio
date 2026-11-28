// v3 - Winter 2026
"use client";

import { useRef, useEffect, useState } from "react";
import { isLowPowerDevice, prefersReducedMotion } from "@/lib/utils/performance";

interface LazyVideoProps {
  sources: Array<{ src: string; type: string }>;
  poster?: string;
  ariaLabel?: string;
  className?: string;
}

export default function LazyVideo({ sources, poster, ariaLabel, className = "" }: LazyVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [playbackMessage, setPlaybackMessage] = useState("");

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: isLowPowerDevice() ? "40px 0px" : "120px 0px", threshold: 0.15 }
    );
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView && !reducedMotion && !prefersReducedMotion()) {
      if (video.paused) {
        void video.play().catch((error: unknown) => {
          if (error instanceof DOMException && error.name === "AbortError") return;
          setPlaybackMessage((message) => message || "Playback unavailable. The poster image is shown.");
        });
      }
    } else {
      video.pause();
    }
  }, [isInView, reducedMotion]);

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <video
        ref={videoRef}
        poster={poster}
        aria-label={ariaLabel}
        muted
        loop
        playsInline
        preload="none"
        disablePictureInPicture
        onError={() => setPlaybackMessage("Video unavailable. The poster image is shown.")}
        className="w-full h-full object-cover"
      >
        {sources.map((source) => <source key={source.src} src={source.src} type={source.type} />)}
      </video>
      {playbackMessage && (
        <p role="status" className="absolute bottom-3 right-3 max-w-56 rounded-lg bg-black/90 p-2 text-xs leading-normal text-white">
          {playbackMessage}
        </p>
      )}
    </div>
  );
}

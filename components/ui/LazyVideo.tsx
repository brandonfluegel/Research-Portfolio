// v3 - Winter 2026
"use client";

import { useRef, useEffect, useState, useSyncExternalStore } from "react";
import { isLowPowerDevice, prefersReducedMotion } from "@/lib/utils/performance";

const subscribeToHydration = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

interface LazyVideoProps {
  sources: Array<{ src: string; type: string }>;
  poster?: string;
  ariaLabel?: string;
  className?: string;
}

export default function LazyVideo({ sources, poster, ariaLabel, className = "" }: LazyVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hydrated = useSyncExternalStore(subscribeToHydration, getClientSnapshot, getServerSnapshot);
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [userRequested, setUserRequested] = useState(false);
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
    const update = () => {
      setReducedMotion(media.matches);
      if (media.matches) setUserRequested(false);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView && !userPaused && ((!reducedMotion && !prefersReducedMotion()) || userRequested)) {
      if (video.paused) {
        void video.play().catch((error: unknown) => {
          if (error instanceof DOMException && error.name === "AbortError") return;
          setPlaybackMessage((message) => message || "Playback paused. Press Play to try again.");
        });
      }
    } else {
      video.pause();
    }
  }, [isInView, reducedMotion, userPaused, userRequested]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) {
      setUserPaused(true);
      video.pause();
      return;
    }

    setUserPaused(false);
    setUserRequested(true);
    setIsInView(true);
    setPlaybackMessage("");
    void video.play().catch(() => {
      setPlaybackMessage("Playback unavailable. The poster image is shown.");
    });
  };

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
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => setPlaybackMessage("Video unavailable. The poster image is shown.")}
        className="w-full h-full object-cover"
      >
        {sources.map((source) => <source key={source.src} src={source.src} type={source.type} />)}
      </video>
      <button
        type="button"
        disabled={!hydrated}
        onClick={togglePlayback}
        aria-label={`${isPlaying ? "Pause" : "Play"} ${ariaLabel || "video"}`}
        className="video-playback-control absolute bottom-3 right-3 min-h-11 rounded-full border border-white/30 bg-black/85 px-4 text-sm font-medium text-white hover:bg-black disabled:opacity-70"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      {playbackMessage && (
        <p role="status" className="absolute bottom-16 right-3 max-w-56 rounded-lg bg-black/90 p-2 text-xs leading-normal text-white">
          {playbackMessage}
        </p>
      )}
    </div>
  );
}

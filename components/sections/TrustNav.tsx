"use client";

export default function TrustNav({ activeSection: _activeSection = "" }: { activeSection?: string }) {
  return (
    <nav className="w-full max-w-6xl mx-auto mb-8 md:mb-16 mt-0">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6 md:mb-8"></div>
    </nav>
  );
}
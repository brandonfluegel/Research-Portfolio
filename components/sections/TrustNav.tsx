"use client";

import Image from "next/image";
import { scrollToSectionId } from "@/lib/utils/scroll";
import { TRUST_COMPANIES } from "@/lib/constants/sections";

export default function TrustNav({ activeSection = "" }: { activeSection?: string }) {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToSectionId(id);
  };

  return (
    <nav 
      className="w-full max-w-6xl mx-auto mb-8 md:mb-16 mt-0"
    >
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6 md:mb-8"></div>
    </nav>
  );
}
"use client";

import Image from "next/image";

interface LogoBadgeProps {
  logoSrc: string;
  alt: string;
  className?: string;
}

export default function LogoBadge({ logoSrc, alt, className = "" }: LogoBadgeProps) {
  return (
    // FIX: Removed 'absolute left-1/2 transform -translate-x-1/2'
    // Added 'relative' so it respects Flexbox/Grid parents.
    <div className={`relative select-none ${className}`}>
      <Image
        src={logoSrc}
        alt={alt}
        width={400}
        height={400}
        // FIX: Removed opacity-150 (invalid CSS, max is 100). 
        // We let the parent control opacity/filter via className.
        className="object-contain w-full h-auto"
      />
    </div>
  );
}
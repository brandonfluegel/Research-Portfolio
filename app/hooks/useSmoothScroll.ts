"use client";

import { useEffect } from 'react';

export default function useSmoothScroll(offset = 90) {
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest('a');
      if (anchor && anchor.hash) {
        event.preventDefault();
        const targetId = anchor.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const targetPosition =
            targetElement.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => document.removeEventListener('click', handleAnchorClick);
  }, [offset]);
}

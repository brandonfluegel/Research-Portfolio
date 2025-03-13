"use client";

import { useEffect } from 'react';

export default function useSmoothScroll(navbarSelector = 'nav', extraOffset = 200) {
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest('a[href^="#"]');
      if (anchor) {
        event.preventDefault();

        const targetId = anchor.getAttribute('href')!.slice(1);
        const targetElement = document.getElementById(targetId);
        const navbar = document.querySelector(navbarSelector);

        if (targetElement && navbar) {
          const sections = Array.from(document.querySelectorAll('section'));
          const targetIndex = sections.findIndex((sec) => sec.id === targetId);
          
          let offsetTop = targetElement.offsetTop - navbar.clientHeight - extraOffset;

          if (targetIndex > 0) {
            const previousSection = sections[targetIndex - 1];
            offsetTop = previousSection.offsetTop + previousSection.offsetHeight - navbar.clientHeight - extraOffset;
          }

          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [navbarSelector, extraOffset]);
}

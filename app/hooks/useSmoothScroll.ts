"use client";

import { useEffect } from 'react';

export default function useSmoothScroll(navbarSelector = 'nav') {
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest('a[href^="#"]');
      if (anchor) {
        event.preventDefault();

        const targetId = anchor.getAttribute('href')!.slice(1);
        const targetElement = document.getElementById(targetId);
        const navbar = document.querySelector(navbarSelector);

        if (targetElement && navbar) {
          const navbarHeight = navbar.getBoundingClientRect().height;
          const targetRect = targetElement.getBoundingClientRect();
          const offsetTop = targetRect.top + window.scrollY - navbar.clientHeight - (targetElement.clientHeight * 0.3); // clearly adjusted to 30%

          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
}

"use client";

import { useEffect } from 'react';

export default function useSmoothScroll(offsetExtra = 10) {
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest('a[href^="#"]');
      if (anchor) {
        event.preventDefault();

        const targetId = anchor.getAttribute('href')!.slice(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = document.querySelector('nav')?.clientHeight || 80; // measure dynamically if needed

        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight - offsetExtra;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [offsetExtra]);
}

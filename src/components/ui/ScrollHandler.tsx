'use client';

import { useEffect } from 'react';

export function ScrollHandler() {
  useEffect(() => {
    const aliases: Record<string, string> = { about: 'expertise', 'tech-stack': 'expertise', certifications: 'credentials' };
    function scrollToHash() {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      const element = document.getElementById(aliases[hash] || hash);
      element?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
    const timeout = window.setTimeout(scrollToHash, 100);
    window.addEventListener('hashchange', scrollToHash);
    return () => { window.clearTimeout(timeout); window.removeEventListener('hashchange', scrollToHash); };
  }, []);

  return null;
}

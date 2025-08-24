'use client';

import { useEffect } from 'react';

export function ScrollHandler() {
  useEffect(() => {
    // Handle hash in URL on page load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return null; // This component doesn't render anything
}

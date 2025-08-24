'use client';

import { useRouter, usePathname } from 'next/navigation';

export function useSmartNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (href: string) => {
    // Handle anchor links on the home page
    if (href.startsWith('#')) {
      // If we're not on the home page, navigate to home first then scroll
      if (pathname !== '/') {
        router.push(`/${href}`);
        return;
      }
      
      // If we're on the home page, scroll to the section
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Handle regular navigation
    if (href === '/') {
      router.push('/');
      return;
    }

    // For other routes, use normal navigation
    router.push(href);
  };

  return { navigateTo };
}

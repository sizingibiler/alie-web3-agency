'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { pageview } from './GoogleAnalytics';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views on route change
    pageview(pathname);
  }, [pathname]);

  // Initialize dataLayer if it doesn't exist
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      
      // Send initial page view
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: pathname,
          page_location: window.location.href,
          page_title: document.title
        });
      }
    }
  }, []);

  return <>{children}</>;
}

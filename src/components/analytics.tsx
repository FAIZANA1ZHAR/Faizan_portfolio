'use client';

import { GoogleAnalytics } from '@next/third-parties/google';

export function Analytics() {
  return (
    <>
      {/* Add your Google Analytics ID here */}
      {process.env.NODE_ENV === 'production' && (
        <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
      )}
    </>
  );
}
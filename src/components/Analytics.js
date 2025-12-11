import { useEffect } from 'react';

/**
 * Vercel Web Analytics component for React
 * This component injects the Vercel Web Analytics script into the page
 */
const Analytics = () => {
  useEffect(() => {
    // Inject Vercel Web Analytics script
    const script = document.createElement('script');
    script.src = '/_vercel/insights/script.js';
    script.defer = true;
    script.dataset.sdkn = '@vercel/analytics/react';
    script.dataset.sdkv = '1.6.1';
    
    // Handle errors
    script.onerror = () => {
      console.log(
        '[Vercel Web Analytics] Failed to load script. Be sure to enable Web Analytics for your project and deploy again.'
      );
    };
    
    document.head.appendChild(script);
  }, []);
  
  return null;
};

export default Analytics;

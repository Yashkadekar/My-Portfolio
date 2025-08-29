'use client';

import { useEffect, useState } from 'react';
import { Toaster } from "sonner";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [Analytics, setAnalytics] = useState<React.ComponentType<{}> | null>(null);
  const [SpeedInsights, setSpeedInsights] = useState<React.ComponentType<{}> | null>(null);

  useEffect(() => {
    // Set a small timeout to ensure the initial render happens before mounting
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 50);
    
    // Dynamically import client-side only components
    import('@vercel/analytics/next').then((mod) => setAnalytics(() => mod.Analytics));
    import('@vercel/speed-insights/next').then((mod) => setSpeedInsights(() => mod.SpeedInsights));
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`min-h-screen bg-background transition-opacity duration-300 ease-in-out ${
        isMounted ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundColor: 'hsl(var(--background))',
        position: 'relative',
        zIndex: 1
      }}
    >
      {children}
      <Toaster position="bottom-right" richColors closeButton />
      {Analytics && <Analytics />}
      {SpeedInsights && <SpeedInsights />}
    </div>
  );
}

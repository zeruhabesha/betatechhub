'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Disable SSR for the Hero component to avoid hydration issues
const HeroClient = dynamic(() => import('./Hero.client'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-muted/50 to-background">
      <div className="px-4 text-center">
        <h1 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl lg:text-6xl">BETATECHHUB</h1>
        <p className="text-lg text-muted-foreground sm:text-xl">Loading...</p>
      </div>
    </div>
  ),
});

export default function HeroWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render anything on the server
  if (typeof window === 'undefined') {
    return null;
  }

  return isClient ? <HeroClient /> : null;
}

'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Disable SSR for the Hero component to avoid hydration issues
const HeroClient = dynamic(() => import('./Hero.client'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#0B132B]">
      <div className="text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          BETATECHHUB
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl">Loading...</p>
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

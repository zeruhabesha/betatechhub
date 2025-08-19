'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroClient() {
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number }>>([]);
  const [circles, setCircles] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number }>>([]);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    setIsMounted(true);
    
    const handleResize = () => {
      // Generate particles
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 6 + 2,
        opacity: Math.random() * 0.5 + 0.1,
      }));

      // Generate circles
      const newCircles = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 20 + 10,
        opacity: Math.random() * 0.3 + 0.1,
      }));

      setParticles(newParticles);
      setCircles(newCircles);
    };

    // Initial setup
    handleResize();

    // Update on resize
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={`particle-${particle.id}`}
            className="absolute rounded-full bg-[#176a9d]"
            initial={{
              x: particle.x,
              y: particle.y,
              width: particle.size,
              height: particle.size,
              opacity: 0,
            }}
            animate={{
              x: [particle.x, particle.x + (Math.random() - 0.5) * 100],
              y: [particle.y, particle.y + (Math.random() - 0.5) * 100],
              opacity: [0, particle.opacity, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
        
        {circles.map((circle) => (
          <motion.div
            key={`circle-${circle.id}`}
            className="absolute rounded-full bg-[#176a9d] opacity-10"
            initial={{
              x: circle.x,
              y: circle.y,
              width: circle.size,
              height: circle.size,
              opacity: 0,
            }}
            animate={{
              x: [circle.x, circle.x + (Math.random() - 0.5) * 50],
              y: [circle.y, circle.y + (Math.random() - 0.5) * 50],
              opacity: [0, circle.opacity],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Advanced Cybersecurity Solutions
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Protect your business with cutting-edge security solutions and expert consulting services.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium rounded-lg transition-colors">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}

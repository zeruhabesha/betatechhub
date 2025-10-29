'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { PenTool, Lightbulb, Share2 } from 'lucide-react';

import { HeroBackdrop } from '@/components/HeroBackdrop';

const capsules = [
  { icon: PenTool, label: 'Expert Analysis' },
  { icon: Lightbulb, label: 'Actionable Guidance' },
  { icon: Share2, label: 'Community Insights' },
];

export function HeroBlog() {
  const [isClient, setIsClient] = useState(false);
  const particles = useMemo(() => new Array(20).fill(0), []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="hero-surface pb-16 pt-28 sm:pt-32">
      <HeroBackdrop imageSrc="/blog-hero.png">
        <div className="absolute inset-0">
          <div className="absolute left-10 top-12 h-24 w-24 rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm" />
          <div className="absolute right-12 top-24 h-16 w-32 -rotate-6 rounded-3xl border border-border/40 bg-background/60 backdrop-blur" />
        </div>
      </HeroBackdrop>

      {isClient && (
        <>
          {particles.map((_, index) => (
            <motion.div
              // eslint-disable-next-line react/no-array-index-key
              key={`particle-${index}`}
              className="absolute h-1 w-1 rounded-full bg-primary/40"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: 0,
              }}
              animate={{
                y: [null, -25, 25, -15],
                x: [null, 15, -15, 10],
                opacity: [0, 0.8, 0.4, 0.8, 0],
              }}
              transition={{ duration: 6 + Math.random() * 3, repeat: Number.POSITIVE_INFINITY, delay: Math.random() * 2 }}
            />
          ))}
        </>
      )}

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-2 text-xs uppercase tracking-[0.35em] text-primary backdrop-blur"
        >
          Insights &amp; Updates
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 px-4 text-3xl font-bold leading-tight text-foreground sm:px-0 sm:text-5xl"
        >
          Stay ahead of emerging cyber threats
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-4 max-w-3xl px-4 text-base text-muted-foreground sm:px-0 sm:text-lg"
        >
          Explore research, playbooks, and commentary from BETATECHHUB&apos;s specialists. Each article translates global trends
          into practical steps for African teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {capsules.map((capsule) => {
            const Icon = capsule.icon;
            return (
              <span
                key={capsule.label}
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground backdrop-blur"
              >
                <Icon className="h-4 w-4 text-primary" />
                {capsule.label}
              </span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

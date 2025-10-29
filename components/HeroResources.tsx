'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, GraduationCap } from 'lucide-react';

import { HeroBackdrop } from '@/components/HeroBackdrop';

const resourceTypes = [
  { icon: BookOpen, label: 'Playbooks', detail: 'Hands-on guides for African security teams' },
  { icon: GraduationCap, label: 'Workshops', detail: 'Instructor-led sessions in Amharic & English' },
  { icon: Download, label: 'Toolkits', detail: 'Practical templates and checklists' },
];

export function HeroResources() {
  const [isClient, setIsClient] = useState(false);
  const particles = useMemo(() => new Array(18).fill(0), []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="hero-surface pb-20 pt-28 sm:pt-32">
      <HeroBackdrop imageSrc="/resources-hero.png">
        <div className="absolute inset-0">
          <div className="absolute left-8 top-16 h-24 w-24 rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm" />
          <div className="absolute right-8 top-28 h-16 w-32 -rotate-6 rounded-3xl border border-border/40 bg-background/60 backdrop-blur" />
        </div>
      </HeroBackdrop>

      {isClient && (
        <>
          {particles.map((_, index) => (
            <motion.div
              // eslint-disable-next-line react/no-array-index-key
              key={`particle-${index}`}
              className="absolute h-1 w-1 rounded-full bg-primary/35"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: 0,
              }}
              animate={{
                y: [null, -25, 25, -15],
                x: [null, 10, -10, 15],
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
          Resource Hub
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 px-4 text-3xl font-bold leading-tight text-foreground sm:px-0 sm:text-5xl"
        >
          Knowledge crafted for African innovators
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-4 max-w-3xl px-4 text-base text-muted-foreground sm:px-0 sm:text-lg"
        >
          Access practical resources to build resilient teams, secure infrastructure, and accelerate digital growth across the continent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 grid w-full gap-4 text-left sm:grid-cols-3"
        >
          {resourceTypes.map((resource) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.label}
                className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-card/80 p-5 shadow-lg shadow-primary/10 backdrop-blur"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">{resource.label}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{resource.detail}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

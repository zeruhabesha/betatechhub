'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe2 } from 'lucide-react';

import { HeroBackdrop } from '@/components/HeroBackdrop';

const highlights = [
  { icon: Users, label: 'Multidisciplinary Experts', detail: 'Security analysts, developers, and strategists working together' },
  { icon: Award, label: 'Certified Specialists', detail: 'ISO 27001, CISSP, CEH, and cloud security accreditations' },
  { icon: Globe2, label: 'Regional Impact', detail: 'Serving clients across East and West Africa from Addis Ababa' },
];

export function HeroAbout() {
  const [isClient, setIsClient] = useState(false);
  const particles = useMemo(() => new Array(18).fill(0), []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="hero-surface pb-20 pt-28 sm:pt-32">
      <HeroBackdrop imageSrc="/team-collaboration.png">
        <div className="absolute inset-0">
          <div className="absolute left-6 top-16 h-20 w-20 rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm sm:h-28 sm:w-28" />
          <div className="absolute right-10 top-28 h-16 w-32 -rotate-6 rounded-3xl border border-border/40 bg-background/60 backdrop-blur" />
        </div>
      </HeroBackdrop>

      {isClient && (
        <>
          {particles.map((_, index) => (
            <motion.div
              // eslint-disable-next-line react/no-array-index-key
              key={`particle-${index}`}
              className="absolute h-1.5 w-1.5 rounded-full bg-primary/30"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: 0,
              }}
              animate={{
                y: [null, -20, 20, -15],
                x: [null, 10, -10, 15, -5],
                opacity: [0, 1, 0.5, 1, 0],
              }}
              transition={{ duration: 7 + Math.random() * 3, repeat: Number.POSITIVE_INFINITY, delay: Math.random() * 2 }}
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
          About Us
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 px-4 text-3xl font-bold leading-tight text-foreground sm:px-0 sm:text-5xl"
        >
          Building resilient technology for Africa&apos;s future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-4 max-w-3xl px-4 text-base text-muted-foreground sm:px-0 sm:text-lg"
        >
          BETATECHHUB was founded in Addis Ababa to protect and empower African organisations. We combine local insight with
          global expertise to deliver trusted cybersecurity and digital transformation outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 grid w-full gap-4 text-left sm:grid-cols-3"
        >
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <div
                key={highlight.label}
                className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-card/80 p-5 shadow-lg shadow-primary/10 backdrop-blur"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">{highlight.label}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{highlight.detail}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

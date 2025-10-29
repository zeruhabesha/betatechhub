'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Cpu, Database, Network, Shield, Zap } from 'lucide-react';

import { HeroBackdrop } from '@/components/HeroBackdrop';

const focusAreas = [
  { icon: Shield, label: 'Managed Defense', description: 'Security operations tailored for African enterprises' },
  { icon: Cloud, label: 'Cloud Security', description: 'Protect workloads across hybrid and multi-cloud estates' },
  { icon: Database, label: 'Data Privacy', description: 'Safeguard critical records with resilient controls' },
];

export function HeroServices() {
  const [isClient, setIsClient] = useState(false);
  const particles = useMemo(() => new Array(24).fill(0), []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="hero-surface pb-24 pt-28 sm:pt-32">
      <HeroBackdrop imageSrc="/cloud-security-expert.png">
        <div className="absolute inset-0">
          <div className="absolute left-6 top-12 h-24 w-24 rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm sm:h-32 sm:w-32" />
          <div className="absolute right-10 top-24 h-16 w-32 -rotate-6 rounded-3xl border border-border/40 bg-background/60 backdrop-blur" />
          <div className="absolute bottom-16 right-6 h-24 w-24 rounded-full border border-primary/30 bg-primary/15 blur-sm" />
        </div>
      </HeroBackdrop>

      {isClient && (
        <>
          {particles.map((_, index) => (
            <motion.div
              // eslint-disable-next-line react/no-array-index-key
              key={`particle-${index}`}
              className={`absolute rounded-full ${
                index % 3 === 0
                  ? 'h-1.5 w-1.5 bg-primary sm:h-2 sm:w-2'
                  : index % 3 === 1
                    ? 'h-1 w-1 bg-primary/70'
                    : 'h-1 w-1 bg-primary/40 sm:h-1.5 sm:w-1.5'
              }`}
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: 0,
              }}
              animate={{
                y: [null, -30, 30, -20, 10],
                x: [null, 10, -10, 15, -5],
                opacity: [0, 1, 0.7, 1, 0.3, 1, 0],
                scale: [1, 1.2, 0.8, 1.1, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
                ease: 'easeInOut',
              }}
            />
          ))}

          {[Shield, Cloud, Cpu, Network, Database, Zap].map((Icon, index) => (
            <motion.div
              // eslint-disable-next-line react/no-array-index-key
              key={`icon-${index}`}
              className="absolute opacity-20"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              }}
              animate={{
                y: [null, -20, 20, -15],
                rotate: [0, 10, -10, 5, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{
                duration: 8 + index * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 1.5,
              }}
            >
              <Icon className="h-6 w-6 text-primary/45" />
            </motion.div>
          ))}
        </>
      )}

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-3 py-1.5 text-xs uppercase tracking-[0.3em] text-primary backdrop-blur-sm sm:px-4 sm:py-2">
            <Shield className="h-4 w-4" />
            <span>Our Services</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-4 text-3xl font-bold leading-tight text-foreground sm:px-0 sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Advanced{' '}
          <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            Security Services
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-4 max-w-2xl px-4 text-base leading-relaxed text-muted-foreground sm:px-0 sm:text-lg"
        >
          Comprehensive cybersecurity solutions tailored for African businesses. From threat detection to cloud security, we
          protect your digital assets with cutting-edge technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 grid w-full gap-4 text-left sm:grid-cols-3"
        >
          {focusAreas.map((focus) => {
            const Icon = focus.icon;
            return (
              <div
                key={focus.label}
                className="flex flex-col gap-3 rounded-2xl border border-border/70 bg-card/80 p-5 shadow-lg shadow-primary/10 backdrop-blur"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">{focus.label}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{focus.description}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span>8+ Security Services</span>
          <span className="text-primary">•</span>
          <span>5+ AI Solutions</span>
          <span className="text-primary">•</span>
          <span>African Expertise</span>
        </motion.div>
      </div>
    </section>
  );
}

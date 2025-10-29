'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

import { HeroBackdrop } from '@/components/HeroBackdrop';

const contactChannels = [
  { icon: Phone, label: '+251 911 123 456', description: 'Talk directly with our security team' },
  { icon: Mail, label: 'info@betatechhub.et', description: 'Response within 1 business day' },
  { icon: MapPin, label: 'ICT Park, Addis Ababa', description: 'Book an in-person strategy session' },
];

export function HeroContact() {
  const [isClient, setIsClient] = useState(false);
  const particles = useMemo(() => new Array(16).fill(0), []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="hero-surface pb-20 pt-28 sm:pt-32">
      <HeroBackdrop imageSrc="/contact-hero.png">
        <div className="absolute inset-0">
          <div className="absolute left-8 top-20 h-24 w-24 rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm" />
          <div className="absolute right-10 top-32 h-16 w-32 -rotate-6 rounded-3xl border border-border/40 bg-background/60 backdrop-blur" />
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
                y: [null, -20, 20, -10],
                x: [null, 12, -12, 8],
                opacity: [0, 0.8, 0.4, 0.8, 0],
              }}
              transition={{ duration: 5 + Math.random() * 3, repeat: Number.POSITIVE_INFINITY, delay: Math.random() * 2 }}
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
          Contact us
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 px-4 text-3xl font-bold leading-tight text-foreground sm:px-0 sm:text-5xl"
        >
          Let&apos;s secure your next chapter together
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-4 max-w-3xl px-4 text-base text-muted-foreground sm:px-0 sm:text-lg"
        >
          Schedule a discovery call or send us a message. Our Addis Ababa team will respond with tailored recommendations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 grid w-full gap-4 text-left sm:grid-cols-3"
        >
          {contactChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.label}
                className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-card/80 p-5 text-left shadow-lg shadow-primary/10 backdrop-blur"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-base font-semibold text-foreground">{channel.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{channel.description}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

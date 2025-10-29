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

import { HeroBackdrop } from "@/components/HeroBackdrop"

export function HeroContact() {
  const [isClient, setIsClient] = useState(false);
  const particles = useMemo(() => new Array(16).fill(0), []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="hero-surface">
      <HeroBackdrop imageSrc="/cybersecurity-team.png">
        <div className="absolute inset-0">
          <div className="absolute left-8 top-16 h-24 w-24 rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm sm:h-32 sm:w-32" />
          <div className="absolute right-10 top-28 h-16 w-32 -rotate-6 rounded-3xl border border-border/40 bg-background/60 backdrop-blur" />
          <div className="absolute bottom-14 right-12 h-24 w-24 rounded-full border border-primary/30 bg-primary/15 blur-sm" />
        </div>
      </HeroBackdrop>

      {mounted && (
        <>
          {particles.map((_, index) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0
                  ? "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary"
                  : i % 3 === 1
                    ? "w-1 h-1 bg-primary/70"
                    : "w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary/40"
              }`}
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

          {[Phone, Mail, MapPin].map((Icon, i) => (
            <motion.div
              key={`icon-${i}`}
              className="absolute opacity-20"
              initial={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              }}
              animate={{
                y: [null, -20, 20, -15],
                rotate: [0, 10, -10, 5, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 1.5,
              }}
            >
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary/45" />
            </motion.div>
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
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-3 py-1.5 text-xs uppercase tracking-[0.3em] text-primary backdrop-blur-sm sm:px-4 sm:py-2">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Get In Touch</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-2 text-3xl font-bold leading-tight text-foreground sm:px-0 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Contact <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">Us</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-4 max-w-2xl px-2 text-base leading-relaxed text-muted-foreground sm:px-0 sm:text-lg lg:text-xl"
        >
          Schedule a discovery call or send us a message. Our Addis Ababa team will respond with tailored recommendations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 flex flex-col items-center justify-center gap-3 px-2 text-muted-foreground sm:flex-row sm:gap-5 sm:px-0"
        >
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm">Quick Response</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">Local Presence</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-base font-semibold uppercase tracking-[0.3em] text-primary/70 sm:text-lg"
        >
          Connect. Secure. Succeed.
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span>24/7 Emergency Support</span>
          <span className="text-primary">•</span>
          <span>Response in 2 Hours</span>
          <span className="text-primary">•</span>
          <span>Addis Ababa Based</span>
        </motion.div>
      </div>
    </section>
  );
}

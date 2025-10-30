"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Shield, Zap, Cloud, Cpu, Network, Database } from "lucide-react"

import { HeroBackdrop } from "@/components/HeroBackdrop"

export function HeroServices() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden">
      <HeroBackdrop imageSrc="/cloud-security-expert.png">
        <div className="absolute inset-0">
          <div className="absolute left-6 top-12 h-24 w-24 rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm sm:h-32 sm:w-32" />
          <div className="absolute right-10 top-24 h-16 w-32 -rotate-6 rounded-3xl border border-border/40 bg-background/60 backdrop-blur" />
          <div className="absolute bottom-16 right-6 h-24 w-24 rounded-full border border-primary/30 bg-primary/15 blur-sm" />
        </div>
      </HeroBackdrop>

      {mounted && (
        <>
          {[...Array(25)].map((_, i) => (
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
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
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
                ease: "easeInOut",
              }}
            />
          ))}

          {[Shield, Cloud, Cpu, Network, Database, Zap].map((Icon, i) => (
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-3 py-1.5 text-xs uppercase tracking-[0.3em] text-primary backdrop-blur-sm sm:px-4 sm:py-2">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Our Services</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-2 text-3xl font-bold leading-tight text-foreground sm:px-0 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Advanced <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">Security Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-4 max-w-2xl px-2 text-base leading-relaxed text-muted-foreground sm:px-0 sm:text-lg lg:text-xl"
        >
          Comprehensive cybersecurity solutions tailored for African businesses. From threat detection to cloud security, we protect your digital assets with cutting-edge technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 flex flex-col items-center justify-center gap-3 px-2 text-muted-foreground sm:flex-row sm:gap-5 sm:px-0"
        >
          <div className="flex items-center gap-2">
            <Cloud className="w-4 h-4 text-primary" />
            <span className="text-sm">Cloud Security</span>
          </div>
          <div className="flex items-center gap-2">
            <Network className="w-4 h-4 text-primary" />
            <span className="text-sm">Network Protection</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm">AI-Powered Defense</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-base font-semibold uppercase tracking-[0.3em] text-primary/70 sm:text-lg"
        >
          Secure. Innovate. Excel.
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span>8+ Security Services</span>
          <span className="text-primary">•</span>
          <span>5+ AI Solutions</span>
          <span className="text-primary">•</span>
          <span>African Expertise</span>
        </motion.div>
      </div>
    </section>
  )
}

'use client';

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { BookOpen, Search, Filter, Calendar, User, Clock } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HeroBackdrop } from "@/components/HeroBackdrop"

export function HeroBlog() {
  const [isClient, setIsClient] = useState(false);
  const particles = useMemo(() => new Array(20).fill(0), []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="hero-surface">
      <HeroBackdrop imageSrc="https://images.unsplash.com/photo-1486312338219-ce68e2c6b827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80">
        <div className="absolute inset-0">
          <div className="absolute left-10 top-16 h-24 w-24 rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm sm:h-32 sm:w-32" />
          <div className="absolute right-10 top-1/3 h-16 w-32 -rotate-6 rounded-3xl border border-border/40 bg-background/60 backdrop-blur" />
          <div className="absolute bottom-16 right-12 h-24 w-24 rounded-full border border-primary/30 bg-primary/15 blur-sm" />
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
                y: [null, -25, 25, -15],
                x: [null, 15, -15, 10],
                opacity: [0, 0.8, 0.4, 0.8, 0],
              }}
              transition={{ duration: 6 + Math.random() * 3, repeat: Number.POSITIVE_INFINITY, delay: Math.random() * 2 }}
            />
          ))}

          {[BookOpen, Search, Filter, Calendar].map((Icon, i) => (
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
            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Cybersecurity Insights</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-2 text-3xl font-bold leading-tight text-foreground sm:px-0 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">Blog</span> & Insights
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-4 max-w-2xl px-2 text-base leading-relaxed text-muted-foreground sm:px-0 sm:text-lg lg:text-xl"
        >
          Explore research, playbooks, and commentary from BETATECHHUB&apos;s specialists. Each article translates global trends
          into practical steps for African teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 w-full max-w-md px-2 sm:px-0"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search blog posts..."
              className="w-full rounded-full border border-border/60 bg-background/80 px-10 py-3 text-sm text-foreground shadow-lg shadow-primary/10 backdrop-blur placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/50"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2 px-2 sm:px-0"
        >
          {[
            "Cybersecurity",
            "Threat Intelligence",
            "AI & ML",
            "Ethiopian Context",
            "Interviews",
            "Events",
          ].map((label) => (
            <Badge
              key={label}
              variant="outline"
              className="rounded-full border-border/60 bg-background/80 px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
            >
              {label}
            </Badge>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-primary" /> Weekly Updates
          </span>
          <span className="text-primary">•</span>
          <span className="flex items-center gap-1">
            <User className="h-3.5 w-3.5 text-primary" /> Expert Analysis
          </span>
          <span className="text-primary">•</span>
          <span>Local Insights</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-6 flex flex-col items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary/60"
        >
          <span>Filter by topic</span>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="rounded-full border border-border/60 bg-background/70 px-4 py-2 text-xs font-medium text-muted-foreground hover:border-primary hover:text-primary">
              <Filter className="mr-2 h-3.5 w-3.5" /> Latest
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full border border-border/60 bg-background/70 px-4 py-2 text-xs font-medium text-muted-foreground hover:border-primary hover:text-primary">
              <Calendar className="mr-2 h-3.5 w-3.5" /> Events
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

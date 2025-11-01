"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HeroBackdrop } from "@/components/HeroBackdrop"
import { Shield, ArrowRight, Zap, Eye, Lock, Radar, Globe2, Sparkles } from "lucide-react"

export function Hero() {
  const [isHovered, setIsHovered] = useState(false)
  const [particleCount, setParticleCount] = useState(28)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 100, damping: 10 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 10 })

  const floatingHighlights = [
    {
      icon: Radar,
      label: "Real-time SOC",
      description: "24/7 monitoring from Addis Ababa",
    },
    {
      icon: Lock,
      label: "Zero Trust Ready",
      description: "Identity-first protection across your stack",
    },
    {
      icon: Globe2,
      label: "Pan-African Reach",
      description: "Serving 12+ countries across the continent",
    },
  ]

  const metrics = [
    { value: "15 min", label: "Average Incident Response" },
    { value: "99.9%", label: "Threat Detection Accuracy" },
    { value: "ISO 27001", label: "Certified Leadership" },
  ]

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      mouseX.set(clientX)
      mouseY.set(clientY)
    }

    const updateParticles = () => {
      setParticleCount(window.innerWidth < 768 ? 16 : 30)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", updateParticles)
    updateParticles()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", updateParticles)
    }
  }, [mouseX, mouseY])

  return (
    // <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 hero-surface">
          <section className="hero-surface">

      <HeroBackdrop imageSrc="/cybersecurity-network-bg.png">
        <div className="absolute inset-0">
          <div className="absolute -top-10 left-8 h-24 w-24 rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm sm:h-32 sm:w-32 lg:h-40 lg:w-40" />
          <div className="absolute bottom-20 right-8 h-20 w-20 rounded-full border border-primary/30 bg-primary/10 blur-sm" />
          <div className="absolute top-1/3 right-10 h-14 w-28 -rotate-6 rounded-3xl border border-border/40 bg-background/60 backdrop-blur" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(23,106,157,0.15),transparent_65%)] dark:bg-[radial-gradient(circle_at_top,rgba(23,106,157,0.25),transparent_65%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 dark:from-[#040711] dark:via-[#0B132B] dark:to-[#121b3a]" />

          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(23,106,157,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(23,106,157,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(23,106,157,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(23,106,157,0.1)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] lg:bg-[size:50px_50px] animate-pulse" />
            </div>
          </div>
        </div>
      </HeroBackdrop>

      <motion.div
        className="pointer-events-none absolute h-48 w-48 rounded-full bg-gradient-radial from-primary/25 via-primary/10 to-transparent blur-3xl sm:h-72 sm:w-72 lg:h-96 lg:w-96"
      >
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(23,106,157,0.03)_1px,transparent_1px),linear-gradient(-45deg,rgba(23,106,157,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(45deg,rgba(23,106,157,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(23,106,157,0.05)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:25px_25px] lg:bg-[size:30px_30px]" />
        </div>

        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-primary/10 dark:border-[#176a9d]/20 rounded-lg animate-pulse" />
          <div
            className="absolute top-10 right-5 sm:top-20 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border border-primary/15 dark:border-[#176a9d]/30 rounded-full animate-bounce"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute bottom-10 left-5 sm:bottom-20 sm:left-20 w-20 h-10 sm:w-32 sm:h-16 lg:w-40 lg:h-20 border border-primary/10 dark:border-[#176a9d]/25 rounded-lg animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-16 right-5 sm:bottom-32 sm:right-32 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border border-[#176a9d]/20 rounded-full animate-bounce"
            style={{ animationDuration: "4s", animationDelay: "2s" }}
          />
        </div>
      </motion.div>

      <div className="absolute inset-0 opacity-5">
        <img src="/cybersecurity-network-bg.png" alt="" className="h-full w-full object-cover mix-blend-screen" />
      </div>

      <motion.div
        className="pointer-events-none absolute h-48 w-48 rounded-full bg-gradient-radial from-[#176a9d]/30 via-[#176a9d]/10 to-transparent blur-3xl sm:h-72 sm:w-72 lg:h-96 lg:w-96"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className={`absolute rounded-full ${
            i % 3 === 0
              ? "h-1.5 w-1.5 bg-[#176a9d] sm:h-2 sm:w-2"
              : i % 3 === 1
              ? "h-1 w-1 bg-[#2980b9]"
              : "h-1 w-1 bg-[#176a9d]/70 sm:h-1.5 sm:w-1.5"
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
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {[Shield, Eye, Zap].map((Icon, i) => (
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
          <Icon className="h-6 w-6 text-primary/45 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
          <Icon className="h-6 w-6 text-[#176a9d] sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 rounded-full border border-[#176a9d]/30 bg-background/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#82c4e6] backdrop-blur"
        >
          <Sparkles className="h-4 w-4" />
          Next-gen cyber defense crafted for Africa
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#176a9d]/40 bg-[#0B132B]/70 px-4 py-2 text-xs text-gray-200 shadow-lg shadow-primary/10 backdrop-blur">
            <Shield className="h-4 w-4 text-[#176a9d]" />
            <span>Your trusted partner in Cybersecurity and IT innovation in Africa</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="px-2 text-3xl font-bold leading-tight text-white sm:px-0 sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          BETATECHHUB –{" "}
          <span className="bg-gradient-to-r from-[#41c3ff] via-[#176a9d] to-[#2980b9] bg-clip-text text-transparent">
            Securing Africa's Digital Future
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto max-w-3xl px-2 text-base leading-relaxed text-gray-300 sm:px-0 sm:text-lg lg:text-xl"
        >
          Based in the heart of Addis Ababa, BETATECHHUB empowers African businesses with cutting-edge, locally-relevant technology solutions. We blend global cybersecurity expertise with deep understanding of Africa's unique digital landscape to keep your business secure, connected, and competitive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col items-center justify-center gap-3 px-2 sm:flex-row sm:gap-4 sm:px-0"
        >
          <Button
            size="lg"
            className="w-full rounded-full bg-[#176a9d] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:bg-[#176a9d]/80 hover:shadow-[#176a9d]/25 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Get Started Today
            <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </motion.div>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full rounded-full border-[#176a9d] bg-transparent px-6 py-3 text-sm font-semibold text-[#176a9d] transition-all duration-300 hover:bg-[#176a9d] hover:text-white sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Free Security Audit
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#8ac5e6] sm:mt-6 sm:text-base"
        >
          Protect. Innovate. Grow.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-[#176a9d]/30 bg-[#0f1b39]/70 p-4 text-left shadow-lg shadow-primary/10 backdrop-blur"
            >
              <p className="text-2xl font-semibold text-white lg:text-3xl">{metric.value}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-[#8ac5e6] lg:text-sm">{metric.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="relative flex w-full max-w-5xl flex-col items-center justify-center gap-6 sm:flex-row">
          {floatingHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex w-full flex-1 items-start gap-3 rounded-2xl border border-[#176a9d]/30 bg-[#0f1b39]/50 p-4 text-left shadow-lg shadow-primary/10 backdrop-blur"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176a9d]/20 text-[#9bd4f2]">
                <highlight.icon className="h-5 w-5" />
              </span>
              <div className="space-y-1 text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8ac5e6]">{highlight.label}</p>
                <p className="text-sm text-gray-300">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-6 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#8ac5e6]/80"
        >
          <span>Scroll to explore our platform</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#176a9d]/30">
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="block h-2 w-2 rounded-full bg-[#8ac5e6]"
            />
          </span>
        </motion.div>
      </div>
    </section>
  )
}



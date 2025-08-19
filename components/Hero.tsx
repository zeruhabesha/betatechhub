"use client"

import { useState, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, ArrowRight, Zap, Eye } from "lucide-react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 100, damping: 10 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 10 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setMousePosition({ x: clientX, y: clientY })
      mouseX.set(clientX)
      mouseY.set(clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#0B132B] px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        {/* Primary grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(23,106,157,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(23,106,157,0.1)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] lg:bg-[size:50px_50px] animate-pulse" />
        </div>

        {/* Secondary diagonal pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(23,106,157,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(23,106,157,0.05)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:25px_25px] lg:bg-[size:30px_30px]" />
        </div>

        {/* Animated circuit pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-[#176a9d]/20 rounded-lg animate-pulse" />
          <div
            className="absolute top-10 right-5 sm:top-20 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border border-[#176a9d]/30 rounded-full animate-bounce"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute bottom-10 left-5 sm:bottom-20 sm:left-20 w-20 h-10 sm:w-32 sm:h-16 lg:w-40 lg:h-20 border border-[#176a9d]/25 rounded-lg animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-16 right-5 sm:bottom-32 sm:right-32 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border border-[#176a9d]/20 rounded-full animate-bounce"
            style={{ animationDuration: "4s", animationDelay: "2s" }}
          />
        </div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <img src="/cybersecurity-network-bg.png" alt="" className="w-full h-full object-cover mix-blend-screen" />
      </div>

      {/* Interactive Glow Effect */}
      <motion.div
        className="absolute w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-radial from-[#176a9d]/30 via-[#176a9d]/10 to-transparent blur-3xl pointer-events-none"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {[...Array(typeof window !== "undefined" && window.innerWidth < 768 ? 15 : 30)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            i % 3 === 0
              ? "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#176a9d]"
              : i % 3 === 1
                ? "w-1 h-1 bg-[#2980b9]"
                : "w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#176a9d]/70"
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

      {[Shield, Eye, Zap].map((Icon, i) => (
        <motion.div
          key={`icon-${i}`}
          className="absolute opacity-10"
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
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#176a9d]" />
        </motion.div>
      ))}

      <div className="relative z-10 text-center max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-[#1C2541]/50 backdrop-blur-sm border border-[#176a9d]/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#176a9d]" />
            <span className="text-xs sm:text-sm text-gray-300">
              Your trusted partner in Cybersecurity and IT innovation in Africa
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0"
        >
          BETATECHHUB –{" "}
          <span className="bg-gradient-to-r from-[#176a9d] to-[#2980b9] bg-clip-text text-transparent">
            Securing Africa's Digital Future
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-sm sm:max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
        >
          Based in the heart of Addis Ababa, BETATECHHUB empowers African businesses with cutting-edge, locally-relevant technology solutions. We blend global cybersecurity expertise with deep understanding of Africa's unique digital landscape to keep your business secure, connected, and competitive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-0"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#176a9d] hover:bg-[#176a9d]/80 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#176a9d]/25"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Get Started Today
            <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-[#176a9d] text-[#176a9d] hover:bg-[#176a9d] hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full transition-all duration-300 bg-transparent"
          >
            <Zap className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            Free Security Audit
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg text-[#176a9d] font-semibold"
        >
          Protect. Innovate. Grow.
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400 flex items-center justify-center gap-2"
        >
          <span>Trusted by businesses across Africa</span>
          <span className="text-[#176a9d]">•</span>
          <span>Proudly Ethiopian</span>
          <span className="text-[#176a9d]">•</span>
          <span>Global Standards</span>
        </motion.div>
      </div>
    </section>
  )
}

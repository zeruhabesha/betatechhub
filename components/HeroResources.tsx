"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { BookOpen, FileText, Video, Download, Search, Filter } from "lucide-react"

export function HeroResources() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
        <img src="/data-visualization-bg.png" alt="" className="w-full h-full object-cover mix-blend-screen" />
      </div>

      {/* Floating animated elements - only render on client */}
      {mounted && (
        <>
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${i % 3 === 0 ? "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#176a9d]" : i % 3 === 1 ? "w-1 h-1 bg-[#2980b9]" : "w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#176a9d]/70"}`}
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

          {[BookOpen, FileText, Video, Download].map((Icon, i) => (
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
        </>
      )}

      <div className="relative z-10 text-center max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-[#1C2541]/50 backdrop-blur-sm border border-[#176a9d]/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-[#176a9d]" />
            <span className="text-xs sm:text-sm text-gray-300">
              Knowledge Base
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0"
        >
          Security <span className="bg-gradient-to-r from-[#176a9d] to-[#2980b9] bg-clip-text text-transparent">Resources</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-sm sm:max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
        >
          Access comprehensive guides, whitepapers, tutorials, and tools to enhance your cybersecurity knowledge and protect your business effectively.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-0"
        >
          <div className="flex items-center gap-2 text-gray-300">
            <FileText className="w-4 h-4" />
            <span className="text-sm">Whitepapers</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Video className="w-4 h-4" />
            <span className="text-sm">Video Tutorials</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Download className="w-4 h-4" />
            <span className="text-sm">Free Tools</span>
          </div>
        </motion.div>

        {/* Search preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg text-[#176a9d] font-semibold"
        >
          Learn. Protect. Grow.
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400 flex items-center justify-center gap-2"
        >
          <span>50+ Guides Available</span>
          <span className="text-[#176a9d]">•</span>
          <span>25+ Video Tutorials</span>
          <span className="text-[#176a9d]">•</span>
          <span>Ethiopian Context</span>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, Zap, Server, Database } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

export function InteractiveBackground() {
  const [mounted, setMounted] = useState(false)
  const icons = [Shield, Lock, Eye, Zap, Server, Database]
  const [iconPositions, setIconPositions] = useState<{ x: number; y: number }[]>([])

  const orbs = useMemo(
    () => [
      { size: 240, top: "5%", left: "10%", delay: 0 },
      { size: 340, top: "60%", left: "70%", delay: 0.6 },
      { size: 280, top: "30%", left: "50%", delay: 1.2 },
    ],
    []
  )

  useEffect(() => {
    setMounted(true)
    // Generate positions only on client side
    setIconPositions(
      icons.map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }))
    )
  }, [icons.length])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.08, 0.2, 0.08] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 12 }}
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top, color-mix(in oklab, var(--primary) 25%, transparent) 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="absolute inset-0 text-primary/40">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                <polygon points="50,1 85,25 85,62 50,86 15,62 15,25" fill="none" stroke="currentColor" strokeWidth="0.5" />
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(23,106,157,0.35),transparent_65%)]"
        />
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                <polygon points="50,1 85,25 85,62 50,86 15,62 15,25" fill="none" stroke="#176a9d" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
      </div>

      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
          }}
          animate={{ scale: [1, 1.05, 0.95, 1] }}
          transition={{ duration: 8 + index, repeat: Number.POSITIVE_INFINITY, delay: orb.delay, ease: "easeInOut" }}
        />
      ))}

      {iconPositions.map((position, index) => {
        const Icon = icons[index % icons.length]
        return (
          <motion.div
            key={index}
          className="absolute text-primary/30"
            className="absolute text-[#176a9d]/25"
            initial={position}
            animate={{
              y: [null, -30, 30, -20],
              x: [null, 20, -20, 10],
              rotate: [0, 360],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 2,
              ease: "linear",
            }}
          >
            <Icon size={24 + (index % 6) * 4} />
          </motion.div>
        )
      })}

      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"
          className="absolute w-px bg-gradient-to-b from-transparent via-[#176a9d]/40 to-transparent"
          style={{
            left: `${20 + i * 20}%`,
            height: "100vh",
          }}
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="absolute inset-x-0 bottom-10 mx-auto h-[1px] w-[60%] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        animate={{ opacity: [0.1, 0.35, 0.1] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </div>
  )
}

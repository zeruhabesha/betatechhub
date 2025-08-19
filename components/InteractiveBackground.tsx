"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, Zap, Server, Database } from "lucide-react"
import { useEffect, useState } from "react"

export function InteractiveBackground() {
  const [mounted, setMounted] = useState(false)
  const icons = [Shield, Lock, Eye, Zap, Server, Database]
  const [iconPositions, setIconPositions] = useState<{x: number, y: number}[]>([])

  useEffect(() => {
    setMounted(true)
    // Generate positions only on client side
    setIconPositions(
      icons.map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
      }))
    )
  }, [icons.length])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
              <polygon points="50,1 85,25 85,62 50,86 15,62 15,25" fill="none" stroke="#176a9d" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {iconPositions.map((position, index) => {
        const Icon = icons[index % icons.length]
        return (
          <motion.div
            key={index}
            className="absolute text-[#176a9d]/20"
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
          className="absolute w-px bg-gradient-to-b from-transparent via-[#176a9d]/30 to-transparent"
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
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Users, Clock, Award } from "lucide-react"

const stats = [
  {
    icon: Shield,
    value: 99.9,
    suffix: "%",
    label: "Threat Detection Rate",
    amharicLabel: "የአደጋ የመለየት መጠን",
    description: "Advanced AI-powered security for Ethiopian networks",
    localContext: "Optimized for Ethiopia's digital infrastructure",
  },
  {
    icon: Users,
    value: 250,
    suffix: "+",
    label: "Ethiopian Clients",
    amharicLabel: "ኢትዮጵያዊ ደንበኞች",
    description: "Serving businesses across Ethiopia",
    localContext: "From startups to enterprise in Addis and beyond",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "Monitoring",
    amharicLabel: "በየቀኑ ቁጥጥር",
    description: "Local support in Addis Ababa timezone",
    localContext: "24/7 security operations center in Addis",
  },
  {
    icon: Award,
    value: 7,
    suffix: "+",
    label: "Local Certifications",
    amharicLabel: "የአካባቢ ምስክር ወረቀቶች",
    description: "Recognized by Ethiopian authorities",
    localContext: "Compliant with Ethiopian Cyber Law",
  },
]

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

        setCount(Math.floor(progress * value))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration])

  return <span ref={ref}>{count}</span>
}

export function InteractiveStats() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#1F7A8C]/30 bg-[#0c162f]/70 p-8 text-foreground shadow-lg shadow-primary/10">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(31,122,140,0.25),transparent_70%)]" />
      </div>

      <div className="relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#1F7A8C]">Impact</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Security that delivers results</h2>
          <p className="mt-2 text-sm text-[#89b9ce]">ውጤታማ የደህንነት መፍትሄዎች</p>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#a5bed4]">
            Advanced cybersecurity solutions tailored for Ethiopian businesses, providing measurable protection and peace of mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative overflow-hidden rounded-2xl border border-[#1F7A8C]/30 bg-[#0f1d38]/80 p-6 text-center backdrop-blur transition duration-300 hover:border-[#1F7A8C]/60"
            >
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                  rotate: hoveredIndex === index ? 4 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1F7A8C]/20 text-[#9bd4f2]"
              >
                <stat.icon className="h-8 w-8" />
              </motion.div>

              <div className="text-4xl font-bold text-white">
                <AnimatedCounter value={stat.value} />
                <span className="text-[#1F7A8C]">{stat.suffix}</span>
              </div>

              <div className="mt-3">
                <h3 className="text-base font-semibold text-white">{stat.label}</h3>
                {stat.amharicLabel && <p className="text-xs text-[#89b9ce]">{stat.amharicLabel}</p>}
              </div>

              <p className="mt-3 text-sm text-[#9fb7d5]">
                {stat.description}
                {stat.localContext && <span className="mt-1 block text-xs text-[#7b91b1]">{stat.localContext}</span>}
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-[#1F7A8C]/15 via-transparent to-transparent"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

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
    <section className="py-20 bg-[#0B132B] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(31,122,140,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2">
            Security That <span className="text-[#1F7A8C]">Delivers Results</span>
          </h2>
          <p className="text-[#1F7A8C] text-lg mb-2">ውጤታማ የደህንነት መፍትሄዎች</p>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Advanced cybersecurity solutions tailored for Ethiopian businesses, providing measurable protection and peace of mind
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-[#1C2541] border border-[#1F7A8C]/20 rounded-xl p-8 text-center transition-all duration-300 hover:border-[#1F7A8C]/50 hover:shadow-lg hover:shadow-[#1F7A8C]/10 hover:transform hover:scale-105">
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotate: hoveredIndex === index ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-[#1F7A8C]/20 rounded-full mb-6"
                >
                  <stat.icon className="w-8 h-8 text-[#1F7A8C]" />
                </motion.div>

                <div className="text-4xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} />
                  <span className="text-[#1F7A8C]">{stat.suffix}</span>
                </div>

                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-white">{stat.label}</h3>
                  {stat.amharicLabel && (
                    <p className="text-sm text-[#1F7A8C] font-medium">{stat.amharicLabel}</p>
                  )}
                </div>

                <p className="text-gray-400 text-sm">
                  {stat.description}
                  {stat.localContext && (
                    <span className="block mt-1 text-xs text-gray-500">{stat.localContext}</span>
                  )}
                </p>

                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-gradient-to-r from-[#1F7A8C]/10 to-transparent rounded-xl pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

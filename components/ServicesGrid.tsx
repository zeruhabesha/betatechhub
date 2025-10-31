"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Search, Database, Cloud, AlertTriangle, ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Penetration Testing",
    amharicTitle: "የደህንነት ምርመራ",
    description: "Comprehensive security assessments tailored for Ethiopian businesses to identify vulnerabilities before attackers do.",
    features: [
      "Local Network Security Testing", 
      "Ethio-telecom Infrastructure Testing", 
      "Social Engineering Tests for Local Context", 
      "Detailed Reporting in Amharic & English"
    ],
    color: "from-[#176a9d] to-[#29809d]",
  },
  {
    icon: AlertTriangle,
    title: "Threat Detection",
    amharicTitle: "አደጋ መለየት",
    description: "Real-time monitoring with AI-powered threat detection adapted for Ethiopia's digital landscape.",
    features: [
      "24/7 Monitoring by Local Experts", 
      "AI-Powered Analysis for Local Threats", 
      "Multi-language Alert System", 
      "Threat Intelligence for African Markets"
    ],
    color: "from-[#1a5f8a] to-[#176a9d]",
  },
  {
    icon: Database,
    title: "Data Protection",
    amharicTitle: "የውሂብ ጥበቃ",
    description: "Secure your sensitive data with solutions that meet Ethiopia's data protection requirements.",
    features: [
      "GDPR & Local Compliance", 
      "Secure Offline Backups for Unstable Connections", 
      "Local Data Center Options", 
      "Amharic Language Support"
    ],
    color: "from-[#1e5f8a] to-[#176a9d]",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    amharicTitle: "ደመና ደህንነት",
    description: "Cloud security solutions optimized for Ethiopia's internet infrastructure and regulations.",
    features: [
      "Local Cloud Integration", 
      "Latency-Optimized for Africa", 
      "Local Support Teams", 
      "Cost-Effective Solutions for Local Market"
    ],
    color: "from-[#2980b9] to-[#1a6a9d]",
  },
  {
    icon: Shield,
    title: "Incident Response",
    amharicTitle: "አደጋ አደረጃጀት",
    description: "Rapid response services with understanding of Ethiopia's business and regulatory environment.",
    features: [
      "Local Emergency Response Teams", 
      "Coordination with Ethiopian CERT", 
      "Local Legal Compliance", 
      "24/7 Amharic Support"
    ],
    color: "from-[#176a9d] to-[#1a5f8a]",
  },
]

export function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-background/90 dark:bg-[#0B132B] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/80 dark:from-[#0B132B] dark:via-[#0B132B] dark:to-[#1C2541]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-[#2980b9] bg-clip-text text-transparent">
              Security Services
            </span>
            <span className="block text-lg font-normal mt-2 text-primary dark:text-[#2980b9]">የደህንነት አገልግሎቶቻችን</span>
          </h2>
          <p className="text-muted-foreground dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions tailored for Ethiopian businesses, protecting against both global and local threats
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="bg-card/80 dark:bg-card/80 border border-border/60 dark:border-border/40 rounded-xl p-8 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:transform hover:scale-[1.01]">
                {/* Animated Background Gradient */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? (document.documentElement.classList.contains('dark') ? 0.15 : 0.08) : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl`}
                />

                <div className="relative z-10">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 10 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
                  >
                    <service.icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground dark:text-white inline-block">{service.title}</h3>
                    {service.amharicTitle && (
                      <span className="ml-3 text-sm text-primary dark:text-[#2980b9] font-medium">{service.amharicTitle}</span>
                    )}
                  </div>

                  <p className="text-muted-foreground dark:text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  {/* Expandable Features */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedIndex === index ? "auto" : 0,
                      opacity: expandedIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{
                            x: expandedIndex === index ? 0 : -20,
                            opacity: expandedIndex === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-4 h-4 text-[#176a9d] flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group bg-transparent"
                  >
                    {expandedIndex === index ? "Hide Details" : "Learn More"}
                    <motion.div animate={{ x: hoveredIndex === index ? 5 : 0 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.div>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

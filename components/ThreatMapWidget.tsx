"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { AlertTriangle, Shield, Activity, Globe } from "lucide-react"

interface ThreatData {
  id: string
  type: "malware" | "phishing" | "ddos" | "breach"
  location: string
  severity: "low" | "medium" | "high" | "critical"
  timestamp: Date
}

const threatTypes = {
  malware: { icon: AlertTriangle, color: "#FF6B6B", label: "Malware" },
  phishing: { icon: Shield, color: "#4ECDC4", label: "Phishing" },
  ddos: { icon: Activity, color: "#45B7D1", label: "DDoS" },
  breach: { icon: Globe, color: "#96CEB4", label: "Data Breach" },
}

export function ThreatMapWidget() {
  const [threats, setThreats] = useState<ThreatData[]>([])
  const [stats, setStats] = useState({
    blocked: 1247,
    detected: 89,
    prevented: 23,
  })

  // Simulate real-time threat data
  useEffect(() => {
    const generateThreat = (): ThreatData => ({
      id: Math.random().toString(36).substr(2, 9),
      type: ["malware", "phishing", "ddos", "breach"][Math.floor(Math.random() * 4)] as ThreatData["type"],
      location: ["New York", "London", "Tokyo", "Sydney", "Berlin", "São Paulo"][Math.floor(Math.random() * 6)],
      severity: ["low", "medium", "high", "critical"][Math.floor(Math.random() * 4)] as ThreatData["severity"],
      timestamp: new Date(),
    })

    // Initial threats
    setThreats(Array.from({ length: 5 }, generateThreat))

    // Add new threats periodically
    const interval = setInterval(() => {
      setThreats((prev) => {
        const newThreat = generateThreat()
        const updated = [newThreat, ...prev.slice(0, 9)]
        return updated
      })

      // Update stats
      setStats((prev) => ({
        blocked: prev.blocked + Math.floor(Math.random() * 3),
        detected: prev.detected + Math.floor(Math.random() * 2),
        prevented: prev.prevented + (Math.random() > 0.7 ? 1 : 0),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "#FF4757"
      case "high":
        return "#FF6B6B"
      case "medium":
        return "#FFA726"
      case "low":
        return "#66BB6A"
      default:
        return "#176a9d"
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* <h2 className="text-3xl font-bold text-foreground mb-2">
            Live <span className="text-primary">Threat Intelligence</span>
          </h2> */}
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Real-time monitoring of global cybersecurity threats and our response
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats Cards */}
          <div className="space-y-6">
            {[
              { label: "Threats Blocked", value: stats.blocked, color: "#176a9d", icon: Shield },
              { label: "Attacks Detected", value: stats.detected, color: "#FF6B6B", icon: AlertTriangle },
              { label: "Breaches Prevented", value: stats.prevented, color: "#66BB6A", icon: Activity },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
                    <motion.p
                      key={stat.value}
                      initial={{ scale: 1.2, color: stat.color }}
                      animate={{ scale: 1, color: "#FFFFFF" }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold text-foreground"
                    >
                      {stat.value.toLocaleString()}
                    </motion.p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Threat Feed */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-6 h-96 overflow-hidden shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-foreground">Recent Threats</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#66BB6A] rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">Live</span>
                </div>
              </div>

              <div className="space-y-3 overflow-y-auto h-80">
                {threats.map((threat, index) => {
                  const ThreatIcon = threatTypes[threat.type].icon
                  return (
                    <motion.div
                      key={threat.id}
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg border border-border hover:border-primary/50 transition-colors"
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${getSeverityColor(threat.severity)}20` }}
                      >
                        <ThreatIcon className="w-5 h-5" style={{ color: getSeverityColor(threat.severity) }} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-foreground font-medium">{threatTypes[threat.type].label}</span>
                          <span
                            className="px-2 py-1 text-xs rounded-full"
                            style={{
                              backgroundColor: `${getSeverityColor(threat.severity)}20`,
                              color: getSeverityColor(threat.severity),
                            }}
                          >
                            {threat.severity.toUpperCase()}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{threat.location}</span>
                          <span>{threat.timestamp.toLocaleTimeString()}</span>
                        </div>
                      </div>

                      <div className="text-success text-sm font-medium">BLOCKED</div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

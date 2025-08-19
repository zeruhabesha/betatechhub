"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, Shield } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubscribed(true)
    setIsLoading(false)
    setEmail("")
  }

  return (
    <section className="py-20 bg-gradient-to-r from-[#1C2541] via-[#0B132B] to-[#1C2541] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(31,122,140,0.3),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(31,122,140,0.2),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-[#1F7A8C]/20 backdrop-blur-sm border border-[#1F7A8C]/30 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-[#1F7A8C]" />
              <span className="text-sm text-gray-300">Security Intelligence</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Ahead of{" "}
              <span className="bg-gradient-to-r from-[#1F7A8C] to-[#3A9BC1] bg-clip-text text-transparent">
                Cyber Threats
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get weekly security insights, threat intelligence, and expert analysis delivered to your inbox
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-[#1C2541] border-[#1F7A8C]/30 text-white placeholder-gray-400 focus:border-[#1F7A8C] h-12"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#1F7A8C] hover:bg-[#1F7A8C]/80 text-white px-8 h-12 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </div>

                <p className="text-sm text-gray-500">Join 10,000+ security professionals. Unsubscribe anytime.</p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-[#1C2541] border border-[#1F7A8C]/30 rounded-xl p-8"
              >
                <div className="w-16 h-16 bg-[#66BB6A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#66BB6A]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Team!</h3>
                <p className="text-gray-400">
                  You're now subscribed to our security intelligence newsletter. Check your inbox for a confirmation
                  email.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {[
              {
                title: "Weekly Threat Reports",
                description: "Comprehensive analysis of the latest cybersecurity threats",
              },
              {
                title: "Expert Insights",
                description: "Industry best practices and security recommendations",
              },
              {
                title: "Early Warnings",
                description: "Be the first to know about emerging security vulnerabilities",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

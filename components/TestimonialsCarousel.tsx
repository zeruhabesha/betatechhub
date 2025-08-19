"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Alemnesh Kebede",
    role: "CTO",
    company: "Dashen Bank",
    content:
      "BETA TECH HUB's understanding of Ethiopia's financial regulations and cyber threats has been invaluable. Their 24/7 security monitoring in Addis Ababa timezone gives us confidence in our digital infrastructure.",
    rating: 5,
    avatar: "/professional-woman-ethiopian.png",
    location: "Addis Ababa, Ethiopia"
  },
  {
    name: "Yohannes Assefa",
    role: "IT Director",
    company: "Ethio Telecom",
    content:
      "Their penetration testing team uncovered critical vulnerabilities in our systems that others missed. Their reports in both Amharic and English made it easy for our team to implement the necessary fixes.",
    rating: 5,
    avatar: "/professional-man-ethiopian.png",
    location: "Addis Ababa, Ethiopia"
  },
  {
    name: "Dr. Selamawit Mulugeta",
    role: "Hospital Director",
    company: "Black Lion Hospital",
    content:
      "When we experienced a potential data breach, BETA TECH HUB's rapid response team was on-site within the hour. Their understanding of Ethiopia's healthcare data protection laws was crucial in our response.",
    rating: 5,
    avatar: "/professional-woman-healthcare-ethiopian.png",
    location: "Addis Ababa, Ethiopia"
  },
  {
    name: "Tewodros Bekele",
    role: "CEO",
    company: "Safaricom Ethiopia",
    content:
      "As we expand our digital services across Ethiopia, BETA TECH HUB has been instrumental in ensuring our infrastructure meets both local compliance requirements and international security standards.",
    rating: 5,
    avatar: "/professional-ceo-ethiopian.png",
    location: "Addis Ababa, Ethiopia"
  },
  {
    name: "Hirut Bekele",
    role: "CIO",
    company: "Commercial Bank of Ethiopia",
    content:
      "Their team's ability to explain complex security concepts in Amharic to our board members has been a game-changer for our security awareness program. We've seen a significant improvement in our security posture.",
    rating: 5,
    avatar: "/professional-woman-banking-ethiopian.png",
    location: "Addis Ababa, Ethiopia"
  }
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-[#1C2541] to-[#0B132B] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2">
            What Our <span className="text-[#1F7A8C]">Clients Say</span>
          </h2>
          <p className="text-[#1F7A8C] text-lg mb-2">ደንበኞቻችን ስለ እኛ ምን ይላሉ?</p>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by Ethiopia's leading enterprises and institutions for comprehensive, locally-relevant cybersecurity solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-[#1C2541] border border-[#1F7A8C]/20 rounded-2xl p-8 md:p-12 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-16 h-16 text-[#1F7A8C]" />
                </div>

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-[#1F7A8C] text-[#1F7A8C]" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-medium">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full border-2 border-[#1F7A8C]/30"
                        onError={(e) => {
                          // Fallback to a generic avatar if the image fails to load
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = "/generic-avatar.png";
                        }}
                      />
                      <div className="absolute -bottom-1 -right-1 bg-[#1F7A8C] text-white text-xs px-2 py-0.5 rounded-full">
                        🇪🇹
                      </div>
                    </motion.div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                        <span className="text-xs text-gray-400">{testimonials[currentIndex].location}</span>
                      </div>
                      <p className="text-[#1F7A8C] font-medium">{testimonials[currentIndex].role}</p>
                      <p className="text-gray-400 text-sm">{testimonials[currentIndex].company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-[#1F7A8C] text-[#1F7A8C] hover:bg-[#1F7A8C] hover:text-white bg-transparent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-[#1F7A8C] scale-125" : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-[#1F7A8C] text-[#1F7A8C] hover:bg-[#1F7A8C] hover:text-white bg-transparent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

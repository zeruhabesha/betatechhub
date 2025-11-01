"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Tariku M",
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
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* <h2 className="text-3xl font-bold text-foreground mb-2">
            What Our <span className="text-primary">Clients Say</span>
          </h2> */}
          {/* <p className="text-primary text-lg mb-2">ደንበኞቻችን ስለ እኛ ምን ይላሉ?</p> */}
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
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
                className="bg-card border border-border/60 rounded-2xl p-8 md:p-12 relative"
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
                  <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div className="text-yellow-500 flex mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="flex-1 flex flex-col items-center text-center p-8 bg-card rounded-2xl shadow-2xl border border-border hover:border-primary transition-all duration-300 h-full"
                        onError={(e) => {
                          // Fallback to a generic avatar if the image fails to load
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = "/generic-avatar.png";
                        }}
                      />
                      <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                        🇪🇹
                      </div>
                    </motion.div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-semibold text-foreground">{testimonials[currentIndex].name}</h4>
                        <span className="text-xs text-muted-foreground">{testimonials[currentIndex].location}</span>
                      </div>
                      <p className="text-primary text-sm">{testimonials[currentIndex].role}</p>
                      <p className="text-muted-foreground text-sm">{testimonials[currentIndex].company}</p>
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
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
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
                      index === currentIndex ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
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

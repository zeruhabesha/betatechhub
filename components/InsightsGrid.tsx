"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react"

const insights = [
  {
    category: "Threat Intelligence",
    title: "AI-Powered Malware Detection: The Future of Cybersecurity",
    excerpt: "Discover how machine learning algorithms are revolutionizing threat detection and response times.",
    readTime: "5 min read",
    date: "2024-01-15",
    image: "/ai-cybersecurity-dashboard.png",
    trending: true,
  },
  {
    category: "Best Practices",
    title: "Zero Trust Architecture: Implementation Guide",
    excerpt: "A comprehensive guide to implementing zero trust security in your organization.",
    readTime: "8 min read",
    date: "2024-01-12",
    image: "/placeholder-i39rc.png",
    trending: false,
  },
  {
    category: "Industry News",
    title: "Global Cybersecurity Trends 2024",
    excerpt: "Key trends and predictions shaping the cybersecurity landscape this year.",
    readTime: "6 min read",
    date: "2024-01-10",
    image: "/placeholder-5adn1.png",
    trending: true,
  },
]

export function InsightsGrid() {
  return (
    <section className="py-20 bg-[#0B132B] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Latest <span className="text-[#1F7A8C]">Security Insights</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay informed with the latest cybersecurity trends, threats, and best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-[#1C2541] border border-[#1F7A8C]/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#1F7A8C]/50 hover:shadow-lg hover:shadow-[#1F7A8C]/10 hover:transform hover:scale-105">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={insight.image || "/placeholder.svg"}
                    alt={insight.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/60 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#1F7A8C]/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {insight.category}
                    </span>
                  </div>

                  {/* Trending Badge */}
                  {insight.trending && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1F7A8C] transition-colors">
                    {insight.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed">{insight.excerpt}</p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(insight.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{insight.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Button variant="ghost" className="w-full text-[#1F7A8C] hover:bg-[#1F7A8C]/10 group/btn">
                    Read More
                    <motion.div animate={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.div>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-[#1F7A8C] hover:bg-[#1F7A8C]/80 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View All Insights
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

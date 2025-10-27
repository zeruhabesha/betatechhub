"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Ethiopia's Cybersecurity Landscape in 2025",
    excerpt: "A comprehensive analysis of emerging cyber threats facing Ethiopian businesses and government institutions, with practical mitigation strategies.",
    author: "Dr. Zeru Habesha",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Threat Analysis",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Ethiopia", "Cyber Threats", "Government"],
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Threat Detection: Protecting African Businesses",
    excerpt: "How machine learning and artificial intelligence are revolutionizing cybersecurity defenses for organizations across Africa.",
    author: "Sarah Johnson",
    date: "2025-01-12",
    readTime: "6 min read",
    category: "AI & ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["AI", "Machine Learning", "Africa"],
    featured: false
  },
  {
    id: 3,
    title: "Ransomware Attacks on Ethiopian Financial Institutions",
    excerpt: "Recent ransomware incidents targeting Ethiopian banks and financial services, including prevention and response strategies.",
    author: "Michael Tadesse",
    date: "2025-01-10",
    readTime: "10 min read",
    category: "Incident Response",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Ransomware", "Financial", "Ethiopia"],
    featured: false
  },
  {
    id: 4,
    title: "Cloud Security Best Practices for African Enterprises",
    excerpt: "Essential security measures for organizations migrating to cloud infrastructure in Africa, with local compliance considerations.",
    author: "Dr. Amina Hassan",
    date: "2025-01-08",
    readTime: "7 min read",
    category: "Cloud Security",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Cloud", "Africa", "Compliance"],
    featured: false
  },
  {
    id: 5,
    title: "The Rise of Mobile Banking Security Challenges in Ethiopia",
    excerpt: "Examining security vulnerabilities in Ethiopia's rapidly growing mobile banking sector and recommended security frameworks.",
    author: "Kaleb Wolde",
    date: "2025-01-05",
    readTime: "9 min read",
    category: "Mobile Security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Mobile Banking", "Ethiopia", "Fintech"],
    featured: false
  },
  {
    id: 6,
    title: "Zero Trust Architecture Implementation Guide",
    excerpt: "A practical guide to implementing zero trust security models in Ethiopian organizations, with step-by-step deployment strategies.",
    author: "Dr. Zeru Habesha",
    date: "2025-01-03",
    readTime: "12 min read",
    category: "Network Security",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Zero Trust", "Network", "Implementation"],
    featured: false
  }
]

export function BlogGrid() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="space-y-16">
      {/* Featured Post */}
      {featuredPost && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="mb-8">
            <Badge className="bg-[#176a9d] text-white mb-4">Featured Article</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Latest Insights
            </h2>
          </div>

          <Card className="bg-card border-border overflow-hidden hover:border-[#176a9d]/50 transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#176a9d] text-white">
                      {featuredPost.category}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-foreground group-hover:text-[#176a9d] transition-colors">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {featuredPost.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/blog/${featuredPost.id}`}>
                    <Button className="bg-[#176a9d] hover:bg-[#176a9d]/90">
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Blog Posts Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Recent Articles
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay updated with our latest cybersecurity insights and analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border overflow-hidden hover:border-[#176a9d]/50 transition-all duration-300 h-full group">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#176a9d] text-white text-xs">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-foreground group-hover:text-[#176a9d] transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>

                  <Link href={`/blog/${post.id}`}>
                    <Button variant="outline" size="sm" className="w-full group-hover:border-[#176a9d] group-hover:text-[#176a9d]">
                      Read More
                      <ArrowRight className="ml-2 w-3 h-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Load More Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center pt-12"
      >
        <Button variant="outline" size="lg" className="border-[#176a9d] text-[#176a9d] hover:bg-[#176a9d] hover:text-white">
          Load More Articles
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>
    </div>
  )
}

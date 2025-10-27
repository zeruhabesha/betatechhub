"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Blog post data with categories
const blogPosts = [
  {
    id: 1,
    title: "Understanding Ethiopia's Cybersecurity Landscape in 2025",
    excerpt: "A comprehensive analysis of emerging cyber threats facing Ethiopian businesses and government institutions, with practical mitigation strategies.",
    author: "Dr. Zeru Habesha",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Threat Analysis",
    categorySlug: "threat-analysis",
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
    categorySlug: "ai-ml",
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
    categorySlug: "incident-response",
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
    categorySlug: "cloud-security",
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
    categorySlug: "mobile-security",
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
    categorySlug: "network-security",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Zero Trust", "Network", "Implementation"],
    featured: false
  }
]

interface BlogCategoryPageProps {
  category: string
  categoryName: string
}

export function BlogCategoryPage({ category, categoryName }: BlogCategoryPageProps) {
  const categoryPosts = blogPosts.filter(post => post.categorySlug === category)

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <Badge className="bg-[#176a9d] text-white mb-4 text-lg px-4 py-2">
          {categoryName}
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          {categoryName} Articles
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our comprehensive collection of articles about {categoryName.toLowerCase()}.
          Expert insights and practical guidance from Ethiopia's leading cybersecurity professionals.
        </p>
      </motion.div>

      {/* Articles Grid */}
      {categoryPosts.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryPosts.map((post, index) => (
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
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center py-12"
        >
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            No articles found
          </h3>
          <p className="text-muted-foreground mb-6">
            We haven't published any articles in this category yet. Check back soon!
          </p>
          <Link href="/blog">
            <Button className="bg-[#176a9d] hover:bg-[#176a9d]/90">
              Browse All Articles
            </Button>
          </Link>
        </motion.div>
      )}

      {/* Category Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-card border border-border rounded-lg p-6"
      >
        <h3 className="text-lg font-semibold text-foreground mb-2">
          About {categoryName}
        </h3>
        <p className="text-muted-foreground mb-4">
          {getCategoryDescription(category)}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{categoryPosts.length} articles</span>
          <span>•</span>
          <span>Updated regularly</span>
        </div>
      </motion.div>
    </div>
  )
}

function getCategoryDescription(category: string): string {
  const descriptions: { [key: string]: string } = {
    "cybersecurity": "Comprehensive coverage of cybersecurity topics, best practices, and emerging threats affecting organizations worldwide.",
    "ai-ml": "Exploring the intersection of artificial intelligence and machine learning with cybersecurity, including threat detection and automated response systems.",
    "cloud-security": "Best practices and strategies for securing cloud infrastructure, with special focus on compliance and data protection in African markets.",
    "network-security": "Network protection strategies, zero trust architecture, and advanced threat detection methods for modern enterprise environments.",
    "threat-analysis": "In-depth analysis of cyber threats, attack vectors, and mitigation strategies tailored for African businesses and government institutions.",
    "incident-response": "Incident response planning, digital forensics, and recovery strategies to help organizations respond effectively to security breaches.",
    "mobile-security": "Mobile device security, application protection, and secure mobile banking solutions for the rapidly growing African mobile market."
  }

  return descriptions[category] || "Expert insights and practical guidance on cybersecurity topics."
}

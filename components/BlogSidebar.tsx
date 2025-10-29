"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Calendar, User, TrendingUp, BookOpen, Shield, Cloud, Network } from "lucide-react"
import Link from "next/link"

const categories = [
  { name: "Cybersecurity", count: 24, icon: Shield },
  { name: "AI & ML", count: 18, icon: TrendingUp },
  { name: "Cloud Security", count: 15, icon: Cloud },
  { name: "Network Security", count: 12, icon: Network },
  { name: "Threat Analysis", count: 20, icon: Shield },
  { name: "Incident Response", count: 8, icon: BookOpen },
]

const recentPosts = [
  {
    id: 2,
    title: "AI-Powered Threat Detection: Protecting African Businesses",
    date: "2025-01-12",
    category: "AI & ML"
  },
  {
    id: 3,
    title: "Ransomware Attacks on Ethiopian Financial Institutions",
    date: "2025-01-10",
    category: "Incident Response"
  },
  {
    id: 4,
    title: "Cloud Security Best Practices for African Enterprises",
    date: "2025-01-08",
    category: "Cloud Security"
  },
  {
    id: 5,
    title: "The Rise of Mobile Banking Security Challenges in Ethiopia",
    date: "2025-01-05",
    category: "Mobile Security"
  }
]

export function BlogSidebar() {
  return (
    <div className="space-y-8">
      {/* Search */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Search className="w-5 h-5" />
              Search Articles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search blog posts..."
                className="pl-10 bg-background border-border"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg">Categories</CardTitle>
            <CardDescription>
              Browse articles by topic
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-[#176a9d]/10 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <category.icon className="w-4 h-4 text-[#176a9d] group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground group-hover:text-[#176a9d]">
                    {category.name}
                  </span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </Link>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Recent Posts */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg">Recent Posts</CardTitle>
            <CardDescription>
              Latest articles and insights
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="block group"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge className="bg-[#176a9d] text-white text-xs">
                      {post.category}
                    </Badge>
                    <span>•</span>
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <h4 className="text-sm font-medium text-foreground group-hover:text-[#176a9d] transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h4>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Card className="bg-gradient-to-br from-[#176a9d]/10 to-[#2980b9]/10 border-[#176a9d]/30">
          <CardHeader>
            <CardTitle className="text-lg text-[#176a9d]">
              Stay Updated
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Get the latest cybersecurity insights delivered to your inbox
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input
                placeholder="Enter your email"
                className="bg-background/50 border-[#176a9d]/30"
              />
              <Button className="w-full bg-[#176a9d] hover:bg-[#176a9d]/90">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Weekly newsletter • No spam • Unsubscribe anytime
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Popular Tags */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg">Popular Tags</CardTitle>
            <CardDescription>
              Trending topics in cybersecurity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                "Ethiopia", "Cybersecurity", "AI", "Africa", "Threat Intelligence",
                "Cloud Security", "Ransomware", "Mobile Banking", "Zero Trust",
                "Incident Response", "GDPR", "Data Protection"
              ].map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="hover:bg-[#176a9d] hover:text-white cursor-pointer transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Featured Author */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg">Featured Expert</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#176a9d] to-[#2980b9] flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Dr. Zeru Habesha</h4>
                <p className="text-sm text-[#176a9d]">Chief Cybersecurity Officer</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Leading cybersecurity expert with 15+ years of experience protecting critical infrastructure across Africa.
            </p>
            <Link href="/blog/author/zeru-habesha">
              <Button variant="outline" size="sm" className="w-full">
                View All Articles
              </Button>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

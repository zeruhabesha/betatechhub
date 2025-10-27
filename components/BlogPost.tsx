"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, Share2, Bookmark, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Author {
  name: string
  title: string
  bio: string
  image: string
}

interface BlogPostData {
  id: number
  title: string
  excerpt: string
  content: string
  author: Author
  date: string
  readTime: string
  category: string
  image: string
  tags: string[]
  featured: boolean
}

interface BlogPostProps {
  post: BlogPostData
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Back Navigation */}
      <div className="mb-8">
        <Link href="/blog">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <Badge className="bg-[#176a9d] text-white">
            {post.category}
          </Badge>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          {post.title}
        </h1>

        <p className="text-xl text-muted-foreground leading-relaxed">
          {post.excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-6">
          <div className="flex items-center gap-2">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span>By {post.author.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="hover:bg-[#176a9d] hover:text-white cursor-pointer">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 pt-4">
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 w-4 h-4" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Bookmark className="mr-2 w-4 h-4" />
            Save
          </Button>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-96 sm:h-[500px] rounded-lg overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <div
          className="text-foreground leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{
            __html: post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return `<h1 class="text-3xl font-bold text-foreground mb-4 mt-8 first:mt-0">${paragraph.substring(2)}</h1>`
              } else if (paragraph.startsWith('## ')) {
                return `<h2 class="text-2xl font-semibold text-foreground mb-3 mt-6">${paragraph.substring(3)}</h2>`
              } else if (paragraph.startsWith('### ')) {
                return `<h3 class="text-xl font-semibold text-foreground mb-2 mt-4">${paragraph.substring(4)}</h3>`
              } else if (paragraph.startsWith('- ')) {
                return `<li class="ml-4 mb-2">${paragraph.substring(2)}</li>`
              } else if (paragraph.trim() === '') {
                return '<br />'
              } else {
                return `<p class="mb-4 leading-relaxed">${paragraph}</p>`
              }
            }).join('')
          }}
        />
      </div>

      {/* Author Bio */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {post.author.name}
              </h3>
              <p className="text-[#176a9d] text-sm font-medium mb-2">
                {post.author.title}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {post.author.bio}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Articles */}
      <div className="border-t border-border pt-8">
        <h3 className="text-2xl font-bold text-foreground mb-6">
          Related Articles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="bg-card border-border hover:border-[#176a9d]/50 transition-colors cursor-pointer">
            <CardContent className="p-4">
              <Badge className="bg-[#176a9d] text-white mb-2 text-xs">
                AI & ML
              </Badge>
              <h4 className="font-semibold text-foreground mb-2 line-clamp-2">
                AI-Powered Threat Detection: Protecting African Businesses
              </h4>
              <p className="text-sm text-muted-foreground line-clamp-2">
                How machine learning and artificial intelligence are revolutionizing cybersecurity defenses for organizations across Africa.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-[#176a9d]/50 transition-colors cursor-pointer">
            <CardContent className="p-4">
              <Badge className="bg-[#176a9d] text-white mb-2 text-xs">
                Cloud Security
              </Badge>
              <h4 className="font-semibold text-foreground mb-2 line-clamp-2">
                Cloud Security Best Practices for African Enterprises
              </h4>
              <p className="text-sm text-muted-foreground line-clamp-2">
                Essential security measures for organizations migrating to cloud infrastructure in Africa, with local compliance considerations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.article>
  )
}

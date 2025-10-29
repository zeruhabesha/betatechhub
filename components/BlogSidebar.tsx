'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Mail, Search, Shield, TrendingUp, Cloud, Network, BookOpen } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const categories = [
  { name: 'Cybersecurity', count: 24, icon: Shield },
  { name: 'AI & ML', count: 18, icon: TrendingUp },
  { name: 'Cloud Security', count: 15, icon: Cloud },
  { name: 'Network Security', count: 12, icon: Network },
  { name: 'Threat Analysis', count: 20, icon: Shield },
  { name: 'Incident Response', count: 8, icon: BookOpen },
];

const recentPosts = [
  { id: 2, title: 'AI-Powered Threat Detection: Protecting African Businesses', date: '2025-01-12', category: 'AI & ML' },
  { id: 3, title: 'Ransomware Attacks on Ethiopian Financial Institutions', date: '2025-01-10', category: 'Incident Response' },
  { id: 4, title: 'Cloud Security Best Practices for African Enterprises', date: '2025-01-08', category: 'Cloud Security' },
  { id: 5, title: 'The Rise of Mobile Banking Security Challenges in Ethiopia', date: '2025-01-05', category: 'Mobile Security' },
];

export function BlogSidebar() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <Card className="border-border bg-card/90 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Search className="h-5 w-5 text-primary" />
              Search Articles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search blog posts..." className="border-border bg-background pl-10" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
        <Card className="border-border bg-card/90 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-lg">Categories</CardTitle>
            <CardDescription>Browse articles by topic</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group flex items-center justify-between rounded-xl border border-transparent px-3 py-2 transition-all duration-200 hover:border-primary/40 hover:bg-primary/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary">{category.name}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </Link>
              );
            })}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <Card className="border-border bg-card/90 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-lg">Recent Posts</CardTitle>
            <CardDescription>Latest articles and insights</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="block">
                <div className="space-y-2 rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-primary/40 hover:bg-primary/10">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge className="bg-primary text-primary-foreground text-xs">{post.category}</Badge>
                    <span>•</span>
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <h4 className="line-clamp-2 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h4>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
        <Card className="border border-border/70 bg-card/90 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Stay Updated</CardTitle>
            <CardDescription className="text-muted-foreground">
              Subscribe for curated research, alerts, and best practices tailored for African organisations.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Email address" className="border-border bg-background pl-10" type="email" />
            </div>
            <Button className="w-full rounded-full bg-gradient-to-r from-primary via-primary/80 to-accent text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20">
              Join the Newsletter
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

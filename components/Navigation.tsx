"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutGroup, motion } from "framer-motion"
import { useTheme } from "next-themes"
import {
  Menu,
  X,
  Shield,
  Home,
  Settings,
  Users,
  Phone,
  BookOpen,
  Moon,
  Sun,
  Sparkles,
} from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // Handle image loading errors
  const handleImageError = (e: any, isLightMode: boolean) => {
    const target = e.target as HTMLImageElement;
    const parent = target.parentElement;
    
    // If both images fail to load, show fallback text
    if (parent) {
      const otherImage = parent.querySelector(isLightMode ? 'img.dark\:block' : 'img:not(.dark\\:block)');
      if (!otherImage || (otherImage as HTMLImageElement).complete && !(otherImage as HTMLImageElement).naturalHeight) {
        target.style.display = 'none';
        const fallback = document.createElement('div');
        fallback.className = 'flex items-center space-x-2';
        fallback.innerHTML = `
          <span class="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary/10 p-2 text-primary">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </span>
          <span class="text-lg font-semibold tracking-tight text-foreground md:text-xl">BETA TECH HUB</span>
        `;
        parent.appendChild(fallback);
      } else {
        target.style.display = 'none';
      }
    }
  };

  // Only show theme-dependent UI after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/services", label: "Services", icon: Shield },
    { href: "/about", label: "About", icon: Users },
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/resources", label: "Resources", icon: BookOpen },
    { href: "/dashboard", label: "Dashboard", icon: Settings },
    { href: "/contact", label: "Contact", icon: Phone },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-border/70 bg-background/80 px-4 py-3 backdrop-blur-xl shadow-lg shadow-primary/5">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-40">
              <div className="relative h-full w-full">
                {/* Light Mode Logo */}
                <Image
                  src="/logo.png"
                  alt="BETA TECH HUB Logo"
                  fill
                  className="h-full w-full object-contain dark:hidden"
                  priority
                  onError={(e) => handleImageError(e, true)}
                />
                {/* Dark Mode Logo */}
                <Image
                  src="/logo-dark.png"
                  alt="BETA TECH HUB Logo"
                  fill
                  className="hidden h-full w-full object-contain dark:block"
                  priority
                  onError={(e) => handleImageError(e, false)}
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-3 md:flex lg:space-x-4">
            <LayoutGroup>
              <div className="flex items-center gap-1 rounded-full border border-border/80 bg-card/70 p-1 backdrop-blur">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link key={item.href} href={item.href} className="relative block">
                      <motion.span
                        whileHover={{ scale: 1.02 }}
                        className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                          isActive
                            ? "text-primary-foreground"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary to-primary/70 shadow-lg shadow-primary/20"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </motion.span>
                    </Link>
                  )
                })}
              </div>
            </LayoutGroup>
            <div className="flex items-center gap-2">
              {/* <Button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary via-primary/80 to-accent text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 lg:px-6">
                
                <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Button> */}
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="rounded-full border-border/80 bg-card/60 backdrop-blur"
              >
                <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="mr-2 text-foreground"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full border border-transparent bg-card/40 text-foreground backdrop-blur"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="mt-4 space-y-2 rounded-2xl border border-border/80 bg-background/95 p-4 shadow-xl shadow-primary/10 backdrop-blur-xl">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-primary/20 to-accent/20 text-primary"
                      : "text-muted-foreground hover:bg-card/60 hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-base">{item.label}</span>
                </Link>
              ))}
            
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-background">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, color-mix(in oklab, var(--primary) 18%, transparent) 0%, transparent 60%), radial-gradient(circle at 80% 0%, color-mix(in oklab, var(--accent) 16%, transparent) 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-muted/50 via-transparent to-transparent dark:from-muted/20" />
      </div>

    <footer className="relative overflow-hidden border-t border-border/40 bg-gradient-to-br from-[#040a16] via-[#0b162d] to-[#060910]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(23,106,157,0.35),transparent_65%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col gap-4 rounded-3xl border border-border/60 bg-card/80 p-8 shadow-lg shadow-primary/10 backdrop-blur sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-primary/80">Stay ahead of the threat curve</p>
            <h3 className="mt-3 text-2xl font-semibold text-foreground">Join the BETATECHHUB intelligence briefing</h3>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          className="mb-16 flex flex-col gap-4 rounded-3xl border border-[#176a9d]/30 bg-[#0b162d]/80 p-8 text-white shadow-lg shadow-primary/10 backdrop-blur sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#82c4e6]">Stay ahead of the threat curve</p>
            <h3 className="mt-3 text-2xl font-semibold">Join the BETATECHHUB intelligence briefing</h3>
            <p className="mt-2 max-w-xl text-sm text-[#b6c7dd]">
              Receive curated threat intel, local regulatory updates, and actionable guidance for teams operating across Africa.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full border border-primary/40 bg-background/70 px-5 py-3 text-sm font-semibold text-primary transition duration-300 hover:border-primary hover:bg-primary/10"
            className="group inline-flex items-center gap-3 rounded-full border border-[#176a9d]/40 bg-[#176a9d]/20 px-5 py-3 text-sm font-semibold text-[#9bd4f2] transition duration-300 hover:border-[#176a9d]/60 hover:bg-[#176a9d]/30"
          >
            Speak with an expert
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </span>
              <span className="text-xl font-semibold text-foreground">BETA TECH HUB</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering African businesses with cutting-edge cybersecurity solutions and innovative technology services.
            </p>
            <div className="flex space-x-4 text-muted-foreground">
              <a href="#" className="transition-colors hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors hover:text-primary">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#176a9d]/40 bg-[#176a9d]/20 text-[#9bd4f2]">
                <Shield className="h-6 w-6" />
              </span>
              <span className="text-xl font-semibold text-white">BETA TECH HUB</span>
            </div>
            <p className="text-sm text-[#9fb7d5]">
              Empowering African businesses with cutting-edge cybersecurity solutions and innovative technology services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#8aa8c7] transition-colors hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#8aa8c7] transition-colors hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#8aa8c7] transition-colors hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#8aa8c7] transition-colors hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#8aa8c7] transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-primary">
                <Link href="/services" className="text-[#8aa8c7] transition-colors hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-primary">
                <Link href="/about" className="text-[#8aa8c7] transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/resources" className="transition-colors hover:text-primary">
                <Link href="/resources" className="text-[#8aa8c7] transition-colors hover:text-primary">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-primary">
                <Link href="/contact" className="text-[#8aa8c7] transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services#cybersecurity" className="transition-colors hover:text-primary">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#cybersecurity" className="text-[#8aa8c7] transition-colors hover:text-primary">
                  Cybersecurity Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#ai-ml" className="transition-colors hover:text-primary">
                  AI &amp; Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/services#cloud" className="transition-colors hover:text-primary">
                <Link href="/services#ai-ml" className="text-[#8aa8c7] transition-colors hover:text-primary">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/services#cloud" className="text-[#8aa8c7] transition-colors hover:text-primary">
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link href="/services#it-infrastructure" className="transition-colors hover:text-primary">
                <Link href="/services#it-infrastructure" className="text-[#8aa8c7] transition-colors hover:text-primary">
                  IT Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services#software" className="transition-colors hover:text-primary">
                <Link href="/services#software" className="text-[#8aa8c7] transition-colors hover:text-primary">
                  Software Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                <span>+251 911 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                <span>info@betatechhub.et</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="leading-relaxed">ICT Park, Addis Ababa, Ethiopia</span>
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-[#8aa8c7]">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#176a9d]/30 bg-[#176a9d]/15 text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="text-sm">+251 911 123 456</span>
              </div>
              <div className="flex items-center space-x-3 text-[#8aa8c7]">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#176a9d]/30 bg-[#176a9d]/15 text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="text-sm">info@betatechhub.et</span>
              </div>
              <div className="flex items-start space-x-3 text-[#8aa8c7]">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#176a9d]/30 bg-[#176a9d]/15 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-sm leading-relaxed">ICT Park, Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border/40 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
            <p>© 2024 BETA TECH HUB. All rights reserved. Proudly Ethiopian.</p>
        {/* Bottom Bar */}
        <div className="mt-14 border-t border-border/30 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-[#6f8bad] md:flex-row md:text-left">
            <p>
              © 2024 BETA TECH HUB. All rights reserved. Proudly Ethiopian.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
              <Link href="/privacy" className="transition-colors hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/cookies" className="transition-colors hover:text-primary">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

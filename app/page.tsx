"use client"

import Link from "next/link"
import HeroWrapper from "@/components/HeroWrapper"
import { ServicesGrid } from "@/components/ServicesGrid"
import { InteractiveStats } from "@/components/InteractiveStats"
import { ThreatMapWidget } from "@/components/ThreatMapWidget"
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel"
import { InsightsGrid } from "@/components/InsightsGrid"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { NewsletterSection } from "@/components/NewsletterSection"
import { Footer } from "@/components/Footer"
import ChatbotWrapper from "@/components/ChatbotWrapper"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero (client-only, heavy animations removed from SSR) */}
      <HeroWrapper />

      {/* Quick stats strip - keeps momentum after hero */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveStats />
        </div>
      </section>

      {/* Services - card grid inside container */}
      <section className="py-16 bg-gradient-to-b from-transparent via-background/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Our Services</h2>
              <p className="text-sm text-muted-foreground mt-1">Comprehensive cybersecurity tooling and advisory built for Ethiopian enterprises.</p>
            </div>
            <Link href="/services" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-95">Explore Services</Link>
          </div>

          <ServicesGrid />
        </div>
      </section>

      {/* Why choose us + Threat Map - two-column responsive stack */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <WhyChooseUs />
          </div>

          <div className="w-full">
            <div className="sticky top-24">
              <ThreatMapWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold mb-6">What our clients say</h3>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Insights grid + newsletter grouped to reduce visual noise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6">Insights & Analysis</h3>
            <InsightsGrid />
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-lg bg-card p-6">
                <h4 className="text-lg font-medium">Stay informed</h4>
                <p className="text-sm text-muted-foreground mt-2">Get expert analysis and threat intelligence straight to your inbox.</p>
                <div className="mt-4">
                  <NewsletterSection />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Small CTA band */}
      <section className="py-12 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          <div>
            <h4 className="text-xl font-bold">Need a security assessment?</h4>
            <p className="text-sm opacity-90">Book a free consultation with our experts and get a tailored plan.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background">Book a demo</Link>
            <Link href="/services" className="inline-flex items-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white">Explore services</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating Chatbot (client only) */}
      <ChatbotWrapper />
    </main>
  )
}

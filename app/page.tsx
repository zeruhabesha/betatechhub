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
    <div className="min-h-screen bg-background text-foreground">
      <div>
        {/* Hero (client-only, heavy animations removed from SSR) */}
        <HeroWrapper />

        {/* Stats section */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <InteractiveStats />
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-primary">Our Services</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Strategic Cybersecurity &amp; Innovation</h2>
              <p className="mt-2 max-w-2xl mx-auto text-sm text-muted-foreground">
                Comprehensive cybersecurity tooling and advisory built for Ethiopian enterprises. Explore end-to-end protection, rapid response, and digital resilience engineered for African markets.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-primary/90 to-accent/80 px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:shadow-primary/30 mt-6"
              >
                Explore Services
                <span aria-hidden className="text-base">→</span>
              </Link>
            </div>
            <ServicesGrid />
          </div>
        </section>

        {/* Why choose us section */}
        <section className="relative z-10 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <WhyChooseUs />
          </div>
        </section>

        {/* Threat Map section */}
        <section className="relative z-10 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.3em] text-primary">Threat Map</span>
              <h3 className="text-2xl font-semibold">Threat Intelligence</h3>
            </div>
            <div className="rounded-3xl border border-border/50 bg-card/80 p-6 shadow-xl shadow-accent/15 backdrop-blur">
              <ThreatMapWidget />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative z-10 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.3em] text-primary">Testimonials</span>
              <h3 className="text-2xl font-semibold">What our clients say</h3>
                        <p className="text-primary text-lg mb-2">ደንበኞቻችን ስለ እኛ ምን ይላሉ?</p>

            </div>
            <TestimonialsCarousel />
          </div>
        </section>

        {/* Insights section */}
        <section className="relative z-10 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.3em] text-primary">Insights</span>
              <h3 className="text-2xl font-semibold">Latest Intelligence &amp; Analysis</h3>
            </div>
            <InsightsGrid />
          </div>
        </section>

        {/* Newsletter section */}
        <section className="relative z-10 py-10">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-border/50 bg-card/85 p-6 shadow-lg shadow-primary/10 backdrop-blur">
              <div className="text-center">
                <h4 className="text-2xl font-semibold">Stay informed</h4>
                <p className="mt-2 text-muted-foreground">Get expert analysis and threat intelligence straight to your inbox.</p>
                <div className="mt-6">
                  <NewsletterSection />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Small CTA band */}
        <section className="relative z-10 py-16">
          <div className="py-6 mx-auto max-w-6xl overflow-hidden rounded-3xl border border-primary/40 bg-background text-foreground shadow-2xl shadow-primary/10 sm:px-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-primary">Next steps</span>
                <h4 className="text-2xl font-bold text-foreground">Need a security assessment?</h4>
                <p className="text-sm text-muted-foreground">Book a free consultation with our experts and get a tailored plan.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
                >
                  Book a demo
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                >
                  Explore services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating Chatbot (client only) */}
      <ChatbotWrapper />
    </div>
  )
}

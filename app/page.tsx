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
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, color-mix(in oklab, var(--primary) 16%, transparent) 0%, transparent 55%), radial-gradient(circle at 80% 10%, color-mix(in oklab, var(--accent) 14%, transparent) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/40 to-transparent dark:via-muted/10" />
      </div>
      {/* Hero (client-only, heavy animations removed from SSR) */}
      <HeroWrapper />

      {/* Quick stats strip - keeps momentum after hero */}
      <section className="relative z-20 -mt-24 sm:-mt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border/60 bg-card/85 p-6 shadow-2xl shadow-primary/10 backdrop-blur">
            <InteractiveStats />
          </div>
        </div>
      </section>

      {/* Services - card grid inside container */}
      <section className="relative z-10 py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/10 to-transparent dark:via-primary/20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 rounded-3xl border border-border/50 bg-card/70 p-8 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-primary">Services</p>
              <h2 className="mt-3 text-3xl font-bold">Strategic Cybersecurity &amp; Innovation</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Comprehensive cybersecurity tooling and advisory built for Ethiopian enterprises. Explore end-to-end protection, rapid response, and digital resilience engineered for African markets.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/20 px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary/30"
            >
              Explore Services
              <span aria-hidden className="text-base">→</span>
            </Link>
          </div>

          <ServicesGrid />
        </div>
      </section>

      {/* Why choose us + Threat Map - two-column responsive stack */}
      <section className="relative z-10 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <WhyChooseUs />
          </div>

          <div className="w-full">
            <div className="sticky top-32">
              <div className="rounded-3xl border border-border/60 bg-card/70 p-6 shadow-xl shadow-primary/10 backdrop-blur">
                <ThreatMapWidget />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-primary/15 dark:from-primary/20 dark:to-primary/25" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Testimonials</span>
            <h3 className="text-2xl font-semibold">What our clients say</h3>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Insights grid + newsletter grouped to reduce visual noise */}
      <section className="relative z-10 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <div className="mb-6 flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.3em] text-primary">Insights</span>
              <h3 className="text-2xl font-semibold">Latest Intelligence &amp; Analysis</h3>
            </div>
            <InsightsGrid />
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-36 space-y-6">
              <div className="rounded-3xl border border-border/60 bg-card/80 p-6 backdrop-blur">
                <h4 className="text-lg font-medium">Stay informed</h4>
                <p className="mt-2 text-sm text-muted-foreground">Get expert analysis and threat intelligence straight to your inbox.</p>
                <div className="mt-4">
                  <NewsletterSection />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Small CTA band */}
      <section className="relative z-10 py-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-r from-primary via-primary/70 to-accent px-6 py-10 text-white shadow-2xl shadow-primary/25 sm:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-white/80">Next steps</span>
              <h4 className="text-2xl font-bold">Need a security assessment?</h4>
              <p className="text-sm text-white/80">Book a free consultation with our experts and get a tailored plan.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-foreground/90 px-5 py-3 text-sm font-semibold text-background shadow-lg shadow-black/20 transition hover:bg-foreground"
              >
                Book a demo
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Explore services
              </Link>
            </div>
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

import { Hero } from "@/components/Hero"
import { ServicesGrid } from "@/components/ServicesGrid"
import { InteractiveStats } from "@/components/InteractiveStats"
import { ThreatMapWidget } from "@/components/ThreatMapWidget"
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel"
import { InsightsGrid } from "@/components/InsightsGrid"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { NewsletterSection } from "@/components/NewsletterSection"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <InteractiveStats />
      <ServicesGrid />
      <WhyChooseUs />
      <ThreatMapWidget />
      <TestimonialsCarousel />
      <InsightsGrid />
      <NewsletterSection />
    </main>
  )
}

import { Metadata } from "next"
import { BlogGrid } from "../../components/BlogGrid"
import { HeroBlog } from "../../components/HeroBlog"
import { Footer } from "../../components/Footer"

export const metadata: Metadata = {
  title: "BETATECHHUB Blog - Cybersecurity Insights & Tech News",
  description: "Stay updated with the latest cybersecurity trends, threat intelligence, and technology insights from Ethiopia's leading cybersecurity experts.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroBlog />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BlogGrid />
        </div>
      </section>

      <Footer />
    </main>
  )
}

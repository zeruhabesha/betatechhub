import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogCategoryPage } from "@/components/BlogCategoryPage"
import { Footer } from "@/components/Footer"

const categories = [
  "cybersecurity",
  "ai-ml",
  "cloud-security",
  "network-security",
  "threat-analysis",
  "incident-response",
  "mobile-security"
]

interface CategoryPageProps {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryName = params.category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${categoryName} Articles | BETATECHHUB Blog`,
    description: `Browse all articles about ${categoryName.toLowerCase()} on BETATECHHUB Blog. Expert insights and analysis from Ethiopia's leading cybersecurity experts.`,
  }
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }))
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = params.category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  if (!categories.includes(params.category)) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogCategoryPage category={params.category} categoryName={categoryName} />
      </div>
      <Footer />
    </main>
  )
}

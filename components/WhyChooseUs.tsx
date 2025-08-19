import { Shield, Users, Award, Target } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const reasons = [
  {
    icon: Shield,
    title: "Local Cybersecurity Expertise",
    amharicTitle: "የአካባቢ የሳይበር ደህንነት ብቃት",
    description:
      "Our Ethiopian-based experts understand local cyber threats and regulations, providing security solutions tailored to Ethiopia's digital landscape and business environment.",
  },
  {
    icon: Users,
    title: "Africa-Focused Services",
    amharicTitle: "በአፍሪካ ያተኮረ አገልግሎቶች",
    description:
      "From Addis Ababa to across Africa, we deliver IT solutions that address the unique challenges and opportunities of the African market, with local support and understanding.",
  },
  {
    icon: Award,
    title: "Culturally Tailored",
    amharicTitle: "በባህል የተጠናቀቁ መፍትሄዎች",
    description:
      "We customize solutions with cultural intelligence, ensuring our technology aligns with Ethiopian business practices, communication styles, and work ethics.",
  },
  {
    icon: Target,
    title: "Proven in Ethiopia",
    amharicTitle: "በኢትዮጵያ ውስጥ የተሞከረ እና የተረጋገጠ",
    description:
      "Trusted by leading Ethiopian businesses and organizations for reliable, locally-tested solutions that work in Ethiopia's unique technological landscape.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Why Choose BETATECHHUB?</h2>
          <p className="text-lg text-muted-foreground mb-2">
            <span className="block text-primary">ለምን ቤታተክሃብን መምረጥ ያለብዎት?</span>
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These core strengths make us your trusted partner in Africa's digital transformation, delivering solutions
            that protect and empower your business in the Ethiopian and African markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="bg-card border-border text-center group hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardHeader>
                <div className="p-4 bg-primary/10 rounded-lg mx-auto mb-4 group-hover:bg-primary/20 transition-colors w-fit">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-white group-hover:text-primary transition-colors text-xl">
                  {reason.title}
                  {reason.amharicTitle && (
                    <span className="block text-sm font-normal text-muted-foreground mt-1">
                      {reason.amharicTitle}
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

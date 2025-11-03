"use client"

import { Shield, Users, Award, Target, Clock, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HeroAbout } from "@/components/HeroAbout"
import { Footer } from "@/components/Footer"

const stats = [
  { label: "Years of Experience", value: "15+", icon: Clock },
  { label: "Clients Protected", value: "500+", icon: Shield },
  { label: "Security Experts", value: "50+", icon: Users },
  { label: "Countries Served", value: "25+", icon: Globe },
]

const team = [
  {
    name: "Tariku M",
    role: "Chief Security Officer",
    bio: "15+ years in cybersecurity with expertise in threat intelligence and incident response. Proudly leading our team from Addis Ababa.",
    image: "/ethiopian-woman-tech-leader.jpg",
    localTitle: "የደህንነት ሃላፊ"
  },
  {
    name: "Abel M",
    role: "Lead Penetration Tester",
    bio: "Certified ethical hacker with extensive experience in vulnerability assessment. Graduate of Addis Ababa Science and Technology University.",
    image: "/ethiopian-cyber-expert.jpg",
    localTitle: "የስክሪኒንግ ሙያተኛ"
  },
  {
    name: "Tekeste M",
    role: "Security Research Director",
    bio: "PhD in Computer Science from AAiT, specializing in AI-driven threat detection and security automation with a focus on African threat landscapes.",
    image: "/ethiopian-female-researcher.jpg",
    localTitle: "የምርምር ዳይሬክተር"
  },
  {
    name: "Ermiyas M",
    role: "Cloud Security Architect",
    bio: "Expert in cloud infrastructure security with certifications in AWS, Azure, and GCP. Based in our Addis Ababa innovation hub.",
    image: "/ethiopian-cloud-architect.jpg",
    localTitle: "የክላውድ ደህንነት አርክቴክት"
  },
]

const values = [
  {
    icon: Shield,
    title: "Cybersecurity Expertise",
    description:
      "Our top priority is keeping you safe from digital threats with advanced cybersecurity strategies and real-time monitoring, tailored for the African digital landscape.",
    amharicTitle: "የሳይበር ደህንነት ብቃት"
  },
  {
    icon: Users,
    title: "Community Focus",
    description:
      "Inspired by Ethiopia's communal values, we build solutions that strengthen and protect our digital communities across Africa.",
    amharicTitle: "ማህበረሰብ ላይ ያተኮረ"
  },
  {
    icon: Award,
    title: "Local Solutions",
    description:
      "We develop security solutions that respect local contexts, languages, and the unique challenges of African digital transformation.",
    amharicTitle: "የአካባቢ መፍትሄዎች"
  },
  {
    icon: Target,
    title: "Innovation & Tradition",
    description: "Blending Ethiopia's rich heritage with cutting-edge technology to create secure digital futures.",
    amharicTitle: "ልማት እና ባህል"
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroAbout />

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission & Vision</h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-3">Mission <span className="text-sm text-muted-foreground">/ ተልእኮ</span></h3>
                <p className="text-lg text-muted-foreground mb-6">
                  To protect and empower African businesses with culturally-aware technology solutions, enabling sustainable digital transformation across the continent.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-3">Vision <span className="text-sm text-muted-foreground">/ ራዕይ</span></h3>
                <p className="text-lg text-muted-foreground mb-6">
                  A secure, digitally-empowered Africa where technology bridges communities and drives economic growth while preserving cultural identity.
                </p>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of experts blends deep technical knowledge with a passion for problem-solving to create
                solutions tailored to your needs. We safeguard your business from digital threats, ensuring your data,
                systems, and reputation remain protected.
              </p>
              <Button className="bg-primary hover:bg-primary/90">Learn About Our Services</Button>
            </div>
            <div className="relative">
              <img src="/cybersecurity-team.png" alt="Cybersecurity team" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose BETATECHHUB?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core strengths make us your trusted partner in cybersecurity and IT innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card border-border text-center group hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg mx-auto mb-4 group-hover:bg-primary/20 transition-colors w-fit">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team <span className="text-sm text-muted-foreground">/ ቡድናችን</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of Ethiopian cybersecurity experts combines deep local knowledge with global expertise to protect your digital assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-card border-border group hover:border-primary/50 transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm mb-1">{member.role}</p>
                  {member.localTitle && (
                    <p className="text-primary/70 text-xs mb-2 font-ethiopic">{member.localTitle}</p>
                  )}
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ethiopian Presence Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Ethiopian Roots <span className="text-sm text-muted-foreground">/ የኢትዮጵያ ሥሮቻችን</span></h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Proudly based in Addis Ababa, we're at the heart of Ethiopia's digital revolution. Our office in the ICT Park serves as a hub for cybersecurity innovation across East Africa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                <p className="text-muted-foreground">Deep understanding of Ethiopia's digital landscape and business environment</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Language Support</h3>
                <p className="text-muted-foreground">Services available in Amharic, Oromiffa, and other local languages</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Community Impact</h3>
                <p className="text-muted-foreground">Committed to developing local tech talent and digital infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Work With Us? <span className="block text-lg font-normal mt-2 text-muted-foreground">ከእኛ ጋር ለመስራት ዝግጁ ኖት?</span></h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's talk security and growth. Discover how we can protect and empower your business with advanced
            technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

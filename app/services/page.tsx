"use client"

import {
  Shield,
  Eye,
  Zap,
  Users,
  Database,
  Cloud,
  Brain,
  Wifi,
  Server,
  Headphones,
  Code,
  HardDrive,
  Activity,
  Wrench,
  Settings,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { X } from "lucide-react"

// Types
interface Feature {
  title: string
  description: string
  amharic?: string
}

interface Service {
  icon: any
  title: string
  description: string
  amharicDescription?: string
  features: Feature[]
  popular?: boolean
  category: string
}

// Data
const services: Service[] = [
  {
    icon: Shield,
    title: "Cybersecurity (Primary Focus)",
    description:
      "Protect your digital assets with advanced cybersecurity strategies: threat detection & prevention, continuous monitoring, and incident response planning.",
    amharicDescription:
      "የዲጂታል ንብረቶችዎን በከፍተኛ የሳይበር ደህንነት ስልቶች ይጠብቁ፤ አደጋ መለየትና መከላከል፣ ቀጣይ ክትትል እና የአደጋ ምላሽ እቅዶች ይካተታሉ።",
    features: [
      {
        title: "Penetration Testing",
        description: "Application, API, mobile, and network pentests with detailed remediation.",
        amharic: "የመተግበሪያ፣ API፣ ሞባይል እና አውታረመረብ መደበቂያ ሙከራዎች ከተግባራዊ መፍትሄዎች ጋር።",
      },
      {
        title: "Threat Detection",
        description: "Detection engineering, SIEM tuning, and purple‑team simulations.",
        amharic: "የመለያየት ኢንጅነሪንግ፣ SIEM ማስተካከያ እና ፓርፕል ቡድን ሙከራዎች።",
      },
      {
        title: "Data Protection",
        description: "DLP strategy, encryption, key rotation, secrets management, and governance.",
        amharic: "DLP ስትራቴጂ፣ ኢንክሪፕሽን፣ ቁልፍ መቀየሪያ እና ሲክሬትስ አስተዳደር።",
      },
      {
        title: "Cloud Security",
        description: "Kubernetes hardening, IaC policies, CSPM, KMS, and workload identity.",
        amharic: "Kubernetes ጠንካራ ማድረግ፣ IaC ፖሊሲዎች፣ CSPM እና KMS አተገባበር።",
      },
      {
        title: "Incident Response",
        description: "Retainers, tabletop exercises, forensics, containment, recovery, and reporting.",
        amharic: "የአደጋ ምላሽ፣ ሙከራዎች እና ፎሬንሲክስ፣ መገበብ እና መመለስ ከሪፖርት ጋር።",
      },
    ],
    popular: true,
    category: "Security",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Leverage AI-driven insights to automate processes, improve decision-making, and enhance customer experiences.",
    amharicDescription:
      "የAI ግንዛቤ በመጠቀም ሂደቶችን ያውቶማት አድርጉ፣ ውሳኔን ያሻሽሉ እና የደንበኛ ልምድን ያሻሽሉ።",
    features: [
      {
        title: "Process Automation",
        description: "Workflow bots, RPA, and human‑in‑the‑loop orchestration.",
        amharic: "የስራ ሂደት ኦቶሜሽን እና RPA መፍትሄዎች።",
      },
      { title: "Predictive Analytics", description: "Forecasting, demand planning, and risk scoring." },
      { title: "Customer Experience", description: "Personalization, recommendations, and assistants." },
      { title: "Decision Support", description: "Dashboards, anomaly detection, and optimization." },
    ],
    popular: false,
    category: "AI/ML",
  },
  {
    icon: Wifi,
    title: "Internet of Things (IoT)",
    description: "Connect and manage devices securely to unlock smarter operations and new business models.",
    amharicDescription:
      "መሳሪያዎችን በደህንነት በማገናኘት እና በማስተዳደር ብልጥ ኦፐሬሽኖችን ይገንብቱ።",
    features: [
      { title: "Device Management", description: "Provisioning, OTA updates, and fleet health." },
      { title: "Secure Connectivity", description: "Zero‑trust networking and certificate lifecycle." },
      { title: "Smart Operations", description: "Telematics, telemetry, and rules engines." },
      { title: "New Business Models", description: "Usage‑based pricing and remote services." },
    ],
    popular: false,
    category: "IoT",
  },
  {
    icon: Cloud,
    title: "Cloud Computing & Big Data",
    description:
      "Migrate to the cloud, store and analyze data efficiently, and harness the power of big data analytics.",
    amharicDescription:
      "ወደ ደመና ሽግግር፣ ውሂብ በብቃት ማከማቻ እና ትንተና ከትልቅ ውሂብ ጋር።",
    features: [
      { title: "Cloud Migration", description: "Landing zones, networking, and security baselines." },
      { title: "Data Platforms", description: "Warehouses, lakes, and real‑time pipelines." },
      { title: "Cost Optimization", description: "Right‑sizing, autoscaling, and FinOps guardrails." },
      { title: "Analytics & BI", description: "Dashboards, KPIs, and experimentation." },
    ],
    popular: true,
    category: "Cloud",
  },
  {
    icon: Server,
    title: "IT Infrastructure & Network Services",
    description: "Design, deploy, and maintain scalable, high‑performance IT networks and infrastructure.",
    amharicDescription: "ሚዛናዊ እና ከፍተኛ አፈፃፀም ያላቸው አውታረመረቦች እና ኢንፍራ ይንደፉ እና ይጠብቁ።",
    features: [
      { title: "Network Design", description: "Campus, DC, and SD‑WAN architectures." },
      { title: "Infrastructure Ops", description: "Backup, DR, and capacity planning." },
      { title: "Performance & SRE", description: "SLIs/SLOs, observability, and tuning." },
      { title: "Growth Planning", description: "Scalability patterns and lifecycle management." },
    ],
    popular: false,
    category: "Infrastructure",
  },
  {
    icon: Users,
    title: "IT & Related Consulting Services",
    description: "Get expert guidance to optimize your technology investments and achieve your business goals.",
    amharicDescription: "የቴክኖሎጂ ኢንቨስትመንት ማመቻቸት እና የንግድ ግቦች ማሳካት ለመርዳት ባለሙያ መመሪያ።",
    features: [
      { title: "Tech Strategy", description: "Roadmaps, capability models, and governance." },
      { title: "Investment Optimization", description: "TCO, ROI analysis, and vendor selection." },
      { title: "Operating Models", description: "Target org structures and playbooks." },
      { title: "Expert Advisory", description: "Fractional CTO/CISO and workshops." },
    ],
    popular: false,
    category: "Consulting",
  },
  {
    icon: Zap,
    title: "Digital Smart Solutions",
    description: "Integrate intelligent systems to improve efficiency, convenience, and customer engagement.",
    features: [
      { title: "Smart Integrations", description: "Sensors, kiosks, and experience hubs." },
      { title: "Efficiency Optimization", description: "Automation, SLAs, and uptime targets." },
      { title: "Customer Engagement", description: "Omnichannel journeys and loyalty." },
      { title: "Automation Solutions", description: "Rules, workflows, and assistants." },
    ],
    popular: false,
    category: "Smart Solutions",
  },
  {
    icon: Activity,
    title: "Managed IT Services",
    description: "Comprehensive IT management, so you can focus on growth while we handle your tech.",
    features: [
      { title: "Complete IT Management", description: "Patching, inventory, and ticketing." },
      { title: "24/7 Support", description: "NOC, on‑call rotations, and SLAs." },
      { title: "Proactive Maintenance", description: "Health checks and reliability reviews." },
      { title: "Growth Focus", description: "Quarterly planning and roadmaps." },
    ],
    popular: true,
    category: "Managed Services",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Turn raw data into actionable insights for smarter strategies and better results.",
    features: [
      { title: "Data Processing", description: "ELT/ETL, quality checks, and lineage." },
      { title: "Actionable Insights", description: "Cohorts, funnels, and attribution." },
      { title: "Strategic Analytics", description: "Experimentation and causal inference." },
      { title: "Performance Metrics", description: "North‑star metrics and OKRs." },
    ],
    popular: false,
    category: "Analytics",
  },
  {
    icon: Code,
    title: "E‑commerce Solutions",
    description:
      "Build secure, scalable, and high‑performance online stores that convert visitors into loyal customers.",
    features: [
      { title: "Secure Stores", description: "Auth, payments, and fraud controls." },
      { title: "Scalable Architecture", description: "CDN, caching, and micro‑frontends." },
      { title: "Conversion Optimization", description: "A/B testing and performance budgets." },
      { title: "Customer Retention", description: "CRM, subscriptions, and loyalty." },
    ],
    popular: false,
    category: "E‑commerce",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Fast, reliable troubleshooting to keep your systems running smoothly.",
    features: [
      { title: "24/7 Support", description: "Helpdesk, remote support, and on‑site." },
      { title: "Rapid Response", description: "SLA‑backed triage and escalation." },
      { title: "System Maintenance", description: "Health checks and patch cycles." },
      { title: "Issue Resolution", description: "Root cause and preventative actions." },
    ],
    popular: false,
    category: "Support",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions built to fit your exact business needs.",
    features: [
      { title: "Custom Development", description: "Web, mobile, and backend services." },
      { title: "Business‑Specific Solutions", description: "Domain‑driven design and APIs." },
      { title: "Scalable Architecture", description: "Event‑driven patterns and queues." },
      { title: "Ongoing Support", description: "SRE, monitoring, and releases." },
    ],
    popular: false,
    category: "Development",
  },
  {
    icon: HardDrive,
    title: "Backup Solutions",
    description: "Secure, automated backup systems to protect your critical data.",
    features: [
      { title: "Automated Backups", description: "Scheduling, retention, and policies." },
      { title: "Data Protection", description: "Immutability and air‑gapped copies." },
      { title: "Disaster Recovery", description: "RTO/RPO planning and drills." },
      { title: "Cloud Storage", description: "Tiering and lifecycle rules." },
    ],
    popular: false,
    category: "Backup",
  },
  {
    icon: Eye,
    title: "Monitoring Services",
    description: "24/7 system monitoring to detect and respond to issues before they impact operations.",
    features: [
      { title: "Always‑On Monitoring", description: "Metrics, logs, and traces." },
      { title: "Proactive Detection", description: "SLO burn alerts and anomaly rules." },
      { title: "Issue Prevention", description: "Chaos drills and game‑days." },
      { title: "Performance Analytics", description: "Capacity and trend analysis." },
    ],
    popular: false,
    category: "Monitoring",
  },
  {
    icon: Wrench,
    title: "Troubleshooting & Technical Support",
    description: "Quick problem resolution for both hardware and software challenges.",
    features: [
      { title: "Hardware Support", description: "Diagnostics and replacement flows." },
      { title: "Software Troubleshooting", description: "Bugs, crashes, and compatibility." },
      { title: "Quick Resolution", description: "Runbooks and hotfix pipelines." },
      { title: "Expert Diagnosis", description: "Root‑cause and knowledge base." },
    ],
    popular: false,
    category: "Support",
  },
  {
    icon: Settings,
    title: "Hardware Installations & Maintenance",
    description: "Professional installation and upkeep of IT hardware to ensure peak performance.",
    features: [
      { title: "Professional Installation", description: "Rack/stack, cabling, and cut‑overs." },
      { title: "Hardware Maintenance", description: "Firmware, spares, and warranties." },
      { title: "Performance Optimization", description: "Benchmarks and tuning." },
      { title: "Lifecycle Management", description: "Asset tracking and decommission." },
    ],
    popular: false,
    category: "Hardware",
  },
]

const categories = [
  { name: "All Services", value: "all" },
  { name: "Security", value: "Security" },
  { name: "Cloud & Infrastructure", value: "Cloud" },
  { name: "AI & Development", value: "AI/ML" },
  { name: "Support & Maintenance", value: "Support" },
]

function ServiceDetailModal({
  service,
  isOpen,
  onClose,
}: {
  service: Service
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 w-full max-w-lg bg-background shadow-xl transition-transform duration-300 ease-in-out transform translate-x-0">
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Service Overview</h3>
              <p className="text-muted-foreground">{service.description}</p>

              {service.amharicDescription && (
                <div className="mt-4 p-4 bg-muted/10 rounded-lg border border-border">
                  <h4 className="font-medium text-foreground mb-2">በአማርኛ</h4>
                  <p className="text-muted-foreground">{service.amharicDescription}</p>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:border-primary/50 transition">
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                    {feature.amharic && (
                      <p className="text-sm text-muted-foreground mt-2">{feature.amharic}</p>
                    )}
                    <Button variant="link" size="sm" className="p-0 mt-2">
                      Learn More →
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-border">
            <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
              አሁን ይጀምሩ - {service.title.split(" ")[0]}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Core <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions tailored to protect your business from evolving cyber threats. While our
            expertise spans a wide range of IT services, our core strength lies in cybersecurity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Complete Service Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From cybersecurity to cloud solutions, AI implementation to managed services — we cover the full IT
              spectrum with tailored solutions for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">Popular</Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Show quick bullet of first 3 feature titles */}
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                        {feature.title}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <Button
                      className="w-full bg-primary hover:bg-primary/90"
                      size="sm"
                      onClick={() => setSelectedService(service)}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Secure Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get started with a comprehensive technology assessment and discover how BETATECHHUB can protect and empower
            your organization with advanced solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule Free Assessment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            >
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal service={selectedService} isOpen={!!selectedService} onClose={() => setSelectedService(null)} />
      )}
    </div>
  )
}

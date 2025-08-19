"use client"

import React from 'react'
import { BookOpen, Download, ExternalLink, Shield, Lock, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const resources = [
  {
    category: "Security Guides",
    amharicCategory: "የደህንነት መመሪያዎች",
    icon: BookOpen,
    items: [
      {
        title: "Ethiopian Cybersecurity Best Practices",
        amharicTitle: "የኢትዮጵያ የሳይበር ደህንነት ምርጥ ልምዶች",
        description: "Comprehensive guide covering essential security practices for Ethiopian businesses",
        type: "PDF",
        size: "2.8 MB",
        downloadCount: "1,847",
        localContext: "Includes Ethiopian case studies"
      },
      {
        title: "Incident Response for Ethiopian Organizations",
        amharicTitle: "ለኢትዮጵያዊ ድርጅቶች የአደጋ ምላሽ መመሪያ",
        description: "Step-by-step guide for handling security incidents in the Ethiopian context",
        type: "PDF",
        size: "2.1 MB",
        downloadCount: "1,092",
        localContext: "Aligned with Ethiopian Cyber Law"
      },
      {
        title: "Amharic Security Awareness Training",
        amharicTitle: "የአማርኛ የደህንነት እውቀት ስልጠና",
        description: "Training materials in Amharic to educate your team about cybersecurity",
        type: "PDF",
        size: "3.5 MB",
        downloadCount: "3,256",
        localContext: "Culturally relevant examples"
      },
    ],
  },
  {
    category: "Security Tools",
    amharicCategory: "የደህንነት መሳሪያዎች",
    icon: Shield,
    items: [
      {
        title: "Ethio Network Scanner",
        amharicTitle: "የኢትዮ ኔትዎርክ ስካነር",
        description: "Tool optimized for Ethiopian network infrastructure security scanning",
        type: "Tool",
        size: "Web-based",
        downloadCount: "4,732",
        localContext: "Works with Ethio Telecom"
      },
      {
        title: "Amharic Password Checker",
        amharicTitle: "የይለፍ ቃል ጥንካሬ አሳሽ",
        description: "Evaluate password strength with Amharic character support",
        type: "Tool",
        size: "Web-based",
        downloadCount: "9,521",
        localContext: "Supports Fidel fonts"
      },
      {
        title: "Local Phishing Detector",
        amharicTitle: "የአካባቢ ፊሺንግ መለያ አውጪ",
        description: "Identify phishing attempts targeting Ethiopian users and businesses",
        type: "Tool",
        size: "Web-based",
        downloadCount: "5,154",
        localContext: "Tracks local scams"
      },
    ],
  },
  {
    category: "Compliance Resources",
    amharicCategory: "የህግ ማሟላት ምንጮች",
    icon: Lock,
    items: [
      {
        title: "Ethiopian Cyber Law Guide",
        amharicTitle: "የኢትዮጵያ የሳይበር ህግ መመሪያ",
        description: "Complete guide to Ethiopia's Cybersecurity Proclamation No. 1188/2020",
        type: "PDF",
        size: "2.3 MB",
        downloadCount: "3,876",
        localContext: "Official English/Amharic"
      },
      {
        title: "NBE Security Guidelines",
        amharicTitle: "የብሔራዊ ባንክ ደህንነት መመሪያዎች",
        description: "National Bank of Ethiopia's security compliance requirements",
        type: "PDF",
        size: "1.9 MB",
        downloadCount: "2,143",
        localContext: "Financial sector focus"
      },
      {
        title: "Data Protection in Ethiopia",
        amharicTitle: "በኢትዮጵያ ውስጥ የውሂብ ጥበቃ",
        description: "Implementing data protection measures for Ethiopian businesses",
        type: "PDF",
        size: "3.2 MB",
        downloadCount: "1,967",
        localContext: "Local case studies"
      },
    ],
  },
  {
    category: "Threat Intelligence",
    amharicCategory: "የአደጋ መረጃዎች",
    icon: Eye,
    items: [
      {
        title: "East Africa Threat Report",
        amharicTitle: "የምስራቅ አፍሪካ አደጋ ሪፖርት",
        description: "Quarterly analysis of cybersecurity threats in the Horn of Africa",
        type: "PDF",
        size: "4.5 MB",
        downloadCount: "3,241",
        localContext: "Ethiopia focus"
      },
      {
        title: "Local Industry Threats",
        amharicTitle: "የአካባቢ ኢንዱስትሪ አደጋዎች",
        description: "Targeted threat analysis for Ethiopian business sectors",
        type: "PDF",
        size: "3.9 MB",
        downloadCount: "2,432",
        localContext: "Banking, telecom, govt"
      },
      {
        title: "Amharic Scam Alerts",
        amharicTitle: "የአማርኛ ስካም ማሳሰቢያዎች",
        description: "Monthly report on Amharic-language phishing and scams",
        type: "PDF",
        size: "2.2 MB",
        downloadCount: "4,587",
        localContext: "Local scam patterns"
      },
    ],
  },
]

const webinars = [
  {
    title: "Securing Ethiopian Digital Transformation",
    amharicTitle: "የኢትዮጵያን ዲጂታል ትራንስፎርሜሽን ደህንነቱ የተጠበቀ ማድረግ",
    date: "April 10, 2024",
    time: "2:00 PM EAT",
    duration: "60 minutes",
    speaker: "Alemayehu Getachew, CISO",
    organization: "Ethio Telecom",
    status: "upcoming",
    language: "English with Amharic subtitles"
  },
  {
    title: "Ethiopian Cyber Law: What You Need to Know",
    amharicTitle: "የኢትዮጵያ የሳይበር ህግ: ማወቅ ያለብዎት ነገሮች",
    date: "March 25, 2024",
    time: "10:00 AM EAT",
    duration: "45 minutes",
    speaker: "Dr. Selamawit Kassahun",
    organization: "Ministry of Innovation and Technology",
    status: "upcoming",
    language: "Amharic with English slides"
  },
  {
    title: "Securing Ethiopian Financial Institutions",
    amharicTitle: "የኢትዮጵያን የፋይናንስ ተቋማት ደህንነቱ የተጠበቀ ማድረግ",
    date: "February 28, 2024",
    time: "3:30 PM EAT",
    duration: "50 minutes",
    speaker: "Yared Tsegaye",
    organization: "Commercial Bank of Ethiopia",
    status: "recorded",
    language: "English"
  },
  {
    title: "Amharic Phishing Awareness Training",
    amharicTitle: "የአማርኛ ፊሺንግ ግላዊነት ስልጠና",
    date: "February 15, 2024",
    time: "11:00 AM EAT",
    duration: "40 minutes",
    speaker: "Meron Assefa",
    organization: "EthioCERT",
    status: "recorded",
    language: "Amharic"
  }
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2">
            Security <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-xl text-[#1F7A8C] mb-2">የደህንነት ምንጮች</p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Access our comprehensive library of cybersecurity resources, tools, and educational materials tailored for Ethiopian businesses to strengthen your organization's security posture.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center mb-8">
                <category.icon className="h-6 w-6 text-primary mr-3" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {category.category}
                    {category.amharicCategory && (
                      <span className="block text-sm font-normal text-[#1F7A8C] mt-1">
                        {category.amharicCategory}
                      </span>
                    )}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card
                    key={itemIndex}
                    className="bg-card border-border group hover:border-primary/50 transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-foreground group-hover:text-primary transition-colors text-lg">
                          {item.title}
                          {item.amharicTitle && (
                            <span className="block text-sm font-normal text-muted-foreground mt-1">
                              {item.amharicTitle}
                            </span>
                          )}
                        </CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {item.type}
                        </Badge>
                      </div>
                      <CardDescription className="text-muted-foreground">
                        {item.description}
                        {item.localContext && (
                          <span className="block text-xs mt-2 text-[#1F7A8C]">
                            {item.localContext}
                          </span>
                        )}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Size: {item.size}</span>
                        <span>{item.downloadCount} downloads</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                          <Download className="h-4 w-4 mr-2" />
                          {item.type === "Tool" ? "Access Tool" : "Download"}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Security Webinars</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our expert-led webinars to stay updated on the latest cybersecurity trends and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinars.map((webinar, index) => (
              <Card
                key={index}
                className="bg-card border-border group hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {webinar.title}
                        {webinar.amharicTitle && (
                          <span className="block text-sm font-normal text-muted-foreground mt-1">
                            {webinar.amharicTitle}
                          </span>
                        )}
                      </h3>
                      <div className="text-sm text-muted-foreground mt-2">
                        <p>{webinar.date} • {webinar.time}</p>
                        <p>Duration: {webinar.duration}</p>
                        <p>Language: {webinar.language}</p>
                      </div>
                    </div>
                    <Badge variant={webinar.status === 'upcoming' ? 'default' : 'secondary'}>
                      {webinar.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    <span className="font-medium">Speaker:</span> {webinar.speaker}
                    {webinar.organization && `, ${webinar.organization}`}
                  </p>
                  <Button variant="link" className="p-0 h-auto mt-4 text-primary">
                    {webinar.status === 'upcoming' ? 'Register Now' : 'Watch Recording'}
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter to receive the latest security resources, threat intelligence, and industry
            insights directly in your inbox.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Subscribe to Newsletter
          </Button>
        </div>
      </section>
    </div>
  )
}

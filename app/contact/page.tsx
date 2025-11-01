"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { HeroContact } from "@/components/HeroContact"
import { Footer } from "@/components/Footer"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    amharicTitle: "ስልክ",
    details: ["+251 05 9888 222", "+251 909 523769"],
    description: "24/7 Emergency Support Available",
    localContext: "Amharic & English support",
  },
  {
    icon: Mail,
    title: "Email",
    amharicTitle: "ኢሜይል",
    details: ["info@betatechhub.et", "support@betatechhub.et"],
    description: "We respond within 2 hours",
    localContext: "የአማርኛ ደወል ድጋፍ፡ Mon-Fri 9:00 AM - 5:00 PM EAT",
  },
  {
    icon: MapPin,
    title: "Address",
    amharicTitle: "አድራሻ",
    details: ["Garamuleta BLDG 1st  floor, Wollo sefer, Bole 6th Floor", "Addis Ababa, Ethiopia"],
    description: "Visit us for in-person consultations",
    localContext: "Near Mexico Square, next to Ethiopian Airlines HQ",
  },
  {
    icon: Clock,
    title: "Hours",
    amharicTitle: "ሰዓታት",
    details: ["Mon-Fri: 8:30 AM - 5:30 PM EAT", "24/7 Emergency Response"],
    description: "Always here when you need us",
    localContext: "Closed on Ethiopian public holidays",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    recipient: "zeruhabesha09@gmail.com"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const { name, email, company, phone, service, message } = formData
    const subject = `Contact Form: ${service || 'General Inquiry'}`
    const body = `Name: ${name}%0D%0A` +
                 `Email: ${email}%0D%0A` +
                 `Company: ${company}%0D%0A` +
                 `Phone: ${phone}%0D%0A` +
                 `Service: ${service}%0D%0A%0D%0A` +
                 `Message:%0D%0A${message}`
    
    window.location.href = `mailto:zeruhabesha09@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <main className="min-h-screen bg-background">
      <HeroContact />

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-card border-border text-center group hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg mx-auto mb-4 group-hover:bg-primary/20 transition-colors w-fit">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {info.title}
                    {info.amharicTitle && (
                      <span className="block text-sm font-normal text-muted-foreground">
                        {info.amharicTitle}
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-foreground font-medium mb-1">
                      {detail}
                    </p>
                  ))}
                  <CardDescription className="text-muted-foreground mt-2">
                    {info.description}
                    {info.localContext && (
                      <span className="block text-xs mt-1 text-gray-500">
                        {info.localContext}
                      </span>
                    )}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">Send Us a Message</h2>
                <p className="text-primary mb-2">መልእክት ይላኩልን</p>
                <p className="text-muted-foreground">
                  Fill out the form below in English or Amharic and we'll respond within 24 hours. For urgent security matters,
                  please call our Ethiopian emergency line at +251 05 9888 222.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="bg-background border-border text-foreground"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="bg-background border-border text-foreground"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-foreground">
                      Company
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service" className="text-foreground">
                    Service Interest
                  </Label>
                  <Select onValueChange={(value) => handleChange("service", value)}>
                    <SelectTrigger className="bg-background border-border text-foreground">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cybersecurity">Cybersecurity Solutions (የሳይበር ደህንነት አገልግሎቶች)</SelectItem>
                      <SelectItem value="ai-ml">AI & Machine Learning (አርቴፊሻል ኢንተለጀንስ)</SelectItem>
                      <SelectItem value="iot">Internet of Things (የዕቃዎች በይነመረብ)</SelectItem>
                      <SelectItem value="cloud-computing">Cloud Computing & Big Data (ደመና ኮምፒዩቲንግ)</SelectItem>
                      <SelectItem value="it-infrastructure">IT Infrastructure & Network Services (የአይቲ መሰረተ ፈለግ)</SelectItem>
                      <SelectItem value="compliance">Ethiopian Compliance (የኢትዮጵያ የህግ ማስከበሪያ)</SelectItem>
                      <SelectItem value="managed-services">Managed IT Services (የአይቲ አስተዳደር አገልግሎቶች)</SelectItem>
                      <SelectItem value="software-development">Software Development (ሶፍትዌር ልማት)</SelectItem>
                      <SelectItem value="general">General Consultation (አጠቃላይ የምክር አገልግሎት)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="bg-background border-border text-foreground min-h-[120px]"
                    placeholder="Tell us about your technology and security needs..."
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Visit Our Office</h2>
              <p className="text-muted-foreground mb-8">
                Located in the heart of the tech district, our office is equipped with state-of-the-art security
                operations center where our team monitors threats 24/7.
              </p>

              {/* Placeholder for map */}
              <div className="bg-card border border-border rounded-lg p-8 text-center mb-8">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Our Location</h3>
                <p className="text-muted-foreground">
                  [Your Office Location]
                  <br />
                  Tech District, CA 90210
                </p>
              </div>

              {/* Social Media Links */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Follow Us</h3>
                <p className="text-muted-foreground mb-4">[Social Media Links]</p>
                <p className="text-sm text-muted-foreground">
                  Stay updated with the latest cybersecurity trends, threat intelligence, and BETATECHHUB news.
                </p>
              </div>

              {/* Emergency Contact */}
              <Card className="bg-destructive/10 border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-destructive flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Emergency Security Hotline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-semibold text-lg mb-2">[Your Emergency Number]</p>
                  <p className="text-muted-foreground">
                    For immediate security incidents, data breaches, or urgent threats. Available 24/7 with response
                    time under 15 minutes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

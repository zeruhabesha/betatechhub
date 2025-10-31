import { Shield, Users, Award, Target } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

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
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/90 to-background/95" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 " />
      </div>
      <div className="absolute inset-0" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#176a9d]/30 bg-[#0b1227]/60 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#9acdea] backdrop-blur"
          >
            Trusted expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl font-bold text-white sm:text-4xl"
          >
            Why Choose BETATECHHUB?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-lg text-[#9acdea]"
          >
            <span className="block text-primary">ለምን ቤታተክሃብን መምረጥ ያለብዎት?</span>
            These strengths make us your trusted ally in Africa's digital transformation journey.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="group relative h-full overflow-hidden border border-[#176a9d]/20 bg-[#0c162f]/80 text-left backdrop-blur">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#176a9d]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="relative">
                  <div className="mx-0 mb-5 inline-flex rounded-xl border border-[#176a9d]/30 bg-[#176a9d]/15 p-4 text-[#9acdea] transition-colors duration-300 group-hover:border-[#176a9d]/50 group-hover:bg-[#176a9d]/25">
                    <reason.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    {reason.title}
                    {reason.amharicTitle && (
                      <span className="mt-2 block text-sm font-normal text-[#8aa8c7]">{reason.amharicTitle}</span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-sm leading-relaxed text-[#9fb7d5]">
                    {reason.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

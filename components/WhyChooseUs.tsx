'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Award, Target } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Local Cybersecurity Expertise',
    amharicTitle: 'የአካባቢ የሳይበር ደህንነት ብቃት',
    description:
      "Our Ethiopian-based experts understand local cyber threats and regulations, providing security solutions tailored to Ethiopia's digital landscape and business environment.",
  },
  {
    icon: Users,
    title: 'Africa-Focused Services',
    amharicTitle: 'በአፍሪካ ያተኮረ አገልግሎቶች',
    description:
      'From Addis Ababa to across Africa, we deliver IT solutions that address the unique challenges and opportunities of the African market, with local support and understanding.',
  },
  {
    icon: Award,
    title: 'Culturally Tailored',
    amharicTitle: 'በባህል የተጠናቀቁ መፍትሄዎች',
    description:
      "We customize solutions with cultural intelligence, ensuring our technology aligns with Ethiopian business practices, communication styles, and work ethics.",
  },
  {
    icon: Target,
    title: 'Proven in Ethiopia',
    amharicTitle: 'በኢትዮጵያ ውስጥ የተሞከረ እና የተረጋገጠ',
    description:
      "Trusted by leading Ethiopian businesses and organizations for reliable, locally-tested solutions that work in Ethiopia's unique technological landscape.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/85 p-10 shadow-xl shadow-primary/10 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at top left, color-mix(in oklab, var(--primary) 16%, transparent) 0%, transparent 60%), linear-gradient(180deg, transparent, color-mix(in oklab, var(--muted) 25%, transparent))',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.35em] text-primary backdrop-blur"
          >
            Trusted expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl font-bold text-foreground sm:text-4xl"
          >
            Why Choose BETATECHHUB?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base text-muted-foreground sm:text-lg"
          >
            <span className="block text-primary">ለምን ቤታተክሃብን መምረጥ ያለብዎት?</span>
            These strengths make us your trusted ally in Africa&apos;s digital transformation journey.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="flex h-full flex-col rounded-2xl border border-border/60 bg-background/80 p-6 text-left shadow-lg shadow-primary/10 backdrop-blur"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-semibold text-foreground">
                  {reason.title}
                  {reason.amharicTitle && (
                    <span className="mt-2 block text-sm font-normal text-muted-foreground">{reason.amharicTitle}</span>
                  )}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

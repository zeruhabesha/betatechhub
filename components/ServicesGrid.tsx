'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Cloud, Database, Search, Shield, AlertTriangle } from 'lucide-react';

import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Search,
    title: 'Penetration Testing',
    amharicTitle: 'የደህንነት ምርመራ',
    description: 'Comprehensive security assessments tailored for Ethiopian businesses to identify vulnerabilities before attackers do.',
    features: [
      'Local Network Security Testing',
      'Ethio-telecom Infrastructure Testing',
      'Social Engineering Tests for Local Context',
      'Detailed Reporting in Amharic & English',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Threat Detection',
    amharicTitle: 'አደጋ መለየት',
    description: "Real-time monitoring with AI-powered threat detection adapted for Ethiopia's digital landscape.",
    features: [
      '24/7 Monitoring by Local Experts',
      'AI-Powered Analysis for Local Threats',
      'Multi-language Alert System',
      'Threat Intelligence for African Markets',
    ],
  },
  {
    icon: Database,
    title: 'Data Protection',
    amharicTitle: 'የውሂብ ጥበቃ',
    description: "Secure your sensitive data with solutions that meet Ethiopia's data protection requirements.",
    features: [
      'GDPR & Local Compliance',
      'Secure Offline Backups for Unstable Connections',
      'Local Data Center Options',
      'Amharic Language Support',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    amharicTitle: 'ደመና ደህንነት',
    description: "Cloud security solutions optimized for Ethiopia's internet infrastructure and regulations.",
    features: [
      'Local Cloud Integration',
      'Latency-Optimized for Africa',
      'Local Support Teams',
      'Cost-Effective Solutions for Local Market',
    ],
  },
  {
    icon: Shield,
    title: 'Incident Response',
    amharicTitle: 'አደጋ አደረጃጀት',
    description: "Rapid response services with understanding of Ethiopia's business and regulatory environment.",
    features: [
      'Local Emergency Response Teams',
      'Coordination with Ethiopian CERT',
      'Local Legal Compliance',
      '24/7 Amharic Support',
    ],
  },
];

export function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-10 shadow-xl shadow-primary/10 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at top, color-mix(in oklab, var(--primary) 14%, transparent) 0%, transparent 60%), linear-gradient(160deg, color-mix(in oklab, var(--background) 90%, var(--muted) 10%), var(--background))',
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our{' '}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Security Services
            </span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            የቤታቴክሃብ የደህንነት አገልግሎቶች በኢትዮጵያ ለሚገኙ ንግዶች ተስማሚ ምርጫ ናቸው።
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border/70 bg-background/70 p-6 text-left shadow-lg shadow-primary/10 backdrop-blur"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <motion.div
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15"
                />

                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <motion.span
                      animate={{ rotate: isExpanded ? 45 : 0, scale: isHovered ? 1.05 : 1 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-full border border-border/60 bg-card/70 p-2 text-primary"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </div>

                  <div className="mt-6 space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    {service.amharicTitle && (
                      <span className="block text-sm text-muted-foreground">{service.amharicTitle}</span>
                    )}
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground/90">{service.description}</p>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-3 overflow-hidden"
                  >
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </motion.div>

                  <Button
                    variant="outline"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border-primary/50 text-primary transition-colors duration-300 hover:bg-primary/10"
                  >
                    {isExpanded ? 'Hide Details' : 'Learn More'}
                    <motion.span animate={{ x: isHovered ? 6 : 0 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

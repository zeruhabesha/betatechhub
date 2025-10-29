'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Users, Clock, Award } from 'lucide-react';

const stats = [
  {
    icon: Shield,
    value: 99.9,
    suffix: '%',
    label: 'Threat Detection Rate',
    amharicLabel: 'የአደጋ የመለየት መጠን',
    description: 'Advanced AI-powered security for Ethiopian networks',
    localContext: "Optimized for Ethiopia's digital infrastructure",
  },
  {
    icon: Users,
    value: 250,
    suffix: '+',
    label: 'Ethiopian Clients',
    amharicLabel: 'ኢትዮጵያዊ ደንበኞች',
    description: 'Serving businesses across Ethiopia',
    localContext: 'From startups to enterprise in Addis and beyond',
  },
  {
    icon: Clock,
    value: 24,
    suffix: '/7',
    label: 'Monitoring',
    amharicLabel: 'በየቀኑ ቁጥጥር',
    description: 'Local support in Addis Ababa timezone',
    localContext: '24/7 security operations center in Addis',
  },
  {
    icon: Award,
    value: 7,
    suffix: '+',
    label: 'Local Certifications',
    amharicLabel: 'የአካባቢ ምስክር ወረቀቶች',
    description: 'Recognized by Ethiopian authorities',
    localContext: 'Compliant with Ethiopian Cyber Law',
  },
];

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | undefined;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [duration, isInView, value]);

  return <span ref={ref}>{count}</span>;
}

export function InteractiveStats() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/90 p-8 text-foreground shadow-lg shadow-primary/10">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at top, color-mix(in oklab, var(--primary) 22%, transparent) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-primary/80">Impact</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground">Security that delivers results</h2>
          <p className="mt-2 text-sm text-muted-foreground">ውጤታማ የደህንነት መፍትሄዎች</p>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground/90">
            Advanced cybersecurity solutions tailored for Ethiopian businesses, providing measurable protection and peace of mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/90 p-6 text-center backdrop-blur transition duration-300 hover:border-primary/50"
              >
                <motion.div
                  animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 4 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary"
                >
                  <Icon className="h-8 w-8" />
                </motion.div>

                <div className="text-4xl font-bold text-foreground">
                  <AnimatedCounter value={stat.value} />
                  <span className="text-primary">{stat.suffix}</span>
                </div>

                <div className="mt-3">
                  <h3 className="text-base font-semibold text-foreground">{stat.label}</h3>
                  {stat.amharicLabel && <p className="text-xs text-muted-foreground">{stat.amharicLabel}</p>}
                </div>

                <p className="mt-3 text-sm text-muted-foreground/90">
                  {stat.description}
                  {stat.localContext && <span className="mt-1 block text-xs text-muted-foreground/80">{stat.localContext}</span>}
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

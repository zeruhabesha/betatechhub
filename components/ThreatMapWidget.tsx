'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Shield, Activity, Globe } from 'lucide-react';

interface ThreatData {
  id: string;
  type: 'malware' | 'phishing' | 'ddos' | 'breach';
  location: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: Date;
}

const threatTypes = {
  malware: { icon: AlertTriangle, color: '#FF6B6B', label: 'Malware' },
  phishing: { icon: Shield, color: '#4ECDC4', label: 'Phishing' },
  ddos: { icon: Activity, color: '#45B7D1', label: 'DDoS' },
  breach: { icon: Globe, color: '#96CEB4', label: 'Data Breach' },
};

const statSummary = [
  { label: 'Threats Blocked', key: 'blocked', color: '#2563eb', icon: Shield },
  { label: 'Attacks Detected', key: 'detected', color: '#f97316', icon: AlertTriangle },
  { label: 'Breaches Prevented', key: 'prevented', color: '#22c55e', icon: Activity },
] as const;

export function ThreatMapWidget() {
  const [threats, setThreats] = useState<ThreatData[]>([]);
  const [stats, setStats] = useState({ blocked: 1247, detected: 89, prevented: 23 });

  useEffect(() => {
    const generateThreat = (): ThreatData => ({
      id: Math.random().toString(36).slice(2, 11),
      type: ['malware', 'phishing', 'ddos', 'breach'][Math.floor(Math.random() * 4)] as ThreatData['type'],
      location: ['Addis Ababa', 'Nairobi', 'Lagos', 'Johannesburg', 'Cairo', 'Casablanca'][Math.floor(Math.random() * 6)],
      severity: ['low', 'medium', 'high', 'critical'][Math.floor(Math.random() * 4)] as ThreatData['severity'],
      timestamp: new Date(),
    });

    setThreats(Array.from({ length: 5 }, generateThreat));

    const interval = setInterval(() => {
      setThreats((previous) => {
        const updated = [generateThreat(), ...previous].slice(0, 10);
        return updated;
      });

      setStats((previous) => ({
        blocked: previous.blocked + Math.floor(Math.random() * 3),
        detected: previous.detected + Math.floor(Math.random() * 2),
        prevented: previous.prevented + (Math.random() > 0.7 ? 1 : 0),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity: ThreatData['severity']) => {
    switch (severity) {
      case 'critical':
        return '#ef4444';
      case 'high':
        return '#f97316';
      case 'medium':
        return '#facc15';
      case 'low':
        return '#22c55e';
      default:
        return '#2563eb';
    }
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/85 p-8 shadow-xl shadow-primary/10 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at top, color-mix(in oklab, var(--primary) 16%, transparent) 0%, transparent 60%), linear-gradient(180deg, transparent, color-mix(in oklab, var(--muted) 20%, transparent))',
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Live <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">Threat Intelligence</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Real-time monitoring of global cybersecurity threats and BETATECHHUB&apos;s incident response.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-5">
            {statSummary.map((summary, index) => {
              const Icon = summary.icon;
              return (
                <motion.div
                  key={summary.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-lg shadow-primary/10 backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{summary.label}</p>
                      <motion.p
                        key={stats[summary.key]}
                        initial={{ scale: 1.1, color: summary.color }}
                        animate={{ scale: 1, color: 'var(--foreground)' }}
                        transition={{ duration: 0.35 }}
                        className="mt-2 text-2xl font-semibold text-foreground"
                      >
                        {stats[summary.key].toLocaleString()}
                      </motion.p>
                    </div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="h-6 w-6" style={{ color: summary.color }} />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="lg:col-span-2">
            <div className="h-[26rem] overflow-hidden rounded-2xl border border-border/60 bg-background/80 p-6 shadow-lg shadow-primary/10 backdrop-blur">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">Recent Threats</h3>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
                  <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-primary" />
                  Live
                </div>
              </div>

              <div className="h-[19rem] space-y-3 overflow-y-auto pr-2">
                {threats.map((threat) => {
                  const { icon: ThreatIcon, label } = threatTypes[threat.type];
                  const severityColor = getSeverityColor(threat.severity);

                  return (
                    <motion.div
                      key={threat.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-4 rounded-xl border border-border/60 bg-card/80 p-3 transition-colors hover:border-primary/40"
                    >
                      <span
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${severityColor}1a` }}
                      >
                        <ThreatIcon className="h-5 w-5" style={{ color: severityColor }} />
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-foreground">
                          <span>{label}</span>
                          <span
                            className="ml-2 rounded-full px-2 py-0.5 text-xs font-semibold"
                            style={{ backgroundColor: `${severityColor}1a`, color: severityColor }}
                          >
                            {threat.severity.toUpperCase()}
                          </span>
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                          <span>{threat.location}</span>
                          <span>{threat.timestamp.toLocaleTimeString()}</span>
                        </div>
                      </div>

                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">BLOCKED</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

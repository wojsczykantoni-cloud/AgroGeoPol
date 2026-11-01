'use client';

import { Thermometer, Apple, Snowflake } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { useI18n } from "@/i18n/LanguageProvider";

// Ikony i kolory zostają w komponencie; teksty pochodzą ze słownika (t.offerings.cards).
const cardMeta = [
  { icon: Apple, color: "#8DC432" },
  { icon: Snowflake, color: "#4A9EC9" },
  { icon: Thermometer, color: "#D4AF61" },
];

export default function Offerings() {
  const { t } = useI18n();
  const offerings = cardMeta.map((meta, i) => ({ ...meta, ...t.offerings.cards[i] }));
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">
            {t.offerings.tag}
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground leading-tight font-serif mb-4">
            {t.offerings.title}{" "}
            <span className="text-gold italic font-normal">{t.offerings.titleAccent}</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-base leading-relaxed">
            {t.offerings.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((item, i) => (
            <AnimateOnScroll key={item.title} animation="fade-up" delay={i * 150}>
              <div className="h-full card-dark rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}18` }}
                >
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider mb-1 block" style={{ color: item.color }}>
                    {item.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                <ul className="space-y-2 pt-2 border-t border-border">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { Leaf, Shield, Truck, HeartHandshake, Award, Clock, Snowflake, Globe } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { useI18n } from "@/i18n/LanguageProvider";

// Ikony zostają w komponencie; tytuły i opisy ze słownika (t.whyus.reasons).
const icons = [Globe, Snowflake, Shield, Truck, HeartHandshake, Clock, Leaf, Award];

export default function WhyUs() {
  const { t } = useI18n();
  const reasons = icons.map((icon, i) => ({ icon, ...t.whyus.reasons[i] }));
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">{t.whyus.tag}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t.whyus.title}
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-base leading-relaxed">
            {t.whyus.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <AnimateOnScroll key={reason.title} animation="fade-up" delay={i * 100}>
              <div className="h-full card-dark rounded-xl p-5 flex flex-col gap-3 transition-all duration-300 hover:border-gold/30 hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <reason.icon size={20} className="text-gold" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

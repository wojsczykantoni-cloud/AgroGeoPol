"use client";

import { useI18n } from "@/i18n/LanguageProvider";

const values = ["🇬🇪", "IQF", "B2B", "❄️"];

export default function Stats() {
  const { t } = useI18n();
  const stats = values.map((value, i) => ({ value, ...t.stats.items[i] }));
  return (
    <section className="py-20 bg-gradient-to-r from-muted via-card to-muted section-border-top border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                i < stats.length - 1 ? "lg:border-r lg:border-border" : ""
              }`}
            >
              <span className="text-4xl sm:text-5xl font-bold text-gradient-gold mb-2">{stat.value}</span>
              <span className="text-sm font-semibold text-foreground mb-1">{stat.label}</span>
              <span className="text-xs text-muted-foreground">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

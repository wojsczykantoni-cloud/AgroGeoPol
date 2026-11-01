'use client';

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { useI18n } from "@/i18n/LanguageProvider";

export default function CTA() {
  const { t } = useI18n();
  return (
    <section className="py-24 bg-background section-border-top">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll animation="scale-in">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-card to-muted border border-border p-10 sm:p-16">
            {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-4">
            {t.cta.tag}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t.cta.title}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-xl mx-auto">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold btn-gold shadow-lg shadow-gold/20"
            >
              {t.cta.write}
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+995555568302"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold border border-border text-foreground hover:border-gold/50 hover:bg-gold/5 transition-all"
            >
              <Phone size={18} className="text-gold" />
              +995 555 56 83 02
            </a>
          </div>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

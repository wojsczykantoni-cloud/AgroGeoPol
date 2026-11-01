"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/LanguageProvider";

export default function SklepBanner() {
  const { t } = useI18n();
  return (
    <section className="py-8 bg-background border-t border-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-secondary/20 bg-secondary/10 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-foreground leading-relaxed max-w-2xl">
            {t.shop.bannerText}
          </p>
          <Link
            href="/kontakt"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-gold to-gold-deep text-[#14170F] no-underline hover:opacity-90 transition-opacity"
          >
            {t.shop.bannerCta}
          </Link>
        </div>
      </div>
    </section>
  );
}

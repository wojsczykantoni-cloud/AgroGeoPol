"use client";

import { useI18n } from "@/i18n/LanguageProvider";

export default function GaleriaHeader() {
  const { t } = useI18n();
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-4">
        {t.galeria.tag}
      </p>
      <h1 className="text-4xl md:text-5xl font-light text-foreground font-serif mb-6">
        {t.galeria.title}
      </h1>
      <p className="text-muted-foreground text-lg">{t.galeria.subtitle}</p>
    </div>
  );
}

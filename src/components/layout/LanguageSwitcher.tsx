"use client";

import { useI18n } from "@/i18n/LanguageProvider";
import { locales, localeLabels } from "@/i18n/config";

export default function LanguageSwitcher({ overHero = false }: { overHero?: boolean }) {
  const { lang, setLang } = useI18n();

  const idle = overHero
    ? "text-white/70 hover:text-white"
    : "text-muted-foreground hover:text-foreground";
  const active = overHero ? "text-white" : "text-foreground";

  return (
    <div className="flex items-center text-xs font-semibold" role="group" aria-label="Wybór języka">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && (
            <span className={overHero ? "text-white/30" : "text-border"} aria-hidden>
              ·
            </span>
          )}
          <button
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={`px-1.5 py-1 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 ${
              lang === l
                ? `${active} underline underline-offset-4 decoration-gold decoration-2`
                : idle
            }`}
          >
            {localeLabels[l]}
          </button>
        </span>
      ))}
    </div>
  );
}

// Konfiguracja wersji językowych — własny system (bez zewnętrznych widgetów).
export const locales = ["pl", "en", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pl";

// Etykiety w przełączniku.
export const localeLabels: Record<Locale, string> = {
  pl: "PL",
  en: "EN",
  ru: "RU",
};

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

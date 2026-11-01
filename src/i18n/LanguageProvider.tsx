"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { dictionaries, type Dict } from "@/i18n/dictionaries";

type LangContextValue = {
  lang: Locale;
  setLang: (l: Locale) => void;
  t: Dict;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // SSR i pierwszy render zawsze w domyślnym (PL) — spójne z serwerem.
  // Po montażu wczytujemy zapamiętany wybór z localStorage.
  const [lang, setLangState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("lang");
    } catch {}
    if (isLocale(stored) && stored !== defaultLocale) {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Locale) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  }, []);

  const value: LangContextValue = {
    lang,
    setLang,
    t: dictionaries[lang],
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useI18n(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useI18n musi być użyte wewnątrz <LanguageProvider>");
  }
  return ctx;
}

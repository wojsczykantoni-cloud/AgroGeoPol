"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

/**
 * Przełącznik motywu jasny/ciemny.
 * Motyw trzymany na <html data-theme>, zapamiętywany w localStorage.
 * Skrypt w <head> (layout) ustawia motyw przed pierwszym renderem (bez migotania).
 */
export default function ThemeToggle({ overHero = false }: { overHero?: boolean }) {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current =
      document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark";
    setTheme(current);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const root = document.documentElement;
    if (next === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  const base = overHero
    ? "text-white/85 hover:text-white hover:bg-white/10"
    : "text-muted-foreground hover:text-foreground hover:bg-muted";

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Włącz jasny motyw" : "Włącz ciemny motyw"}
      title={theme === "dark" ? "Jasny motyw" : "Ciemny motyw"}
      className={`p-2 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 ${base}`}
    >
      {/* Przed montażem pokazujemy neutralną ikonę zgodną z SSR (ciemny = słońce) */}
      {mounted && theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}

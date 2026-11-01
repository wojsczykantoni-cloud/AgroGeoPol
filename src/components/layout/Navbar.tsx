"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "@/i18n/LanguageProvider";

const links = [
  { href: "/", key: "home" },
  { href: "/o-nas", key: "about" },
  { href: "/sklep", key: "shop" },
  { href: "/galeria", key: "gallery" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Nad ciemnym zdjęciem hero (góra strony głównej) — tekst zawsze jasny.
  // Poza tym pasek przyjmuje kolory motywu (jasny/ciemny).
  const overHero = pathname === "/" && !scrolled;

  const logoText = overHero
    ? "text-white"
    : "text-foreground";
  const linkIdle = overHero
    ? "text-white/80 hover:text-white hover:bg-white/10"
    : "text-muted-foreground hover:text-foreground hover:bg-muted";
  const iconBtn = overHero
    ? "text-white/85 hover:text-white hover:bg-white/10"
    : "text-muted-foreground hover:text-foreground hover:bg-muted";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        overHero
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/30">
              <Image
                src="/images/ikonka.png"
                alt="AgroGeoPol Ltd — logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <span className={`text-xl font-bold tracking-wide transition-colors group-hover:text-gold ${logoText}`}>
              AgroGeoPol Ltd
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-gold bg-gold/10"
                    : linkIdle
                }`}
              >
                {t.nav[link.key]}
              </Link>
            ))}
            <LanguageSwitcher overHero={overHero} />
            <ThemeToggle overHero={overHero} />
            <Link
              href="/kontakt"
              className="ml-2 px-5 py-2 rounded-md text-sm font-semibold btn-gold"
            >
              {t.nav.orderNow}
            </Link>
          </nav>

          {/* Mobile: język + motyw + hamburger */}
          <div className="flex items-center gap-1 md:hidden">
            <LanguageSwitcher overHero={overHero} />
            <ThemeToggle overHero={overHero} />
            <button
              className={`p-2 rounded-md transition-colors ${iconBtn}`}
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/98 backdrop-blur-md border-t border-border px-4 pb-4 pt-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors mb-1 ${
                pathname === link.href
                  ? "text-gold bg-gold/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {t.nav[link.key]}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="block mt-3 px-4 py-3 rounded-md text-sm font-semibold text-center btn-gold"
          >
            {t.nav.orderNow}
          </Link>
        </div>
      </div>
    </header>
  );
}

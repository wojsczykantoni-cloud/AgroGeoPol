"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Strona główna" },
  { href: "/o-nas", label: "O nas" },
  { href: "/sklep", label: "Sklep" },
  { href: "/galeria", label: "Galeria" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // On the homepage the navbar starts transparent over the hero photo, so its
  // text must be light until the user scrolls onto the beige background.
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#E7DECF] shadow-sm shadow-[#2A5A2E]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C2A34F]/50">
              <img src="/images/ikonka-nowa.png" alt="AgroGeoPol Ltd Logo" className="w-full h-full object-cover" />
            </div>
            <span
              className={`font-serif text-xl font-semibold tracking-wide transition-colors ${
                overHero ? "text-white group-hover:text-[#E8D9A8]" : "text-[#2A5A2E] group-hover:text-[#C2A34F]"
              }`}
            >
              AgroGeoPol Ltd
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    overHero
                      ? active
                        ? "text-white bg-white/15"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                      : active
                        ? "text-[#2A5A2E] bg-[#2A5A2E]/8"
                        : "text-[#5B5A50] hover:text-[#2A5A2E] hover:bg-[#2A5A2E]/6"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/kontakt"
              className="ml-4 px-5 py-2 rounded-md text-sm font-semibold btn-gold"
            >
              Zamów teraz
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              overHero
                ? "text-white/90 hover:text-white hover:bg-white/10"
                : "text-[#5B5A50] hover:text-[#2A5A2E] hover:bg-[#2A5A2E]/8"
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#FAF6F0]/98 backdrop-blur-md border-t border-[#E7DECF] px-4 pb-4 pt-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors mb-1 ${
                pathname === link.href
                  ? "text-[#2A5A2E] bg-[#2A5A2E]/8"
                  : "text-[#5B5A50] hover:text-[#2A5A2E] hover:bg-[#2A5A2E]/6"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="block mt-3 px-4 py-3 rounded-md text-sm font-semibold text-center btn-gold"
          >
            Zamów teraz
          </Link>
        </div>
      </div>
    </header>
  );
}

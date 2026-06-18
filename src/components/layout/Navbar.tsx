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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
          ? "bg-[#0A0F0A]/95 backdrop-blur-md border-b border-[#1F2E1F] shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C9A84C]/30">
              <img src="/images/logo.png" alt="Agrogeopol Ltd Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold tracking-wide text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors">
              Agrogeopol Ltd
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
                    ? "text-[#C9A84C] bg-[#C9A84C]/10"
                    : "text-[#9A9A8A] hover:text-[#F5F0E8] hover:bg-[#1F2E1F]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="ml-4 px-5 py-2 rounded-md text-sm font-semibold btn-gold"
            >
              Zamów teraz
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-[#9A9A8A] hover:text-[#F5F0E8] hover:bg-[#1F2E1F] transition-colors"
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
        <div className="bg-[#0A0F0A]/98 backdrop-blur-md border-t border-[#1F2E1F] px-4 pb-4 pt-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors mb-1 ${
                pathname === link.href
                  ? "text-[#C9A84C] bg-[#C9A84C]/10"
                  : "text-[#9A9A8A] hover:text-[#F5F0E8] hover:bg-[#1F2E1F]"
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

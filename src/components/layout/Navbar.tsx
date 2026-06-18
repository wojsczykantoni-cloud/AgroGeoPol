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
          ? "bg-[#F5F2EC]/95 backdrop-blur-md border-b border-[#D5D0C0] shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#E07B39]/30">
              <img src="/images/ikonka owoc.png" alt="Agrogeopol Ltd Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold tracking-wide text-[#1A2A0A] group-hover:text-[#E07B39] transition-colors">
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
                    ? "text-[#E07B39] bg-[#E07B39]/10"
                    : "text-[#6B7A5A] hover:text-[#1A2A0A] hover:bg-[#D5D0C0]"
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
            className="md:hidden p-2 rounded-md text-[#6B7A5A] hover:text-[#1A2A0A] hover:bg-[#D5D0C0] transition-colors"
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
        <div className="bg-[#F5F2EC]/98 backdrop-blur-md border-t border-[#D5D0C0] px-4 pb-4 pt-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors mb-1 ${
                pathname === link.href
                  ? "text-[#E07B39] bg-[#E07B39]/10"
                  : "text-[#6B7A5A] hover:text-[#1A2A0A] hover:bg-[#D5D0C0]"
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

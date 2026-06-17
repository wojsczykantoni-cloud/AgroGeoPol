import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Share2 } from "lucide-react";

const navLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/o-nas", label: "O nas" },
  { href: "/sklep", label: "Sklep" },
  { href: "/galeria", label: "Galeria" },
  { href: "/kontakt", label: "Kontakt" },
];


export default function Footer() {
  return (
    <footer className="bg-[#070C07] section-border-top mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#3D7A3D] flex items-center justify-center text-[#0A0F0A] font-bold text-sm">
                AG
              </div>
              <span className="text-xl font-bold text-[#F5F0E8]">AgroGeoPol</span>
            </Link>
            <p className="text-sm text-[#9A9A8A] leading-relaxed mb-5">
              Hodowla ślimaków, owoce i warzywa z Gruzji, własne chłodnie — wszystko od producenta.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#1F2E1F] flex items-center justify-center text-[#9A9A8A] hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors"
                aria-label="Facebook"
              >
                <Globe size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#1F2E1F] flex items-center justify-center text-[#9A9A8A] hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors"
                aria-label="Instagram"
              >
                <Share2 size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-[#F5F0E8] uppercase tracking-wider mb-4">
              Nawigacja
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9A9A8A] hover:text-[#C9A84C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[#F5F0E8] uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#9A9A8A]">
                <MapPin size={16} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <span>Placeholder adres,<br />Polska</span>
              </li>
              <li>
                <div className="flex items-center text-[#9A9A8A]">
                  <Phone size={16} className="mr-3 text-[#C9A84C] shrink-0" />
                  <span className="text-sm">+995 555 56 83 02</span>
                </div>
              </li>
              <li>
                <a
                  href="mailto:kontakt@agrogeopol.pl"
                  className="flex items-center gap-3 text-sm text-[#9A9A8A] hover:text-[#C9A84C] transition-colors"
                >
                  <Mail size={16} className="text-[#C9A84C] shrink-0" />
                  kontakt@agrogeopol.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 section-border-top flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9A9A8A]">
            © {new Date().getFullYear()} AgroGeoPol. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}

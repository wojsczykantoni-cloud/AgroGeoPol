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
    <footer className="bg-background mt-auto border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-secondary flex items-center justify-center text-white font-bold text-sm">
                AG
              </div>
              <span className="text-xl font-bold text-white">AgroGeoPol Ltd</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              Eksport świeżych i mrożonych owoców oraz warzyw z Gruzji. Własne chłodnie, mrożenie IQF, dostawy hurtowe.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold transition-colors" aria-label="Facebook">
                <Globe size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold transition-colors" aria-label="Instagram">
                <Share2 size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Nawigacja</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin size={16} className="text-secondary mt-0.5 shrink-0" />
                <span>Placeholder adres,<br />Polska</span>
              </li>
              <li className="flex items-center text-gray-500">
                <Phone size={16} className="mr-3 text-gold shrink-0" />
                <span className="text-sm">+995 555 56 83 02</span>
              </li>
              <li>
                <a href="mailto:kontakt@agrogeopol.pl" className="flex items-center gap-3 text-sm text-gray-500 hover:text-gold transition-colors">
                  <Mail size={16} className="text-gold shrink-0" />
                  kontakt@agrogeopol.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} AgroGeoPol Ltd. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}

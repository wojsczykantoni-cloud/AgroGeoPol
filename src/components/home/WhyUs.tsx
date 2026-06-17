'use client';

import {
  Leaf,
  Shield,
  Truck,
  HeartHandshake,
  Award,
  Clock,
  Microscope,
  TreePine,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const reasons = [
  {
    icon: Leaf,
    title: "W 100% naturalna hodowla",
    description:
      "Ślimaki hodowane w warunkach jak najbardziej zbliżonych do naturalnych, bez antybiotyków i sztucznych wspomagaczy.",
  },
  {
    icon: Shield,
    title: "Certyfikowana jakość",
    description:
      "Nasze produkty spełniają wymagania weterynaryjne i sanitarne. Posiadamy pełną dokumentację każdej partii.",
  },
  {
    icon: Truck,
    title: "Niezawodna logistyka",
    description:
      "Gwarantujemy terminowe dostawy — zarówno małe zamówienia, jak i duże kontrakty B2B obsługujemy bez opóźnień.",
  },
  {
    icon: HeartHandshake,
    title: "Długofalowa współpraca",
    description:
      "Stawiamy na stałe relacje z klientami. Jesteśmy dostępni i elastyczni wobec Twoich potrzeb.",
  },
  {
    icon: Award,
    title: "Polskie pochodzenie",
    description:
      "Całkowita produkcja na terenie Polski. Wspieramy lokalną gospodarkę i zapewniamy krótki łańcuch dostaw.",
  },
  {
    icon: Clock,
    title: "Kontakt 24/7",
    description:
      "Jesteśmy do dyspozycji w pilnych sytuacjach. Szybka odpowiedź i realna pomoc — nie automat.",
  },
  {
    icon: Microscope,
    title: "Kontrola surowca",
    description:
      "Każda partia mucyny przechodzi kontrolę jakości. Klienci kosmetyczni otrzymują pełną specyfikację techniczną.",
  },
  {
    icon: TreePine,
    title: "Zrównoważona produkcja",
    description:
      "Hodowla ekologiczna z poszanowaniem środowiska. Minimum odpadów, maksimum efektywności.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#0A0F0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#C9A84C] uppercase tracking-widest mb-3">
            Dlaczego my?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F0E8] mb-4">
            8 powodów, by wybrać AgroGeoPol
          </h2>
          <p className="max-w-xl mx-auto text-[#9A9A8A] text-base leading-relaxed">
            Łączymy tradycję hodowli z nowoczesnym podejściem do jakości i obsługi klienta.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <AnimateOnScroll key={reason.title} animation="fade-up" delay={i * 100}>
              <div
                className="h-full card-dark rounded-xl p-5 flex flex-col gap-3 transition-all duration-300 hover:border-[#C9A84C]/30 hover:-translate-y-0.5"
              >
              <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                <reason.icon size={20} className="text-[#C9A84C]" />
              </div>
              <h3 className="text-base font-semibold text-[#F5F0E8]">
                {reason.title}
              </h3>
              <p className="text-sm text-[#9A9A8A] leading-relaxed">
                {reason.description}
              </p>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

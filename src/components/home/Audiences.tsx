import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const audiences = [
  {
    image: "/images/audience_restaurants.png",
    title: "Restauracje",
    subtitle: "Ślimaki jadalne i muszle",
    description:
      "Dostarczamy ślimaki jadalne w dowolnej ilości — od małych zamówień po dostawy hurtowe. Oferujemy również muszle dekoracyjne, które nadają daniom wyjątkowej elegancji.",
    features: [
      "Zamówienia od 1 kg",
      "Dostawy hurtowe",
      "Muszle do prezentacji",
      "Stała współpraca",
    ],
    href: "/sklep#slimaki",
    badge: "Dla gastronomii",
  },
  {
    image: "/images/audience_cosmetics.png",
    title: "Firmy kosmetyczne",
    subtitle: "Mucyna ślimaka (śluz)",
    description:
      "Surowa mucyna ślimaka najwyższej jakości do produkcji kosmetyków. Certyfikowane surowce, stałe dostawy, dokumentacja jakościowa.",
    features: [
      "Mucyna surowa",
      "Certyfikaty jakości",
      "Stałe dostawy B2B",
      "Dokumentacja",
    ],
    href: "/sklep#sluz",
    badge: "Dla przemysłu",
  },
  {
    image: "/images/audience_individual.png",
    title: "Klienci indywidualni",
    subtitle: "Gotowe kosmetyki ze śluzu",
    description:
      "Kosmetyki naturalne wzbogacone mucyną ślimaka — kremy, serum, maseczki. Produkowane z surowców z własnej hodowli, bez zbędnych dodatków.",
    features: [
      "Kremy i serum",
      "Maseczki",
      "Naturalne składniki",
      "Własna hodowla",
    ],
    href: "/sklep#kosmetyki",
    badge: "Dla każdego",
  },
  {
    image: "/images/audience_owoce.jpg",
    title: "Sklepy i hurtownie",
    subtitle: "Świeże owoce i warzywa",
    description:
      "Hurtowa sprzedaż świeżych owoców i warzyw przechowywanych we własnych chłodniach. Zapewniamy ciągłość dostaw i najwyższą świeżość produktów przez cały rok.",
    features: [
      "Sprzedaż hurtowa",
      "Własne chłodnie",
      "Dostawy B2B",
      "Całoroczna dostępność",
    ],
    href: "/kontakt",
    badge: "Dla handlu",
  },
];

export default function Audiences() {
  return (
    <section className="py-24 bg-[#141F14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#C9A84C] uppercase tracking-widest mb-3">
            Dla kogo?
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-[#F5F0E8] leading-tight font-serif mb-4">
            Cztery grupy, <span className="text-[#C9A84C] italic font-normal">jeden producent</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#9A9A8A] text-base leading-relaxed">
            Obsługujemy restauratorów, firmy kosmetyczne, klientów indywidualnych oraz sklepy i hurtownie — każdy znajdzie u nas to, czego potrzebuje.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((aud) => (
            <div
              key={aud.title}
              className="group card-dark rounded-2xl flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 overflow-hidden"
            >
              {/* Image banner */}
              <div className="relative w-full h-48 overflow-hidden bg-black">
                <Image 
                  src={aud.image} 
                  alt={aud.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0A] via-transparent to-transparent" />
              </div>
              
              <div className="p-6 pt-3 flex flex-col flex-1">
                {/* Badge */}
                <span className="inline-block px-2.5 py-1 rounded-full bg-[#1A231A] text-[#9A9A8A] w-fit text-xs font-medium mb-4 relative z-10">
                  {aud.badge}
                </span>

                {/* Text */}
                <h3 className="text-xl font-bold text-[#F5F0E8] mb-1">
                  {aud.title}
                </h3>
                <p className="text-sm text-[#C9A84C] font-medium mb-3">
                  {aud.subtitle}
                </p>
                <p className="text-sm text-[#9A9A8A] leading-relaxed mb-5 flex-1">
                  {aud.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-6">
                  {aud.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-[#9A9A8A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={aud.href}
                  className="flex items-center gap-2 text-sm font-semibold text-[#C9A84C] group-hover:gap-3 transition-all"
                >
                  Zobacz produkty
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

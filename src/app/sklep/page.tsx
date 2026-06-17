import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oferta — AgroGeoPol",
  description:
    "Ślimaki jadalne, muszle, mucyna, kosmetyki oraz gruzińskie owoce i warzywa — wszystko od producenta AgroGeoPol.",
};

const categories = [
  {
    id: "slimaki",
    emoji: "🐌",
    label: "Ślimaki jadalne",
    tag: "Gastronomia",
    tagColor: "bg-[#3D7A3D]/20 text-[#6AAF47]",
    image: "/images/product_escargot.png",
    headline: "Świeże ślimaki prosto z hodowli",
    description:
      "Ślimaki hodowane w Gruzji, w warunkach naturalnych — bez antybiotyków. Dostępne w dowolnej ilości, od małych zamówień po kontrakty hurtowe.",
    features: ["Zamówienia od 1 kg", "Dostawy hurtowe B2B", "Dokumentacja weterynaryjna", "Stała współpraca"],
    cta: "Zapytaj o cenę",
  },
  {
    id: "muszle",
    emoji: "🐚",
    label: "Muszle dekoracyjne",
    tag: "Restauracje",
    tagColor: "bg-[#C9A84C]/20 text-[#C9A84C]",
    image: "/images/product_shell.png",
    headline: "Eleganckie muszle do podania dań",
    description:
      "Muszle ślimaków przygotowane do wielokrotnego użytku. Nadają daniom wyjątkowej elegancji i są chętnie wybierane przez restauracje fine dining.",
    features: ["Wielokrotnego użytku", "Różne rozmiary", "Estetyczne wykończenie", "Pakowane zbiorczo"],
    cta: "Zapytaj o cenę",
  },
  {
    id: "sluz",
    emoji: "✨",
    label: "Mucyna (śluz ślimaka)",
    tag: "Przemysł kosmetyczny",
    tagColor: "bg-[#7A5A7A]/20 text-[#C9A84C]",
    image: "/images/product_serum.png",
    headline: "Surowy śluz najwyższej jakości",
    description:
      "Mucyna pozyskiwana bezpośrednio z hodowli, bez pośredników. Pełna dokumentacja jakościowa i elastyczne wolumeny dostosowane do potrzeb producenta.",
    features: ["Surowiec certyfikowany", "Pełna specyfikacja techniczna", "Elastyczny wolumen", "Stałe dostawy"],
    cta: "Zapytaj o cenę",
  },
  {
    id: "kosmetyki",
    emoji: "🧴",
    label: "Kosmetyki ze śluzu",
    tag: "Dla każdego",
    tagColor: "bg-[#C9A84C]/20 text-[#C9A84C]",
    image: "/images/product_cream.png",
    headline: "Naturalne kosmetyki z własnej hodowli",
    description:
      "Kremy, serum i maseczki wzbogacone mucyną ślimaka. Produkowane z surowców z własnej hodowli — bez sztucznych aromatów i wypełniaczy.",
    features: ["Kremy i serum", "Maseczki", "Bez sztucznych dodatków", "Własna hodowla"],
    cta: "Zamów teraz",
  },
  {
    id: "owoce",
    emoji: "🍎",
    label: "Owoce gruzińskie",
    tag: "Hurtownie / Sklepy",
    tagColor: "bg-[#3D7A3D]/20 text-[#6AAF47]",
    image: "/images/khaki.png",
    headline: "Owoce prosto z Kaukazu",
    description:
      "Granaty, winogrona, figi, persymony — sezonowe owoce gruzińskie dostępne hurtowo. Przechowywane we własnych chłodniach, zawsze świeże.",
    features: ["Granaty, figi, winogrona", "Własne chłodnie", "Dostawy hurtowe", "Kontrakty B2B"],
    cta: "Zapytaj o dostawę",
  },
  {
    id: "warzywa",
    emoji: "🥦",
    label: "Warzywa",
    tag: "Hurtownie / Sklepy",
    tagColor: "bg-[#3D7A3D]/20 text-[#6AAF47]",
    image: "/images/warzywa.png",
    headline: "Świeże warzywa przez cały rok",
    description:
      "Warzywa przechowywane we własnych chłodniach zapewniają ciągłość dostaw niezależnie od sezonu. Współpracujemy z hurtowniami i sieciami sklepów.",
    features: ["Całoroczna dostępność", "Własne magazyny chłodnicze", "Dostawy B2B", "Stałe kontrakty"],
    cta: "Zapytaj o dostawę",
  },
];

const steps = [
  { num: "1", title: "Wybierz produkt", desc: "Znajdź interesującą Cię kategorię i kliknij przycisk kontaktu." },
  { num: "2", title: "Skontaktuj się", desc: "Wyślij formularz lub zadzwoń — odpowiemy w ciągu 24h." },
  { num: "3", title: "Ustalamy szczegóły", desc: "Omawiamy ilość, termin i sposób dostawy dopasowany do Ciebie." },
];

export default function SklepPage() {
  return (
    <div className="pt-24 bg-[#0A0F0A] min-h-screen">

      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-[#0D160D] to-[#0A0F0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#C9A84C] uppercase tracking-widest mb-3">Oferta</p>
          <h1 className="text-4xl md:text-5xl font-light text-[#F5F0E8] font-serif leading-tight">
            Nasza oferta<br />
            <span className="text-[#C9A84C] italic font-normal">wszystko od producenta</span>
          </h1>
        </div>
      </section>

      {/* Quick nav */}
      <div className="sticky top-16 z-30 bg-[#0A0F0A]/95 backdrop-blur-md border-b border-[#1F2E1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm text-[#9A9A8A] hover:text-[#F5F0E8] hover:bg-[#1A231A] transition-all duration-200 no-underline"
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              id={cat.id}
              className="card-dark rounded-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:border-[#C9A84C]/20"
              style={{ scrollMarginTop: "8rem" }}
            >
              {/* Image */}
              <div className="md:w-72 md:flex-shrink-0">
                <img
                  src={cat.image}
                  alt={cat.headline}
                  className="w-full h-56 md:h-full object-cover"
                  style={{ borderRadius: "12px 0 0 12px" }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-7 flex flex-col gap-4">
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${cat.tagColor}`}>
                      {cat.tag}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-[#F5F0E8]">
                      {cat.emoji} {cat.headline}
                    </h2>
                  </div>
                </div>

                <p className="text-[#9A9A8A] text-sm leading-relaxed">{cat.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2">
                  {cat.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-[#9A9A8A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto pt-4 border-t border-[#1F2E1F]">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#C9A84C] to-[#A88B3D] text-black no-underline hover:opacity-90 transition-all duration-200"
                  >
                    {cat.cta} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to order */}
      <section className="py-16 bg-[#0D160D] border-t border-[#1F2E1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#C9A84C] uppercase tracking-widest mb-3">Jak zamówić?</p>
            <h2 className="text-2xl md:text-3xl font-light text-[#F5F0E8] font-serif">
              Proste jak 3 kroki
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="card-dark rounded-2xl p-7 flex flex-col gap-3">
                <span className="text-4xl font-bold text-[#C9A84C]/30">{step.num}</span>
                <h3 className="text-lg font-bold text-[#F5F0E8]">{step.title}</h3>
                <p className="text-sm text-[#9A9A8A] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-[#C9A84C] to-[#A88B3D] text-black no-underline hover:opacity-90 transition-all duration-200"
            >
              Przejdź do kontaktu →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

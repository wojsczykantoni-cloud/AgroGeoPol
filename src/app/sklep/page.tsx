import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oferta — Agrogeopol Ltd",
  description:
    "Świeże i mrożone owoce oraz warzywa z Gruzji — sprzedaż hurtowa, mrożonki IQF, eksport bezpośredni. Agrogeopol Ltd.",
};

const sections = [
  {
    id: "owoce",
    label: "Świeże owoce i warzywa",
    products: [
      {
        id: "swieze-owoce",
        emoji: "🍑",
        image: "/images/khaki.png",
        title: "Świeże owoce",
        subtitle: "Sezonowo z Gruzji",
        tag: "Świeże",
        tagColor: "bg-[#3D7A3D]/20 text-[#6AAF47]",
        headline: "Śliwki, brzoskwinie, wiśnie, jabłka, gruszki",
        description: "Sezonowe owoce gruzińskie najwyższej jakości — prosto z sadów Kaukazu. Bezpośredni eksport, bez pośredników.",
        features: ["Śliwki i brzoskwinie", "Wiśnie i czereśnie", "Jabłka i gruszki", "Dostawa hurtowa"],
        cta: "Zapytaj o dostawę",
      },
      {
        id: "swieze-warzywa",
        emoji: "🌽",
        image: "/images/warzywa.png",
        title: "Świeże warzywa",
        subtitle: "Sezonowo z Gruzji",
        tag: "Świeże",
        tagColor: "bg-[#3D7A3D]/20 text-[#6AAF47]",
        headline: "Pomidory, papryka, ogórki, kukurydza",
        description: "Świeże warzywa z gruzińskich upraw — pomidory, papryka, ogórki, kukurydza. Dostępne sezonowo w dostawach hurtowych.",
        features: ["Pomidory i papryka", "Ogórki i kukurydza", "Sezonowa dostępność", "Dostawy hurtowe B2B"],
        cta: "Zapytaj o dostawę",
      },
    ],
  },
  {
    id: "mrozonki",
    label: "Mrożonki IQF",
    products: [
      {
        id: "mrozone-owoce",
        emoji: "❄️",
        image: "/images/khaki.png",
        title: "Mrożone owoce IQF",
        subtitle: "Indywidualnie mrożone",
        tag: "Mrożone IQF",
        tagColor: "bg-[#1A4A7A]/30 text-[#4A9EC9]",
        headline: "Truskawki, wiśnie, śliwki, maliny",
        description: "Owoce mrożone metodą IQF — każda sztuka osobno. Zachowana świeżość, wartości odżywcze i naturalny smak. Idealne dla przetwórni i gastronomii.",
        features: ["Truskawki IQF", "Wiśnie i maliny IQF", "Śliwki IQF", "Skala przemysłowa"],
        cta: "Zapytaj o cenę",
      },
      {
        id: "mrozone-warzywa",
        emoji: "❄️",
        image: "/images/warzywa.png",
        title: "Mrożone warzywa IQF",
        subtitle: "Indywidualnie mrożone",
        tag: "Mrożone IQF",
        tagColor: "bg-[#1A4A7A]/30 text-[#4A9EC9]",
        headline: "Fasolka, groszek, kukurydza, mix warzywny",
        description: "Warzywa mrożone IQF dostępne przez cały rok — fasolka szparagowa, groszek zielony, kukurydza, mix warzywny. Stała dostępność dzięki własnym chłodniom.",
        features: ["Fasolka szparagowa", "Groszek zielony", "Kukurydza", "Mix warzywny"],
        cta: "Zapytaj o cenę",
      },
    ],
  },
  {
    id: "slimaki",
    label: "Oferta uzupełniająca",
    products: [
      {
        id: "mrozone-slimaki",
        emoji: "🐌",
        image: "/images/audience_restaurants.png",
        title: "Mrożone ślimaki / Filet",
        subtitle: "Produkt dodatkowy",
        tag: "Oferta uzupełniająca",
        tagColor: "bg-[#9A9A8A]/10 text-[#9A9A8A]",
        headline: "Mrożone ślimaki i filet ze ślimaków",
        description: "Produkt przeznaczony na eksport. Ślimaki hodowane w kontrolowanych warunkach, mrożone i pakowane zgodnie z wymogami eksportowymi.",
        features: ["Mrożone ślimaki", "Filet ze ślimaków", "Eksport", "Kontrolowane warunki hodowli"],
        cta: "Zapytaj o cenę",
      },
    ],
  },
];

const usps = [
  { emoji: "🌍", title: "Bezpośredni eksport z Gruzji", desc: "Bez zbędnych pośredników — prosto od producenta." },
  { emoji: "❄️", title: "Mrożenie IQF", desc: "Zachowana świeżość i wartości odżywcze każdego produktu." },
  { emoji: "📦", title: "Dostawy hurtowe", desc: "Obsługujemy kontrakty hurtowe i stałe zamówienia B2B." },
  { emoji: "✅", title: "Kontrola jakości", desc: "Każda partia kontrolowana na każdym etapie produkcji." },
];

const steps = [
  { num: "1", title: "Wybierz produkt", desc: "Znajdź interesującą Cię kategorię i kliknij przycisk kontaktu." },
  { num: "2", title: "Skontaktuj się", desc: "Wyślij formularz lub zadzwoń — odpowiemy w ciągu 24h." },
  { num: "3", title: "Ustalamy szczegóły", desc: "Omawiamy ilość, termin i sposób dostawy dopasowany do Ciebie." },
];

export default function SklepPage() {
  return (
    <div className="pt-24 bg-[#0D0808] min-h-screen">

      {/* Header */}
      <section className="py-14 bg-gradient-to-b from-[#150C0C] to-[#0D0808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#C0392B] uppercase tracking-widest mb-3">Oferta</p>
          <h1 className="text-4xl md:text-5xl font-light text-[#F5F0E8] font-serif leading-tight mb-6">
            Nasza oferta<br />
            <span className="text-[#C0392B] italic font-normal">Owoce i warzywa z Gruzji</span>
          </h1>
          <p className="text-[#9A9A8A] text-base max-w-2xl leading-relaxed">
            Dostarczamy produkty prosto z Gruzji — kraju o wyjątkowym klimacie i tradycjach rolniczych. Oferujemy zarówno świeże dostawy sezonowe, jak i mrożonki IQF na skalę hurtową.
          </p>
        </div>
      </section>

      {/* USP strip */}
      <div className="border-y border-[#2A1818] bg-[#150C0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#2A1818]">
            {usps.map((u) => (
              <div key={u.title} className="py-5 px-6 flex flex-col gap-1">
                <span className="text-xl">{u.emoji}</span>
                <p className="text-sm font-semibold text-[#F5F0E8]">{u.title}</p>
                <p className="text-xs text-[#9A9A8A]">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick nav */}
      <div className="sticky top-16 z-30 bg-[#0D0808]/95 backdrop-blur-md border-b border-[#2A1818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="flex-shrink-0 px-4 py-2 rounded-full text-sm text-[#9A9A8A] hover:text-[#F5F0E8] hover:bg-[#1A231A] transition-all duration-200 no-underline">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="py-12" style={{ scrollMarginTop: "8rem" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-semibold text-[#C0392B] uppercase tracking-widest">{section.label}</span>
              <div className="flex-1 h-px bg-[#2A1818]" />
            </div>
            <div className="flex flex-col gap-5">
              {section.products.map((cat) => (
                <div
                  key={cat.id}
                  id={cat.id}
                  className="card-dark rounded-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:border-[#C0392B]/20"
                  style={{ scrollMarginTop: "8rem" }}
                >
                  <div className="md:w-72 md:flex-shrink-0">
                    <img src={cat.image} alt={cat.headline} className="w-full h-56 md:h-full object-cover" style={{ borderRadius: "12px 0 0 12px" }} />
                  </div>
                  <div className="flex-1 p-7 flex flex-col gap-4">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${cat.tagColor}`}>{cat.tag}</span>
                      <h2 className="text-xl md:text-2xl font-bold text-[#F5F0E8]">{cat.emoji} {cat.headline}</h2>
                      <p className="text-sm text-[#C0392B] font-medium mt-1">{cat.subtitle}</p>
                    </div>
                    <p className="text-[#9A9A8A] text-sm leading-relaxed">{cat.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {cat.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-[#9A9A8A]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B] shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pt-4 border-t border-[#2A1818]">
                      <Link href="/kontakt" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#C0392B] to-[#A88B3D] text-black no-underline hover:opacity-90 transition-all duration-200">
                        {cat.cta} →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* How to order */}
      <section className="py-16 bg-[#150C0C] border-t border-[#2A1818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#C0392B] uppercase tracking-widest mb-3">Jak zamówić?</p>
            <h2 className="text-2xl md:text-3xl font-light text-[#F5F0E8] font-serif">Proste jak 3 kroki</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="card-dark rounded-2xl p-7 flex flex-col gap-3">
                <span className="text-4xl font-bold text-[#C0392B]/30">{step.num}</span>
                <h3 className="text-lg font-bold text-[#F5F0E8]">{step.title}</h3>
                <p className="text-sm text-[#9A9A8A] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-[#C0392B] to-[#A88B3D] text-black no-underline hover:opacity-90 transition-all duration-200">
              Przejdź do kontaktu →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

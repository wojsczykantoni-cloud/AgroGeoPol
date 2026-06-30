import type { Metadata } from "next";
import Link from "next/link";
import ProductCatalog from "@/components/sklep/ProductCatalog";

export const metadata: Metadata = {
  title: "Oferta — AgroGeoPol Ltd",
  description:
    "Świeże i mrożone owoce oraz warzywa z Gruzji — sprzedaż hurtowa, mrożonki IQF, eksport bezpośredni. AgroGeoPol Ltd.",
};

const currentMonth = new Date().getMonth() + 1;
const freshFruitMonths = [4, 5, 6, 7, 8, 9, 10, 11];
const freshVegMonths = [3, 4, 5, 6, 7, 8, 9, 10, 11];

function badge(type: "fruit" | "veg" | "iqf" | "extra") {
  if (type === "iqf")
    return { label: "● Całoroczne", cls: "bg-[#4A9EC9]/15 text-[#4A9EC9]" };
  if (type === "extra")
    return { label: "Na zamówienie", cls: "bg-[#909090]/15 text-[#909090]" };
  const now =
    type === "fruit"
      ? freshFruitMonths.includes(currentMonth)
      : freshVegMonths.includes(currentMonth);
  return now
    ? { label: "● Dostępne teraz", cls: "bg-[#8DC432]/15 text-[#8DC432]" }
    : { label: "◌ Sezonowo", cls: "bg-[#D4C478]/15 text-[#D4C478]" };
}

const steps = [
  {
    num: "1",
    title: "Wybierz produkt",
    desc: "Znajdź interesującą Cię kategorię i kliknij przycisk kontaktu.",
  },
  {
    num: "2",
    title: "Skontaktuj się",
    desc: "Wyślij formularz lub zadzwoń — odpowiemy w ciągu 24h.",
  },
  {
    num: "3",
    title: "Ustalamy szczegóły",
    desc: "Omawiamy ilość, termin i sposób dostawy dopasowany do Ciebie.",
  },
];

export default function SklepPage() {
  const fruitBadge = badge("fruit");
  const vegBadge = badge("veg");
  const iqfBadge = badge("iqf");
  const extraBadge = badge("extra");

  return (
    <div className="pt-24 bg-[#111111] min-h-screen">

      {/* ── PAGE HEADER ── */}
      <section className="py-14 bg-gradient-to-b from-[#181818] to-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#D4C478] uppercase tracking-widest mb-3">
            Oferta hurtowa
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-[#F5F5F5] font-serif leading-tight mb-4">
            Owoce i warzywa z Gruzji
            <span className="block text-[#D4C478] italic font-normal">
              świeże i mrożone IQF
            </span>
          </h1>
          <p className="text-[#909090] text-base max-w-2xl leading-relaxed">
            Bezpośredni eksport z Gruzji — bez pośredników, dla hurtowni,
            przetwórni i sieci handlowych. Dostępne jako dostawy sezonowe
            świeżych produktów oraz całoroczne mrożonki IQF.
          </p>
        </div>
      </section>

      {/* ── B2B INFO STRIP ── */}
      <div className="border-y border-[#2A2A2A] bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#2A2A2A]">
            <div className="py-5 px-6 flex items-center gap-4">
              <span className="text-2xl shrink-0">📦</span>
              <div>
                <p className="text-sm font-semibold text-[#F5F5F5]">
                  Minimalne zamówienie
                </p>
                <p className="text-xs text-[#909090]">
                  MOQ — do ustalenia indywidualnie
                </p>
              </div>
            </div>
            <div className="py-5 px-6 flex items-center gap-4">
              <span className="text-2xl shrink-0">🚚</span>
              <div>
                <p className="text-sm font-semibold text-[#F5F5F5]">
                  Warunki dostawy
                </p>
                <p className="text-xs text-[#909090]">
                  Eksport — wycena indywidualna
                </p>
              </div>
            </div>
            <div className="py-5 px-6 flex items-center gap-4">
              <span className="text-2xl shrink-0">⏱</span>
              <div>
                <p className="text-sm font-semibold text-[#F5F5F5]">
                  Czas odpowiedzi
                </p>
                <p className="text-xs text-[#909090]">
                  Odpowiadamy w ciągu 24h
                </p>
              </div>
            </div>
            <div className="py-5 px-6 flex items-center gap-4">
              <Link
                href="/kontakt"
                className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#D4C478] to-[#B8A860] text-[#111111] hover:opacity-90 transition-opacity no-underline"
              >
                📞 Zapytaj o ofertę
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── QUICK NAV ── */}
      <div className="sticky top-16 z-30 bg-[#111111]/95 backdrop-blur-md border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            <a href="#swieze" className="flex-shrink-0 px-4 py-2 rounded-full text-sm text-[#909090] hover:text-[#F5F5F5] hover:bg-[#1A1A1A] transition-all duration-200 no-underline">
              🍑 Świeże
            </a>
            <a href="#mrozonki" className="flex-shrink-0 px-4 py-2 rounded-full text-sm text-[#909090] hover:text-[#F5F5F5] hover:bg-[#1A1A1A] transition-all duration-200 no-underline">
              ❄️ Mrożone IQF
            </a>
            <a href="#katalog-sezonowy" className="flex-shrink-0 px-4 py-2 rounded-full text-sm text-[#D4C478] hover:text-[#F5F5F5] hover:bg-[#1A1A1A] transition-all duration-200 no-underline font-medium">
              📅 Kalendarz sezonowości
            </a>
            <a href="#uzupelniajace" className="flex-shrink-0 px-4 py-2 rounded-full text-sm text-[#909090] hover:text-[#F5F5F5] hover:bg-[#1A1A1A] transition-all duration-200 no-underline">
              🐌 Oferta uzupełniająca
            </a>
          </div>
        </div>
      </div>

      {/* ── FRESH PRODUCE ── */}
      <section id="swieze" className="py-14" style={{ scrollMarginTop: "8rem" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold text-[#8DC432] uppercase tracking-widest mb-0.5">
                Kategoria 1 z 2
              </p>
              <h2 className="text-2xl font-bold text-[#F5F5F5]">
                🍑 Świeże owoce i warzywa
              </h2>
            </div>
            <div className="flex-1 h-px bg-[#2A2A2A]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Świeże owoce */}
            <div
              id="swieze-owoce"
              className="card-dark rounded-2xl overflow-hidden flex flex-col"
              style={{ scrollMarginTop: "8rem" }}
            >
              <div className="h-24 bg-gradient-to-br from-[#8DC432]/20 to-[#8DC432]/5 flex items-center px-7 gap-4 border-b border-[#2A2A2A]">
                <img
                  src="/images/produkty/winogrono.jpg"
                  alt="Świeże owoce z Gruzji"
                  className="w-12 h-12 rounded-xl object-cover border border-[#2A2A2A] shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5]">
                    Świeże owoce
                  </h3>
                  <p className="text-sm text-[#8DC432]">Sezonowo z Gruzji</p>
                </div>
                <span
                  className={`ml-auto text-xs font-semibold px-3 py-1.5 rounded-full ${fruitBadge.cls}`}
                >
                  {fruitBadge.label}
                </span>
              </div>
              <div className="p-7 flex flex-col gap-5 flex-1">
                <p className="text-[#909090] text-sm leading-relaxed">
                  Sezonowe owoce z gruzińskich sadów — bezpośredni eksport, bez
                  pośredników. Nowe odmiany co kilka tygodni przez cały sezon.
                </p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                  {[
                    { label: "Brzoskwinie i nektarynki", img: "brzoskwinia.jpg" },
                    { label: "Wiśnie i czereśnie", img: "wisnia.jpg" },
                    { label: "Śliwki i morele", img: "sliwka.jpg" },
                    { label: "Jabłka i gruszki", img: "gruszka.jpg" },
                    { label: "Winogrona (biały/czerwony)", img: "winogrono.jpg" },
                    { label: "Figa, kaki, granat", img: "figa.jpg" },
                    { label: "Truskawki i maliny", img: "truskawka.jpg" },
                    { label: "Borówka, jeżyna, morwa", img: "borowka-amerykanska.jpg" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5 text-sm text-[#909090]">
                      <img
                        src={`/images/produkty/${item.img}`}
                        alt=""
                        className="w-8 h-8 rounded-lg object-cover border border-[#2A2A2A] shrink-0"
                      />
                      {item.label}
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-5 border-t border-[#2A2A2A] flex items-center justify-between">
                  <p className="text-xs text-[#909090]">
                    Dostępność: kwiecień – listopad
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#D4C478] to-[#B8A860] text-[#111111] no-underline hover:opacity-90 transition-opacity"
                  >
                    Zapytaj o dostawę →
                  </Link>
                </div>
              </div>
            </div>

            {/* Świeże warzywa */}
            <div
              id="swieze-warzywa"
              className="card-dark rounded-2xl overflow-hidden flex flex-col"
              style={{ scrollMarginTop: "8rem" }}
            >
              <div className="h-24 bg-gradient-to-br from-[#8DC432]/20 to-[#8DC432]/5 flex items-center px-7 gap-4 border-b border-[#2A2A2A]">
                <img
                  src="/images/produkty/pomidor.jpg"
                  alt="Świeże warzywa z Gruzji"
                  className="w-12 h-12 rounded-xl object-cover border border-[#2A2A2A] shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5]">
                    Świeże warzywa
                  </h3>
                  <p className="text-sm text-[#8DC432]">Sezonowo z Gruzji</p>
                </div>
                <span
                  className={`ml-auto text-xs font-semibold px-3 py-1.5 rounded-full ${vegBadge.cls}`}
                >
                  {vegBadge.label}
                </span>
              </div>
              <div className="p-7 flex flex-col gap-5 flex-1">
                <p className="text-[#909090] text-sm leading-relaxed">
                  Warzywa z gruzińskich upraw — pomidory, papryka, ogórki i
                  zioła. Część dostępna przez cały rok, część sezonowo.
                </p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                  {[
                    { label: "Pomidory i papryka", img: "pomidor.jpg" },
                    { label: "Ogórki i cukinia", img: "ogorki.jpg" },
                    { label: "Bakłażan i marchew", img: "baklazan.jpg" },
                    { label: "Kalafior i brokuł", img: "kalafior.jpg" },
                    { label: "Młode ziemniaki", img: "mlode-ziemniaki.jpg" },
                    { label: "Arbuz i melon", img: "arbuz.jpg" },
                    { label: "Kolendra, pietruszka, koperek", img: "ziola-kolendra-pietruszka-koperek.jpg" },
                    { label: "Bazylia czerwona", img: "bazylia-czerwona.jpg" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5 text-sm text-[#909090]">
                      <img
                        src={`/images/produkty/${item.img}`}
                        alt=""
                        className="w-8 h-8 rounded-lg object-cover border border-[#2A2A2A] shrink-0"
                      />
                      {item.label}
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-5 border-t border-[#2A2A2A] flex items-center justify-between">
                  <p className="text-xs text-[#909090]">
                    Dostępność: marzec – listopad
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#D4C478] to-[#B8A860] text-[#111111] no-underline hover:opacity-90 transition-opacity"
                  >
                    Zapytaj o dostawę →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IQF FROZEN ── */}
      <section id="mrozonki" className="py-14 bg-[#0D0D0D]" style={{ scrollMarginTop: "8rem" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold text-[#4A9EC9] uppercase tracking-widest mb-0.5">
                Kategoria 2 z 2
              </p>
              <h2 className="text-2xl font-bold text-[#F5F5F5]">
                ❄️ Mrożonki IQF — całoroczna dostępność
              </h2>
            </div>
            <div className="flex-1 h-px bg-[#2A2A2A]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mrożone owoce IQF */}
            <div
              id="mrozone-owoce"
              className="card-dark rounded-2xl overflow-hidden flex flex-col"
              style={{ scrollMarginTop: "8rem" }}
            >
              <div className="h-24 bg-gradient-to-br from-[#4A9EC9]/20 to-[#4A9EC9]/5 flex items-center px-7 gap-4 border-b border-[#2A2A2A]">
                <span className="text-4xl">❄️</span>
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5]">
                    Mrożone owoce IQF
                  </h3>
                  <p className="text-sm text-[#4A9EC9]">
                    Indywidualnie mrożone
                  </p>
                </div>
                <span
                  className={`ml-auto text-xs font-semibold px-3 py-1.5 rounded-full ${iqfBadge.cls}`}
                >
                  {iqfBadge.label}
                </span>
              </div>
              <div className="p-7 flex flex-col gap-5 flex-1">
                <p className="text-[#909090] text-sm leading-relaxed">
                  Mrożenie IQF — każda sztuka osobno. Zachowana świeżość,
                  wartości odżywcze i smak. Idealne dla przetwórni, gastronomii
                  i sieci handlowych.
                </p>
                <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                  {[
                    "Truskawki IQF",
                    "Wiśnie IQF",
                    "Maliny IQF",
                    "Śliwki IQF",
                    "Morele IQF",
                    "Brzoskwinie IQF",
                    "Porzeczki IQF",
                    "Jeżyny IQF",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#909090]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A9EC9] shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-5 border-t border-[#2A2A2A] flex items-center justify-between">
                  <p className="text-xs text-[#909090]">
                    Dostępność: cały rok (własne chłodnie)
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#D4C478] to-[#B8A860] text-[#111111] no-underline hover:opacity-90 transition-opacity"
                  >
                    Zapytaj o cenę →
                  </Link>
                </div>
              </div>
            </div>

            {/* Mrożone warzywa IQF */}
            <div
              id="mrozone-warzywa"
              className="card-dark rounded-2xl overflow-hidden flex flex-col"
              style={{ scrollMarginTop: "8rem" }}
            >
              <div className="h-24 bg-gradient-to-br from-[#4A9EC9]/20 to-[#4A9EC9]/5 flex items-center px-7 gap-4 border-b border-[#2A2A2A]">
                <span className="text-4xl">🥦</span>
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5]">
                    Mrożone warzywa IQF
                  </h3>
                  <p className="text-sm text-[#4A9EC9]">
                    Indywidualnie mrożone
                  </p>
                </div>
                <span
                  className={`ml-auto text-xs font-semibold px-3 py-1.5 rounded-full ${iqfBadge.cls}`}
                >
                  {iqfBadge.label}
                </span>
              </div>
              <div className="p-7 flex flex-col gap-5 flex-1">
                <p className="text-[#909090] text-sm leading-relaxed">
                  Warzywa mrożone IQF dostępne przez cały rok — stała
                  dostępność dzięki własnym chłodniom. Idealne do mixów i
                  gotowych dań.
                </p>
                <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                  {[
                    "Fasolka szparagowa",
                    "Groszek zielony",
                    "Kukurydza",
                    "Mix warzywny",
                    "Brokuł IQF",
                    "Kalafior IQF",
                    "Marchew IQF",
                    "Szpinak IQF",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#909090]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A9EC9] shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-5 border-t border-[#2A2A2A] flex items-center justify-between">
                  <p className="text-xs text-[#909090]">
                    Dostępność: cały rok (własne chłodnie)
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#D4C478] to-[#B8A860] text-[#111111] no-underline hover:opacity-90 transition-opacity"
                  >
                    Zapytaj o cenę →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALENDAR BANNER ── */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <a
          href="#katalog-sezonowy"
          className="no-underline group block rounded-2xl border border-[#D4C478]/30 bg-gradient-to-r from-[#1E1E1E] to-[#181818] px-8 py-6 hover:border-[#D4C478]/60 transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-[#D4C478] uppercase tracking-widest mb-1">
                Nie wiesz, co jest dostępne w tym miesiącu?
              </p>
              <h3 className="text-lg font-semibold text-[#F5F5F5] group-hover:text-[#D4C478] transition-colors">
                Zobacz pełny kalendarz sezonowości — 39 produktów z datami zbiorów ⬇
              </h3>
            </div>
            <span className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#D4C478]/10 text-[#D4C478] border border-[#D4C478]/30 group-hover:bg-[#D4C478]/20 transition-colors">
              📅 Przejdź do kalendarza
            </span>
          </div>
        </a>
      </div>

      {/* ── SEASONAL CATALOG (unchanged) ── */}
      <ProductCatalog />

      {/* ── SUPPLEMENT: SNAILS ── */}
      <section id="uzupelniajace" className="py-12 border-t border-[#1E1E1E]" style={{ scrollMarginTop: "8rem" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-xs font-semibold text-[#909090] uppercase tracking-widest">
              Oferta uzupełniająca
            </p>
            <div className="flex-1 h-px bg-[#1E1E1E]" />
          </div>
          <div className="max-w-xl">
            <div
              id="mrozone-slimaki"
              className="rounded-2xl border border-[#2A2A2A] bg-[#181818] overflow-hidden flex flex-col sm:flex-row"
              style={{ scrollMarginTop: "8rem" }}
            >
              <div className="sm:w-20 bg-[#1A1A1A] flex items-center justify-center p-6 text-4xl border-b sm:border-b-0 sm:border-r border-[#2A2A2A]">
                🐌
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-base font-semibold text-[#F5F5F5]">
                    Mrożone ślimaki / Filet ze ślimaków
                  </h3>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${extraBadge.cls}`}
                  >
                    {extraBadge.label}
                  </span>
                </div>
                <p className="text-sm text-[#909090] leading-relaxed">
                  Produkt uzupełniający — mrożone ślimaki i filet przeznaczone
                  na eksport. Hodowla w kontrolowanych warunkach, pakowanie
                  zgodne z wymogami eksportowymi.
                </p>
                <div className="pt-3 border-t border-[#2A2A2A]">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-[#2A2A2A] text-[#909090] hover:text-[#F5F5F5] hover:border-[#909090]/50 no-underline transition-colors"
                  >
                    Zapytaj o cenę →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO ORDER ── */}
      <section className="py-16 bg-[#181818] border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#D4C478] uppercase tracking-widest mb-3">
              Jak zamówić?
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-[#F5F5F5] font-serif">
              Proste jak 3 kroki
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="card-dark rounded-2xl p-7 flex flex-col gap-3"
              >
                <span className="text-4xl font-bold text-[#D4C478]/30">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-[#F5F5F5]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#909090] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-[#D4C478] to-[#B8A860] text-[#111111] no-underline hover:opacity-90 transition-opacity"
            >
              Przejdź do kontaktu →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

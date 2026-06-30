import type { Metadata } from "next";
import Link from "next/link";
import SklepKatalog from "@/components/sklep/SklepKatalog";

export const metadata: Metadata = {
  title: "Sklep — AgroGeoPol Ltd",
  description:
    "Świeże owoce i warzywa sezonowe z Gruzji — katalog z dostępnością miesięczną. Sprzedaż hurtowa dla hurtowni, sklepów i gastronomii. AgroGeoPol Ltd.",
};

export default function SklepPage() {
  return (
    <div className="pt-20 bg-[#111111] min-h-screen">
      {/* Sekcje 1–3: hero pasek, panel filtrów (sticky), siatka produktów */}
      <SklepKatalog />

      {/* ── SEKCJA 4 — BANER „OFERTA UZUPEŁNIAJĄCA" ── */}
      <section className="py-8 bg-[#111111] border-t border-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#8DC432]/20 bg-[#8DC432]/10 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-[#F5F5F5] leading-relaxed max-w-2xl">
              <span className="font-semibold">Oferujemy również:</span> Mrożonki IQF
              (truskawka, wiśnia, malina i inne) oraz hodowlę ślimaków — zapytaj o szczegóły.
            </p>
            <Link
              href="/kontakt"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-[#D4C478] to-[#B8A860] text-[#111111] no-underline hover:opacity-90 transition-opacity"
            >
              Zapytaj o ofertę uzupełniającą →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import SklepKatalog from "@/components/sklep/SklepKatalog";
import SklepBanner from "@/components/sklep/SklepBanner";

export const metadata: Metadata = {
  title: "Sklep",
  description:
    "Świeże owoce i warzywa sezonowe z Gruzji — katalog z dostępnością miesięczną. Sprzedaż hurtowa dla hurtowni, sklepów i gastronomii. AgroGeoPol Ltd.",
};

export default function SklepPage() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Sekcje 1–3: hero pasek, panel filtrów (sticky), siatka produktów */}
      <SklepKatalog />

      {/* Sekcja 4 — baner oferty uzupełniającej */}
      <SklepBanner />
    </div>
  );
}

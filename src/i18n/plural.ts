import type { Locale } from "@/i18n/config";

// Odmiana liczebnikowa (PL i RU mają 3 formy; EN 2).
function formPlRu(n: number, one: string, few: string, many: string): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return few;
  return many;
}

// Badge w hero sklepu: „{miesiąc} — {n} produkt(ów) dostępne".
export function badgeProduktyDostepne(lang: Locale, n: number, month: string): string {
  if (lang === "en") {
    return `${month} — ${n} ${n === 1 ? "product" : "products"} available`;
  }
  if (lang === "ru") {
    return `${month} — доступно ${n} ${formPlRu(n, "продукт", "продукта", "продуктов")}`;
  }
  return `${month} — ${n} ${formPlRu(n, "produkt", "produkty", "produktów")} dostępne`;
}

// „Pokazano {n} z {total} produktów".
export function liczbaPokazano(lang: Locale, n: number, total: number): string {
  if (lang === "en") return `Showing ${n} of ${total} products`;
  if (lang === "ru") return `Показано ${n} из ${total} ${formPlRu(total, "продукт", "продукта", "продуктов")}`;
  return `Pokazano ${n} z ${total} produktów`;
}

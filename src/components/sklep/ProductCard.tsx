'use client';

import type { Produkt } from '@/data/produkty';
import { useI18n } from '@/i18n/LanguageProvider';
import { tProdukt, zakresMiesiecyLoc } from '@/i18n/produkty-i18n';

export type Stan = 'caloryRok' | 'dostepny' | 'niedostepny';

const BADGE_CLS: Record<Stan, string> = {
  caloryRok: 'bg-[#4A9EC9]/15 text-[#4A9EC9]',
  dostepny: 'bg-secondary/15 text-secondary',
  niedostepny: 'bg-muted-foreground/15 text-muted-foreground',
};

export default function ProductCard({
  produkt,
  stan,
  onOpen,
}: {
  produkt: Produkt;
  stan: Stan;
  onOpen: (p: Produkt) => void;
}) {
  const { t, lang } = useI18n();
  const tr = tProdukt(produkt, lang);
  const przyciemniony = stan === 'niedostepny';

  const badgeLabel =
    stan === 'caloryRok'
      ? t.shop.cardAllYear
      : stan === 'dostepny'
        ? `● ${t.shop.cardAvailable}`
        : t.shop.cardUnavailable;

  return (
    <button
      onClick={() => onOpen(produkt)}
      aria-label={`${tr.nazwa} — ${tr.okresOpis}`}
      className={`group relative flex flex-col w-full aspect-[5/7] rounded-xl overflow-hidden border border-border bg-card text-left transition-all duration-200 hover:border-gold/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:border-gold ${
        przyciemniony ? 'opacity-40 [filter:grayscale(80%)]' : 'opacity-100'
      }`}
    >
      {/* Zdjęcie (≈60% wysokości) */}
      <div className="relative h-[58%] overflow-hidden">
        <img
          src={produkt.zdjecie}
          alt={tr.nazwa}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay z pełnym okresem (hover) */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center p-3">
          <p className="text-[11px] leading-snug text-white">{tr.okresOpis}</p>
        </div>
      </div>

      {/* Opis */}
      <div className="flex-1 flex flex-col gap-1 p-3">
        <h3 className="text-sm font-bold text-foreground leading-tight">{tr.nazwa}</h3>
        <p className="text-[11px] text-muted-foreground">
          {zakresMiesiecyLoc(produkt.miesiace, t.months.short, t.shop.allYearText)}
        </p>
        <span className={`mt-auto inline-block w-fit text-[10px] font-semibold px-2 py-0.5 rounded-full ${BADGE_CLS[stan]}`}>
          {badgeLabel}
        </span>
      </div>
    </button>
  );
}

import type { Produkt } from '@/data/produkty';
import { zakresMiesiecy } from '@/data/produkty';

export type Stan = 'caloryRok' | 'dostepny' | 'niedostepny';

const BADGE: Record<Stan, { label: string; cls: string }> = {
  caloryRok: { label: 'Cały rok', cls: 'bg-[#4A9EC9]/15 text-[#4A9EC9]' },
  dostepny: { label: '● Dostępne', cls: 'bg-[#8DC432]/15 text-[#8DC432]' },
  niedostepny: { label: 'Niedostępne', cls: 'bg-[#909090]/15 text-[#909090]' },
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
  const badge = BADGE[stan];
  const przyciemniony = stan === 'niedostepny';

  return (
    <button
      onClick={() => onOpen(produkt)}
      aria-label={`${produkt.nazwa} — ${produkt.okresOpis}`}
      className={`group relative flex flex-col w-full aspect-[5/7] rounded-xl overflow-hidden border border-[#2A2A2A] bg-[#1E1E1E] text-left transition-all duration-200 hover:border-[#D4C478]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4C478] focus-visible:border-[#D4C478] ${
        przyciemniony ? 'opacity-40 [filter:grayscale(80%)]' : 'opacity-100'
      }`}
    >
      {/* Zdjęcie (≈60% wysokości) */}
      <div className="relative h-[58%] overflow-hidden">
        <img
          src={produkt.zdjecie}
          alt={produkt.nazwa}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay z pełnym okresem (hover) */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center p-3">
          <p className="text-[11px] leading-snug text-[#F5F5F5]">{produkt.okresOpis}</p>
        </div>
      </div>

      {/* Opis */}
      <div className="flex-1 flex flex-col gap-1 p-3">
        <h3 className="text-sm font-bold text-[#F5F5F5] leading-tight">{produkt.nazwa}</h3>
        <p className="text-[11px] text-[#909090]">{zakresMiesiecy(produkt.miesiace)}</p>
        <span className={`mt-auto inline-block w-fit text-[10px] font-semibold px-2 py-0.5 rounded-full ${badge.cls}`}>
          {badge.label}
        </span>
      </div>
    </button>
  );
}

import type { Produkt } from '@/data/produkty';
import { zakresMiesiecy } from '@/data/produkty';

export type Stan = 'caloryRok' | 'dostepny' | 'niedostepny';

const BADGE: Record<Stan, { label: string; cls: string }> = {
  caloryRok: { label: 'Cały rok', cls: 'bg-[#3E6B8A]/12 text-[#3E6B8A]' },
  dostepny: { label: '● Dostępne', cls: 'bg-[#2A5A2E]/12 text-[#2A5A2E]' },
  niedostepny: { label: 'Niedostępne', cls: 'bg-[#6B6A5F]/12 text-[#6B6A5F]' },
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
      className={`group relative flex flex-col w-full aspect-[5/7] rounded-xl overflow-hidden border border-[#EBE3D5] bg-white shadow-sm text-left transition-all duration-200 hover:border-[#C2A34F]/60 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A34F] focus-visible:border-[#C2A34F] ${
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
        <div className="absolute inset-0 bg-[#1B3016]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center p-3">
          <p className="text-[11px] leading-snug text-white">{produkt.okresOpis}</p>
        </div>
      </div>

      {/* Opis */}
      <div className="flex-1 flex flex-col gap-1 p-3">
        <h3 className="text-sm font-bold text-[#26302A] leading-tight">{produkt.nazwa}</h3>
        <p className="text-[11px] text-[#6B6A5F]">{zakresMiesiecy(produkt.miesiace)}</p>
        <span className={`mt-auto inline-block w-fit text-[10px] font-semibold px-2 py-0.5 rounded-full ${badge.cls}`}>
          {badge.label}
        </span>
      </div>
    </button>
  );
}

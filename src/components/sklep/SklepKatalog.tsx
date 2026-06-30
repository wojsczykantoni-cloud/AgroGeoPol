'use client';

import { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import {
  produkty,
  MIESIACE_PELNE,
  MIESIACE_RZYM,
  dostepnyWMiesiacu,
  type Produkt,
  type Kategoria,
} from '@/data/produkty';
import ProductCard, { type Stan } from './ProductCard';
import ProductModal from './ProductModal';

type KatFiltr = 'all' | Kategoria;
type DostMode = 'teraz' | 'calyRok' | 'miesiac';

const KATEGORIE: { id: KatFiltr; label: string }[] = [
  { id: 'all', label: 'Wszystkie' },
  { id: 'owoc', label: 'Owoce' },
  { id: 'warzywo', label: 'Warzywa' },
  { id: 'ziolo', label: 'Zioła' },
  { id: 'orzech', label: 'Orzechy' },
];

const DOSTEPNOSC: { id: DostMode; label: string }[] = [
  { id: 'teraz', label: 'Dostępne teraz' },
  { id: 'calyRok', label: 'Cały rok' },
  { id: 'miesiac', label: 'Wybierz miesiąc ▾' },
];

function odmianaProdukt(n: number): string {
  if (n === 1) return 'produkt';
  const d = n % 10;
  const s = n % 100;
  if (d >= 2 && d <= 4 && !(s >= 12 && s <= 14)) return 'produkty';
  return 'produktów';
}

const pill =
  'shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4C478]';
const pillActive = 'bg-[#D4C478] text-[#111111]';
const pillIdle =
  'bg-[#1E1E1E] text-[#909090] border border-[#2A2A2A] hover:text-[#F5F5F5] hover:border-[#D4C478]/40';

export default function SklepKatalog() {
  const [mounted, setMounted] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(1);
  const [kat, setKat] = useState<KatFiltr>('all');
  const [dostMode, setDostMode] = useState<DostMode>('teraz');
  const [miesiac, setMiesiac] = useState(1);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Produkt | null>(null);

  useEffect(() => {
    const m = new Date().getMonth() + 1;
    setCurrentMonth(m);
    setMiesiac(m);
    setMounted(true);
  }, []);

  // Stan dostępności (do przyciemnienia / badge). Przed montażem: neutralny.
  const stanProduktu = (p: Produkt): Stan => {
    if (p.caloryRok) return 'caloryRok';
    if (!mounted) return 'dostepny';
    if (dostMode === 'calyRok') return 'niedostepny';
    const ref = dostMode === 'miesiac' ? miesiac : currentMonth;
    return p.miesiace.includes(ref) ? 'dostepny' : 'niedostepny';
  };

  // Filtrowanie zawężające (kategoria + szukaj) — ukrywa.
  const widoczne = useMemo(() => {
    const q = search.trim().toLowerCase();
    return produkty.filter((p) => {
      if (kat !== 'all' && p.kategoria !== kat) return false;
      if (q && !`${p.nazwa} ${p.nazwaLac ?? ''}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [kat, search]);

  const liczbaTeraz = useMemo(
    () => produkty.filter((p) => dostepnyWMiesiacu(p, currentMonth)).length,
    [currentMonth],
  );

  const gridKey = `${kat}|${dostMode}|${miesiac}|${search}`;

  return (
    <>
      {/* ── SEKCJA 1 — HERO PASEK ── */}
      <section className="bg-gradient-to-b from-[#181818] to-[#111111] border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-light text-[#F5F5F5] font-serif">Sklep</h1>
            <p className="text-[#909090] text-base mt-1">
              Świeże owoce i warzywa sezonowe z Gruzji
            </p>
          </div>
          {mounted && (
            <div className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-full border border-[#D4C478]/30 bg-[#D4C478]/10">
              <span className="w-2 h-2 rounded-full bg-[#8DC432] animate-pulse" />
              <span className="text-sm font-medium text-[#D4C478]">
                {MIESIACE_PELNE[currentMonth - 1]} — {liczbaTeraz} {odmianaProdukt(liczbaTeraz)} dostępne
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ── SEKCJA 2 — PANEL FILTRÓW (sticky) ── */}
      <div className="sticky top-16 z-30 bg-[#181818]/95 backdrop-blur-md border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-3">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
            {/* [1] Kategoria */}
            <div className="flex gap-1.5 overflow-x-auto scrollbar-none -mx-4 px-4 lg:mx-0 lg:px-0">
              {KATEGORIE.map((k) => (
                <button
                  key={k.id}
                  onClick={() => setKat(k.id)}
                  className={`${pill} ${kat === k.id ? pillActive : pillIdle}`}
                >
                  {k.label}
                </button>
              ))}
            </div>

            {/* [2] Dostępność + [3] Szukaj */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <div className="flex gap-1.5 overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
                {DOSTEPNOSC.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setDostMode(d.id)}
                    className={`${pill} ${dostMode === d.id ? pillActive : pillIdle}`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>

              {/* Szukaj */}
              <div className="relative sm:w-56">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#909090]" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Szukaj produktu…"
                  aria-label="Szukaj produktu"
                  className="w-full pl-9 pr-3 py-2 rounded-full text-sm bg-[#1E1E1E] border border-[#2A2A2A] text-[#F5F5F5] placeholder:text-[#909090] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4C478] focus:border-[#D4C478]"
                />
              </div>
            </div>
          </div>

          {/* Rząd pigułek miesięcy (tylko gdy „Wybierz miesiąc") */}
          {dostMode === 'miesiac' && (
            <div className="overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex gap-1.5 w-max">
                {MIESIACE_RZYM.map((r, i) => {
                  const m = i + 1;
                  return (
                    <button
                      key={r}
                      onClick={() => setMiesiac(m)}
                      aria-label={MIESIACE_PELNE[i]}
                      className={`shrink-0 w-11 h-9 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4C478] ${
                        miesiac === m
                          ? 'bg-gradient-to-br from-[#D4C478] to-[#B8A860] text-[#111111] shadow-lg shadow-[#D4C478]/20'
                          : 'bg-[#1E1E1E] text-[#909090] border border-[#2A2A2A] hover:text-[#F5F5F5] hover:border-[#D4C478]/40'
                      }`}
                    >
                      {r}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── SEKCJA 3 — SIATKA PRODUKTÓW ── */}
      <section className="py-10 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-[#909090] mb-5">
            Pokazano {widoczne.length} z {produkty.length} produktów
          </p>

          {widoczne.length === 0 ? (
            <div className="py-20 text-center text-[#909090]">
              Brak produktów spełniających wybrane kryteria.
            </div>
          ) : (
            <div
              key={gridKey}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 animate-fade-in"
              style={{ animationDuration: '150ms' }}
            >
              {widoczne.map((p) => (
                <ProductCard key={p.id} produkt={p} stan={stanProduktu(p)} onOpen={setSelected} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <ProductModal
          produkt={selected}
          stan={stanProduktu(selected)}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}

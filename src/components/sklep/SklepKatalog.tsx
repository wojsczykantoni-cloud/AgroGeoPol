'use client';

import { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import {
  produkty,
  MIESIACE_RZYM,
  dostepnyWMiesiacu,
  type Produkt,
  type Kategoria,
} from '@/data/produkty';
import { useI18n } from '@/i18n/LanguageProvider';
import { tProdukt } from '@/i18n/produkty-i18n';
import { badgeProduktyDostepne, liczbaPokazano } from '@/i18n/plural';
import ProductCard, { type Stan } from './ProductCard';
import ProductModal from './ProductModal';

type KatFiltr = 'all' | Kategoria;
type DostMode = 'teraz' | 'calyRok' | 'miesiac';

const KAT_IDS: KatFiltr[] = ['all', 'owoc', 'warzywo', 'ziolo', 'orzech'];
const DOST_IDS: DostMode[] = ['teraz', 'calyRok', 'miesiac'];

const pill =
  'shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold';
const pillActive = 'bg-gold text-[#14170F]';
const pillIdle =
  'bg-card text-muted-foreground border border-border hover:text-foreground hover:border-gold/40';

// Kolory kategorii spójne z katalogiem PDF (paleta naturalna).
// „Wszystkie" = zieleń marki, spinająca całość.
const KAT_KOLOR: Record<KatFiltr, string> = {
  all: '#4a7c3f',
  owoc: '#b23a3a',
  warzywo: '#4a7c3f',
  ziolo: '#7a9233',
  orzech: '#8a5a3b',
};

export default function SklepKatalog() {
  const { t, lang } = useI18n();
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

  // Czy produkt jest dostępny wg aktywnego filtra (do sortowania).
  const czyDostepny = (p: Produkt): boolean => {
    if (p.caloryRok) return true;
    if (!mounted) return true;
    if (dostMode === 'calyRok') return false;
    const ref = dostMode === 'miesiac' ? miesiac : currentMonth;
    return p.miesiace.includes(ref);
  };

  // Filtrowanie zawężające (kategoria + szukaj) — ukrywa.
  // Sortowanie: dostępne najpierw, niedostępne (przyciemnione) na końcu.
  const widoczne = useMemo(() => {
    const q = search.trim().toLowerCase();
    return produkty
      .filter((p) => {
        if (kat !== 'all' && p.kategoria !== kat) return false;
        if (q) {
          const nazwaLoc = tProdukt(p, lang).nazwa;
          if (!`${nazwaLoc} ${p.nazwa} ${p.nazwaLac ?? ''}`.toLowerCase().includes(q)) return false;
        }
        return true;
      })
      .sort((a, b) => Number(czyDostepny(b)) - Number(czyDostepny(a)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kat, search, mounted, dostMode, miesiac, currentMonth, lang]);

  const liczbaTeraz = useMemo(
    () => produkty.filter((p) => dostepnyWMiesiacu(p, currentMonth)).length,
    [currentMonth],
  );

  const gridKey = `${kat}|${dostMode}|${miesiac}|${search}`;

  return (
    <>
      {/* ── SEKCJA 1 — HERO PASEK ── */}
      <section className="bg-gradient-to-b from-muted to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-light text-foreground font-serif">{t.shop.title}</h1>
            <p className="text-muted-foreground text-base mt-1">
              {t.shop.subtitle}
            </p>
          </div>
          {mounted && (
            <div className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-full border border-gold/30 bg-gold/10">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-gold">
                {badgeProduktyDostepne(lang, liczbaTeraz, t.months.full[currentMonth - 1])}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ── SEKCJA 2 — PANEL FILTRÓW (sticky) ── */}
      <div className="sticky top-16 z-30 bg-muted/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-3">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
            {/* [1] Kategoria */}
            <div className="flex gap-1.5 overflow-x-auto scrollbar-none -mx-4 px-4 lg:mx-0 lg:px-0">
              {KAT_IDS.map((id) => (
                <button
                  key={id}
                  onClick={() => setKat(id)}
                  className={`${pill} ${kat === id ? 'text-white font-semibold' : pillIdle}`}
                  style={kat === id ? { backgroundColor: KAT_KOLOR[id] } : undefined}
                >
                  {t.shop.categories[id]}
                </button>
              ))}
            </div>

            {/* [2] Dostępność + [3] Szukaj */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <div className="flex gap-1.5 overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
                {DOST_IDS.map((id) => (
                  <button
                    key={id}
                    onClick={() => setDostMode(id)}
                    className={`${pill} ${dostMode === id ? pillActive : pillIdle}`}
                  >
                    {id === 'teraz' ? t.shop.availNow : id === 'calyRok' ? t.shop.allYear : `${t.shop.pickMonth} ▾`}
                  </button>
                ))}
              </div>

              {/* Szukaj */}
              <div className="relative sm:w-56">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t.shop.search}
                  aria-label={t.shop.search}
                  className="w-full pl-9 pr-3 py-2 rounded-full text-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus:border-gold"
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
                      aria-label={t.months.full[i]}
                      className={`shrink-0 w-11 h-9 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                        miesiac === m
                          ? 'bg-gradient-to-br from-gold to-gold-deep text-[#14170F] shadow-lg shadow-gold/20'
                          : 'bg-card text-muted-foreground border border-border hover:text-foreground hover:border-gold/40'
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
      <section className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground mb-5">
            {liczbaPokazano(lang, widoczne.length, produkty.length)}
          </p>

          {widoczne.length === 0 ? (
            <div className="py-20 text-center text-muted-foreground">
              {t.shop.empty}
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

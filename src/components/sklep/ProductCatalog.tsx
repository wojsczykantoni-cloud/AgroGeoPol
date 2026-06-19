'use client';

import { useState } from 'react';

const MONTHS = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'];

type Category = 'owoc' | 'warzywo';
type Filter = 'all' | 'owoc' | 'warzywo';

type Product = {
  id: number;
  name: string;
  note?: string;
  category: Category;
  availability: string;
  months: number[];
};

const products: Product[] = [
  // Owoce — sorted by first month of availability
  { id: 1,  name: 'Truskawka',                                    category: 'owoc',    availability: 'kwiecień – czerwiec',                    months: [4,5,6] },
  { id: 2,  name: 'Morwa',                                        category: 'owoc',    availability: 'połowa maja – czerwiec',                  months: [5,6] },
  { id: 3,  name: 'Czereśnia',                                    category: 'owoc',    availability: 'maj – czerwiec',                          months: [5,6] },
  { id: 4,  name: 'Malina',                                       category: 'owoc',    availability: 'maj – lipiec',                            months: [5,6,7] },
  { id: 5,  name: 'Borówka amerykańska',                          category: 'owoc',    availability: 'maj – czerwiec',                          months: [5,6] },
  { id: 6,  name: 'Morela',                                       category: 'owoc',    availability: 'koniec maja – połowa czerwca',             months: [5,6] },
  { id: 7,  name: 'Alucha',         note: 'Prunus vachuschti',   category: 'owoc',    availability: 'maj – połowa czerwca',                    months: [5,6] },
  { id: 8,  name: 'Muszmala',                                     category: 'owoc',    availability: 'koniec maja – początek lipca',             months: [5,6,7] },
  { id: 9,  name: 'Tkemali',        note: 'gruzińska mirabelka', category: 'owoc',    availability: 'połowa czerwca – koniec lipca',            months: [6,7] },
  { id: 10, name: 'Wiśnia',                                       category: 'owoc',    availability: 'czerwiec – sierpień',                     months: [6,7,8] },
  { id: 11, name: 'Brzoskwinia',    note: 'nowy podgatunek co ~3 tygodnie', category: 'owoc', availability: 'połowa czerwca – połowa sierpnia', months: [6,7,8] },
  { id: 12, name: 'Nektarynka',     note: 'nowy podgatunek co ~3 tygodnie', category: 'owoc', availability: 'połowa czerwca – koniec sierpnia', months: [6,7,8] },
  { id: 13, name: 'Arbuz',                                        category: 'owoc',    availability: 'połowa czerwca – połowa października',    months: [6,7,8,9,10] },
  { id: 14, name: 'Figa',                                         category: 'owoc',    availability: 'połowa lipca – koniec września',           months: [7,8,9] },
  { id: 15, name: 'Gruszka',                                      category: 'owoc',    availability: 'lipiec – październik',                    months: [7,8,9,10] },
  { id: 16, name: 'Melon',                                        category: 'owoc',    availability: 'połowa lipca – październik',               months: [7,8,9,10] },
  { id: 17, name: 'Jeżyna',                                       category: 'owoc',    availability: 'lipiec – wrzesień',                       months: [7,8,9] },
  { id: 18, name: 'Śliwka',                                       category: 'owoc',    availability: 'połowa sierpnia – połowa września',        months: [8,9] },
  { id: 19, name: 'Unabi',                                        category: 'owoc',    availability: 'połowa sierpnia – połowa września',        months: [8,9] },
  { id: 20, name: 'Winogrona',      note: 'biały / czerwony / różowy, deserowe i winne', category: 'owoc', availability: 'początek września – połowa października', months: [9,10] },
  { id: 21, name: 'Kiwi',                                         category: 'owoc',    availability: 'połowa września – początek listopada',     months: [9,10,11] },
  { id: 22, name: 'Fejoa',                                        category: 'owoc',    availability: 'połowa września – połowa listopada',       months: [9,10,11] },
  { id: 23, name: 'Kaki',           note: 'hurma i karaliok, także suszone', category: 'owoc', availability: 'połowa października – połowa listopada', months: [10,11] },
  { id: 24, name: 'Granat',                                       category: 'owoc',    availability: 'październik – koniec listopada',           months: [10,11] },
  { id: 25, name: 'Mandarynka',     note: 'bezpestkowa',         category: 'owoc',    availability: 'połowa listopada – styczeń',               months: [11,12,1] },
  { id: 26, name: 'Limonka',                                      category: 'owoc',    availability: 'połowa listopada – styczeń',               months: [11,12,1] },
  // Warzywa i zioła
  { id: 27, name: 'Ogórki',                                       category: 'warzywo', availability: 'marzec – październik',                    months: [3,4,5,6,7,8,9,10] },
  { id: 28, name: 'Młode ziemniaki',                              category: 'warzywo', availability: 'od marca',                                months: [3,4,5,6,7,8,9,10,11,12] },
  { id: 29, name: 'Pomidor',                                      category: 'warzywo', availability: 'wiosna – jesień',                         months: [4,5,6,7,8,9,10,11] },
  { id: 30, name: 'Marchew',                                      category: 'warzywo', availability: 'cały rok',                                months: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: 31, name: 'Kalafior',                                     category: 'warzywo', availability: 'cały rok',                                months: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: 32, name: 'Brokuł',                                       category: 'warzywo', availability: 'cały rok',                                months: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: 33, name: 'Bazylia czerwona',                             category: 'warzywo', availability: 'cały rok',                                months: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: 34, name: 'Kolendra / pietruszka / koperek',              category: 'warzywo', availability: 'cały rok',                                months: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: 35, name: 'Młoda kapusta',                                category: 'warzywo', availability: 'koniec kwietnia – lipiec',                months: [4,5,6,7] },
  { id: 36, name: 'Cukinia',                                      category: 'warzywo', availability: 'czerwiec – wrzesień',                     months: [6,7,8,9] },
  { id: 37, name: 'Papryka',        note: 'zielona / czerwona',  category: 'warzywo', availability: 'czerwiec – październik',                  months: [6,7,8,9,10] },
  { id: 38, name: 'Bakłażan',                                     category: 'warzywo', availability: 'połowa czerwca – listopad',               months: [6,7,8,9,10,11] },
  { id: 39, name: 'Orzech włoski / laskowy',                      category: 'warzywo', availability: 'połowa września – połowa listopada',      months: [9,10,11] },
];

export default function ProductCatalog() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  return (
    <section id="katalog-sezonowy" className="py-16 bg-[#111111]" style={{ scrollMarginTop: '8rem' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold text-[#D4C478] uppercase tracking-widest mb-2">Katalog sezonowy</p>
          <h2 className="text-3xl font-light text-[#F5F5F5] font-serif mb-2">
            Dostępność owoców i warzyw z Gruzji
          </h2>
          <p className="text-[#909090] text-sm mb-8 max-w-xl">
            {products.filter(p => p.category === 'owoc').length} gatunków owoców &amp; {products.filter(p => p.category === 'warzywo').length} warzyw i ziół. Daty oparte na gruzińskim kalendarzu zbiorów.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3">
            {(['all', 'owoc', 'warzywo'] as Filter[]).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === f
                    ? 'bg-[#D4C478] text-[#111111] shadow-lg'
                    : 'bg-[#1E1E1E] text-[#909090] border border-[#2A2A2A] hover:text-[#F5F5F5] hover:border-[#D4C478]/40'
                }`}
              >
                {f === 'all' ? `Wszystkie (${products.length})` : f === 'owoc' ? `Owoce (${products.filter(p=>p.category==='owoc').length})` : `Warzywa i zioła (${products.filter(p=>p.category==='warzywo').length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Month header — desktop only */}
        <div className="hidden xl:flex items-center gap-4 px-4 mb-1">
          <div className="flex-1" />
          <div className="flex gap-1">
            {MONTHS.map(m => (
              <div key={m} className="w-7 text-center text-[10px] text-[#909090] font-medium">{m}</div>
            ))}
          </div>
        </div>

        {/* Product rows */}
        <div className="divide-y divide-[#1E1E1E]">
          {filtered.map(product => (
            <div
              key={product.id}
              className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-4 px-4 py-3 rounded-lg hover:bg-[#1A1A1A] transition-colors group"
            >
              {/* Name + tag */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span className={`shrink-0 text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide ${
                  product.category === 'owoc'
                    ? 'bg-[#8DC432]/15 text-[#8DC432]'
                    : 'bg-[#D4C478]/15 text-[#D4C478]'
                }`}>
                  {product.category === 'owoc' ? 'Owoc' : 'Warzywo'}
                </span>
                <div className="min-w-0">
                  <span className="text-[#F5F5F5] font-medium text-sm">{product.name}</span>
                  {product.note && (
                    <span className="text-[#909090] text-xs ml-2 hidden sm:inline">({product.note})</span>
                  )}
                </div>
              </div>

              {/* Availability text — mobile / hidden on XL */}
              <div className="xl:hidden text-xs text-[#8A9070] pl-[calc(2rem+12px)]">
                {product.availability}
              </div>

              {/* Month bar */}
              <div className="flex items-center gap-1 pl-[calc(2rem+12px)] xl:pl-0">
                {Array.from({ length: 12 }, (_, i) => i + 1).map(month => {
                  const active = product.months.includes(month);
                  return (
                    <div
                      key={month}
                      title={`${MONTHS[month - 1]}${active ? ` ✓ ${product.availability}` : ''}`}
                      className={`w-7 h-5 rounded-sm transition-all duration-200 ${
                        active
                          ? product.category === 'owoc'
                            ? 'bg-[#8DC432] group-hover:bg-[#9DCC42]'
                            : 'bg-[#D4C478] group-hover:bg-[#E0D088]'
                          : 'bg-[#1E1E1E]'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 pt-6 border-t border-[#1E1E1E] flex flex-wrap gap-6 text-xs text-[#909090]">
          <div className="flex items-center gap-2">
            <div className="w-5 h-4 rounded-sm bg-[#8DC432]" />
            <span>Owoce — miesiące dostępności</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-4 rounded-sm bg-[#D4C478]" />
            <span>Warzywa i zioła — miesiące dostępności</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-4 rounded-sm bg-[#1E1E1E] border border-[#2A2A2A]" />
            <span>Niedostępne w danym miesiącu</span>
          </div>
        </div>
      </div>
    </section>
  );
}

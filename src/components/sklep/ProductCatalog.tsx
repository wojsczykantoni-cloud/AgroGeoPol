'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductTile from './ProductTile';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

type Category = 'owoc' | 'warzywo';

type Product = {
  id: number;
  name: string;
  note?: string;
  image: string;
  category: Category;
  availability: string;
  months: number[];
};

const products: Product[] = [
  // ── Owoce (sorted by first month) ──
  { id: 1,  name: 'Truskawka',            image: 'truskawka.jpg',            category: 'owoc', availability: 'kwiecień – czerwiec',                    months: [4,5,6] },
  { id: 2,  name: 'Morwa',                image: 'morwa.jpg',                category: 'owoc', availability: 'połowa maja – czerwiec',                  months: [5,6] },
  { id: 3,  name: 'Czereśnia',            image: 'czeresnia.jpg',            category: 'owoc', availability: 'maj – czerwiec',                          months: [5,6] },
  { id: 4,  name: 'Malina',               image: 'malina.jpg',               category: 'owoc', availability: 'maj – lipiec',                            months: [5,6,7] },
  { id: 5,  name: 'Borówka amerykańska',  image: 'borowka-amerykanska.jpg',  category: 'owoc', availability: 'maj – czerwiec',                          months: [5,6] },
  { id: 6,  name: 'Morela',               image: 'morela.jpg',               category: 'owoc', availability: 'koniec maja – połowa czerwca',             months: [5,6] },
  { id: 7,  name: 'Alucha', note: 'Prunus vachuschti', image: 'alycza.jpg',  category: 'owoc', availability: 'maj – połowa czerwca',                    months: [5,6] },
  { id: 8,  name: 'Muszmala',             image: 'muszmala.jpg',             category: 'owoc', availability: 'koniec maja – początek lipca',             months: [5,6,7] },
  { id: 9,  name: 'Tkemali', note: 'gruzińska mirabelka', image: 'tkemali.jpg', category: 'owoc', availability: 'połowa czerwca – koniec lipca',         months: [6,7] },
  { id: 10, name: 'Wiśnia',               image: 'wisnia.jpg',               category: 'owoc', availability: 'czerwiec – sierpień',                     months: [6,7,8] },
  { id: 11, name: 'Brzoskwinia', note: 'nowy podgatunek co ~3 tyg.', image: 'brzoskwinia.jpg', category: 'owoc', availability: 'połowa czerwca – połowa sierpnia', months: [6,7,8] },
  { id: 12, name: 'Nektarynka', note: 'nowy podgatunek co ~3 tyg.', image: 'nektarynka.jpg', category: 'owoc', availability: 'połowa czerwca – koniec sierpnia', months: [6,7,8] },
  { id: 13, name: 'Arbuz',                image: 'arbuz.jpg',                category: 'owoc', availability: 'połowa czerwca – połowa października',    months: [6,7,8,9,10] },
  { id: 14, name: 'Figa',                 image: 'figa.jpg',                 category: 'owoc', availability: 'połowa lipca – koniec września',           months: [7,8,9] },
  { id: 15, name: 'Gruszka',              image: 'gruszka.jpg',              category: 'owoc', availability: 'lipiec – październik',                    months: [7,8,9,10] },
  { id: 16, name: 'Melon',                image: 'melon.jpg',                category: 'owoc', availability: 'połowa lipca – październik',               months: [7,8,9,10] },
  { id: 17, name: 'Jeżyna',               image: 'jezyna.jpg',               category: 'owoc', availability: 'lipiec – wrzesień',                       months: [7,8,9] },
  { id: 18, name: 'Śliwka',               image: 'sliwka.jpg',               category: 'owoc', availability: 'połowa sierpnia – połowa września',        months: [8,9] },
  { id: 19, name: 'Unabi',                image: 'unabi.jpg',                category: 'owoc', availability: 'połowa sierpnia – połowa września',        months: [8,9] },
  { id: 20, name: 'Winogrona', note: 'biały / czerwony / różowy', image: 'winogrono.jpg', category: 'owoc', availability: 'początek września – połowa października', months: [9,10] },
  { id: 21, name: 'Kiwi',                 image: 'kiwi.jpg',                 category: 'owoc', availability: 'połowa września – początek listopada',     months: [9,10,11] },
  { id: 22, name: 'Fejoa',                image: 'feijoa.jpg',               category: 'owoc', availability: 'połowa września – połowa listopada',       months: [9,10,11] },
  { id: 23, name: 'Kaki', note: 'hurma i karaliok, także suszone', image: 'kaki.jpg', category: 'owoc', availability: 'połowa października – połowa listopada', months: [10,11] },
  { id: 24, name: 'Granat',               image: 'granat.jpg',               category: 'owoc', availability: 'październik – koniec listopada',           months: [10,11] },
  { id: 25, name: 'Mandarynka', note: 'bezpestkowa', image: 'mandarynka.jpg', category: 'owoc', availability: 'połowa listopada – styczeń',             months: [11,12,1] },
  { id: 26, name: 'Limonka',              image: 'limonka.jpg',              category: 'owoc', availability: 'połowa listopada – styczeń',               months: [11,12,1] },
  // ── Warzywa, zioła i orzechy ──
  { id: 27, name: 'Ogórki',               image: 'ogorki.jpg',               category: 'warzywo', availability: 'marzec – październik',                 months: [3,4,5,6,7,8,9,10] },
  { id: 28, name: 'Młode ziemniaki',      image: 'mlode-ziemniaki.jpg',      category: 'warzywo', availability: 'od marca',                            months: [3,4,5,6,7,8,9,10,11,12] },
  { id: 29, name: 'Pomidor',              image: 'pomidor.jpg',              category: 'warzywo', availability: 'wiosna – jesień',                     months: [4,5,6,7,8,9,10,11] },
  { id: 30, name: 'Marchew',              image: 'marchew.jpg',              category: 'warzywo', availability: 'cały rok',                            months: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: 31, name: 'Kalafior',             image: 'kalafior.jpg',             category: 'warzywo', availability: 'cały rok',                            months: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: 32, name: 'Brokuł',               image: 'brokul.jpg',               category: 'warzywo', availability: 'cały rok',                            months: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: 33, name: 'Bazylia czerwona',     image: 'bazylia-czerwona.jpg',     category: 'warzywo', availability: 'cały rok',                            months: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: 34, name: 'Kolendra, pietruszka, koperek', image: 'ziola-kolendra-pietruszka-koperek.jpg', category: 'warzywo', availability: 'cały rok',     months: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: 35, name: 'Młoda kapusta',        image: 'mloda-kapusta.jpg',        category: 'warzywo', availability: 'koniec kwietnia – lipiec',            months: [4,5,6,7] },
  { id: 36, name: 'Cukinia',              image: 'cukinia.jpg',              category: 'warzywo', availability: 'czerwiec – wrzesień',                 months: [6,7,8,9] },
  { id: 37, name: 'Papryka', note: 'zielona / czerwona', image: 'papryka.jpg', category: 'warzywo', availability: 'czerwiec – październik',           months: [6,7,8,9,10] },
  { id: 38, name: 'Bakłażan',             image: 'baklazan.jpg',             category: 'warzywo', availability: 'połowa czerwca – listopad',            months: [6,7,8,9,10,11] },
  { id: 39, name: 'Orzech włoski / laskowy', image: 'orzechy-wloski-laskowy.jpg', category: 'warzywo', availability: 'połowa września – połowa listopada', months: [9,10,11] },
];

const fruits = products.filter((p) => p.category === 'owoc');
const veggies = products.filter((p) => p.category === 'warzywo');

function Tile({
  product,
  available,
  open,
  onToggle,
}: {
  product: Product;
  available: boolean;
  open: boolean;
  onToggle: (id: number) => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle(product.id);
        }}
        className="w-full block"
      >
        <ProductTile
          image={product.image}
          name={product.name}
          dimmed={!available}
          active={open}
        />
      </button>

      {/* Popover */}
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute z-30 left-1/2 -translate-x-1/2 top-full mt-2 w-44 rounded-xl border border-[#2A2A2A] bg-[#1E1E1E] shadow-2xl shadow-black/50 p-3 text-center animate-fade-in"
        >
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#1E1E1E] border-l border-t border-[#2A2A2A]" />
          <p className="text-sm font-semibold text-[#F5F5F5] mb-0.5">{product.name}</p>
          {product.note && (
            <p className="text-[10px] text-[#909090] italic mb-1">{product.note}</p>
          )}
          <p className="text-xs text-[#909090] mb-0.5">Dostępność:</p>
          <p className="text-xs font-medium text-[#D4C478] leading-snug">
            {product.availability}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ProductCatalog() {
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1);
  const [openId, setOpenId] = useState<number | null>(null);

  // Close popover on outside click
  useEffect(() => {
    const close = () => setOpenId(null);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  const renderGroup = (list: Product[], title: string) => (
    <div className="mb-12 last:mb-0">
      <div className="flex items-center gap-4 mb-6">
        <h3 className="text-2xl font-bold text-[#F5F5F5]">{title}</h3>
        <div className="flex-1 h-px bg-[#2A2A2A]" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
        {list.map((p) => (
          <Tile
            key={p.id}
            product={p}
            available={p.months.includes(selectedMonth)}
            open={openId === p.id}
            onToggle={toggle}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="katalog-sezonowy"
      className="py-16 bg-[#0D0D0D] border-t border-[#1E1E1E]"
      style={{ scrollMarginTop: '8rem' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-[#D4C478] uppercase tracking-widest mb-2">
            Kalendarz sezonowości
          </p>
          <h2 className="text-3xl font-light text-[#F5F5F5] font-serif mb-2">
            Dostępność owoców i warzyw z Gruzji
          </h2>
          <p className="text-[#909090] text-sm max-w-xl">
            {fruits.length} gatunków owoców &amp; {veggies.length} warzyw, ziół i orzechów.
            Wybierz miesiąc, aby zobaczyć, co jest dostępne. Kliknij kafelek po dokładny okres zbiorów.
          </p>
        </div>

        {/* Month pills — wyśrodkowane, na mobile scroll poziomy */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto scrollbar-none mb-10">
          <div className="flex gap-2 w-max mx-auto pb-1">
            {ROMAN.map((r, i) => {
              const month = i + 1;
              const active = selectedMonth === month;
              return (
                <button
                  key={r}
                  onClick={() => setSelectedMonth(month)}
                  className={`shrink-0 w-12 h-10 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    active
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

        {/* Groups */}
        {renderGroup(fruits, '🍑 Owoce i owoce egzotyczne')}
        {renderGroup(veggies, '🥦 Warzywa, zioła i orzechy')}

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-[#1E1E1E] text-center">
          <p className="text-[#909090] text-sm mb-4">
            Chcesz poznać aktualną dostępność i ceny hurtowe?
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-[#D4C478] to-[#B8A860] text-[#111111] no-underline hover:opacity-90 transition-opacity"
          >
            Zapytaj o dostawę →
          </Link>
        </div>
      </div>
    </section>
  );
}

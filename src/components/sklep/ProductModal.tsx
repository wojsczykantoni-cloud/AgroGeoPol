'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import type { Produkt } from '@/data/produkty';

type Stan = 'caloryRok' | 'dostepny' | 'niedostepny';

const BADGE: Record<Stan, { label: string; cls: string }> = {
  caloryRok: { label: 'Cały rok', cls: 'bg-[#4A9EC9]/15 text-[#4A9EC9]' },
  dostepny: { label: '● Dostępne teraz', cls: 'bg-secondary/15 text-secondary' },
  niedostepny: { label: 'Niedostępne w tym miesiącu', cls: 'bg-muted-foreground/15 text-muted-foreground' },
};

export default function ProductModal({
  produkt,
  stan,
  onClose,
}: {
  produkt: Produkt;
  stan: Stan;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const badge = BADGE[stan];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={produkt.nazwa}
    >
      <div
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl shadow-black/60 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Zamknij"
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/40 text-white/80 hover:text-white hover:bg-black/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <X size={22} />
        </button>

        <div className="flex flex-col sm:flex-row">
          {/* Image */}
          <div className="sm:w-2/5 shrink-0">
            <img
              src={produkt.zdjecie}
              alt={produkt.nazwa}
              className="w-full h-56 sm:h-full object-cover sm:rounded-l-2xl"
            />
          </div>

          {/* Info */}
          <div className="flex-1 p-6 sm:p-8 flex flex-col gap-4">
            <div>
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${badge.cls}`}>
                {badge.label}
              </span>
              <h2 className="text-2xl font-bold text-foreground leading-tight">
                {produkt.nazwa}
              </h2>
              {produkt.nazwaLac && (
                <p className="text-sm italic text-muted-foreground mt-1">{produkt.nazwaLac}</p>
              )}
            </div>

            <div>
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-1">
                Sezon dostępności
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{produkt.okresOpis}</p>
            </div>

            {produkt.opis && (
              <div className="pt-1">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-1">
                  O produkcie
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{produkt.opis}</p>
              </div>
            )}

            <div className="mt-auto pt-4 border-t border-border">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-gold to-gold-deep text-[#14170F] no-underline hover:opacity-90 transition-opacity"
              >
                Zapytaj o dostawę →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

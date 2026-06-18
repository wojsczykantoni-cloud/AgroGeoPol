'use client';

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function CTA() {
  return (
    <section className="py-24 bg-[#F5F2EC] section-border-top">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll animation="scale-in">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFFFFF] to-[#F0EDE6] border border-[#D5D0C0] p-10 sm:p-16">
            {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#E07B39] to-transparent" />

          <p className="text-sm font-semibold text-[#E07B39] uppercase tracking-widest mb-4">
            Zacznij współpracę
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A2A0A] mb-4">
            Masz pytania lub chcesz złożyć zamówienie?
          </h2>
          <p className="text-[#6B7A5A] text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Skontaktuj się z nami — odpowiemy szybko i pomożemy dobrać produkty do Twoich potrzeb. Jesteśmy dostępni dla hurtowni, przetwórni, restauracji i importerów.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#kontakt"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold btn-gold shadow-lg shadow-[#E07B39]/20"
            >
              Napisz do nas
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+995555568302"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold border border-[#D5D0C0] text-[#1A2A0A] hover:border-[#E07B39]/50 hover:bg-[#E07B39]/5 transition-all"
            >
              <Phone size={18} className="text-[#E07B39]" />
              +995 555 56 83 02
            </a>
          </div>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

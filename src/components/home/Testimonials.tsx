'use client';

import { Star } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const testimonials = [
  {
    name: "Marek Wiśniewski",
    role: 'Szef kuchni, restauracja "Pod Lipą"',
    content:
      "Współpracujemy z AgroGeoPol od kilku miesięcy. Ślimaki zawsze świeże, dostawy punktualne. Muszle do podania — eleganckie i wytrzymałe. Polecam każdej restauracji szukającej pewnego dostawcy.",
    stars: 5,
  },
  {
    name: "Anna Kowalczyk",
    role: "Technolog, firma kosmetyczna Naturalis",
    content:
      "Mucyna od AgroGeoPol spełnia nasze wymagania jakościowe w 100%. Pełna dokumentacja, stałe dostawy i elastyczność w zakresie wolumenu — tego szukaliśmy przez długi czas.",
    stars: 5,
  },
  {
    name: "Katarzyna Nowak",
    role: "Klientka indywidualna",
    content:
      "Krem ze śluzu ślimaka z AgroGeoPol to najlepsza pielęgnacja, jaką miałam. Naturalne składniki czuć od razu — skóra odżywiona, bez sztucznych aromatów. Zamawiałam już kilka razy.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#141F14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#C9A84C] uppercase tracking-widest mb-3">
            Opinie klientów
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F0E8] mb-4">
            Co mówią o nas
          </h2>
          <p className="max-w-xl mx-auto text-[#9A9A8A] text-base leading-relaxed">
            Prawdziwe opinie od restauracji, firm i klientów indywidualnych.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} animation="fade-up" delay={i * 150}>
              <div
                className="h-full card-dark rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:shadow-black/30 hover:-translate-y-0.5"
              >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={16} className="text-[#C9A84C] fill-[#C9A84C]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[#9A9A8A] leading-relaxed flex-1 italic">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-[#1F2E1F]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#3D7A3D] flex items-center justify-center text-[#0A0F0A] text-sm font-bold shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#F5F0E8]">{t.name}</p>
                  <p className="text-xs text-[#9A9A8A]">{t.role}</p>
                </div>
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

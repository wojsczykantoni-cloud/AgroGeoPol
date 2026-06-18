'use client';

import { Leaf, Shield, Truck, HeartHandshake, Award, Clock, Snowflake, Globe } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const reasons = [
  {
    icon: Globe,
    title: "Bezpośredni eksport z Gruzji",
    description: "Produkty trafiają do Ciebie prosto od producenta — bez zbędnych pośredników, co gwarantuje świeżość i konkurencyjną cenę.",
  },
  {
    icon: Snowflake,
    title: "Mrożenie IQF",
    description: "Indywidualne mrożenie każdego owocu i warzywa z osobna — zachowane wartości odżywcze, smak i struktura produktu.",
  },
  {
    icon: Shield,
    title: "Kontrola jakości",
    description: "Każda partia przechodzi kontrolę jakości. Dostarczamy produkty spełniające normy eksportowe UE.",
  },
  {
    icon: Truck,
    title: "Niezawodna logistyka",
    description: "Terminowe dostawy zarówno małych zamówień, jak i dużych kontraktów B2B — obsługujemy bez opóźnień.",
  },
  {
    icon: HeartHandshake,
    title: "Długofalowa współpraca",
    description: "Stawiamy na stałe relacje z klientami. Jesteśmy elastyczni i dostępni na każdym etapie współpracy.",
  },
  {
    icon: Clock,
    title: "Kontakt 24/7",
    description: "Jesteśmy do dyspozycji w pilnych sytuacjach. Szybka odpowiedź i realna pomoc — nie automat.",
  },
  {
    icon: Leaf,
    title: "Naturalny klimat Gruzji",
    description: "Gruzja słynie z wyjątkowych warunków klimatycznych i tradycji rolniczych — nasze produkty to efekt tej jakości.",
  },
  {
    icon: Award,
    title: "Całoroczna dostępność",
    description: "Dzięki własnym chłodniom i mrożonkom IQF zapewniamy ciągłość dostaw niezależnie od sezonu.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#0A0F0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#C9A84C] uppercase tracking-widest mb-3">Dlaczego my?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F0E8] mb-4">
            8 powodów, by wybrać Agrogeopol Ltd
          </h2>
          <p className="max-w-xl mx-auto text-[#9A9A8A] text-base leading-relaxed">
            Łączymy doświadczenie w eksporcie z nowoczesnym podejściem do jakości i obsługi klienta.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <AnimateOnScroll key={reason.title} animation="fade-up" delay={i * 100}>
              <div className="h-full card-dark rounded-xl p-5 flex flex-col gap-3 transition-all duration-300 hover:border-[#C9A84C]/30 hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                  <reason.icon size={20} className="text-[#C9A84C]" />
                </div>
                <h3 className="text-base font-semibold text-[#F5F0E8]">{reason.title}</h3>
                <p className="text-sm text-[#9A9A8A] leading-relaxed">{reason.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

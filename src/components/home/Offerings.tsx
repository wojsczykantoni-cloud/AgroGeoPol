'use client';

import { Thermometer, Apple, Snowflake } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const offerings = [
  {
    icon: Apple,
    tag: "Główna oferta",
    title: "Świeże owoce i warzywa",
    description:
      "Śliwki, brzoskwinie, wiśnie, jabłka, gruszki, pomidory, papryka — sezonowe produkty prosto z Gruzji. Dostawy hurtowe do Polski i UE.",
    points: ["Owoce sezonowe", "Warzywa świeże", "Dostawy hurtowe", "Eksport bezpośredni"],
    color: "#7AB83C",
  },
  {
    icon: Snowflake,
    tag: "Główna oferta",
    title: "Mrożonki IQF",
    description:
      "Indywidualnie mrożone owoce i warzywa: truskawki, wiśnie, śliwki, maliny, fasolka szparagowa, groszek, kukurydza. Zachowana świeżość i wartości odżywcze.",
    points: ["Mrożenie IQF", "Truskawki, wiśnie, maliny", "Fasolka, groszek, kukurydza", "Skala hurtowa"],
    color: "#4A9EC9",
  },
  {
    icon: Thermometer,
    tag: "Dodatkowo",
    title: "Hodowla ślimaków",
    description:
      "Uzupełnieniem naszej oferty są mrożone ślimaki i filet ze ślimaków, przeznaczone na eksport. Hodowla prowadzona w kontrolowanych warunkach, wysoka jakość.",
    points: ["Mrożone ślimaki", "Filet ze ślimaków", "Eksport", "Produkt uzupełniający"],
    color: "#F07030",
  },
];

export default function Offerings() {
  return (
    <section className="py-24 bg-[#181818]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#F07030] uppercase tracking-widest mb-3">
            Co oferujemy
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-[#F5F5F5] leading-tight font-serif mb-4">
            Trzy kategorie,{" "}
            <span className="text-[#F07030] italic font-normal">jedno źródło</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#909090] text-base leading-relaxed">
            Gruzja ma wyjątkowy klimat — korzystamy z tego w pełni. Każda kategoria to osobna linia dostawy, osobna jakość kontroli.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((item, i) => (
            <AnimateOnScroll key={item.title} animation="fade-up" delay={i * 150}>
              <div className="h-full card-dark rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}18` }}
                >
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider mb-1 block" style={{ color: item.color }}>
                    {item.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-[#F5F5F5]">{item.title}</h3>
                </div>
                <p className="text-sm text-[#909090] leading-relaxed flex-1">{item.description}</p>
                <ul className="space-y-2 pt-2 border-t border-[#2A2A2A]">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-[#909090]">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

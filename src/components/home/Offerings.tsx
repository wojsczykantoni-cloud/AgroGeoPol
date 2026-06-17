'use client';

import { Thermometer, Apple, Shell } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const offerings = [
  {
    icon: Shell,
    tag: "Hodowla własna",
    title: "Ślimaki",
    description:
      "Hodowla ślimaków jadalnych w warunkach naturalnych, bez antybiotyków. Oferujemy ślimaki świeże, muszle dekoracyjne, mucynę oraz kosmetyki ze śluzu.",
    points: ["Ślimaki jadalne", "Mucyna (śluz)", "Muszle dekoracyjne", "Kosmetyki naturalne"],
    color: "#C9A84C",
  },
  {
    icon: Apple,
    tag: "Sprzedaż hurtowa",
    title: "Owoce i warzywa",
    description:
      "Hurtowa sprzedaż świeżych owoców i warzyw. Współpracujemy ze sprawdzonymi producentami i zapewniamy ciągłość dostaw przez cały rok.",
    points: ["Świeże owoce sezonowe", "Warzywa hurtowo", "Dostawy B2B", "Stałe kontrakty"],
    color: "#6AAF47",
  },
  {
    icon: Thermometer,
    tag: "Infrastruktura",
    title: "Magazynowanie chłodnicze",
    description:
      "Dysponujemy własnymi chłodniami, które umożliwiają przechowywanie towarów w optymalnych warunkach temperaturowych — zarówno dla ślimaków, jak i produktów ogrodniczych.",
    points: ["Własne chłodnie", "Kontrolowana temperatura", "Długoterminowe składowanie", "Obsługa B2B"],
    color: "#4A9EC9",
  },
];

export default function Offerings() {
  return (
    <section className="py-24 bg-[#0D160D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#C9A84C] uppercase tracking-widest mb-3">
            Czym się zajmujemy
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-[#F5F0E8] leading-tight font-serif mb-4">
            Trzy filary{" "}
            <span className="text-[#C9A84C] italic font-normal">naszej działalności</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#9A9A8A] text-base leading-relaxed">
            Łączymy hodowlę ślimaków, handel owocami i warzywami oraz profesjonalne magazynowanie chłodnicze — wszystko pod jednym dachem.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((item, i) => (
            <AnimateOnScroll key={item.title} animation="fade-up" delay={i * 150}>
              <div className="h-full card-dark rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}18` }}
                >
                  <item.icon size={24} style={{ color: item.color }} />
                </div>

                {/* Tag + Title */}
                <div>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider mb-1 block"
                    style={{ color: item.color }}
                  >
                    {item.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-[#F5F0E8]">{item.title}</h3>
                </div>

                <p className="text-sm text-[#9A9A8A] leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Points */}
                <ul className="space-y-2 pt-2 border-t border-[#1F2E1F]">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-[#9A9A8A]">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
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

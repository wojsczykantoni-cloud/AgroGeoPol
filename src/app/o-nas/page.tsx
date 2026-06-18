import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, Users, Target, History } from "lucide-react";

export const metadata: Metadata = {
  title: "O nas",
  description:
    "Poznaj Agrogeopol Ltd — eksportera świeżych i mrożonych owoców oraz warzyw z Gruzji.",
};

const values = [
  {
    icon: Leaf,
    title: "Naturalność",
    description:
      "Każdy produkt pochodzi z hodowli wolnej od antybiotyków i sztucznych wspomagaczy.",
  },
  {
    icon: Users,
    title: "Relacja",
    description:
      "Budujemy długofalowe partnerstwa — z restauratorami, firmami i klientami indywidualnymi.",
  },
  {
    icon: Target,
    title: "Jakość",
    description:
      "Kontrola jakości na każdym etapie produkcji. Certyfikaty i pełna dokumentacja.",
  },
  {
    icon: History,
    title: "Tradycja",
    description:
      "Wiedza o hodowli ślimakow przekazywana i rozwijana z pokolenia na pokolenie.",
  },
];

export default function ONasPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#0D160D] to-[#0D0808]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C0392B] uppercase tracking-widest mb-4">
            O nas
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F5F0E8] mb-6">
            Kim jesteśmy?
          </h1>
          <p className="text-lg text-[#9A9A8A] leading-relaxed">
            Agrogeopol Ltd specjalizuje się w eksporcie świeżych i mrożonych owoców oraz warzyw z Gruzji.
            Dostarczamy produkty najwyższej jakości bezpośrednio od producenta — dla hurtowni, przetwórni i restauracji.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-[#0D0808] section-border-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-[#C0392B] uppercase tracking-widest mb-4">
                Nasza historia
              </p>
              <h2 className="text-3xl font-bold text-[#F5F0E8] mb-6">
                Z miłości do natury i innowacji
              </h2>
              <div className="space-y-4 text-[#9A9A8A] leading-relaxed">
                <p>
                  Agrogeopol Ltd to firma z pasją do jakości i naturalnych produktów. Działamy w sercu Kaukazu — Gruzji, kraju o wyjątkowym klimacie i wielowiekowych tradycjach rolniczych.
                </p>
                <p>
                  Specjalizujemy się w eksporcie świeżych owoców i warzyw sezonowych oraz mrożonek IQF. Dysponujemy własnymi chłodniami, które zapewniają ciągłość dostaw przez cały rok.
                </p>
                <p>
                  Działalnością uzupełniającą jest hodowla ślimaków — oferujemy mrożone ślimaki i filet na eksport. Wszystko z jednego, zaufanego źródła — bezpośrednio od producenta.
                </p>
              </div>
            </div>

            {/* Farm image */}
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img
                src="/images/gallery-05.jpeg"
                alt="Zdjęcie hodowli Agrogeopol Ltd"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#1C1010] section-border-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#C0392B] uppercase tracking-widest mb-3">
              Nasze wartości
            </p>
            <h2 className="text-3xl font-bold text-[#F5F0E8]">
              Co nas wyróżnia
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-dark rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#C0392B]/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={22} className="text-[#C0392B]" />
                </div>
                <h3 className="text-base font-semibold text-[#F5F0E8] mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-[#9A9A8A] leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-20 bg-[#0D0808] section-border-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C0392B] uppercase tracking-widest mb-3">
            Zespół
          </p>
          <h2 className="text-3xl font-bold text-[#F5F0E8] mb-4">
            Ludzie za marką
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Marcin Zaremba */}
            <div className="card-dark rounded-2xl p-8 flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C0392B]/20 to-[#3D7A3D]/20 border border-[#1F2E1F] flex items-center justify-center text-3xl">
                👤
              </div>
              <div>
                <p className="font-semibold text-[#F5F0E8] text-center">Marcin Zaremba</p>
                <p className="text-sm text-[#C0392B] text-center">Założyciel</p>
              </div>
            </div>

            {/* Szymon Wojsczyk */}
            <div className="card-dark rounded-2xl p-8 flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border border-[#1F2E1F] relative">
                <Image
                  src="/images/gallery-11.jpeg"
                  alt="Szymon Wojsczyk"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-[#F5F0E8] text-center">Szymon Wojsczyk</p>
                <p className="text-sm text-[#C0392B] text-center">Współzałożyciel</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

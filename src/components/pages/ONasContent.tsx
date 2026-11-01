"use client";

import Image from "next/image";
import { Leaf, Users, Target, History } from "lucide-react";
import { useI18n } from "@/i18n/LanguageProvider";

const valueIcons = [Leaf, Users, Target, History];

export default function ONasContent() {
  const { t } = useI18n();
  const o = t.onas;
  const values = valueIcons.map((icon, i) => ({ icon, ...o.values[i] }));

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-4">
            {o.heroTag}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {o.heroTitle}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {o.heroText}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background section-border-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-4">
                {o.storyTag}
              </p>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {o.storyTitle}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{o.storyP1}</p>
                <p>{o.storyP2}</p>
                <p>{o.storyP3}</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-square relative">
              <Image
                src="/images/gallery-05.jpeg"
                alt={o.heroTitle}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted section-border-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">
              {o.valuesTag}
            </p>
            <h2 className="text-3xl font-bold text-foreground">{o.valuesTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-dark rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={22} className="text-gold" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background section-border-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">
            {o.teamTag}
          </p>
          <h2 className="text-3xl font-bold text-foreground mb-4">{o.teamTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="card-dark rounded-2xl p-8 flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-secondary/20 border border-border flex items-center justify-center text-3xl">
                👤
              </div>
              <div>
                <p className="font-semibold text-foreground text-center">Marcin Zaremba</p>
                <p className="text-sm text-gold text-center">{o.founderRole}</p>
              </div>
            </div>

            <div className="card-dark rounded-2xl p-8 flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border border-border relative">
                <Image src="/images/gallery-11.jpeg" alt="Szymon Wojsczyk" fill className="object-cover" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-center">Szymon Wojsczyk</p>
                <p className="text-sm text-gold text-center">{o.cofounderRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

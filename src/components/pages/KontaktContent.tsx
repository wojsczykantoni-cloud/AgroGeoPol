"use client";

import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { useI18n } from "@/i18n/LanguageProvider";

export default function KontaktContent() {
  const { t } = useI18n();
  const k = t.kontakt;

  const actions = [
    {
      icon: Phone,
      label: k.callLabel,
      value: "+995 555 56 83 02",
      sub: k.callSub,
      href: "tel:+995555568302",
      color: "from-secondary/20 to-secondary/5",
      border: "hover:border-gold/40",
      iconColor: "text-gold",
      iconBg: "bg-secondary/20",
      cta: k.callCta,
    },
    {
      icon: MessageCircle,
      label: k.waLabel,
      value: "+995 555 56 83 02",
      sub: k.waSub,
      href: "https://wa.me/995555568302",
      color: "from-[#25D366]/10 to-[#25D366]/5",
      border: "hover:border-[#25D366]/40",
      iconColor: "text-[#25D366]",
      iconBg: "bg-[#25D366]/10",
      cta: k.waCta,
    },
    {
      icon: Mail,
      label: k.mailLabel,
      value: "kontakt@agrogeopol.pl",
      sub: k.mailSub,
      href: "mailto:kontakt@agrogeopol.pl",
      color: "from-gold/10 to-gold/5",
      border: "hover:border-gold/40",
      iconColor: "text-gold",
      iconBg: "bg-gold/10",
      cta: k.mailCta,
    },
  ];

  const details = [
    { icon: Clock, label: k.hoursLabel, value: k.hoursValue },
    { icon: MapPin, label: k.locationLabel, value: k.locationValue },
  ];

  return (
    <div className="pt-24 bg-background min-h-screen">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-muted to-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest">{k.tag}</p>
        </div>
      </section>

      {/* Action cards */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`card-dark rounded-2xl p-6 flex items-center gap-5 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30 bg-gradient-to-r ${action.color} ${action.border}`}
            >
              <div className={`w-14 h-14 rounded-2xl ${action.iconBg} flex items-center justify-center shrink-0`}>
                <action.icon size={26} className={action.iconColor} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-0.5">{action.label}</p>
                <p className="text-lg font-bold text-foreground truncate">{action.value}</p>
                <p className="text-sm text-muted-foreground">{action.sub}</p>
              </div>
              <span className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border shrink-0 ${action.iconColor} border-current/30`}>
                {action.cta} →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Details */}
      <section className="py-8 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {details.map((d) => (
              <div key={d.label} className="card-dark rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <d.icon size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{d.label}</p>
                  <p className="text-sm font-medium text-foreground">{d.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

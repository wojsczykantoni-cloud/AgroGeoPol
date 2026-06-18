import type { Metadata } from "next";
import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt — AgroGeoPol",
  description: "Skontaktuj się z AgroGeoPol — zadzwoń, napisz lub wyślij wiadomość na WhatsApp.",
};

const actions = [
  {
    icon: Phone,
    label: "Zadzwoń",
    value: "+995 555 56 83 02",
    sub: "Odbieramy pon–pt 8:00–18:00",
    href: "tel:+995555568302",
    color: "from-[#7AB83C]/20 to-[#7AB83C]/5",
    border: "hover:border-[#F07030]/40",
    iconColor: "text-[#F07030]",
    iconBg: "bg-[#7AB83C]/20",
    cta: "Połącz teraz",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+995 555 56 83 02",
    sub: "Szybka odpowiedź przez WhatsApp",
    href: "https://wa.me/995555568302",
    color: "from-[#25D366]/10 to-[#25D366]/5",
    border: "hover:border-[#25D366]/40",
    iconColor: "text-[#25D366]",
    iconBg: "bg-[#25D366]/10",
    cta: "Napisz na WhatsApp",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "kontakt@agrogeopol.pl",
    sub: "Odpowiadamy w ciągu 24h",
    href: "mailto:kontakt@agrogeopol.pl",
    color: "from-[#F07030]/10 to-[#F07030]/5",
    border: "hover:border-[#F07030]/40",
    iconColor: "text-[#F07030]",
    iconBg: "bg-[#F07030]/10",
    cta: "Wyślij e-mail",
  },
];

const details = [
  { icon: Clock, label: "Godziny kontaktu", value: "Pon–Pt: 8:00–18:00" },
  { icon: MapPin, label: "Lokalizacja hodowli", value: "Gruzja / Dostawy do Polski" },
];

export default function KontaktPage() {
  return (
    <div className="pt-24 bg-[#111111] min-h-screen">

      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-[#181818] to-[#111111]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#F07030] uppercase tracking-widest">Kontakt</p>
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
                <p className="text-xs font-semibold text-[#909090] uppercase tracking-widest mb-0.5">{action.label}</p>
                <p className="text-lg font-bold text-[#F5F5F5] truncate">{action.value}</p>
                <p className="text-sm text-[#909090]">{action.sub}</p>
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
                <div className="w-10 h-10 rounded-lg bg-[#F07030]/10 flex items-center justify-center shrink-0">
                  <d.icon size={18} className="text-[#F07030]" />
                </div>
                <div>
                  <p className="text-xs text-[#909090] mb-0.5">{d.label}</p>
                  <p className="text-sm font-medium text-[#F5F5F5]">{d.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

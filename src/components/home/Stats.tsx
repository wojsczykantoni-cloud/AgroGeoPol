const stats = [
  { value: "🇬🇪", label: "Eksport z Gruzji", sub: "bezpośrednio od producenta" },
  { value: "IQF", label: "Mrożenie indywidualne", sub: "zachowana świeżość i wartości" },
  { value: "B2B", label: "Sprzedaż hurtowa", sub: "dla firm i dystrybutorów" },
  { value: "❄️", label: "Własne chłodnie", sub: "całoroczna dostępność" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#181818] via-[#1E1E1E] to-[#181818] section-border-top border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                i < stats.length - 1 ? "lg:border-r lg:border-[#2A2A2A]" : ""
              }`}
            >
              <span className="text-4xl sm:text-5xl font-bold text-gradient-gold mb-2">{stat.value}</span>
              <span className="text-sm font-semibold text-[#F5F5F5] mb-1">{stat.label}</span>
              <span className="text-xs text-[#909090]">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

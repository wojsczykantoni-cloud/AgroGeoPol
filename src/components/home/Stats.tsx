const stats = [
  { value: "🇬🇪", label: "Eksport z Gruzji", sub: "bezpośrednio od producenta" },
  { value: "IQF", label: "Mrożenie indywidualne", sub: "zachowana świeżość i wartości" },
  { value: "B2B", label: "Sprzedaż hurtowa", sub: "dla firm i dystrybutorów" },
  { value: "❄️", label: "Własne chłodnie", sub: "całoroczna dostępność" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-muted via-card to-muted section-border-top border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                i < stats.length - 1 ? "lg:border-r lg:border-border" : ""
              }`}
            >
              <span className="text-4xl sm:text-5xl font-bold text-gradient-gold mb-2">{stat.value}</span>
              <span className="text-sm font-semibold text-foreground mb-1">{stat.label}</span>
              <span className="text-xs text-muted-foreground">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: "🇬🇪", label: "Hodowla w Gruzji", sub: "własna farma na Kaukazie" },
  { value: "3", label: "Obszary działalności", sub: "ślimaki, owoce/warzywa, chłodnia" },
  { value: "B2B+B2C", label: "Model sprzedaży", sub: "firmy i klienci indywidualni" },
  { value: "❄️", label: "Własne chłodnie", sub: "profesjonalne magazynowanie" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0D160D] via-[#111811] to-[#0D160D] section-border-top border-b border-[#1F2E1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                i < stats.length - 1
                  ? "lg:border-r lg:border-[#1F2E1F]"
                  : ""
              }`}
            >
              <span className="text-4xl sm:text-5xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-[#F5F0E8] mb-1">
                {stat.label}
              </span>
              <span className="text-xs text-[#9A9A8A]">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

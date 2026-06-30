type ProductTileProps = {
  image: string;
  name: string;
  /** niebieski „mrożony" filtr dla produktów IQF */
  frost?: boolean;
  /** wyszarzenie + wyciszenie (np. niedostępne w wybranym miesiącu) */
  dimmed?: boolean;
  /** podświetlone obramowanie (np. otwarty popover) */
  active?: boolean;
};

/**
 * Kompaktowy kwadratowy kafelek produktu: zdjęcie + nazwa na dole.
 * Komponent prezentacyjny (bez stanu) — używany w kartach oferty
 * oraz w kalendarzu sezonowości.
 */
export default function ProductTile({
  image,
  name,
  frost,
  dimmed,
  active,
}: ProductTileProps) {
  return (
    <div
      className={`group relative aspect-square rounded-xl overflow-hidden border transition-all duration-200 ${
        active
          ? "border-[#D4C478] ring-2 ring-[#D4C478]/40"
          : "border-[#2A2A2A] hover:border-[#D4C478]/60"
      } ${dimmed ? "opacity-20" : "opacity-100"}`}
    >
      <img
        src={`/images/produkty/${image}`}
        alt={name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={
          dimmed
            ? { filter: "grayscale(100%)" }
            : frost
              ? { filter: "hue-rotate(200deg) brightness(0.85)" }
              : undefined
        }
      />
      <div className="absolute inset-x-0 bottom-0 bg-black/60 px-1.5 py-1">
        <span className="block text-[11px] leading-tight text-white text-center font-medium">
          {name}
        </span>
      </div>
    </div>
  );
}

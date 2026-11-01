// Tłumaczenia produktów EN / RU. Polski jest źródłem (src/data/produkty.ts).
// Nazwa łacińska (nazwaLac) jest wspólna dla wszystkich języków.
import type { Produkt } from "@/data/produkty";
import type { Locale } from "@/i18n/config";

type Tr = { nazwa: string; okresOpis: string; opis?: string };

const en: Record<string, Tr> = {
  brzoskwinia: { nazwa: "Peach", okresOpis: "from early June to late August; a new variety roughly every 3 weeks" },
  nektarynka: { nazwa: "Nectarine", okresOpis: "from mid-June to the end of August" },
  morela: { nazwa: "Apricot", okresOpis: "from late May to mid-June" },
  alycza: { nazwa: "Cherry plum (Alycha)", okresOpis: "from May to mid-June", opis: "Caucasian cherry plum — a small, juicy plum with a distinctly tart flavour. Valued fresh and for preserves and sauces." },
  muszmala: { nazwa: "Loquat", okresOpis: "from late May to early July", opis: "An early-summer fruit with sweet-tart flesh and a very short season — a niche product, rarely seen on the Polish market." },
  figa: { nazwa: "Fig", okresOpis: "from mid-July to the end of September" },
  winogrono: { nazwa: "Grapes", okresOpis: "from early September to mid-October; dessert and wine varieties" },
  tkemali: { nazwa: "Tkemali plum", okresOpis: "from mid-June to the end of July", opis: "Georgian mirabelle (red and green) — the base of the famous sour tkemali sauce. Bold and seasonal, ideal for processing." },
  arbuz: { nazwa: "Watermelon", okresOpis: "from mid-June to mid-October" },
  melon: { nazwa: "Melon", okresOpis: "from mid-July to October" },
  "borowka-amerykanska": { nazwa: "Blueberry", okresOpis: "May–June" },
  sliwka: { nazwa: "Plum", okresOpis: "from mid-August to mid-September" },
  malina: { nazwa: "Raspberry", okresOpis: "from May to July" },
  jezyna: { nazwa: "Blackberry", okresOpis: "from July to September" },
  morwa: { nazwa: "Mulberry", okresOpis: "from mid-May to June", opis: "Sweet, delicate berries with a very short season — available for only a few weeks a year." },
  wisnia: { nazwa: "Sour cherry", okresOpis: "from June to August" },
  czeresnia: { nazwa: "Cherry", okresOpis: "from May to June" },
  truskawka: { nazwa: "Strawberry", okresOpis: "from April to June" },
  gruszka: { nazwa: "Pear", okresOpis: "from July to October" },
  unabi: { nazwa: "Jujube (Unabi)", okresOpis: "from mid-August to mid-September", opis: "Also known as jujube. A small fruit tasting of apple and date; eaten fresh or dried, valued in herbal medicine." },
  feijoa: { nazwa: "Feijoa", okresOpis: "from mid-September to mid-November", opis: "An aromatic subtropical fruit with notes of pineapple and strawberry. Its short autumn season makes it a premium product with growing demand." },
  kaki: { nazwa: "Persimmon", okresOpis: "from early October to mid-November; also available dried", opis: "In Georgia, two varieties: hurma (astringent, ripening after harvest) and karaliok (sweet, ready to eat). Also available dried." },
  granat: { nazwa: "Pomegranate", okresOpis: "from October to the end of November" },
  kiwi: { nazwa: "Kiwi", okresOpis: "from mid-September to early November" },
  mandarynka: { nazwa: "Mandarin", okresOpis: "from mid-November to January; seedless" },
  limonka: { nazwa: "Lime", okresOpis: "from mid-November to January" },
  baklazan: { nazwa: "Aubergine", okresOpis: "from mid-June to November" },
  cukinia: { nazwa: "Courgette", okresOpis: "from June to September" },
  "mlode-ziemniaki": { nazwa: "New potatoes", okresOpis: "from March (early spring harvest)" },
  "mloda-kapusta": { nazwa: "Young cabbage", okresOpis: "from late April to July" },
  kalafior: { nazwa: "Cauliflower", okresOpis: "all year" },
  brokul: { nazwa: "Broccoli", okresOpis: "all year" },
  papryka: { nazwa: "Pepper", okresOpis: "from June to October; green and red" },
  marchew: { nazwa: "Carrot", okresOpis: "all year" },
  pomidor: { nazwa: "Tomato", okresOpis: "from spring to autumn" },
  ogorek: { nazwa: "Cucumber", okresOpis: "from March to October" },
  "bazylia-czerwona": { nazwa: "Red basil", okresOpis: "all year" },
  "ziola-kolendra-pietruszka-koperek": { nazwa: "Coriander, parsley, dill", okresOpis: "all year" },
  "orzechy-wloski-laskowy": { nazwa: "Walnut / hazelnut", okresOpis: "from mid-September to mid-November" },
};

const ru: Record<string, Tr> = {
  brzoskwinia: { nazwa: "Персик", okresOpis: "с начала июня до конца августа; новый подвид примерно каждые 3 недели" },
  nektarynka: { nazwa: "Нектарин", okresOpis: "с середины июня до конца августа" },
  morela: { nazwa: "Абрикос", okresOpis: "с конца мая до середины июня" },
  alycza: { nazwa: "Алыча", okresOpis: "с мая до середины июня", opis: "Кавказская алыча — мелкая, сочная слива с выраженным кисловатым вкусом. Ценится в свежем виде, а также для заготовок и соусов." },
  muszmala: { nazwa: "Мушмула", okresOpis: "с конца мая до начала июля", opis: "Раннелетний плод со сладко-терпкой мякотью и очень коротким сезоном — нишевый продукт, редко встречается на польском рынке." },
  figa: { nazwa: "Инжир", okresOpis: "с середины июля до конца сентября" },
  winogrono: { nazwa: "Виноград", okresOpis: "с начала сентября до середины октября; столовые и винные сорта" },
  tkemali: { nazwa: "Ткемали", okresOpis: "с середины июня до конца июля", opis: "Грузинская мирабель (красная и зелёная) — основа знаменитого кислого соуса ткемали. Яркая и сезонная, идеальна для переработки." },
  arbuz: { nazwa: "Арбуз", okresOpis: "с середины июня до середины октября" },
  melon: { nazwa: "Дыня", okresOpis: "с середины июля до октября" },
  "borowka-amerykanska": { nazwa: "Голубика", okresOpis: "май–июнь" },
  sliwka: { nazwa: "Слива", okresOpis: "с середины августа до середины сентября" },
  malina: { nazwa: "Малина", okresOpis: "с мая до июля" },
  jezyna: { nazwa: "Ежевика", okresOpis: "с июля до сентября" },
  morwa: { nazwa: "Шелковица", okresOpis: "с середины мая до июня", opis: "Сладкие, нежные ягоды с очень коротким сезоном — доступны всего несколько недель в году." },
  wisnia: { nazwa: "Вишня", okresOpis: "с июня до августа" },
  czeresnia: { nazwa: "Черешня", okresOpis: "с мая до июня" },
  truskawka: { nazwa: "Клубника", okresOpis: "с апреля до июня" },
  gruszka: { nazwa: "Груша", okresOpis: "с июля до октября" },
  unabi: { nazwa: "Унаби (зизифус)", okresOpis: "с середины августа до середины сентября", opis: "Так называемая ююба. Мелкий плод со вкусом, близким к яблоку и финику; едят свежим и сушёным, ценится в траволечении." },
  feijoa: { nazwa: "Фейхоа", okresOpis: "с середины сентября до середины ноября", opis: "Ароматный субтропический плод с нотами ананаса и клубники. Короткий осенний сезон делает его премиальным продуктом с растущим спросом." },
  kaki: { nazwa: "Хурма", okresOpis: "с начала октября до середины ноября; также доступна сушёной", opis: "В Грузии два сорта: хурма (терпкая, дозревает после сбора) и королёк (сладкий, готов к употреблению сразу). Также доступна сушёной." },
  granat: { nazwa: "Гранат", okresOpis: "с октября до конца ноября" },
  kiwi: { nazwa: "Киви", okresOpis: "с середины сентября до начала ноября" },
  mandarynka: { nazwa: "Мандарин", okresOpis: "с середины ноября до января; без косточек" },
  limonka: { nazwa: "Лайм", okresOpis: "с середины ноября до января" },
  baklazan: { nazwa: "Баклажан", okresOpis: "с середины июня до ноября" },
  cukinia: { nazwa: "Кабачок", okresOpis: "с июня до сентября" },
  "mlode-ziemniaki": { nazwa: "Молодой картофель", okresOpis: "с марта (ранний весенний урожай)" },
  "mloda-kapusta": { nazwa: "Молодая капуста", okresOpis: "с конца апреля до июля" },
  kalafior: { nazwa: "Цветная капуста", okresOpis: "весь год" },
  brokul: { nazwa: "Брокколи", okresOpis: "весь год" },
  papryka: { nazwa: "Перец", okresOpis: "с июня до октября; зелёный и красный" },
  marchew: { nazwa: "Морковь", okresOpis: "весь год" },
  pomidor: { nazwa: "Помидор", okresOpis: "с весны до осени" },
  ogorek: { nazwa: "Огурец", okresOpis: "с марта до октября" },
  "bazylia-czerwona": { nazwa: "Красный базилик", okresOpis: "весь год" },
  "ziola-kolendra-pietruszka-koperek": { nazwa: "Кориандр, петрушка, укроп", okresOpis: "весь год" },
  "orzechy-wloski-laskowy": { nazwa: "Грецкий орех / фундук", okresOpis: "с середины сентября до середины ноября" },
};

/** Zakres miesięcy w danym języku, np. [6,7,8] → "cze – sie" / "Jun – Aug" / "июн – авг". */
export function zakresMiesiecyLoc(miesiace: number[], short: string[], allYear: string): string {
  if (!miesiace.length) return allYear;
  const set = new Set(miesiace);
  let start = miesiace[0];
  for (const m of miesiace) {
    const prev = m === 1 ? 12 : m - 1;
    if (!set.has(prev)) {
      start = m;
      break;
    }
  }
  let end = start;
  while (set.has(end === 12 ? 1 : end + 1)) {
    end = end === 12 ? 1 : end + 1;
  }
  if (start === end) return short[start - 1];
  return `${short[start - 1]} – ${short[end - 1]}`;
}

/** Zwraca przetłumaczone pola produktu; dla PL (lub braku tłumaczenia) — wartości źródłowe. */
export function tProdukt(p: Produkt, lang: Locale): Tr {
  const src: Tr = { nazwa: p.nazwa, okresOpis: p.okresOpis, opis: p.opis };
  if (lang === "en") return { ...src, ...en[p.id] };
  if (lang === "ru") return { ...src, ...ru[p.id] };
  return src;
}

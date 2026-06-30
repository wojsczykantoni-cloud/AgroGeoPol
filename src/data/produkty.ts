// ── Dane katalogu produktów AgroGeoPol Ltd ──
// Źródło: katalog sezonowości owoców i warzyw z Gruzji.

export type Kategoria = "owoc" | "warzywo" | "ziolo" | "orzech";

export interface Produkt {
  id: string;
  nazwa: string;
  nazwaLac?: string;
  kategoria: Kategoria;
  miesiace: number[]; // 1–12; puste gdy całoroczny
  caloryRok: boolean; // true = dostępny przez cały rok
  okresOpis: string; // pełny opis sezonu (tekst)
  opis?: string; // krótki opis — tylko dla rzadkich gatunków
  zdjecie: string; // ścieżka do /public/images/produkty/...
}

const IMG = "/images/produkty";

export const produkty: Produkt[] = [
  // ── OWOCE ──
  { id: "brzoskwinia", nazwa: "Brzoskwinia", nazwaLac: "Prunus persica", kategoria: "owoc", miesiace: [6, 7, 8], caloryRok: false, okresOpis: "od I poł. czerwca do II poł. sierpnia; nowy podgatunek co ~3 tyg.", zdjecie: `${IMG}/brzoskwinia.jpg` },
  { id: "nektarynka", nazwa: "Nektarynka", nazwaLac: "Prunus persica var. nucipersica", kategoria: "owoc", miesiace: [6, 7, 8], caloryRok: false, okresOpis: "od II poł. czerwca do końca sierpnia", zdjecie: `${IMG}/nektarynka.jpg` },
  { id: "morela", nazwa: "Morela", nazwaLac: "Prunus armeniaca", kategoria: "owoc", miesiace: [5, 6], caloryRok: false, okresOpis: "od końca maja do II poł. czerwca", zdjecie: `${IMG}/morela.jpg` },
  { id: "alycza", nazwa: "Ałycza", nazwaLac: "Prunus cerasifera", kategoria: "owoc", miesiace: [5, 6], caloryRok: false, okresOpis: "od maja do poł. czerwca", opis: "Kaukaska ałycza — drobna, soczysta śliwka o wyrazistym kwaskowatym smaku. Ceniona na świeżo oraz do przetworów i sosów.", zdjecie: `${IMG}/alycza.jpg` },
  { id: "muszmala", nazwa: "Muszmała", nazwaLac: "Eriobotrya japonica", kategoria: "owoc", miesiace: [5, 6, 7], caloryRok: false, okresOpis: "od końca maja do początku lipca", opis: "Wczesnoletni owoc o słodko-cierpkim miąższu i bardzo krótkim sezonie — produkt niszowy, rzadko spotykany na polskim rynku.", zdjecie: `${IMG}/muszmala.jpg` },
  { id: "figa", nazwa: "Figa", nazwaLac: "Ficus carica", kategoria: "owoc", miesiace: [7, 8, 9], caloryRok: false, okresOpis: "od poł. lipca do końca września", zdjecie: `${IMG}/figa.jpg` },
  { id: "winogrono", nazwa: "Winogrono", nazwaLac: "Vitis vinifera", kategoria: "owoc", miesiace: [9, 10], caloryRok: false, okresOpis: "od początku września do I poł. października; odmiany deserowe i winne", zdjecie: `${IMG}/winogrono.jpg` },
  { id: "tkemali", nazwa: "Tkemali", nazwaLac: "Prunus cerasifera", kategoria: "owoc", miesiace: [6, 7], caloryRok: false, okresOpis: "od poł. czerwca do końca lipca", opis: "Gruzińska mirabelka (czerwona i zielona) — surowiec słynnego kwaśnego sosu tkemali. Wyrazista i sezonowa, idealna do przetwórstwa.", zdjecie: `${IMG}/tkemali.jpg` },
  { id: "arbuz", nazwa: "Arbuz", nazwaLac: "Citrullus lanatus", kategoria: "owoc", miesiace: [6, 7, 8, 9, 10], caloryRok: false, okresOpis: "od II poł. czerwca do I poł. października", zdjecie: `${IMG}/arbuz.jpg` },
  { id: "melon", nazwa: "Melon", nazwaLac: "Cucumis melo", kategoria: "owoc", miesiace: [7, 8, 9, 10], caloryRok: false, okresOpis: "od poł. lipca do października", zdjecie: `${IMG}/melon.jpg` },
  { id: "borowka-amerykanska", nazwa: "Borówka amerykańska", nazwaLac: "Vaccinium corymbosum", kategoria: "owoc", miesiace: [5, 6], caloryRok: false, okresOpis: "maj–czerwiec", zdjecie: `${IMG}/borowka-amerykanska.jpg` },
  { id: "sliwka", nazwa: "Śliwka", nazwaLac: "Prunus domestica", kategoria: "owoc", miesiace: [8, 9], caloryRok: false, okresOpis: "od poł. sierpnia do poł. września", zdjecie: `${IMG}/sliwka.jpg` },
  { id: "malina", nazwa: "Malina", nazwaLac: "Rubus idaeus", kategoria: "owoc", miesiace: [5, 6, 7], caloryRok: false, okresOpis: "od maja do lipca", zdjecie: `${IMG}/malina.jpg` },
  { id: "jezyna", nazwa: "Jeżyna", nazwaLac: "Rubus fruticosus", kategoria: "owoc", miesiace: [7, 8, 9], caloryRok: false, okresOpis: "od lipca do września", zdjecie: `${IMG}/jezyna.jpg` },
  { id: "morwa", nazwa: "Morwa", nazwaLac: "Morus alba/nigra", kategoria: "owoc", miesiace: [5, 6], caloryRok: false, okresOpis: "od poł. maja do czerwca", opis: "Słodkie, delikatne owoce o bardzo krótkim sezonie — dostępne przez zaledwie kilka tygodni w roku.", zdjecie: `${IMG}/morwa.jpg` },
  { id: "wisnia", nazwa: "Wiśnia", nazwaLac: "Prunus cerasus", kategoria: "owoc", miesiace: [6, 7, 8], caloryRok: false, okresOpis: "od czerwca do sierpnia", zdjecie: `${IMG}/wisnia.jpg` },
  { id: "czeresnia", nazwa: "Czereśnia", nazwaLac: "Prunus avium", kategoria: "owoc", miesiace: [5, 6], caloryRok: false, okresOpis: "od maja do czerwca", zdjecie: `${IMG}/czeresnia.jpg` },
  { id: "truskawka", nazwa: "Truskawka", nazwaLac: "Fragaria ananassa", kategoria: "owoc", miesiace: [4, 5, 6], caloryRok: false, okresOpis: "od kwietnia do czerwca", zdjecie: `${IMG}/truskawka.jpg` },
  { id: "gruszka", nazwa: "Gruszka", nazwaLac: "Pyrus communis", kategoria: "owoc", miesiace: [7, 8, 9, 10], caloryRok: false, okresOpis: "od lipca do października", zdjecie: `${IMG}/gruszka.jpg` },
  { id: "unabi", nazwa: "Unabi", nazwaLac: "Ziziphus jujuba", kategoria: "owoc", miesiace: [8, 9], caloryRok: false, okresOpis: "od poł. sierpnia do poł. września", opis: "Tzw. jujuba. Drobny owoc o smaku zbliżonym do jabłka i daktyla; spożywany na świeżo i suszony, ceniony w ziołolecznictwie.", zdjecie: `${IMG}/unabi.jpg` },
  { id: "feijoa", nazwa: "Feijoa", nazwaLac: "Acca sellowiana", kategoria: "owoc", miesiace: [9, 10, 11], caloryRok: false, okresOpis: "od poł. września do poł. listopada", opis: "Aromatyczny owoc subtropikalny o nutach ananasa i truskawki. Krótki jesienny sezon czyni go produktem premium o rosnącym popycie.", zdjecie: `${IMG}/feijoa.jpg` },
  { id: "kaki", nazwa: "Kaki", nazwaLac: "Diospyros kaki", kategoria: "owoc", miesiace: [10, 11], caloryRok: false, okresOpis: "od I poł. października do poł. listopada; dostępne też suszone", opis: "W Gruzji dwie odmiany: hurma (cierpka, dojrzewająca po zbiorze) i karaliok (słodka, jadalna od razu). Dostępne też suszone.", zdjecie: `${IMG}/kaki.jpg` },
  { id: "granat", nazwa: "Granat", nazwaLac: "Punica granatum", kategoria: "owoc", miesiace: [10, 11], caloryRok: false, okresOpis: "od października do końca listopada", zdjecie: `${IMG}/granat.jpg` },
  { id: "kiwi", nazwa: "Kiwi", nazwaLac: "Actinidia deliciosa", kategoria: "owoc", miesiace: [9, 10, 11], caloryRok: false, okresOpis: "od poł. września do początku listopada", zdjecie: `${IMG}/kiwi.jpg` },
  { id: "mandarynka", nazwa: "Mandarynka", nazwaLac: "Citrus reticulata", kategoria: "owoc", miesiace: [11, 12, 1], caloryRok: false, okresOpis: "od poł. listopada do stycznia; bezpestkowa", zdjecie: `${IMG}/mandarynka.jpg` },
  { id: "limonka", nazwa: "Limonka", nazwaLac: "Citrus aurantiifolia", kategoria: "owoc", miesiace: [11, 12, 1], caloryRok: false, okresOpis: "od poł. listopada do stycznia", zdjecie: `${IMG}/limonka.jpg` },

  // ── WARZYWA ──
  { id: "baklazan", nazwa: "Bakłażan", nazwaLac: "Solanum melongena", kategoria: "warzywo", miesiace: [6, 7, 8, 9, 10, 11], caloryRok: false, okresOpis: "od poł. czerwca do listopada", zdjecie: `${IMG}/baklazan.jpg` },
  { id: "cukinia", nazwa: "Cukinia", nazwaLac: "Cucurbita pepo", kategoria: "warzywo", miesiace: [6, 7, 8, 9], caloryRok: false, okresOpis: "od czerwca do września", zdjecie: `${IMG}/cukinia.jpg` },
  { id: "mlode-ziemniaki", nazwa: "Młode ziemniaki", nazwaLac: "Solanum tuberosum", kategoria: "warzywo", miesiace: [3, 4, 5, 6], caloryRok: false, okresOpis: "od marca (młode zbiory wiosenne)", zdjecie: `${IMG}/mlode-ziemniaki.jpg` },
  { id: "mloda-kapusta", nazwa: "Młoda kapusta", nazwaLac: "Brassica oleracea", kategoria: "warzywo", miesiace: [4, 5, 6, 7], caloryRok: false, okresOpis: "od końca kwietnia do lipca", zdjecie: `${IMG}/mloda-kapusta.jpg` },
  { id: "kalafior", nazwa: "Kalafior", nazwaLac: "Brassica oleracea botrytis", kategoria: "warzywo", miesiace: [], caloryRok: true, okresOpis: "cały rok", zdjecie: `${IMG}/kalafior.jpg` },
  { id: "brokul", nazwa: "Brokuł", nazwaLac: "Brassica oleracea italica", kategoria: "warzywo", miesiace: [], caloryRok: true, okresOpis: "cały rok", zdjecie: `${IMG}/brokul.jpg` },
  { id: "papryka", nazwa: "Papryka", nazwaLac: "Capsicum annuum", kategoria: "warzywo", miesiace: [6, 7, 8, 9, 10], caloryRok: false, okresOpis: "od czerwca do października; zielona i czerwona", zdjecie: `${IMG}/papryka.jpg` },
  { id: "marchew", nazwa: "Marchew", nazwaLac: "Daucus carota", kategoria: "warzywo", miesiace: [], caloryRok: true, okresOpis: "cały rok", zdjecie: `${IMG}/marchew.jpg` },
  { id: "pomidor", nazwa: "Pomidor", nazwaLac: "Solanum lycopersicum", kategoria: "warzywo", miesiace: [4, 5, 6, 7, 8, 9, 10], caloryRok: false, okresOpis: "od wiosny do jesieni", zdjecie: `${IMG}/pomidor.jpg` },
  { id: "ogorek", nazwa: "Ogórek", nazwaLac: "Cucumis sativus", kategoria: "warzywo", miesiace: [3, 4, 5, 6, 7, 8, 9, 10], caloryRok: false, okresOpis: "od marca do października", zdjecie: `${IMG}/ogorki.jpg` },

  // ── ZIOŁA ──
  { id: "bazylia-czerwona", nazwa: "Bazylia czerwona", nazwaLac: "Ocimum basilicum", kategoria: "ziolo", miesiace: [], caloryRok: true, okresOpis: "cały rok", zdjecie: `${IMG}/bazylia-czerwona.jpg` },
  { id: "ziola-kolendra-pietruszka-koperek", nazwa: "Kolendra, pietruszka, koperek", nazwaLac: "Coriandrum sativum", kategoria: "ziolo", miesiace: [], caloryRok: true, okresOpis: "cały rok", zdjecie: `${IMG}/ziola-kolendra-pietruszka-koperek.jpg` },

  // ── ORZECHY ──
  { id: "orzechy-wloski-laskowy", nazwa: "Orzech włoski / laskowy", nazwaLac: "Juglans regia / Corylus avellana", kategoria: "orzech", miesiace: [9, 10, 11], caloryRok: false, okresOpis: "od II poł. września do poł. listopada", zdjecie: `${IMG}/orzechy-wloski-laskowy.jpg` },
];

// ── Stałe pomocnicze ──
export const MIESIACE_SKROT = ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"];
export const MIESIACE_PELNE = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
export const MIESIACE_RZYM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

/** Skrócony zakres miesięcy, np. [6,7,8] → "cze – sie", [11,12,1] → "lis – sty". */
export function zakresMiesiecy(miesiace: number[]): string {
  if (!miesiace.length) return "cały rok";
  const set = new Set(miesiace);
  // początek pojedynczego zakresu (z zawijaniem grudzień → styczeń)
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
  if (start === end) return MIESIACE_SKROT[start - 1];
  return `${MIESIACE_SKROT[start - 1]} – ${MIESIACE_SKROT[end - 1]}`;
}

/** Czy produkt jest dostępny w danym miesiącu (1–12). Całoroczne zawsze true. */
export function dostepnyWMiesiacu(p: Produkt, miesiac: number): boolean {
  return p.caloryRok || p.miesiace.includes(miesiac);
}

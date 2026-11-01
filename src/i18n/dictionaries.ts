// ── Słowniki tłumaczeń PL / EN / RU ──
// Polski jest źródłem. Struktura wspólna dla wszystkich języków (typ Dict = wariant PL).

const pl = {
  nav: {
    home: "Strona główna",
    about: "O nas",
    shop: "Sklep",
    gallery: "Galeria",
    contact: "Kontakt",
    orderNow: "Zamów teraz",
  },
  hero: {
    title1: "Smak Kaukazu",
    title2: "prosto do Twojej firmy.",
    subtitle:
      "Hurtowe dostawy świeżych i mrożonych owoców oraz warzyw dla hurtowni, przetwórni i restauracji w Polsce i UE.",
    ctaOffer: "Przeglądaj ofertę",
    ctaContact: "Skontaktuj się",
    stripLocation: "Gruzja / Dostawy do Polski i UE",
    stripQuality: "Jakość gwarantowana przez AgroGeoPol Ltd",
  },
  offerings: {
    tag: "Co oferujemy",
    title: "Trzy kategorie,",
    titleAccent: "jedno źródło",
    subtitle:
      "Gruzja ma wyjątkowy klimat — korzystamy z tego w pełni. Każda kategoria to osobna linia dostawy, osobna jakość kontroli.",
    cards: [
      {
        tag: "Główna oferta",
        title: "Świeże owoce i warzywa",
        description:
          "Śliwki, brzoskwinie, wiśnie, jabłka, gruszki, pomidory, papryka — sezonowe produkty prosto z Gruzji. Dostawy hurtowe do Polski i UE.",
        points: ["Owoce sezonowe", "Warzywa świeże", "Dostawy hurtowe", "Eksport bezpośredni"],
      },
      {
        tag: "Główna oferta",
        title: "Mrożonki IQF",
        description:
          "Indywidualnie mrożone owoce i warzywa: truskawki, wiśnie, śliwki, maliny, fasolka szparagowa, groszek, kukurydza. Zachowana świeżość i wartości odżywcze.",
        points: ["Mrożenie IQF", "Truskawki, wiśnie, maliny", "Fasolka, groszek, kukurydza", "Skala hurtowa"],
      },
      {
        tag: "Dodatkowo",
        title: "Hodowla ślimaków",
        description:
          "Uzupełnieniem naszej oferty są mrożone ślimaki i filet ze ślimaków, przeznaczone na eksport. Hodowla prowadzona w kontrolowanych warunkach, wysoka jakość.",
        points: ["Mrożone ślimaki", "Filet ze ślimaków", "Eksport", "Produkt uzupełniający"],
      },
    ],
  },
  stats: {
    items: [
      { label: "Eksport z Gruzji", sub: "bezpośrednio od producenta" },
      { label: "Mrożenie indywidualne", sub: "zachowana świeżość i wartości" },
      { label: "Sprzedaż hurtowa", sub: "dla firm i dystrybutorów" },
      { label: "Własne chłodnie", sub: "całoroczna dostępność" },
    ],
  },
  whyus: {
    tag: "Dlaczego my?",
    title: "8 powodów, by wybrać AgroGeoPol Ltd",
    subtitle:
      "Łączymy doświadczenie w eksporcie z nowoczesnym podejściem do jakości i obsługi klienta.",
    reasons: [
      { title: "Bezpośredni eksport z Gruzji", description: "Produkty trafiają do Ciebie prosto od producenta — bez zbędnych pośredników, co gwarantuje świeżość i konkurencyjną cenę." },
      { title: "Mrożenie IQF", description: "Indywidualne mrożenie każdego owocu i warzywa z osobna — zachowane wartości odżywcze, smak i struktura produktu." },
      { title: "Kontrola jakości", description: "Każda partia przechodzi kontrolę jakości. Dostarczamy produkty spełniające normy eksportowe UE." },
      { title: "Niezawodna logistyka", description: "Terminowe dostawy zarówno małych zamówień, jak i dużych kontraktów B2B — obsługujemy bez opóźnień." },
      { title: "Długofalowa współpraca", description: "Stawiamy na stałe relacje z klientami. Jesteśmy elastyczni i dostępni na każdym etapie współpracy." },
      { title: "Kontakt 24/7", description: "Jesteśmy do dyspozycji w pilnych sytuacjach. Szybka odpowiedź i realna pomoc — nie automat." },
      { title: "Naturalny klimat Gruzji", description: "Gruzja słynie z wyjątkowych warunków klimatycznych i tradycji rolniczych — nasze produkty to efekt tej jakości." },
      { title: "Całoroczna dostępność", description: "Dzięki własnym chłodniom i mrożonkom IQF zapewniamy ciągłość dostaw niezależnie od sezonu." },
    ],
  },
  cta: {
    tag: "Zacznij współpracę",
    title: "Masz pytania lub chcesz złożyć zamówienie?",
    subtitle:
      "Skontaktuj się z nami — odpowiemy szybko i pomożemy dobrać produkty do Twoich potrzeb. Jesteśmy dostępni dla hurtowni, przetwórni, restauracji i importerów.",
    write: "Napisz do nas",
  },
  footer: {
    brandDesc:
      "Eksport świeżych i mrożonych owoców oraz warzyw z Gruzji. Własne chłodnie, mrożenie IQF, dostawy hurtowe.",
    navHeading: "Nawigacja",
    contactHeading: "Kontakt",
    addressLine1: "Placeholder adres,",
    addressLine2: "Polska",
    rights: "Wszelkie prawa zastrzeżone.",
  },
};

const en: typeof pl = {
  nav: {
    home: "Home",
    about: "About",
    shop: "Shop",
    gallery: "Gallery",
    contact: "Contact",
    orderNow: "Order now",
  },
  hero: {
    title1: "The taste of the Caucasus",
    title2: "straight to your business.",
    subtitle:
      "Wholesale supplies of fresh and frozen fruit and vegetables for wholesalers, processors and restaurants in Poland and the EU.",
    ctaOffer: "Browse the offer",
    ctaContact: "Get in touch",
    stripLocation: "Georgia / Delivery to Poland and the EU",
    stripQuality: "Quality guaranteed by AgroGeoPol Ltd",
  },
  offerings: {
    tag: "What we offer",
    title: "Three categories,",
    titleAccent: "one source",
    subtitle:
      "Georgia has a unique climate — and we make the most of it. Each category is a separate supply line with its own quality control.",
    cards: [
      {
        tag: "Core offer",
        title: "Fresh fruit and vegetables",
        description:
          "Plums, peaches, cherries, apples, pears, tomatoes, peppers — seasonal products straight from Georgia. Wholesale delivery to Poland and the EU.",
        points: ["Seasonal fruit", "Fresh vegetables", "Wholesale delivery", "Direct export"],
      },
      {
        tag: "Core offer",
        title: "IQF frozen",
        description:
          "Individually quick-frozen fruit and vegetables: strawberries, cherries, plums, raspberries, green beans, peas, corn. Freshness and nutritional value preserved.",
        points: ["IQF freezing", "Strawberries, cherries, raspberries", "Beans, peas, corn", "Wholesale scale"],
      },
      {
        tag: "Additionally",
        title: "Snail farming",
        description:
          "Our offer is complemented by frozen snails and snail fillet for export. Farming is carried out under controlled conditions, to a high standard.",
        points: ["Frozen snails", "Snail fillet", "Export", "Complementary product"],
      },
    ],
  },
  stats: {
    items: [
      { label: "Export from Georgia", sub: "directly from the producer" },
      { label: "Individual freezing", sub: "freshness & nutrients preserved" },
      { label: "Wholesale sales", sub: "for companies and distributors" },
      { label: "Own cold storage", sub: "year-round availability" },
    ],
  },
  whyus: {
    tag: "Why us?",
    title: "8 reasons to choose AgroGeoPol Ltd",
    subtitle:
      "We combine export experience with a modern approach to quality and customer service.",
    reasons: [
      { title: "Direct export from Georgia", description: "Products reach you straight from the producer — no unnecessary middlemen, which guarantees freshness and a competitive price." },
      { title: "IQF freezing", description: "Each fruit and vegetable is frozen individually — preserving nutritional value, taste and texture." },
      { title: "Quality control", description: "Every batch undergoes quality control. We deliver products that meet EU export standards." },
      { title: "Reliable logistics", description: "On-time delivery of both small orders and large B2B contracts — handled without delays." },
      { title: "Long-term cooperation", description: "We focus on lasting relationships with clients. We are flexible and available at every stage." },
      { title: "24/7 contact", description: "We are available in urgent situations. A quick reply and real help — not a bot." },
      { title: "Georgia's natural climate", description: "Georgia is renowned for its exceptional climate and farming traditions — our products are the result of that quality." },
      { title: "Year-round availability", description: "Thanks to our own cold storage and IQF frozen goods, we ensure continuity of supply regardless of the season." },
    ],
  },
  cta: {
    tag: "Start cooperation",
    title: "Have questions or want to place an order?",
    subtitle:
      "Contact us — we'll reply quickly and help you choose the right products. We work with wholesalers, processors, restaurants and importers.",
    write: "Write to us",
  },
  footer: {
    brandDesc:
      "Export of fresh and frozen fruit and vegetables from Georgia. Own cold storage, IQF freezing, wholesale delivery.",
    navHeading: "Navigation",
    contactHeading: "Contact",
    addressLine1: "Placeholder address,",
    addressLine2: "Poland",
    rights: "All rights reserved.",
  },
};

const ru: typeof pl = {
  nav: {
    home: "Главная",
    about: "О нас",
    shop: "Магазин",
    gallery: "Галерея",
    contact: "Контакты",
    orderNow: "Заказать",
  },
  hero: {
    title1: "Вкус Кавказа",
    title2: "прямо в ваш бизнес.",
    subtitle:
      "Оптовые поставки свежих и замороженных фруктов и овощей для оптовиков, переработчиков и ресторанов в Польше и ЕС.",
    ctaOffer: "Смотреть ассортимент",
    ctaContact: "Связаться",
    stripLocation: "Грузия / Доставка в Польшу и ЕС",
    stripQuality: "Качество гарантировано AgroGeoPol Ltd",
  },
  offerings: {
    tag: "Что мы предлагаем",
    title: "Три категории,",
    titleAccent: "один источник",
    subtitle:
      "У Грузии уникальный климат — и мы используем это в полной мере. Каждая категория — отдельная линия поставок со своим контролем качества.",
    cards: [
      {
        tag: "Основное предложение",
        title: "Свежие фрукты и овощи",
        description:
          "Сливы, персики, черешня, яблоки, груши, помидоры, перец — сезонные продукты прямо из Грузии. Оптовая доставка в Польшу и ЕС.",
        points: ["Сезонные фрукты", "Свежие овощи", "Оптовые поставки", "Прямой экспорт"],
      },
      {
        tag: "Основное предложение",
        title: "Заморозка IQF",
        description:
          "Индивидуально замороженные фрукты и овощи: клубника, вишня, слива, малина, стручковая фасоль, горошек, кукуруза. Сохранены свежесть и питательная ценность.",
        points: ["Заморозка IQF", "Клубника, вишня, малина", "Фасоль, горошек, кукуруза", "Оптовый масштаб"],
      },
      {
        tag: "Дополнительно",
        title: "Разведение улиток",
        description:
          "Наше предложение дополняют замороженные улитки и филе улитки на экспорт. Разведение ведётся в контролируемых условиях, высокое качество.",
        points: ["Замороженные улитки", "Филе улитки", "Экспорт", "Дополнительный продукт"],
      },
    ],
  },
  stats: {
    items: [
      { label: "Экспорт из Грузии", sub: "напрямую от производителя" },
      { label: "Индивидуальная заморозка", sub: "сохранены свежесть и польза" },
      { label: "Оптовые продажи", sub: "для компаний и дистрибьюторов" },
      { label: "Собственные холодильники", sub: "круглогодичная доступность" },
    ],
  },
  whyus: {
    tag: "Почему мы?",
    title: "8 причин выбрать AgroGeoPol Ltd",
    subtitle:
      "Мы сочетаем опыт в экспорте с современным подходом к качеству и обслуживанию клиентов.",
    reasons: [
      { title: "Прямой экспорт из Грузии", description: "Продукты попадают к вам напрямую от производителя — без лишних посредников, что гарантирует свежесть и конкурентную цену." },
      { title: "Заморозка IQF", description: "Каждый фрукт и овощ замораживается по отдельности — сохраняются питательная ценность, вкус и структура продукта." },
      { title: "Контроль качества", description: "Каждая партия проходит контроль качества. Мы поставляем продукцию, соответствующую экспортным нормам ЕС." },
      { title: "Надёжная логистика", description: "Своевременная доставка как небольших заказов, так и крупных B2B-контрактов — без задержек." },
      { title: "Долгосрочное сотрудничество", description: "Мы делаем ставку на постоянные отношения с клиентами. Гибкие и доступны на каждом этапе." },
      { title: "Связь 24/7", description: "Мы на связи в срочных ситуациях. Быстрый ответ и реальная помощь — не автоответчик." },
      { title: "Природный климат Грузии", description: "Грузия славится исключительным климатом и аграрными традициями — наши продукты результат этого качества." },
      { title: "Круглогодичная доступность", description: "Благодаря собственным холодильникам и заморозке IQF мы обеспечиваем непрерывность поставок независимо от сезона." },
    ],
  },
  cta: {
    tag: "Начните сотрудничество",
    title: "Есть вопросы или хотите сделать заказ?",
    subtitle:
      "Свяжитесь с нами — быстро ответим и поможем подобрать продукты под ваши задачи. Мы работаем с оптовиками, переработчиками, ресторанами и импортёрами.",
    write: "Напишите нам",
  },
  footer: {
    brandDesc:
      "Экспорт свежих и замороженных фруктов и овощей из Грузии. Собственные холодильники, заморозка IQF, оптовые поставки.",
    navHeading: "Навигация",
    contactHeading: "Контакты",
    addressLine1: "Адрес-заполнитель,",
    addressLine2: "Польша",
    rights: "Все права защищены.",
  },
};

export const dictionaries = { pl, en, ru };
export type Dict = typeof pl;

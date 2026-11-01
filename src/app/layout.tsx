import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agrogeopol.com"),
  title: {
    default: "AgroGeoPol Ltd | Owoce i Warzywa z Gruzji",
    template: "%s | AgroGeoPol Ltd",
  },
  description:
    "AgroGeoPol Ltd — eksport świeżych i mrożonych owoców oraz warzyw z Gruzji. Dostawy hurtowe, mrożonki IQF, bezpośrednio od producenta.",
  keywords: [
    "owoce z Gruzji",
    "warzywa z Gruzji",
    "mrożonki IQF",
    "eksport owoców",
    "hurtownia owoców",
    "AgroGeoPol",
  ],
  authors: [{ name: "AgroGeoPol Ltd" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://agrogeopol.com",
    siteName: "AgroGeoPol Ltd",
    title: "AgroGeoPol Ltd | Owoce i Warzywa z Gruzji",
    description:
      "Eksport świeżych i mrożonych owoców oraz warzyw z Gruzji. Dostawy hurtowe B2B, mrożonki IQF, bezpośrednio od producenta.",
    images: [
      {
        url: "/images/hero-chlodnia.jpg",
        width: 1920,
        height: 1089,
        alt: "AgroGeoPol Ltd — owoce i warzywa z Gruzji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgroGeoPol Ltd | Owoce i Warzywa z Gruzji",
    description:
      "Eksport świeżych i mrożonych owoców oraz warzyw z Gruzji. Dostawy hurtowe B2B, mrożonki IQF.",
    images: ["/images/hero-chlodnia.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// Ustawia motyw przed pierwszym renderem — brak migotania (FOUC).
// Domyślnie jasny; ciemny tylko gdy użytkownik go wybrał (localStorage 'theme'='dark').
const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'){document.documentElement.setAttribute('data-theme','light');}}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${playfair.variable} ${montserrat.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

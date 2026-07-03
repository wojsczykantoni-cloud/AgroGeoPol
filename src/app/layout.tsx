import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
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

export const metadata: Metadata = {
  title: "AgroGeoPol Ltd | Owoce i Warzywa z Gruzji",
  description:
    "AgroGeoPol Ltd — eksport świeżych i mrożonych owoców oraz warzyw z Gruzji. Dostawy hurtowe, mrożonki IQF, bezpośrednio od producenta.",
  keywords: [
    "owoce z Gruzji",
    "warzywa z Gruzji",
    "mrożonki IQF",
    "eksport owoców",
    "hurtownia owoców",
    "Agrogeopol",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${playfair.variable} ${montserrat.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

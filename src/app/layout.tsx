import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agrogeopol Ltd | Owoce i Warzywa z Gruzji",
  description:
    "Agrogeopol Ltd — eksport świeżych i mrożonych owoców oraz warzyw z Gruzji. Dostawy hurtowe, mrożonki IQF, bezpośrednio od producenta.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F2EC] text-[#1A2A0A]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

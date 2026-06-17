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
  title: "AgroGeoPol | Hodowla Ślimaków i Kosmetyki",
  description:
    "AgroGeoPol — producent ślimaków jadalnych, muszli dekoracyjnych oraz kosmetyków na bazie śluzu ślimaka.",
  keywords: [
    "ślimaki jadalne",
    "hodowla ślimaków",
    "muszle ślimakow",
    "śluz ślimaka",
    "mucyna ślimaka",
    "kosmetyki ze śluzu",
    "AgroGeoPol",
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
      <body className="min-h-full flex flex-col bg-[#0A0F0A] text-[#F5F0E8]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

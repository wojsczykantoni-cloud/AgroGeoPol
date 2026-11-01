import type { Metadata } from "next";
import ONasContent from "@/components/pages/ONasContent";

export const metadata: Metadata = {
  title: "O nas",
  description:
    "Poznaj AgroGeoPol Ltd — eksportera świeżych i mrożonych owoców oraz warzyw z Gruzji.",
};

export default function ONasPage() {
  return <ONasContent />;
}

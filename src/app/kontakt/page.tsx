import type { Metadata } from "next";
import KontaktContent from "@/components/pages/KontaktContent";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Skontaktuj się z AgroGeoPol — zadzwoń, napisz lub wyślij wiadomość na WhatsApp.",
};

export default function KontaktPage() {
  return <KontaktContent />;
}

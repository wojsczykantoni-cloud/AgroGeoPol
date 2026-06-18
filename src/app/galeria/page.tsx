import { Metadata } from 'next';
import GalleryContent from '@/components/home/GalleryContent';

export const metadata: Metadata = {
  title: "Galeria",
  description: "Zobacz naszą hodowlę ślimaków, proces pakowania oraz gotowe produkty.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#111111] pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-[#F07030] uppercase tracking-widest mb-4">
            Nasza Galeria
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-[#F5F5F5] font-serif mb-6">
            Autentyczność i transparentność
          </h1>
          <p className="text-[#909090] text-lg">
            Zapraszamy za kulisy AgroGeoPol. Zobacz na własne oczy, jak wygląda nasza codzienna praca z pasją na polskiej hodowli ślimaków.
          </p>
        </div>
        
        {/* Interactive gallery content */}
        <GalleryContent />
      </div>
    </main>
  );
}

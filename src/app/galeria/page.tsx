import { Metadata } from 'next';
import GalleryContent from '@/components/home/GalleryContent';

export const metadata: Metadata = {
  title: "Galeria",
  description: "Zobacz naszą hodowlę ślimaków, proces pakowania oraz gotowe produkty.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-[#E07B39] uppercase tracking-widest mb-4">
            Nasza Galeria
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-[#1A2A0A] font-serif mb-6">
            Autentyczność i transparentność
          </h1>
          <p className="text-[#6B7A5A] text-lg">
            Zapraszamy za kulisy AgroGeoPol. Zobacz na własne oczy, jak wygląda nasza codzienna praca z pasją na polskiej hodowli ślimaków.
          </p>
        </div>
        
        {/* Interactive gallery content */}
        <GalleryContent />
      </div>
    </main>
  );
}

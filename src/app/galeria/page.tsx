import { Metadata } from 'next';
import GalleryContent from '@/components/home/GalleryContent';
import GaleriaHeader from '@/components/pages/GaleriaHeader';

export const metadata: Metadata = {
  title: "Galeria",
  description: "Zobacz naszą hodowlę ślimaków, proces pakowania oraz gotowe produkty.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4">
        <GaleriaHeader />
        {/* Interactive gallery content */}
        <GalleryContent />
      </div>
    </main>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const categories = ['Wszystkie', 'Hodowla', 'Produkty', 'Gastronomia'];

const galleryItems = [
  { id: 1, src: '/images/gallery-11.jpeg', title: 'Zespół AgroGeoPol', category: 'Hodowla' },
  { id: 2, src: '/images/gallery-03.jpeg', title: 'Hodowla ślimaków — widok ogólny', category: 'Hodowla' },
  { id: 3, src: '/images/gallery-01.jpeg', title: 'Ślimaki Helix aspersa na regałach', category: 'Hodowla' },
  { id: 4, src: '/images/gallery-02.jpeg', title: 'Ślimak w dłoni', category: 'Hodowla' },
  { id: 5, src: '/images/gallery-04.jpeg', title: 'Ślimaki na powierzchniach hodowlanych', category: 'Hodowla' },
  { id: 6, src: '/images/gallery-farm.png', title: 'Ferma ślimaków — widok z góry', category: 'Hodowla' },
  { id: 7, src: '/images/gallery-05.jpeg', title: 'Ślimaki w siatkach transportowych', category: 'Produkty' },
  { id: 8, src: '/images/gallery-06.jpeg', title: 'Hodowla na tackach', category: 'Hodowla' },
  { id: 9, src: '/images/gallery-07.jpeg', title: 'Pakowanie ślimaków', category: 'Produkty' },
  { id: 10, src: '/images/gallery-08.jpeg', title: 'Zbiór ślimaków — sezon', category: 'Hodowla' },
  { id: 11, src: '/images/gallery-09.jpeg', title: 'Logistyka i transport', category: 'Produkty' },
  { id: 12, src: '/images/gallery-10.jpeg', title: 'Ślimaki gotowe do wysyłki', category: 'Produkty' },
  { id: 13, src: '/images/gallery-cosmetics.png', title: 'Kosmetyki ze śluzu ślimaka', category: 'Produkty' },
  { id: 14, src: '/images/gallery-escargot.png', title: 'Escargot — danie restauracyjne', category: 'Gastronomia' },
  { id: 15, src: '/images/gallery-shells.png', title: 'Muszle dekoracyjne do podania', category: 'Gastronomia' },
  { id: 16, src: '/images/georgian-fruits.png', title: 'Owoce z Gruzji', category: 'Produkty' },
];

export default function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = activeCategory === 'Wszystkie' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // prevent scrolling
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat 
                ? 'bg-[#C9A84C] text-black shadow-[0_0_15px_rgba(201,168,76,0.3)]' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {filteredItems.map((item, index) => (
          <AnimateOnScroll key={item.id} animation="scale-in" delay={index * 50}>
            <div 
              className="relative group rounded-xl overflow-hidden cursor-pointer bg-[#1A1A1A] break-inside-avoid"
              onClick={() => openLightbox(index)}
            >
              {/* Using standard img for masonry to let browser handle natural aspect ratio */}
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 border-2 border-transparent group-hover:border-[#C9A84C]/50 rounded-xl">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-[#C9A84C] font-semibold tracking-wider uppercase mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-white font-medium text-lg leading-tight flex items-center justify-between">
                    {item.title}
                    <ZoomIn className="w-5 h-5 text-white/50" />
                  </h3>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Controls */}
          <button 
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
          >
            <X size={32} />
          </button>

          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
            onClick={prevImage}
          >
            <ChevronLeft size={36} />
          </button>

          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
            onClick={nextImage}
          >
            <ChevronRight size={36} />
          </button>

          {/* Main Image */}
          <div className="relative w-full h-full max-w-5xl max-h-[85vh] p-4 flex flex-col items-center justify-center pointer-events-none">
            <div className="relative w-full h-full pointer-events-auto flex justify-center items-center">
              <img 
                src={filteredItems[currentImageIndex].src} 
                alt={filteredItems[currentImageIndex].title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-scale-in"
                onClick={(e) => e.stopPropagation()} 
              />
            </div>
            
            {/* Caption */}
            <div className="absolute bottom-[-2rem] left-0 w-full text-center pointer-events-none">
              <p className="text-[#C9A84C] text-sm uppercase tracking-wider font-semibold mb-1">
                {filteredItems[currentImageIndex].category}
              </p>
              <h2 className="text-white text-xl font-light">
                {filteredItems[currentImageIndex].title}
              </h2>
              <p className="text-white/50 text-sm mt-2">
                {currentImageIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

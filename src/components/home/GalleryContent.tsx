'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { useI18n } from '@/i18n/LanguageProvider';

type CatKey = 'all' | 'hodowla' | 'produkty' | 'gastronomia';
const CAT_KEYS: CatKey[] = ['all', 'hodowla', 'produkty', 'gastronomia'];

// Zdjęcia + kategoria (klucz). Tytuły pochodzą ze słownika (t.gallery.items wg kolejności).
const galleryMeta: { id: number; src: string; cat: Exclude<CatKey, 'all'> }[] = [
  { id: 1, src: '/images/gallery-11.jpeg', cat: 'hodowla' },
  { id: 2, src: '/images/gallery-03.jpeg', cat: 'hodowla' },
  { id: 3, src: '/images/gallery-01.jpeg', cat: 'hodowla' },
  { id: 4, src: '/images/gallery-02.jpeg', cat: 'hodowla' },
  { id: 5, src: '/images/gallery-04.jpeg', cat: 'hodowla' },
  { id: 6, src: '/images/gallery-farm.png', cat: 'hodowla' },
  { id: 7, src: '/images/gallery-05.jpeg', cat: 'produkty' },
  { id: 8, src: '/images/gallery-06.jpeg', cat: 'hodowla' },
  { id: 9, src: '/images/gallery-07.jpeg', cat: 'produkty' },
  { id: 10, src: '/images/gallery-08.jpeg', cat: 'hodowla' },
  { id: 11, src: '/images/gallery-09.jpeg', cat: 'produkty' },
  { id: 12, src: '/images/gallery-10.jpeg', cat: 'produkty' },
  { id: 13, src: '/images/gallery-cosmetics.png', cat: 'produkty' },
  { id: 14, src: '/images/gallery-escargot.png', cat: 'gastronomia' },
  { id: 15, src: '/images/gallery-shells.png', cat: 'gastronomia' },
  { id: 16, src: '/images/georgian-fruits.png', cat: 'produkty' },
];

export default function GalleryContent() {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState<CatKey>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allItems = galleryMeta.map((m, i) => ({ ...m, title: t.gallery.items[i] }));
  const filteredItems = activeCategory === 'all'
    ? allItems
    : allItems.filter((item) => item.cat === activeCategory);

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
        {CAT_KEYS.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-gold text-white shadow-[0_0_15px_rgba(240,112,48,0.3)]'
                : 'bg-card text-gray-400 hover:bg-border hover:text-white border border-border'
            }`}
          >
            {t.gallery.categories[cat]}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {filteredItems.map((item, index) => (
          <AnimateOnScroll key={item.id} animation="scale-in" delay={index * 50}>
            <div 
              className="relative group rounded-xl overflow-hidden cursor-pointer bg-muted break-inside-avoid"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 border-2 border-transparent group-hover:border-gold/50 rounded-xl">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-gold font-semibold tracking-wider uppercase mb-2 block">
                    {t.gallery.categories[item.cat]}
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
              <p className="text-gold text-sm uppercase tracking-wider font-semibold mb-1">
                {t.gallery.categories[filteredItems[currentImageIndex].cat]}
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

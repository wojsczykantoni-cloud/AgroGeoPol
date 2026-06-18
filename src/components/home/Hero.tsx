'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background placeholder — zamień src na zdjęcie chłodni gdy będzie gotowe */}
      <div
        id="hero-bg"
        className="hero-bg absolute inset-0 w-full h-full z-0"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <Image
          src="/images/hero-chlodnia.jpg.png"
          alt="Chłodnia z owocami i warzywami z Gruzji"
          fill
          priority
          className="object-cover object-center opacity-80"
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center mt-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide text-gray-200">
            🇬🇪 Eksport bezpośredni z Gruzji
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-[#F5F0E8] font-serif mb-6 leading-tight animate-fade-in" style={{ animationDelay: '300ms' }}>
          Smak Kaukazu
          <span className="block font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#C0392B] to-[#E5CC82]">
            prosto do Twojej firmy.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-400 mb-10 animate-fade-in max-w-xl" style={{ animationDelay: '500ms' }}>
          Hurtowe dostawy świeżych i mrożonych owoców oraz warzyw dla hurtowni, przetwórni i restauracji w Polsce i UE.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '700ms' }}>
          <Link
            href="/sklep"
            className="px-8 py-4 bg-gradient-to-r from-[#C0392B] to-[#A88B3D] text-black font-semibold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Przeglądaj ofertę
          </Link>
          <Link
            href="/kontakt"
            className="px-8 py-4 bg-transparent border border-[#C0392B] text-[#C0392B] font-semibold rounded-lg hover:bg-[#C0392B]/10 transition-all duration-300 backdrop-blur-sm"
          >
            Skontaktuj się
          </Link>
        </div>
      </div>

      {/* Contact Strip */}
      <div
        id="bottom-bar"
        className={`fixed bottom-0 left-0 w-full z-50 border-t border-[#2A1818] bg-[#0D0808]/95 backdrop-blur-md hidden md:block transition-all duration-500 ease-in-out ${
          scrollY > 200 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 h-14 flex items-center justify-between text-sm text-gray-300">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <MapPin size={16} className="text-[#C0392B]" />
              <span>Gruzja / Dostawy do Polski i UE</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <a href="tel:+995555568302" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={16} className="text-[#C0392B]" />
              <span>+995 555 56 83 02</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-xs">Jakość gwarantowana przez Agrogeopol Ltd</span>
          </div>
        </div>
      </div>
    </section>
  );
}

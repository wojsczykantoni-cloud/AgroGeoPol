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
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#22401F]">
      <div
        id="hero-bg"
        className="hero-bg absolute inset-0 w-full h-full z-0"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <Image
          src="/images/hero-chlodnia nowa .jpg.png"
          alt="Chłodnia z owocami i warzywami z Gruzji"
          fill
          priority
          className="object-cover object-center opacity-80"
          sizes="100vw"
        />
      </div>

      {/* Bottle-green tinted overlay — warm, premium, keeps text legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#16290F]/70 via-[#22401F]/40 to-[#101F0A]/85 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center mt-16">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-white font-serif mb-6 leading-tight animate-fade-in" style={{ animationDelay: '300ms' }}>
          Smak Kaukazu
          <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-[#EADFB8] to-[#C2A34F]">
            prosto do Twojej firmy.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-[#EFE7D6]/90 mb-10 animate-fade-in max-w-xl leading-relaxed" style={{ animationDelay: '500ms' }}>
          Hurtowe dostawy świeżych i mrożonych owoców oraz warzyw dla hurtowni, przetwórni i restauracji w Polsce i UE.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '700ms' }}>
          <Link
            href="/sklep"
            className="px-8 py-4 rounded-lg btn-gold transition-transform duration-300 hover:scale-[1.03]"
          >
            Przeglądaj ofertę
          </Link>
          <Link
            href="/kontakt"
            className="px-8 py-4 bg-white/5 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/15 transition-all duration-300 backdrop-blur-sm"
          >
            Skontaktuj się
          </Link>
        </div>
      </div>

      {/* Contact Strip */}
      <div
        id="bottom-bar"
        className={`fixed bottom-0 left-0 w-full z-50 border-t border-[#E7DECF] bg-[#FAF6F0]/95 backdrop-blur-md hidden md:block transition-all duration-500 ease-in-out ${
          scrollY > 200 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 h-14 flex items-center justify-between text-sm text-[#5B5A50]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-[#2A5A2E] transition-colors cursor-pointer">
              <MapPin size={16} className="text-[#2A5A2E]" />
              <span>Gruzja / Dostawy do Polski i UE</span>
            </div>
            <div className="w-px h-4 bg-[#2A5A2E]/15"></div>
            <a href="tel:+995555568302" className="flex items-center gap-2 hover:text-[#2A5A2E] transition-colors">
              <Phone size={16} className="text-[#C2A34F]" />
              <span>+995 555 56 83 02</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#8C8A7E] text-xs">Jakość gwarantowana przez AgroGeoPol Ltd</span>
          </div>
        </div>
      </div>
    </section>
  );
}

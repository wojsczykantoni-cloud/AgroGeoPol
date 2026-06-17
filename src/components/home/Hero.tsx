'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
      {/* Background with Parallax */}
      <div 
        className="absolute inset-0 w-full h-full animate-parallax-slow z-0"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <Image
          src="/images/hero-snail-bg.png"
          alt="Ślimak na mchu w ogrodzie"
          fill
          priority
          className="object-cover object-center opacity-80"
          sizes="100vw"
        />
        {/* Placeholder for Video Background - Uncomment when video is ready */}
        {/* <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/hero-snail.mp4" type="video/mp4" />
        </video> */}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center mt-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide text-gray-200">
            Producent ślimaków, owoców i warzyw z własną chłodnią
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-[#F5F0E8] font-serif mb-6 leading-tight animate-fade-in" style={{ animationDelay: '300ms' }}>
          Natura w <br className="md:hidden" />
          <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-[#E5CC82]" style={{ paddingBottom: '0.45em', lineHeight: '1', display: 'inline-block', overflow: 'visible', verticalAlign: 'baseline' }}>najczystszej</span> postaci
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '500ms' }}>
          Hodowla ślimaków, sprzedaż owoców i warzyw oraz magazynowanie chłodnicze — wszystko prosto od producenta.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '700ms' }}>
          <Link
            href="/sklep"
            className="px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#A88B3D] text-black font-semibold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Przeglądaj ofertę
          </Link>
          <Link
            href="#kontakt"
            className="px-8 py-4 bg-transparent border border-[#C9A84C] text-[#C9A84C] font-semibold rounded-lg hover:bg-[#C9A84C]/10 transition-all duration-300 backdrop-blur-sm"
          >
            Skontaktuj się
          </Link>
        </div>
      </div>

      {/* Contact Strip */}
      <div
        id="bottom-bar"
        className={`fixed bottom-0 left-0 w-full z-50 border-t border-[#1F2E1F] bg-[#0A0F0A]/95 backdrop-blur-md hidden md:block transition-all duration-500 ease-in-out ${
          scrollY > 200 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 h-14 flex items-center justify-between text-sm text-gray-300">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <MapPin size={16} className="text-[#C9A84C]" />
              <span>Polska / Odbiór osobisty</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <a href="tel:+995555568302" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={16} className="text-[#C9A84C]" />
              <span>+995 555 56 83 02</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-xs">Jakość gwarantowana przez AgroGeoPol</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// src/components/HeroSection.tsx
'use client';

import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import SearchForm from './SearchForm';
import rioBanner from '@/assets/images/rio-banner.jpg';

export default function HeroSection() {
  const { t } = useTranslation();

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat pt-20 md:pt-24"
      style={{ backgroundImage: `url(${rioBanner})` }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Container principal */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-8 md:gap-16">
          {/* Conteúdo do hero - TOPO */}
          <div className="flex flex-col items-center gap-4 md:gap-6 text-center text-white">
            <h1 className="animate-fade-up text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {t('letsBegin')}
            </h1>
            <p className="animate-fade-up animation-delay-300 max-w-2xl text-lg md:text-xl">
              {t('weAssist')}
            </p>

            <Button
              onClick={scrollToNext}
              size="lg"
              className="animate-fade-up animation-delay-600 group rounded-full bg-[#69c6ba] hover:bg-[#c66995] transition-colors shadow-lg"
            >
              <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>

          {/* Search Form - CENTRO/BAIXO sobre a imagem */}
          <div className="w-full max-w-4xl animate-fade-up animation-delay-900">
            <SearchForm />
          </div>
        </div>
      </div>
    </section>
  );
}
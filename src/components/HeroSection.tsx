// src/components/HeroSection.tsx
'use client';

import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui';
import { useTranslation } from '@/hooks/useTranslation';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://placehold.co/1920x1080?text=Journey+Banner')`,
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center text-white">
        <h1 className="animate-fade-up text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          {t('letsBegin')}
        </h1>
        <p className="animate-fade-up animation-delay-300 max-w-2xl text-lg md:text-xl">
          {t('weAssist')}
        </p>

        <Button
          size="lg"
          className="animate-fade-up animation-delay-600 group gap-2 bg-primary hover:bg-highlight"
        >
          {t('explore')}
          <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
        </Button>
      </div>
    </section>
  );
}
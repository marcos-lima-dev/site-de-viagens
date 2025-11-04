// src/components/AboutSection.tsx
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#efefef]">
      <div className="container mx-auto px-4 max-w-[830px] text-center animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold text-[#333] mb-6 leading-tight">
          {t('yourJourney')}
        </h2>
        <p className="text-sm md:text-base text-[#787676] mb-8 leading-relaxed">
          {t('aboutText')}
        </p>
        <Button className="h-11 px-6 text-sm font-medium bg-[#69c6ba] hover:bg-[#c66995] text-white transition-colors">
          {t('continueExplore')}
        </Button>
      </div>
    </section>
  );
}
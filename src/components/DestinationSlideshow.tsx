// src/components/DestinationSlideshow.tsx
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface Destination {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface Props {
  reverse?: boolean;
  bgColor?: 'teal' | 'pink';
  destinations: Destination[];
}

export default function DestinationSlideshow({ 
  reverse = false, 
  bgColor = 'teal',
  destinations 
}: Props) {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  const currentDestination = destinations[currentSlide];
  
  const bgClass = bgColor === 'teal' ? 'bg-[#69c6ba]' : 'bg-[#c66995]';

  return (
    <section className="relative bg-white overflow-hidden w-full">
      <div className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} w-full`}>
        {/* Slideshow de Imagens */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[600px]">
          <img
            src={currentDestination.image}
            alt={currentDestination.title}
            className="w-full h-full object-cover"
          />

          {/* Controles - Estilo Original */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[#666] hover:bg-[#69c6ba] text-white transition-colors duration-300 z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[#666] hover:bg-[#69c6ba] text-white transition-colors duration-300 z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicadores - Estilo Original */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-110' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Descrição - Estilo Original */}
        <div className={`${bgClass} w-full lg:w-1/2 flex items-center`}>
          <div className="px-8 py-12 lg:px-16 lg:py-20 text-white max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-light mb-6 leading-tight">
              {currentDestination.title}
            </h2>
            <p className="text-base lg:text-lg font-light leading-relaxed mb-8 opacity-95">
              {currentDestination.description}
            </p>
            <button className="inline-block px-6 py-3 bg-white text-[#333] text-sm font-medium uppercase tracking-wider hover:bg-gray-100 transition-colors duration-300">
              {t('continueReading')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
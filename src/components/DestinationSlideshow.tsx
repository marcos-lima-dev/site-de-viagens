// src/components/DestinationSlideshow.tsx
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-7xl mx-auto ${
          reverse ? 'lg:grid-flow-dense' : ''
        }`}>
          <div className={`relative h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden ${
            reverse ? 'lg:col-start-2' : ''
          }`}>
            <img
              src={currentDestination.image}
              alt={currentDestination.title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />

            <div className="absolute inset-0 flex items-center justify-between px-4">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="rounded-full bg-white/90 hover:bg-white shadow-lg"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className={`${
                  bgColor === 'teal' 
                    ? 'bg-white text-[#69c6ba] hover:bg-gray-100' 
                    : 'bg-white text-[#c66995] hover:bg-gray-100'
                } border-white uppercase tracking-wide text-sm`}
              >
                {t('continueReading')}
              </Button>
              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="rounded-full bg-white/90 hover:bg-white shadow-lg"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className={`${bgClass} text-white p-8 md:p-10 lg:p-14 flex flex-col justify-center ${
            reverse ? 'lg:col-start-1' : ''
          }`}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              {currentDestination.title}
            </h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed opacity-95">
              {currentDestination.description}
            </p>
            <div>
              <Button
                variant="outline"
                className={`${
                  bgColor === 'teal' 
                    ? 'bg-white text-[#69c6ba] hover:bg-gray-100' 
                    : 'bg-white text-[#c66995] hover:bg-gray-100'
                } border-white uppercase tracking-wide text-sm`}
              >
                {t('continueReading')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
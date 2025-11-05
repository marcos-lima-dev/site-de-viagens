// src/components/DestinationsTabs.tsx
import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';

interface Continent {
  id: string;
  key: keyof typeof ptBR;
}

export default function DestinationsTabs() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('asia');

  const continents: Continent[] = [
    { id: 'north-america', key: 'northAmerica' },
    { id: 'south-america', key: 'southAmerica' },
    { id: 'europe', key: 'europe' },
    { id: 'asia', key: 'asia' },
    { id: 'africa', key: 'africa' },
    { id: 'australia', key: 'australia' },
    { id: 'antartica', key: 'antartica' },
  ];

  const activeContinent = continents.find(c => c.id === activeTab);

  return (
    <section className="py-12 bg-[#69c6ba]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2 md:gap-0">
          {continents.map((continent) => (
            <Button
              key={continent.id}
              variant="ghost"
              onClick={() => setActiveTab(continent.id)}
              className={`
                flex flex-col items-center justify-center p-[30px_25px] flex-1 min-w-[120px]
                text-white text-xs font-medium transition-all duration-300
                ${activeTab === continent.id 
                  ? 'bg-[#c66995] hover:bg-[#d07aa6]' 
                  : 'bg-transparent hover:bg-[#7fd1c5]'
                }
              `}
            >
              <div className="w-16 h-16 mb-2 rounded-full overflow-hidden bg-white/20 p-1 flex items-center justify-center">
                <img
                  src={`/src/assets/images/${continent.id}.png`}
                  alt={t(continent.key)}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Evita loop infinito se fallback também falhar
                    target.src = 'https://placehold.co/80x80?text=?'; // Placeholder fallback
                  }}
                />
              </div>
              <span>{t(continent.key).toUpperCase()}</span>
            </Button>
          ))}
        </div>

        {/* Conteúdo da aba ativa */}
        <div className="mt-12 max-w-[970px] mx-auto bg-white rounded-lg p-8 shadow-md animate-fade-in">
          <h3 className="text-xl font-bold text-[#333] mb-4">
            {t('explore')} {t(activeContinent?.key || 'asia')}
          </h3>
          <p className="text-[#787676] mb-6">
            {t('discoverDestinations')} {t(activeContinent?.key || 'asia')}.
          </p>
          <Button className="bg-[#69c6ba] hover:bg-[#c66995] text-white">
            {t('viewAllPlaces')}
          </Button>
        </div>
      </div>
    </section>
  );
}
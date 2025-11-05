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
                flex flex-col items-center justify-center p-4 flex-1 min-w-[120px]
                text-white text-xs font-semibold transition-all duration-300
                ${activeTab === continent.id 
                  ? 'bg-[#c66995] hover:bg-[#d07aa6] border-2 border-white' 
                  : 'bg-transparent hover:bg-[#7fd1c5] hover:text-white'
                }
              `}
            >
              <div className="relative w-20 h-20 mb-1">
                <img
                  src={`/images/${continent.id}.png`}
                  alt={t(continent.key)}
                  className="w-14 h-14 mx-auto rounded-full object-cover"
                  style={{ display: 'block' }}
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

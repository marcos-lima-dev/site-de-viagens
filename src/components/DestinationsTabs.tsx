// src/components/DestinationsTabs.tsx
import { useState } from 'react';
import { Globe, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Continent {
  id: string;
  name: string;
  image: string;
}

const continents: Continent[] = [
  { id: 'north-america', name: 'North America', image: 'https://placehold.co/80x80?text=NA' },
  { id: 'south-america', name: 'South America', image: 'https://placehold.co/80x80?text=SA' },
  { id: 'europe', name: 'Europe', image: 'https://placehold.co/80x80?text=EU' },
  { id: 'asia', name: 'Asia', image: 'https://placehold.co/80x80?text=AS' },
  { id: 'africa', name: 'Africa', image: 'https://placehold.co/80x80?text=AF' },
  { id: 'australia', name: 'Australia', image: 'https://placehold.co/80x80?text=AU' },
  { id: 'antartica', name: 'Antartica', image: 'https://placehold.co/80x80?text=AN' },
];

export default function DestinationsTabs() {
  const [activeTab, setActiveTab] = useState('asia');

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
                flex flex-col items-center justify-center
                p-[30px_25px] flex-1 min-w-[120px]
                text-white text-xs font-medium
                transition-all duration-300
                ${activeTab === continent.id 
                  ? 'bg-[#c66995] hover:bg-[#d07aa6]' 
                  : 'bg-transparent hover:bg-[#7fd1c5]'
                }
              `}
            >
              <div className="w-16 h-16 mb-2 rounded-full overflow-hidden bg-white/20 p-1">
                <img
                  src={continent.image}
                  alt={continent.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span>{continent.name.toUpperCase()}</span>
            </Button>
          ))}
        </div>

        {/* Conteúdo da aba ativa (placeholder) */}
        <div className="mt-12 max-w-[970px] mx-auto bg-white rounded-lg p-8 shadow-md animate-fade-in">
          <h3 className="text-xl font-bold text-[#333] mb-4">
            Explore {continents.find(c => c.id === activeTab)?.name}
          </h3>
          <p className="text-[#787676] mb-6">
            Discover amazing destinations, culture, and experiences in {continents.find(c => c.id === activeTab)?.name}.
          </p>
          <Button className="bg-[#69c6ba] hover:bg-[#c66995] text-white">
            VIEW ALL PLACES
          </Button>
        </div>
      </div>
    </section>
  );
}
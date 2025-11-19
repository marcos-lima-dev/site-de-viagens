import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import RecommendedPlacesGrid from './RecommendedPlacesGrid';
import { Button } from '@/components/ui/button';

interface RecommendedPlace {
  id: number;
  image: string;
  title: string;
  location: string;
  description: string;
  price: string;
}

interface Continent {
  id: string;
  key: keyof typeof ptBR;
  places: RecommendedPlace[];
}

export default function DestinationsWithRecommended() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('north-america');

  const continents: Continent[] = [
    {
      id: 'north-america',
      key: 'northAmerica',
      places: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'North Garden Resort',
          location: 'One North',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$110'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Felis nec dignissim',
          location: 'Two North',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$120'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Sed fermentum justo',
          location: 'Three North',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$130'
        },
        {
          id: 4,
          image: 'https://images.unsplash.com/photo-1592855240285-45edf4d84f1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Maecenas ultricies neque',
          location: 'Four North',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$140'
        }
      ]
    },
    {
      id: 'south-america',
      key: 'southAmerica',
      places: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1592855240285-45edf4d84f1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'South Resort Hotel',
          location: 'South One',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$220'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Aenean ac ante nec diam',
          location: 'South Second',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$230'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Suspendisse nec dapibus',
          location: 'South Third',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$240'
        },
        {
          id: 4,
          image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Aliquam viverra mi at nisl',
          location: 'South Fourth',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$250'
        }
      ]
    },
    {
      id: 'europe',
      key: 'europe',
      places: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Europe Hotel',
          location: 'Venecia, Italy',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$330'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'In viverra enim turpis',
          location: 'Paris, France',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$340'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Volutpat pellentesque',
          location: 'Barcelona, Spain',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$350'
        },
        {
          id: 4,
          image: 'https://images.unsplash.com/photo-1592855240285-45edf4d84f1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Grand Resort Pasha',
          location: 'Istanbul, Turkey',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$360'
        }
      ]
    },
    {
      id: 'asia',
      key: 'asia',
      places: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Asia Resort Hotel',
          location: 'Singapore',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit lucts dictum...',
          price: '$440'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1592855240285-45edf4d84f1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Nullam eget est a nisl',
          location: 'Yangon, Myanmar',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$450'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Proin interdum ullamcorper',
          location: 'Bangkok, Thailand',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$460'
        },
        {
          id: 4,
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Lorem ipsum dolor sit',
          location: 'Vientiane, Laos',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$470'
        }
      ]
    },
    {
      id: 'africa',
      key: 'africa',
      places: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Africa Resort Hotel',
          location: 'First City',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$550'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Aenean ac magna diam',
          location: 'Second City',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$560'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1592855240285-45edf4d84f1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Beach Barbecue Sunset',
          location: 'Third City',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$570'
        },
        {
          id: 4,
          image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Grand Resort Pasha',
          location: 'Fourth City',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$580'
        }
      ]
    },
    {
      id: 'australia',
      key: 'australia',
      places: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Hotel Australia',
          location: 'City One',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$660'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Proin interdum ullamcorper',
          location: 'City Two',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$650'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Beach Barbecue Sunset',
          location: 'City Three',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$640'
        },
        {
          id: 4,
          image: 'https://images.unsplash.com/photo-1592855240285-45edf4d84f1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Grand Resort Pasha',
          location: 'City Four',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$630'
        }
      ]
    },
    {
      id: 'antartica',
      key: 'antartica',
      places: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1592855240285-45edf4d84f1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Antartica Resort',
          location: 'Ant City One',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$770'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Pulvinar Semper',
          location: 'Ant City Two',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$230'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Cras vel sapien',
          location: 'Ant City Three',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$140'
        },
        {
          id: 4,
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'Nullam eget est',
          location: 'Ant City Four',
          description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
          price: '$190'
        }
      ]
    }
  ];

  const activeContinent = continents.find(c => c.id === activeTab);

  return (
    <section className="py-12 bg-[#69c6ba]">
      <div className="container mx-auto px-4">
        {/* Abas de Continente */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-0">
          {continents.map((continent) => (
            <Button
              key={continent.id}
              variant="ghost"
              onClick={() => setActiveTab(continent.id)}
              className={`
                flex flex-col items-center justify-center p-[36px_25px] flex-1 min-w-[120px]
                text-white text-xs font-semibold transition-all duration-300 rounded-none
                ${activeTab === continent.id
                  ? 'bg-[#c66995] border-2 border-white'
                  : 'bg-transparent'
                }
                data-[state=open]:bg-[#c66995] data-[state=open]:text-white
              `}
            >
              <div className="w-16 h-16 mb-2 rounded-full overflow-hidden bg-white/20 flex items-center justify-center group hover:bg-white/30 transition-all duration-300 relative">
                <img
                  src={`/images/${continent.id}.png`}
                  alt={t(continent.key)}
                  className="absolute w-16 h-16 object-cover rounded-full group-hover:opacity-90 transition-opacity duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="text-white text-xs font-bold">${continent.id.charAt(0).toUpperCase()}</div>`;
                    }
                  }}
                />
              </div>
              <span>{t(continent.key).toUpperCase()}</span>
            </Button>
          ))}
        </div>

        {/* Grade de Lugares Recomendados */}
        <div className="mt-12 tab-content">
          {continents.map((continent) => (
            <RecommendedPlacesGrid
              key={continent.id}
              places={continent.places}
              activeTab={activeTab}
              tabId={continent.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
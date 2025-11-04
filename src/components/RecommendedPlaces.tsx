// src/components/RecommendedPlaces.tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';

interface Place {
  id: number;
  nameKey: keyof typeof ptBR;
  location: string;
  price: string;
  image: string;
  descriptionKey: keyof typeof ptBR;
}

export default function RecommendedPlaces() {
  const { t } = useTranslation();

  const places: Place[] = [
    {
      id: 1,
      nameKey: 'asiaResortHotel',
      location: 'Singapura',
      price: 'R$ 2.200',
      image: 'https://placehold.co/270x180?text=Asia+Resort',
      descriptionKey: 'placeDescription1',
    },
    {
      id: 2,
      nameKey: 'nullamEgetEst',
      location: 'Yangon, Myanmar',
      price: 'R$ 2.250',
      image: 'https://placehold.co/270x180?text=Yangon',
      descriptionKey: 'placeDescription2',
    },
    {
      id: 3,
      nameKey: 'proinInterdum',
      location: 'Bangkok, Tailândia',
      price: 'R$ 2.300',
      image: 'https://placehold.co/270x180?text=Bangkok',
      descriptionKey: 'placeDescription3',
    },
    {
      id: 4,
      nameKey: 'loremIpsumDolor',
      location: 'Vientiane, Laos',
      price: 'R$ 2.350',
      image: 'https://placehold.co/270x180?text=Vientiane',
      descriptionKey: 'placeDescription4',
    },
  ];

  return (
    <section id="recommended" className="py-12 bg-[#efefef]">
      <div className="container mx-auto px-4 max-w-[970px]">
        <div className="space-y-6">
          {places.map((place) => (
            <Card
              key={place.id}
              className="flex flex-col md:flex-row overflow-hidden shadow-[0_0_3px_rgba(0,0,0,0.15)] hover:shadow-lg transition-shadow animate-fade-in"
            >
              {/* Imagem */}
              <div className="md:w-[270px] flex-shrink-0">
                <img
                  src={place.image}
                  alt={t(place.nameKey)}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>

              {/* Descrição */}
              <div className="flex-1 p-8 md:p-[30px] md:w-[500px] flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#333] mb-2">{t(place.nameKey)}</h3>
                  <p className="text-[#c66995] text-sm font-medium mb-4">{place.location}</p>
                  <p className="text-[#787676] text-sm leading-relaxed">
                    {t(place.descriptionKey)}
                  </p>
                </div>
                <Button className="mt-6 w-fit bg-[#69c6ba] hover:bg-[#c66995] text-white text-sm font-medium px-4 py-2">
                  {t('continueReading')}
                </Button>
              </div>

              {/* Preço */}
              <div className="md:w-[200px] bg-[#69c6ba] flex items-center justify-center p-8 hover:bg-[#c66995] transition-colors">
                <span className="text-3xl font-bold text-white">{place.price}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Botão "Mostrar Mais" */}
        <div className="text-center mt-12">
          <Button className="bg-[#69c6ba] hover:bg-[#c66995] text-white font-medium px-6 py-3">
            {t('showMorePlaces')}
          </Button>
        </div>
      </div>
    </section>
  );
}
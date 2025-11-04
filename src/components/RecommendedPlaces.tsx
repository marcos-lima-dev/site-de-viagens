// src/components/RecommendedPlaces.tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Place {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
  description: string;
}

const places: Place[] = [
  {
    id: 1,
    name: 'Asia Resort Hotel',
    location: 'Singapore',
    price: '$440',
    image: 'https://placehold.co/270x180?text=Asia+Resort',
    description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
  },
  {
    id: 2,
    name: 'Nullam Eget Est A Nisl',
    location: 'Yangon, Myanmar',
    price: '$450',
    image: 'https://placehold.co/270x180?text=Yangon',
    description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
  },
  {
    id: 3,
    name: 'Proin Interdum Ullamcorper',
    location: 'Bangkok, Thailand',
    price: '$460',
    image: 'https://placehold.co/270x180?text=Bangkok',
    description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
  },
  {
    id: 4,
    name: 'Lorem Ipsum Dolor Sit',
    location: 'Vientiane, Laos',
    price: '$470',
    image: 'https://placehold.co/270x180?text=Vientiane',
    description: 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...',
  },
];

export default function RecommendedPlaces() {
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
                  alt={place.name}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>

              {/* Descrição */}
              <div className="flex-1 p-8 md:p-[30px] md:w-[500px] flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#333] mb-2">{place.name}</h3>
                  <p className="text-[#c66995] text-sm font-medium mb-4">{place.location}</p>
                  <p className="text-[#787676] text-sm leading-relaxed">
                    {place.description}
                  </p>
                </div>
                <Button className="mt-6 w-fit bg-[#69c6ba] hover:bg-[#c66995] text-white text-sm font-medium px-4 py-2">
                  CONTINUE READING
                </Button>
              </div>

              {/* Preço */}
              <div className="md:w-[200px] bg-[#69c6ba] flex items-center justify-center p-8 hover:bg-[#c66995] transition-colors">
                <span className="text-3xl font-bold text-white">{place.price}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Botão "Show More" */}
        <div className="text-center mt-12">
          <Button className="bg-[#69c6ba] hover:bg-[#c66995] text-white font-medium px-6 py-3">
            SHOW MORE PLACES
          </Button>
        </div>
      </div>
    </section>
  );
}
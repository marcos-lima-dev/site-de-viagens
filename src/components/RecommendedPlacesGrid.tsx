import { useTranslation } from '@/hooks/useTranslation';

interface RecommendedPlace {
  id: number;
  image: string;
  title: string;
  location: string;
  description: string;
  price: string;
}

interface RecommendedPlacesGridProps {
  places: RecommendedPlace[];
  activeTab: string;
  tabId: string;
}

export default function RecommendedPlacesGrid({ places, activeTab, tabId }: RecommendedPlacesGridProps) {
  const { t } = useTranslation();

  // Calcular o número de colunas com base no número de lugares
  const cols = Math.min(2, Math.ceil(places.length / 2)); // Até 2 colunas em telas menores
  const colsMd = Math.min(4, places.length); // Até 4 colunas em telas médias

  return (
    <div className={`tab-pane fade ${activeTab === tabId ? 'show active' : ''}`} id={`${tabId}a`}>
      <div className="recommended-place-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {places.map((place) => (
          <div key={place.id} className="recommended-place bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="recommended-img-container">
              <img
                src={place.image}
                alt={place.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="recommended-description-box p-4 flex-grow">
              <h3 className="recommended-title text-xl font-semibold text-gray-800 mb-2">{place.title}</h3>
              <p className="text-pink-600 font-medium mb-2">{place.location}</p>
              <p className="text-gray-600 text-sm">{place.description}</p>
            </div>
            <a href="#" className="recommended-price-box block bg-teal-500 text-white p-4 text-center hover:bg-teal-600 transition-colors duration-300">
              <p className="recommended-price text-lg font-bold">{place.price}</p>
              <p className="recommended-price-link text-sm uppercase tracking-wider">{t('continueReading')}</p>
            </a>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="text-uppercase bg-[#69c6ba] hover:bg-[#c66995] text-white font-medium py-3 px-8 rounded transition-colors duration-300 inline-block mx-auto mt-8 block text-center"
      >
        {t('showMorePlaces')}
      </a>
    </div>
  );
}
// src/components/DestinationsShowcase.tsx
import DestinationSlideshow from './DestinationSlideshow';
import { useTranslation } from '@/hooks/useTranslation';

export default function DestinationsShowcase() {
  const { t } = useTranslation();

  const europeDestinations = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a',
      title: t('europeMostVisited'),
      description: t('europeDescription1'),
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1520986606214-8b456906c813',
      title: t('europeHistoricCities'),
      description: t('europeDescription2'),
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b',
      title: t('europeMediterranean'),
      description: t('europeDescription3'),
    },
  ];

  const asiaDestinations = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526',
      title: t('asiaMostPopular'),
      description: t('asiaDescription1'),
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9',
      title: t('asiaAncientTemples'),
      description: t('asiaDescription2'),
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd',
      title: t('asiaModernCities'),
      description: t('asiaDescription3'),
    },
  ];

  const americaDestinations = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325',
      title: t('americaMostFamous'),
      description: t('americaDescription1'),
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74',
      title: t('americaNaturalWonders'),
      description: t('americaDescription2'),
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1523978591478-c753949ff840',
      title: t('americaUrbanAdventures'),
      description: t('americaDescription3'),
    },
  ];

  return (
    <div className="bg-white">
      <DestinationSlideshow 
        destinations={europeDestinations} 
        bgColor="teal" 
      />

      <DestinationSlideshow 
        destinations={asiaDestinations} 
        bgColor="pink" 
        reverse 
      />

      <DestinationSlideshow 
        destinations={americaDestinations} 
        bgColor="teal" 
      />
    </div>
  );
}
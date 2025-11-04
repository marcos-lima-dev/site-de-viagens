// App.tsx (atualizado)
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SearchForm from '@/components/SearchForm';
import AboutSection from '@/components/AboutSection';
import DestinationsTabs from '@/components/DestinationsTabs';
import RecommendedPlaces from '@/components/RecommendedPlaces'; // ← novo
import { useState, useEffect } from 'react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (data: any) => {
    console.log('Search:', data);
  };

  return (
    <div className="font-sans antialiased text-[#333] bg-white">
      <Header isScrolled={isScrolled} />
      <HeroSection />
      <SearchForm onSubmit={handleSearch} />
      <AboutSection />
      <DestinationsTabs />
      <RecommendedPlaces />
    </div>
  );
}

export default App;
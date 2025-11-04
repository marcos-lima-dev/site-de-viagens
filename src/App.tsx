// src/App.tsx
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SearchForm from '@/components/SearchForm';
import AboutSection from '@/components/AboutSection';
import DestinationsTabs from '@/components/DestinationsTabs';
import RecommendedPlaces from '@/components/RecommendedPlaces';
import ContactMapSection from '@/components/ContactMapSection';
import Footer from '@/components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased text-[#333] bg-white">
      <Header isScrolled={isScrolled} />
      <HeroSection />
      <SearchForm />
      <AboutSection />
      <DestinationsTabs />
      <RecommendedPlaces />
      <ContactMapSection />
      <Footer />
    </div>
  );
}

export default App;
'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SearchForm from '@/components/SearchForm';
import AboutSection from '@/components/AboutSection';
import DestinationsTabs from '@/components/DestinationsTabs';
import RecommendedPlaces from '@/components/RecommendedPlaces';
import ContactMapSection from '@/components/ContactMapSection';
import Footer from '@/components/Footer';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased text-[#333] bg-white min-h-screen">
      <Header isScrolled={isScrolled} />
      <main>
        <HeroSection />
        <SearchForm />
        <AboutSection />
        <DestinationsTabs />
        <RecommendedPlaces />
        <ContactMapSection />
      </main>
      <Footer />
    </div>
  );
}
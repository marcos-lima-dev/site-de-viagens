// src/components/SearchForm.tsx
'use client';

import { useState } from 'react';
import { CalendarIcon, UserIcon, HomeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslation } from '@/hooks/useTranslation';

export default function SearchForm() {
  const { t } = useTranslation();
  const [dates, setDates] = useState({ checkIn: '', checkOut: '' });
  const [guests, setGuests] = useState({ rooms: 1, adults: 2, children: 0 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para lidar com a submissão do formulário
    console.log({ dates, guests });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-md rounded-xl shadow-xl p-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Destino */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('chooseDestination')}
          </label>
          <div className="relative">
            <Input
              type="text"
              placeholder={t('destinationPlaceholder')}
              className="pl-10"
            />
            <HomeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Quartos */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('rooms')}
          </label>
          <div className="relative">
            <Input
              type="number"
              min="1"
              max="5"
              value={guests.rooms}
              onChange={(e) => setGuests({...guests, rooms: parseInt(e.target.value)})}
              className="pl-10"
            />
            <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Check-in */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('checkInDate')}
          </label>
          <div className="relative">
            <Input
              type="date"
              value={dates.checkIn}
              onChange={(e) => setDates({...dates, checkIn: e.target.value})}
              className="pl-10"
            />
            <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Check-out */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('checkOutDate')}
          </label>
          <div className="relative">
            <Input
              type="date"
              value={dates.checkOut}
              onChange={(e) => setDates({...dates, checkOut: e.target.value})}
              className="pl-10"
            />
            <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button type="submit" className="bg-[#69c6ba] hover:bg-[#c66995] text-white px-8 py-6 rounded-lg text-lg font-medium">
          {t('checkAvailability')}
        </Button>
      </div>
    </form>
  );
}
// src/components/ContactMapSection.tsx
'use client';

import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from './ContactForm';
import { useTranslation } from '@/hooks/useTranslation';

export default function ContactMapSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative h-screen lg:h-[600px] overflow-hidden">
      {/* MAPA DO RIO - POR BAIXO */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          title="Journey Travel - Rio de Janeiro"
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117407.735389948!2d-43.413112!3d-22.906846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a183%3A0x9bafd3e7c3fb522!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1733333333333!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* FORMULÁRIO FLUTUANTE - POR CIMA */}
      <div className="absolute top-1/2 right-4 lg:right-8 -translate-y-1/2 w-full max-w-md p-6 lg:p-8 bg-white rounded-2xl shadow-2xl border border-gray-200 z-10">
        <h2 className="text-2xl font-bold mb-6 text-[#333]">{t('contactUs')}</h2>
        <ContactForm />

        <div className="mt-6 space-y-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Rio de Janeiro, RJ - Brasil</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <span>+55 21 99999-9999</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <span>contato@contato</span>
          </div>
        </div>
      </div>

      {/* MOBILE: FORMULÁRIO EMBAIXO */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
        <div className="max-w-md mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
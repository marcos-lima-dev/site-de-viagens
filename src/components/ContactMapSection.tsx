// src/components/ContactMapSection.tsx
import ContactForm from './ContactForm';
import { useTranslation } from '@/hooks/useTranslation';

export default function ContactMapSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Mapa */}
          <div className="h-96 md:h-[600px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835!2d144.9537!3d-37.8172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773f4425a2305c!2sMelbourne+VIC%2C+Australia!5e0!3m2!1spt-BR!2sbr!4v1630000000000"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>

          {/* Formulário - Responsivo */}
          <div className="
            md:absolute md:top-10 md:right-10 
            md:w-[470px] md:shadow-xl md:rounded-lg md:bg-white md:p-6 
            w-full mt-6 md:mt-0
            bg-white p-6 rounded-lg shadow-lg
            animate-fade-in
            z-10
          ">
            <h3 className="text-xl font-bold text-[#333] mb-4">{t('contactTitle')}</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
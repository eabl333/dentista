import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Clareamento Dental a Laser');

  const handleOpenBookingWithService = (serviceName: string) => {
    setSelectedService(serviceName);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-cyan-600 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBookingWithService('Clareamento Dental a Laser')} />

      {/* Main Sections */}
      <main>
        <Hero onOpenBooking={() => handleOpenBookingWithService('Clareamento Dental a Laser')} />
        <Services onSelectService={handleOpenBookingWithService} />
        <About />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultService={selectedService}
      />

      {/* Floating WhatsApp Quick Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/5599999999999?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avaliação."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 cursor-pointer group relative"
          aria-label="Contato via WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Fale conosco no WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}

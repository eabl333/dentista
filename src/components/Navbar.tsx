import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, Phone, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center text-white shadow-md shadow-cyan-600/30 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl font-bold font-sans tracking-tight text-slate-900 block leading-tight">
              Lumina<span className="text-cyan-600">.</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-slate-500 block">
              Odontologia Avançada
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors">Início</a>
          <a href="#servicos" className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors">Serviços</a>
          <a href="#sobre" className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors">Sobre</a>
          <a href="#depoimentos" className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors">Depoimentos</a>
          <a href="#contato" className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors">Contato</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://wa.me/5599999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos%20da%20Lumina%20Odonto."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-slate-700 hover:text-cyan-600 font-medium text-sm transition-colors px-3 py-2 rounded-lg hover:bg-slate-100/80"
          >
            <Phone className="w-4 h-4 text-cyan-600" />
            <span>(99) 99999-9999</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-cyan-600/20 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Consulta</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-800 hover:text-cyan-600 py-1"
            >
              Início
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-800 hover:text-cyan-600 py-1"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-800 hover:text-cyan-600 py-1"
            >
              Sobre
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-800 hover:text-cyan-600 py-1"
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-800 hover:text-cyan-600 py-1"
            >
              Contato
            </a>
          </nav>
          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
            <a
              href="https://wa.me/5599999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos%20da%20Lumina%20Odonto."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 text-slate-700 font-medium py-3 rounded-xl bg-slate-50"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>(99) 99999-9999</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-cyan-600 text-white font-semibold py-3 rounded-xl shadow-md text-center flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold font-sans tracking-tight">
                Lumina<span className="text-cyan-400">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Clínica odontológica de alta performance. Excelência em estética dental, reabilitação oral e tecnologia digital avançada.
            </p>
            <p className="text-xs text-cyan-400 font-mono">
              Responsável Técnica: Dra. Beatriz Lumina • CRO-SP 94821
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-sans">Navegação</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#inicio" className="hover:text-cyan-400 transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-cyan-400 transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-cyan-400 transition-colors">Sobre</a></li>
              <li><a href="#depoimentos" className="hover:text-cyan-400 transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-cyan-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-sans">Especialidades</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><span className="hover:text-cyan-400 cursor-pointer">Clareamento a Laser</span></li>
              <li><span className="hover:text-cyan-400 cursor-pointer">Ortodontia Invisível</span></li>
              <li><span className="hover:text-cyan-400 cursor-pointer">Implantes Dentários</span></li>
              <li><span className="hover:text-cyan-400 cursor-pointer">Scanner Intraoral 3D</span></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Lumina Odontologia Avançada. Todos os direitos reservados.</p>
          <p className="flex items-center space-x-1">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-cyan-500 fill-current" />
            <span>para sorrisos perfeitos.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

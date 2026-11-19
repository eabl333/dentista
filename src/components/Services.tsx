import React from 'react';
import { Sparkles, Smile, ShieldAlert, CheckCircle2, ArrowRight, Zap, Activity } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const mainServices = [
    {
      title: 'Clareamento Dental a Laser',
      description: 'Tecnologia LED de última geração para dentes visivelmente mais brancos em uma única sessão, sem sensibilidade.',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800',
      tag: 'Mais Procurado',
      icon: Sparkles
    },
    {
      title: 'Ortodontia Invisível',
      description: 'Alinhadores transparentes de alta precisão que corrigem seu sorriso de forma discreta, confortável e até 50% mais rápida.',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
      tag: 'Estética Avançada',
      icon: Smile
    },
    {
      title: 'Implantes Dentários',
      description: 'Reabilitação oral completa com implantes em titânio e cirurgia guiada por computador, garantindo naturalidade e segurança.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
      tag: 'Definitivo',
      icon: ShieldAlert
    }
  ];

  const extraServices = [
    {
      name: 'Limpeza & Profilaxia Preventiva',
      desc: 'Remoção profunda de tártaro e jato de bicarbonato.',
      icon: CheckCircle2
    },
    {
      name: 'Odontopediatria Humanizada',
      desc: 'Cuidado especializado e lúdico para os pequenos.',
      icon: Zap
    },
    {
      name: 'Scanner Intraoral 3D',
      desc: 'Moldagem digital sem o desconforto da massinha.',
      icon: Activity
    }
  ];

  return (
    <section id="servicos" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-50 border border-cyan-200/80 px-4 py-1.5 rounded-full text-cyan-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Especialidades de Elite</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-slate-900 tracking-tight leading-tight">
            Tecnologia de ponta para cuidar do seu sorriso.
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-normal">
            Tratamentos planejados digitalmente com foco em conforto, estética impecável e resultados duradouros.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-[#F8FAFC] rounded-3xl overflow-hidden border border-slate-200/80 hover:border-cyan-600/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image container */}
                <div className="relative h-60 overflow-hidden bg-slate-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-cyan-800 uppercase tracking-wide shadow-sm">
                    {service.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-cyan-600 rounded-xl text-white flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-sans text-slate-900 group-hover:text-cyan-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="flex items-center justify-between w-full pt-4 border-t border-slate-200 text-cyan-600 font-semibold text-sm group-hover:text-cyan-700 cursor-pointer"
                  >
                    <span>Agendar este serviço</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extra Services Grid */}
        <div className="bg-[#F8FAFC] rounded-3xl p-8 md:p-12 border border-slate-200/80">
          <div className="max-w-3xl mb-8">
            <h3 className="text-xl md:text-2xl font-bold font-sans text-slate-900">
              Outros Cuidados Especializados
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Oferecemos suporte integral para toda a família com protocolos preventivos e restauradores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {extraServices.map((extra) => {
              const ExtraIcon = extra.icon;
              return (
                <div
                  key={extra.name}
                  onClick={() => onSelectService(extra.name)}
                  className="bg-white p-6 rounded-2xl border border-slate-200/60 hover:border-cyan-600/40 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                      <ExtraIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold font-sans text-slate-900 text-sm group-hover:text-cyan-600 transition-colors">
                        {extra.name}
                      </h4>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                        {extra.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

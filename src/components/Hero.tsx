import React from 'react';
import { ShieldCheck, Award, Clock, ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-[#F8FAFC] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-2xl pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 bg-cyan-50 border border-cyan-200/80 px-4 py-2 rounded-full text-cyan-800 text-xs font-semibold tracking-wide uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse" />
              <span>Referência em Odontologia Estética e Reabilitação</span>
            </div>

            {/* Huge Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-sans text-slate-900 tracking-tight leading-[1.1]">
              A excelência em transformar <span className="text-cyan-600 underline decoration-cyan-200 decoration-wavy decoration-1">sorrisos</span> com tecnologia e arte.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg md:text-xl text-slate-600 max-w-xl font-normal leading-relaxed">
              Experimente um novo padrão de atendimento odontológico. Conforto absoluto, precisão digital e profissionais de elite dedicados ao seu bem-estar.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-base px-8 py-4 rounded-2xl shadow-xl shadow-cyan-600/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 cursor-pointer group"
              >
                <span>Agendar Consulta</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="#servicos"
                className="border border-slate-300 hover:border-cyan-600 text-slate-700 hover:text-cyan-600 font-semibold text-base px-8 py-4 rounded-2xl transition-all text-center bg-white/80 backdrop-blur-sm"
              >
                Conhecer Serviços
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Biossegurança</h4>
                  <p className="text-[11px] text-slate-500">Padrão Hospitalar</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">CRO Ativo</h4>
                  <p className="text-[11px] text-slate-500">Especialistas USP</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Horários</h4>
                  <p className="text-[11px] text-slate-500">Flexíveis & Ágeis</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Large Stunning Image & Float Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                  alt="Clínica Odontológica moderna e equipada"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Review Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]"
              >
                <div className="flex items-center space-x-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 font-medium leading-snug">
                  "Atendimento impecável! O tratamento de implante foi totalmente indolor e rápido."
                </p>
                <div className="mt-3 flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-full bg-cyan-100 text-cyan-700 font-bold text-xs flex items-center justify-center">
                    MS
                  </div>
                  <span className="text-[11px] font-bold text-slate-900">Mariana Souza, Paciente</span>
                </div>
              </motion.div>

              {/* Floating Tech Badge */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -top-6 -right-6 bg-cyan-600 text-white p-4 rounded-2xl shadow-xl flex items-center space-x-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider block">100% Digital</span>
                  <span className="text-[11px] text-cyan-100">Scanner Intraoral 3D</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Award, CheckCircle2, GraduationCap, Users, Heart, Star } from 'lucide-react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  const stats = [
    { label: 'Pacientes Atendidos', value: '+5.000', icon: Users },
    { label: 'Taxa de Satisfação', value: '99.8%', icon: Heart },
    { label: 'Anos de Excelência', value: '12 Anos', icon: Award },
    { label: 'Avaliação Média', value: '5.0 ★', icon: Star }
  ];

  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Dentist Photo & Professional Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=900"
                  alt="Dra. Beatriz Lumina - CRO-SP 94821"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-xs font-semibold text-cyan-300 uppercase tracking-widest">Fundadora & Responsável Técnica</span>
                  <h3 className="text-2xl font-bold font-sans">Dra. Beatriz Lumina</h3>
                  <p className="text-xs text-slate-200 font-mono">CRO-SP 94821 • Especialista em Estética Dental</p>
                </div>
              </div>

              {/* Education badge */}
              <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-white p-5 rounded-2xl shadow-xl hidden sm:flex items-center space-x-3">
                <GraduationCap className="w-8 h-8 text-cyan-200 shrink-0" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider block">Formação de Elite</span>
                  <span className="text-sm font-semibold">USP & UNICAMP</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <div className="inline-flex items-center space-x-2 bg-cyan-50 border border-cyan-200/80 px-4 py-1.5 rounded-full text-cyan-800 text-xs font-semibold uppercase tracking-wider mb-4">
                <span>Nossa Filosofia</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-slate-900 tracking-tight leading-tight">
                Ciência, precisão e acolhimento em cada detalhe.
              </h2>
            </div>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Na Lumina Odontologia, acreditamos que cuidar do sorriso vai muito além da estética: é sobre resgatar a autoconfiança, a saúde integral e o prazer de sorrir sem receios. Unimos tecnologia de ponta alemã e americana a um atendimento humanizado e exclusivo.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-sans">Atendimento Individualizado</h4>
                  <p className="text-xs text-slate-500">Planejamento exclusivo para as necessidades do seu perfil e rotina.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-sans">Ambiente Exclusivo & Confortável</h4>
                  <p className="text-xs text-slate-500">Salas de atendimento privativas projetadas para o seu relaxamento total.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-sans">Materiais Premium Certificados</h4>
                  <p className="text-xs text-slate-500">Porcelanas de alta resistência e insumos importados de padrão internacional.</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-200">
              {stats.map((st) => {
                const Icon = st.icon;
                return (
                  <div key={st.label} className="space-y-1">
                    <div className="flex items-center space-x-1.5 text-cyan-600">
                      <Icon className="w-4 h-4" />
                      <span className="text-xl md:text-2xl font-extrabold font-sans text-slate-900">{st.value}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">{st.label}</p>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

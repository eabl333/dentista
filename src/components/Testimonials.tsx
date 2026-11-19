import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export const Testimonials: React.FC = () => {
  const testimonialsList = [
    {
      name: 'Camila Mendonça',
      role: 'Advogada',
      comment: 'O clareamento e as lentes de contato mudaram completamente minha segurança ao falar em reuniões. A Dra. Beatriz é extremamente detalhista e cuidadosa.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
      service: 'Estética & Clareamento'
    },
    {
      name: 'Rodrigo Silveira',
      role: 'Empresário',
      comment: 'Fiz implantes dentários com cirurgia guiada. Não senti dor alguma no pós-operatório e o resultado ficou extremamente natural. Recomendo de olhos fechados.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
      service: 'Implantes Dentários'
    },
    {
      name: 'Juliana Vasconcelos',
      role: 'Arquiteta',
      comment: 'Uso alinhadores invisíveis e estou impressionada com a rapidez. O atendimento na Lumina é pontual, o ambiente é sofisticado e muito acolhedor.',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300',
      service: 'Ortodontia Invisível'
    }
  ];

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-cyan-50 border border-cyan-200/80 px-4 py-1.5 rounded-full text-cyan-800 text-xs font-semibold uppercase tracking-wider">
            <span>Histórias Reais</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-slate-950 tracking-tight">
            O que nossos pacientes dizem.
          </h2>
          <p className="text-slate-600 text-lg">
            Descubra por que somos a clínica odontológica mais bem avaliada da região.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsList.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#F8FAFC] p-8 rounded-3xl border border-slate-200/80 flex flex-col justify-between relative group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-cyan-200 group-hover:text-cyan-300 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm md:text-base leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-slate-200 relative z-10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan-600"
                />
                <div>
                  <h4 className="font-bold font-sans text-slate-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{item.role} • <span className="text-cyan-600">{item.service}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

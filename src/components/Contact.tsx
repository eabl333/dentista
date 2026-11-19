import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Meu nome é ${form.name} (${form.phone}). Mensagem: ${form.message}`
    );
    window.open(`https://wa.me/5599999999999?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Info & WhatsApp Direct */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center space-x-2 bg-cyan-50 border border-cyan-200/80 px-4 py-1.5 rounded-full text-cyan-800 text-xs font-semibold uppercase tracking-wider mb-4">
                <span>Fale Conosco</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-slate-900 tracking-tight leading-tight">
                Estamos prontos para cuidar do seu sorriso.
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              Entre em contato conosco ou agende sua avaliação diretamente pelo WhatsApp. Nossa equipe responderá em minutos.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-cyan-600/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold font-sans text-slate-900 text-base">Endereço</h4>
                  <p className="text-slate-600 text-sm mt-0.5">Av. Paulista, 1000 - Conj. 82 - Cerqueira César, São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-cyan-600/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold font-sans text-slate-900 text-base">Telefone & WhatsApp</h4>
                  <p className="text-slate-600 text-sm mt-0.5">(99) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-cyan-600/20">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold font-sans text-slate-900 text-base">Horário de Atendimento</h4>
                  <p className="text-slate-600 text-sm mt-0.5">Segunda a Sexta: 08h às 19h<br />Sábado: 08h às 14h</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/5599999999999?text=Olá!%20Gostaria%20de%20marcar%20uma%20avaliação%20na%20Lumina%20Odonto."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-2xl shadow-xl shadow-emerald-600/25 flex items-center justify-center space-x-3 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Conversar pelo WhatsApp Direto</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200/80"
          >
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-5 h-5 text-cyan-600" />
              <h3 className="text-2xl font-bold font-sans text-slate-900">Envie sua Mensagem</h3>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Eduardo"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Seu WhatsApp / Telefone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(99) 99999-9999"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Como podemos ajudar?
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Descreva sua dúvida ou qual tratamento deseja realizar..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 rounded-xl shadow-lg shadow-cyan-600/25 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensagem via WhatsApp</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold font-sans text-slate-900">Redirecionando para o WhatsApp</h4>
                <p className="text-slate-600 text-sm">
                  Sua mensagem foi preparada. Se o WhatsApp não abriu automaticamente, clique abaixo:
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-cyan-600 text-white font-semibold px-6 py-3 rounded-xl text-sm"
                >
                  Enviar Nova Mensagem
                </button>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

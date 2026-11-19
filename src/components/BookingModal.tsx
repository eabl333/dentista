import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, defaultService = 'Clareamento Dental' }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    date: '',
    time: '09:00',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    'Clareamento Dental a Laser',
    'Ortodontia Invisível (Alinhadores)',
    'Implantes Dentários Avançados',
    'Limpeza & Profilaxia Preventiva',
    'Odontopediatria Humanizada',
    'Scanner 3D & Planejamento Digital'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Olá! Gostaria de confirmar meu agendamento na Lumina Odonto.\n\nNome: ${formData.name}\nServiço: ${formData.service}\nData: ${formData.date} às ${formData.time}\nTelefone: ${formData.phone}`
    );
    window.open(`https://wa.me/5599999999999?text=${text}`, '_blank');
    onClose();
    setIsSubmitted(false);
    setStep(1);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-cyan-100"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 px-6 py-5 text-white flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-cyan-200" />
              <h3 className="text-xl font-bold font-sans">Agendamento Online</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-cyan-100 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 md:p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 ? (
                  <>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        Procedimento Desejado
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20"
                      >
                        {servicesList.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                          Data Preferida
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                          <input
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                          Horário
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                          <select
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20"
                          >
                            <option value="09:00">09:00 - Manhã</option>
                            <option value="10:30">10:30 - Manhã</option>
                            <option value="14:00">14:00 - Tarde</option>
                            <option value="15:30">15:30 - Tarde</option>
                            <option value="17:00">17:00 - Fim de Tarde</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full mt-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-600/25 cursor-pointer"
                    >
                      Continuar para Dados Pessoais
                    </button>
                  </>
                ) : (
                  <>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        Nome Completo
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          placeholder="Ex: Maria Silva"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        WhatsApp / Telefone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          placeholder="(11) 99999-9999"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        E-mail (opcional)
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20"
                        />
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3.5 rounded-xl transition-all cursor-pointer"
                      >
                        Voltar
                      </button>
                      <button
                        type="submit"
                        className="w-2/3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-600/25 cursor-pointer"
                      >
                        Concluir Agendamento
                      </button>
                    </div>
                  </>
                )}
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold font-sans text-slate-900">Pré-Agendamento Realizado!</h4>
                <p className="text-slate-600 text-sm max-w-xs mx-auto">
                  Seu pedido para <span className="font-semibold text-slate-800">{formData.service}</span> foi registrado com sucesso.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-600/25 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Finalizar via WhatsApp</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

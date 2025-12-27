
import React from 'react';
import { motion } from 'framer-motion';
import { DesignMode, Testimonial } from '../types';

interface TestimonialsProps {
  mode: DesignMode;
}

const reviews: Testimonial[] = [
  { id: 1, author: 'Carlos Alberto', role: 'Empresário', text: 'O Dr. Ricardo foi fundamental na reestruturação jurídica da minha empresa. Profissionalismo acima da média.' },
  { id: 2, author: 'Maria Helena', role: 'Arquiteta', text: 'Tivemos um caso de família muito delicado e o atendimento foi extremamente humano e resolutivo.' },
  { id: 3, author: 'Roberto Silva', role: 'Investidor', text: 'Rápido, assertivo e direto ao ponto. Exatamente o que eu procuro em uma assessoria jurídica.' },
];

const Testimonials: React.FC<TestimonialsProps> = ({ mode }) => {
  const isEnhanced = mode === 'enhanced';

  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-500 uppercase tracking-widest text-xs font-bold mb-4 block">Feedback</span>
          <h2 className="text-4xl font-serif">O que dizem nossos clientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((rev, idx) => (
            <div key={rev.id}>
              {isEnhanced ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 relative"
                >
                  <div className="absolute -top-4 left-8 text-amber-500 text-4xl opacity-50">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="text-slate-300 italic mb-8 relative z-10">{rev.text}</p>
                  <div>
                    <p className="font-bold text-white">{rev.author}</p>
                    <p className="text-amber-500 text-xs uppercase tracking-widest mt-1">{rev.role}</p>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-slate-800 p-8 border border-slate-700">
                  <p className="text-slate-300 mb-8 italic">"{rev.text}"</p>
                  <p className="font-bold text-white">{rev.author}</p>
                  <p className="text-amber-500 text-xs uppercase mt-1">{rev.role}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

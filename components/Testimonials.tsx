
import React from 'react';
import { motion } from 'framer-motion';
import { DesignMode, Testimonial } from '../types';

interface TestimonialsProps {
  mode: DesignMode;
}

const reviews: Testimonial[] = [
  { id: 1, author: 'Carlos Alberto', role: 'Empresário', text: 'Profissionalismo acima da média. O Dr. Ricardo foi fundamental na reestruturação jurídica da minha empresa. Transparência e resultados.' },
  { id: 2, author: 'Maria Helena', role: 'Arquiteta', text: 'Excelente atendimento e resultado rápido. Recomendo o Dr. Ricardo para quem busca seriedade e confiança em casos de família.' },
  { id: 3, author: 'Roberto Silva', role: 'Investidor', text: 'Conhecimento técnico impecável. Me senti seguro durante todo o processo jurídico. Nota 10 pelo atendimento personalizado.' },
];

const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0f1d] text-white overflow-hidden relative">
      {/* Ícone de aspas gigante decorativo */}
      <div className="absolute top-10 right-10 text-slate-800/40 text-[180px] font-serif select-none pointer-events-none">
        <i className="fas fa-quote-right"></i>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-amber-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Feedback</span>
          <h2 className="text-3xl md:text-4xl font-serif">O que dizem nossos clientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/50 p-10 rounded-sm border border-slate-800 flex flex-col h-full"
            >
              <div className="text-amber-500 mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star text-[10px]"></i>)}
              </div>
              <p className="text-slate-300 italic text-sm leading-relaxed mb-10 flex-1">"{rev.text}"</p>
              <div className="border-t border-slate-800 pt-6">
                <p className="font-bold text-white text-sm">— {rev.author}</p>
                <p className="text-amber-500 text-[8px] uppercase tracking-widest mt-1 font-bold">{rev.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';
import { DesignMode } from '../types';

interface FAQProps {
  mode: DesignMode;
}

const FAQ: React.FC<FAQProps> = () => {
  const faqs = [
    { q: 'Como funciona a primeira consulta jurídica?', a: 'Nossa primeira consulta visa entender os fatos, analisar a viabilidade do caso e traçar as primeiras estratégias jurídicas. Pode ser realizada presencialmente ou por videoconferência.' },
    { q: 'Quais documentos preciso para iniciar um processo?', a: 'Isso varia conforme o caso, mas geralmente RG, CPF, comprovante de residência e todos os documentos relacionados ao conflito (contratos, conversas de WhatsApp, e-mails, etc.).' },
    { q: 'Atendem em outras cidades ou estados?', a: 'Sim. Com o processo eletrônico, podemos atuar em qualquer tribunal do Brasil de forma eficiente e segura.' },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <h4 className="text-amber-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-center">Tire suas dúvidas</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-12 text-center font-serif uppercase tracking-widest">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white p-6 rounded-xl shadow-sm border border-slate-100 cursor-pointer" open={i === 0}>
              <summary className="flex justify-between items-center font-bold text-[#0f172a] list-none tracking-wide text-sm md:text-base">
                {faq.q}
                <i className="fas fa-chevron-down text-amber-500 group-open:rotate-180 transition-transform"></i>
              </summary>
              <div className="mt-4 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4 font-light">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

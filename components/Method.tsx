
import React from 'react';
import { DesignMode } from '../types';

interface MethodProps {
  mode: DesignMode;
}

const Method: React.FC<MethodProps> = () => {
  const steps = [
    { icon: 'fa-phone-alt', title: '1. Contato', desc: 'Agendamento rápido via canais oficiais.' },
    { icon: 'fa-search', title: '2. Análise', desc: 'Estudo detalhado de toda a documentação.' },
    { icon: 'fa-gavel', title: '3. Estratégia', desc: 'Definição da melhor tese jurídica.' },
    { icon: 'fa-shield-alt', title: '4. Resultado', desc: 'Foco total na resolução e segurança.' },
  ];

  return (
    <section className="py-24 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h4 className="text-amber-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Nosso Método</h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-20 font-serif uppercase tracking-widest">A Jornada do seu Caso</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-white/10"></div>
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 group">
              <div className="w-24 h-24 bg-amber-600/20 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-amber-600/30 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                <div className="w-16 h-16 bg-amber-600/10 rounded-full flex items-center justify-center border border-amber-600/20">
                    <i className={`fas ${step.icon} text-2xl`}></i>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-widest">{step.title}</h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;

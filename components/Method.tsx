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
    <section className="py-24 bg-[#0f172a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h4 className="text-amber-500/80 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Nosso Método</h4>
        <h2 className="text-4xl md:text-5xl font-bold mb-24 font-serif">A Jornada do seu Caso</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative max-w-6xl mx-auto">
          {/* Linha conectora centralizada verticalmente com os círculos */}
          <div className="hidden md:block absolute top-12 left-[12%] w-[76%] h-[1px] bg-white/10 z-0"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 group">
              <div className="w-24 h-24 bg-[#b49b67] text-[#0f172a] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(180,155,103,0.15)] group-hover:scale-110 group-hover:bg-white transition-all duration-500 ease-out">
                <i className={`fas ${step.icon} text-2xl`}></i>
              </div>
              <h3 className="text-lg font-bold mb-3 font-serif tracking-wide">{step.title}</h3>
              <p className="text-slate-400 text-[13px] font-light leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
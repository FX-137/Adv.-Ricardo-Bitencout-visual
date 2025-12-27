
import React from 'react';
import { DesignMode } from '../types';

interface PracticeAreasProps {
  mode: DesignMode;
}

const areas = [
  { title: 'Direito Civil', icon: 'fa-balance-scale', desc: 'Proteção de bens, elaboração de contratos complexos e responsabilidade civil.' },
  { title: 'Direito de Família', icon: 'fa-users', desc: 'Divórcios, inventários, planejamento sucessório e partilha de bens.' },
  { title: 'Direito Trabalhista', icon: 'fa-briefcase', desc: 'Defesa técnica para empregados e consultoria preventiva empresarial.' },
  { title: 'Direito do Consumidor', icon: 'fa-shopping-bag', desc: 'Ações contra práticas abusivas, negativação indevida e planos de saúde.' },
  { title: 'Direito Previdenciário', icon: 'fa-umbrella', desc: 'Planejamento previdenciário, aposentadorias e revisões de benefícios.' },
  { title: 'Consultoria Jurídica', icon: 'fa-file-signature', desc: 'Assessoria preventiva para evitar litígios e pareceres técnicos.' },
];

const PracticeAreas: React.FC<PracticeAreasProps> = () => {
  return (
    <section id="especialidades" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h4 className="text-amber-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Especialidades</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6 font-serif uppercase tracking-widest">Áreas de Atuação Estratégica</h2>
        <div className="w-16 h-1 bg-amber-500 mx-auto mb-20"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, i) => (
            <div key={i} className="bg-white p-10 shadow-sm hover:shadow-2xl transition-all border-b-4 border-transparent hover:border-amber-600 group text-left">
              <div className="text-amber-600 mb-8 inline-block"><i className={`fas ${area.icon} text-4xl`}></i></div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4 font-serif">{area.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light">{area.desc}</p>
              <a href="https://wa.me/5551992496479" className="text-amber-600 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-all">Saiba Mais <i className="fas fa-arrow-right"></i></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;

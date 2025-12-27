
import React from 'react';
import { DesignMode } from '../types';

interface PracticeAreasProps {
  mode: DesignMode;
}

const areas = [
  { title: 'Direito Civil', icon: 'fa-balance-scale', desc: 'Proteção de bens, elaboração de contratos complexos e responsabilidade civil em todas as instâncias.' },
  { title: 'Direito de Família', icon: 'fa-users', desc: 'Mediação de divórcios, inventários, planejamento sucessório, partilha de bens e proteção de menores com sigilo total.' },
  { title: 'Direito Trabalhista', icon: 'fa-briefcase', desc: 'Defesa técnica para empregados e consultoria preventiva para empresas, visando a redução de riscos e passivos.' },
  { title: 'Direito do Consumidor', icon: 'fa-shopping-bag', desc: 'Ações contra práticas abusivas, negativação indevida e problemas com planos de saúde.' },
  { title: 'Direito Previdenciário', icon: 'fa-umbrella', desc: 'Planejamento previdenciário, aposentadorias e revisões de benefícios com análise criteriosa.' },
  { title: 'Consultoria Jurídica', icon: 'fa-file-signature', desc: 'Assessoria preventiva para evitar litígios e elaboração de pareceres técnicos especializados.' },
];

const PracticeAreas: React.FC<PracticeAreasProps> = () => {
  return (
    <section id="especialidades" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h4 className="text-amber-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Especialidades</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6 font-serif uppercase tracking-widest">Áreas de Atuação Estratégica</h2>
        <div className="w-16 h-1 bg-amber-500 mx-auto mb-20"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, i) => (
            <div key={i} className="bg-slate-50/50 p-10 shadow-sm hover:shadow-2xl transition-all border-b-4 border-transparent hover:border-amber-600 group text-left rounded-sm">
              <div className="text-amber-600 mb-8 inline-block"><i className={`fas ${area.icon} text-4xl`}></i></div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-4 font-serif">{area.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-8 font-light h-12">{area.desc}</p>
              <a href="https://wa.me/5551992496479?text=Olá%20Dr.%20Ricardo,%20gostaria%20de%20agendar%20uma%20consulta." target="_blank" className="text-amber-600 font-bold text-[9px] uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-all">Saiba Mais <i className="fas fa-arrow-right"></i></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
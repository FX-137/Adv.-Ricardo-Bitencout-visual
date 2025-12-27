
import React from 'react';
import { motion } from 'framer-motion';
import { DesignMode } from '../types';

interface AboutProps {
  mode: DesignMode;
}

const About: React.FC<AboutProps> = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative p-2 w-full max-w-md">
              {/* Moldura Dourada Deslocada */}
              <div className="absolute inset-0 border-2 border-amber-600/40 rounded-sm translate-x-4 -translate-y-4"></div>
              
              <div className="relative z-10 bg-white p-1 shadow-2xl">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800" 
                    alt="Ricardo Bitencourt" 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Cantoneiras */}
              <div className="absolute top-[-2px] left-[-2px] w-8 h-8 border-t-2 border-l-2 border-amber-600 z-20"></div>
              <div className="absolute bottom-[-2px] right-[-2px] w-8 h-8 border-b-2 border-r-2 border-amber-600 z-20"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h4 className="text-amber-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Compromisso & Ética</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-serif leading-tight">
              Nossa Missão é Garantir a <br/> sua Segurança Jurídica
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base text-justify font-light">
              <p>Com sólida formação e anos de experiência nos tribunais, o escritório foi fundado com o propósito de oferecer uma advocacia artesanal e estratégica.</p>
              <p>Buscamos não apenas resolver conflitos, mas prevenir riscos, garantindo a paz de espírito necessária para que nossos clientes foquem no que realmente importa.</p>
            </div>
            <div className="grid grid-cols-2 gap-12 border-t border-slate-100 mt-12 pt-12">
              <div><strong className="block text-4xl text-amber-600 font-serif mb-1">15+</strong><span className="text-[10px] uppercase text-slate-500 font-bold tracking-[0.2em]">Anos de Experiência</span></div>
              <div><strong className="block text-4xl text-amber-600 font-serif mb-1">98%</strong><span className="text-[10px] uppercase text-slate-500 font-bold tracking-[0.2em]">Índice de Satisfação</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

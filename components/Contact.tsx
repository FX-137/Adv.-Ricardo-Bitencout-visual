import React from 'react';
import { DesignMode } from '../types';

interface ContactProps {
  mode: DesignMode;
}

const Contact: React.FC<ContactProps> = ({ mode }) => {
  return (
    <section id="contato" className="py-24 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] border border-white/5">
          <div className="bg-red-950/40 py-5 text-center border-b border-white/5">
            <h2 className="text-sm md:text-base font-serif font-bold text-amber-500 uppercase tracking-[0.4em] flex items-center justify-center gap-4">
              <i className="fas fa-location-arrow text-xs"></i> NOSSA LOCALIZAÇÃO
            </h2>
          </div>
          <div className="p-8 md:p-14 text-center bg-zinc-900/50">
            <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-4 font-bold opacity-60">"Sólida experiência no centro histórico de Porto Alegre"</p>
            <h3 className="text-xl md:text-2xl font-bold mb-2 font-serif">Rua Senhor dos Passos, 372 - Sala 701</h3>
            <p className="text-slate-400 text-[11px] uppercase tracking-[0.2em] font-medium mb-12">Centro Histórico - Porto Alegre</p>
            
            <div className="w-full h-[300px] md:h-[400px] bg-white rounded-lg overflow-hidden border border-white/10 mb-12 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.089856557876!2d-51.22359292446731!3d-30.033926874938837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197906353d7e35%3A0xe9c8e8d8f99e8293!2sR.%20Sr.%20dos%20Passos%2C%20372%20-%20Centro%20Hist%C3%B3rico%2C%20Porto%20Alegre%20-%20RS%2C%2090020-180!5e0!3m2!1spt-BR!2sbr!4v1709230000000"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                title="Localização Ricardo Bitencourt"
                className="w-full h-full"
              ></iframe>
            </div>
            
            <a 
              href="https://maps.app.goo.gl/Bukf7foyGgraTWnU9" 
              target="_blank" 
              className="inline-flex bg-[#b49b67] hover:bg-white hover:text-black text-white font-bold py-4 px-12 rounded-full shadow-2xl transition-all uppercase tracking-widest text-[11px] items-center gap-4 group"
            >
              <i className="fas fa-location-arrow"></i>
              TRAÇAR ROTA / COMO CHEGAR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
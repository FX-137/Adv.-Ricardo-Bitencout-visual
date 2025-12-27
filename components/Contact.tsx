
import React from 'react';
import { DesignMode } from '../types';

interface ContactProps {
  mode: DesignMode;
}

const Contact: React.FC<ContactProps> = () => {
  return (
    <section id="contato" className="py-24 bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#242424] p-10 rounded-2xl border border-white/5 text-center shadow-2xl">
            <div className="w-16 h-16 bg-amber-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-phone-alt text-amber-500 text-xl"></i>
            </div>
            <p className="text-amber-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Telefone</p>
            <p className="text-2xl font-bold">(51) 3372-7235</p>
          </div>
          <div className="bg-[#242424] p-10 rounded-2xl border border-white/5 text-center shadow-2xl">
            <div className="w-16 h-16 bg-amber-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-envelope text-amber-500 text-xl"></i>
            </div>
            <p className="text-amber-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-2">E-mail</p>
            <p className="text-2xl font-bold break-all">contato@bitencourt.adv.br</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto bg-[#242424] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
          <div className="bg-[#0f172a] py-6 text-center border-b border-white/5">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-amber-500 uppercase tracking-widest flex items-center justify-center gap-4">
              <i className="fas fa-map-marker-alt"></i> Onde Estamos
            </h2>
          </div>
          <div className="p-8 md:p-16 text-center flex flex-col gap-10">
            <div>
              <p className="text-slate-400 text-sm italic mb-4">"Localização privilegiada no centro de Porto Alegre"</p>
              <p className="text-2xl md:text-4xl font-bold mb-2">Rua Senhor dos Passos, 372 - Sala 701</p>
              <p className="text-amber-500 text-[11px] uppercase tracking-[0.5em] font-bold">Centro Histórico - Porto Alegre/RS</p>
            </div>
            
            <div className="w-full h-80 bg-slate-800 rounded-2xl overflow-hidden border border-white/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.089856557876!2d-51.22359292446731!3d-30.033926874938837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197906353d7e35%3A0xe9c8e8d8f99e8293!2sR.%20Sr.%20dos%20Passos%2C%20372%20-%20Centro%20Hist%C3%B3rico%2C%20Porto%20Alegre%20-%20RS%2C%2090020-180!5e0!3m2!1spt-BR!2sbr!4v1709230000000!5m2!1spt-BR!2sbr"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                title="Mapa"
              ></iframe>
            </div>
            
            <div className="flex justify-center">
              <a href="https://maps.app.goo.gl/Bukf7foyGgraTWnU9" target="_blank" className="bg-amber-600 hover:bg-white hover:text-[#0f172a] text-white font-bold py-5 px-12 rounded-full shadow-2xl transition-all uppercase tracking-widest text-[11px] flex items-center gap-3">
                <i className="fas fa-location-arrow"></i>
                Traçar Rota / Como Chegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

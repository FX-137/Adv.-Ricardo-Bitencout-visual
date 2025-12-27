import React from 'react';
import { DesignMode } from '../types';

interface ContactProps {
  mode: DesignMode;
}

const Contact: React.FC<ContactProps> = () => {
  return (
    <section id="contato" className="py-24 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          <a href="tel:+555133727235" className="bg-[#1a1a1a] p-10 rounded-2xl border border-white/5 text-center shadow-xl group hover:border-amber-600/30 transition-all">
            <div className="w-14 h-14 bg-amber-600/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 transition-colors">
                <i className="fas fa-phone-alt text-amber-500 group-hover:text-white text-lg"></i>
            </div>
            <p className="text-slate-400 text-[9px] uppercase tracking-[0.3em] font-bold mb-2">Telefone</p>
            <p className="text-xl md:text-2xl font-bold font-serif">(51) 3372-7235</p>
          </a>
          <a href="mailto:contato@bitencourt.adv.br" className="bg-[#1a1a1a] p-10 rounded-2xl border border-white/5 text-center shadow-xl group hover:border-amber-600/30 transition-all">
            <div className="w-14 h-14 bg-amber-600/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 transition-colors">
                <i className="fas fa-envelope text-amber-500 group-hover:text-white text-lg"></i>
            </div>
            <p className="text-slate-400 text-[9px] uppercase tracking-[0.3em] font-bold mb-2">E-mail</p>
            <p className="text-xl md:text-2xl font-bold font-serif break-all">contato@bitencourt.adv.br</p>
          </a>
        </div>

        {/* Location Frame */}
        <div className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-sm overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] border border-white/5">
          <div className="bg-[#7a2626] py-5 text-center border-b-2 border-[#5a1c1c]">
            <h2 className="text-sm md:text-base font-serif font-bold text-amber-400 uppercase tracking-[0.4em] flex items-center justify-center gap-4">
              <i className="fas fa-map-marker-alt text-xs"></i> ONDE ESTAMOS
            </h2>
          </div>
          <div className="p-8 md:p-14 text-center">
            <p className="text-slate-500 text-xs italic mb-4 font-light">"Localização privilegiada no centro de Porto Alegre"</p>
            <h3 className="text-xl md:text-3xl font-bold mb-2 font-serif">Rua Senhor dos Passos, 372 - Sala 701</h3>
            <p className="text-amber-500 text-[11px] uppercase tracking-[0.5em] font-bold mb-12">CENTRO HISTÓRICO - PORTO ALEGRE/RS</p>
            
            <div className="w-full h-[300px] md:h-[400px] bg-[#222] rounded-sm overflow-hidden border border-white/10 mb-12">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.089856557876!2d-51.22359292446731!3d-30.033926874938837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197906353d7e35%3A0xe9c8e8d8f99e8293!2sR.%20Sr.%20dos%20Passos%2C%20372%20-%20Centro%20Hist%C3%B3rico%2C%20Porto%20Alegre%20-%20RS%2C%2090020-180!5e0!3m2!1spt-BR!2sbr!4v1709230000000"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                title="Localização Ricardo Bitencourt"
              ></iframe>
            </div>
            
            <a 
              href="https://maps.app.goo.gl/Bukf7foyGgraTWnU9" 
              target="_blank" 
              className="inline-flex bg-[#b49b67] hover:bg-white hover:text-[#0f172a] text-[#1a1a1a] font-bold py-4 px-12 rounded-full shadow-2xl transition-all uppercase tracking-widest text-[11px] items-center gap-4 group"
            >
              <i className="fas fa-location-arrow transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
              TRAÇAR ROTA / COMO CHEGAR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
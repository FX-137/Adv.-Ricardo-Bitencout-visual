
import React from 'react';
import { DesignMode } from '../types';

interface FooterProps {
  mode: DesignMode;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-full">
      {/* Barra Legal */}
      <div className="bg-[#111111] border-t border-white/5 py-8 text-[10px] md:text-[11px] text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left leading-relaxed">
            &copy; {new Date().getFullYear()} Ricardo Bitencourt Advocacia. OAB/RS 00.000. Todos os direitos reservados.
          </div>
          <div className="flex gap-8 font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-amber-500 transition-colors">Termos de Uso</a>
            <span className="text-slate-800 hidden md:inline">|</span>
            <a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>

      {/* Barra FCL (Preto Absoluto) */}
      <div className="bg-black text-white py-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-4">
          <span className="text-slate-600 font-bold text-[9px] uppercase tracking-[0.3em]">
            Criado por <span className="text-slate-400">FCL</span>
          </span>
          <div className="w-[1px] h-3 bg-white/10"></div>
          <a href="https://wa.me/5551992496479" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
            <i className="fab fa-whatsapp text-slate-600 group-hover:text-[#25D366] transition-colors text-xs"></i>
            <span className="text-[9px] font-bold text-slate-600 group-hover:text-[#25D366] uppercase tracking-[0.3em] transition-colors">Contato</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

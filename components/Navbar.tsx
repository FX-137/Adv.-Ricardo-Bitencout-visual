import React, { useState, useEffect } from 'react';
import { DesignMode } from '../types';

interface NavbarProps {
  mode: DesignMode;
}

const Navbar: React.FC<NavbarProps> = ({ mode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#0f172a]/98 backdrop-blur-md py-3 shadow-2xl border-b border-amber-600/20' : 'bg-[#0f172a] py-5 border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col group cursor-default">
          <span className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase font-serif leading-tight group-hover:text-amber-500 transition-colors">
            Ricardo Bitencourt
          </span>
          <span className="text-[10px] text-amber-500 tracking-[0.3em] uppercase font-bold opacity-90">
            Advocacia & Consultoria
          </span>
        </div>

        <div className="flex items-center">
          <a 
            href="https://wa.me/5551992496479?text=Olá,%20Dr.%20Ricardo.%20Gostaria%20de%20agendar%20uma%20consulta." 
            target="_blank"
            className="bg-[#25D366] hover:bg-white hover:text-[#0f172a] text-white px-5 sm:px-8 py-2 sm:py-3 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <i className="fab fa-whatsapp text-sm"></i>
            <span className="hidden xs:inline">Agendar Consulta</span>
            <span className="xs:hidden">Agendar</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
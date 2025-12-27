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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0f172a]/95 backdrop-blur-sm py-3 shadow-xl' : 'bg-[#0f172a] py-4'
    } border-b border-white/10`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase font-serif leading-tight">
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
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-2.5 rounded-sm text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg transition-all border border-transparent hover:border-white/20"
          >
            <i className="fab fa-whatsapp text-sm"></i>
            <span>Agendar Consulta</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
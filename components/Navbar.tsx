
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
          <span className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase font-serif">
            Ricardo Bitencourt
          </span>
          <span className="text-[10px] text-amber-500 tracking-[0.3em] uppercase font-bold">
            Advocacia & Consultoria
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex space-x-8">
            {['Início', 'Sobre', 'Especialidades', 'Equipe', 'FAQ', 'Contato'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] uppercase tracking-widest font-bold text-white/80 hover:text-amber-500 transition-colors">
                {item}
              </a>
            ))}
          </div>
          
          <a 
            href="https://wa.me/5551992496479" 
            target="_blank"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-2.5 rounded-sm text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg transition-all"
          >
            <i className="fab fa-whatsapp"></i>
            <span>Agendar Consulta</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

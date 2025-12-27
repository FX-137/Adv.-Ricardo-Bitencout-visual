import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DesignMode } from '../types';

interface FooterProps {
  mode: DesignMode;
}

const Footer: React.FC<FooterProps> = () => {
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | null>(null);

  const Modal = ({ title, content, onClose }: { title: string, content: string, onClose: () => void }) => (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} 
      />
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col"
      >
        <div className="p-6 border-b flex justify-between items-center bg-slate-50 rounded-t-xl">
          <h2 className="text-xl font-bold text-[#0f172a] font-serif">{title}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-red-500 transition-colors">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="p-8 overflow-y-auto text-sm text-slate-600 leading-relaxed text-justify">
          {content}
        </div>
      </motion.div>
    </div>
  );

  return (
    <footer className="w-full">
      {/* Tier 1: Legal and Copyright */}
      <div className="bg-[#0c0c0c] border-t border-white/5 py-12 text-[10px] text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left leading-relaxed font-bold uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Ricardo Bitencourt Advocacia. OAB/RS 00.000.
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 font-bold uppercase tracking-[0.2em]">
            <button 
              onClick={() => setActiveModal('terms')}
              className="hover:text-[#7a2626] transition-colors"
            >
              Termos de Uso
            </button>
            <span className="text-slate-800">|</span>
            <button 
              onClick={() => setActiveModal('privacy')}
              className="hover:text-[#7a2626] transition-colors"
            >
              Política de Privacidade
            </button>
          </div>
        </div>
      </div>

      {/* Tier 2: FCL Credits (Pure Black) */}
      <div className="bg-black py-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-center items-center gap-4 text-[9px] font-bold uppercase tracking-[0.4em]">
           <div className="flex items-center gap-4">
              <span className="text-slate-600">
                CRIADO POR <span className="text-slate-400">FCL</span>
              </span>
              <div className="w-[1px] h-3 bg-white/10 hidden sm:block"></div>
              <a 
                href="https://wa.me/5551984252514?text=Olá%20Fernando.%20Gostaria%20de%20saber%20mais%20sobre%20criação%20de%20sites." 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-[#25D366] transition-colors group"
              >
                <i className="fab fa-whatsapp text-[#25D366] text-xs"></i>
                <span className="group-hover:text-white">CONTATO</span>
              </a>
           </div>
        </div>
      </div>

      <AnimatePresence>
        {activeModal === 'terms' && (
          <Modal 
            title="Termos de Uso" 
            onClose={() => setActiveModal(null)}
            content="Este site tem caráter meramente informativo e não constitui consulta jurídica formal. Ao navegar por este portal, você concorda que o conteúdo aqui exposto visa aproximar o escritório de seus clientes e parceiros, seguindo rigorosamente o código de ética da OAB. Todas as informações compartilhadas nos formulários são tratadas com sigilo profissional."
          />
        )}
        {activeModal === 'privacy' && (
          <Modal 
            title="Política de Privacidade" 
            onClose={() => setActiveModal(null)}
            content="Protegemos sua privacidade em conformidade com a LGPD. Coletamos apenas os dados necessários para agendamento de consultas quando solicitados voluntariamente pelo usuário via canais de atendimento oficiais (WhatsApp e E-mail). Não compartilhamos suas informações com terceiros sem consentimento expresso e utilizamos cookies apenas para melhorar a sua experiência de navegação."
          />
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
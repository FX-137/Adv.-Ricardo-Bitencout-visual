import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DesignMode } from '../types';

interface FooterProps {
  mode: DesignMode;
}

const Footer: React.FC<FooterProps> = ({ mode }) => {
  const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);

  const LegalModal = ({ type, onClose }: { type: 'terms' | 'privacy', onClose: () => void }) => (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#111] border border-white/10 p-8 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto text-gray-300"
      >
        <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
          <h3 className="text-amber-500 font-serif text-xl uppercase tracking-widest">
            {type === 'terms' ? 'Termos de Uso' : 'Política de Privacidade'}
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-white"><i className="fas fa-times"></i></button>
        </div>
        <div className="text-[13px] leading-relaxed space-y-4 font-light">
          {type === 'terms' ? (
            <>
              <p>1. O conteúdo deste site é meramente informativo e não constitui aconselhamento jurídico.</p>
              <p>2. A utilização deste site não estabelece uma relação advogado-cliente.</p>
              <p>3. Todas as marcas e logotipos exibidos são de propriedade do escritório Ricardo Bitencourt.</p>
              <p>4. Reservamo-nos o direito de atualizar este conteúdo periodicamente.</p>
            </>
          ) : (
            <>
              <p>1. Coletamos dados básicos através do chat de IA apenas para facilitar o primeiro contato.</p>
              <p>2. Suas informações não são compartilhadas com terceiros fora do escopo jurídico necessário.</p>
              <p>3. Utilizamos cookies para melhorar a experiência de navegação.</p>
              <p>4. Você pode solicitar a exclusão de seus dados de contato a qualquer momento via WhatsApp.</p>
            </>
          )}
        </div>
        <button 
          onClick={onClose}
          className="mt-8 w-full py-3 bg-amber-600/20 hover:bg-amber-600 text-amber-500 hover:text-white font-bold text-[10px] uppercase tracking-widest transition-all rounded"
        >
          Fechar
        </button>
      </motion.div>
    </div>
  );

  return (
    <footer className="w-full bg-[#050505] pt-16 pb-8 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Linha Superior: Copyright à esquerda, Links à direita */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="text-gray-600 text-[10px] md:text-[11px] uppercase tracking-[0.1em] font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} Ricardo Bitencourt Advocacia. OAB/RS 00.000.
          </div>
          
          <div className="flex items-center gap-6 text-gray-500 text-[10px] md:text-[11px] uppercase tracking-widest font-bold">
            <button 
              onClick={() => setModalType('terms')} 
              className="hover:text-amber-500 transition-colors"
            >
              Termos de Uso
            </button>
            <span className="opacity-10 text-lg">|</span>
            <button 
              onClick={() => setModalType('privacy')} 
              className="hover:text-amber-500 transition-colors"
            >
              Política de Privacidade
            </button>
          </div>
        </div>

        {/* Linha Inferior: Centralizada com Créditos e Botão WhatsApp */}
        <div className="flex items-center justify-center gap-2 text-[9px] md:text-[10px] uppercase tracking-[0.35em] font-black text-gray-700 border-t border-white/5 pt-10">
          <div className="flex items-center gap-2">
            <span>CRIADO POR</span>
            <span className="text-gray-400">FCL</span>
          </div>
          
          <span className="opacity-10 text-xl font-light mx-2">|</span>
          
          <a 
            href="https://wa.me/5551992496479?text=Olá%20Fernando.%20Gostaria%20de%20saber%20mais%20sobre%20a%20criação%20de%20sites." 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-all group"
          >
            <i className="fab fa-whatsapp text-[#25D366] text-sm group-hover:scale-110 transition-transform"></i>
            <span>CONTATO</span>
          </a>
        </div>
      </div>

      <AnimatePresence>
        {modalType && (
          <LegalModal type={modalType} onClose={() => setModalType(null)} />
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
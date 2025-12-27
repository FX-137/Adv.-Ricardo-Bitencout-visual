
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto bg-white shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.15)] rounded-2xl border border-slate-100 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h4 className="text-slate-900 font-bold text-sm mb-1 flex items-center">
                <i className="fas fa-cookie-bite text-amber-600 mr-2"></i>
                Privacidade e Cookies
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Este site utiliza cookies para melhorar sua experiência de navegação e fornecer conteúdo personalizado. Ao continuar, você concorda com nossa <a href="#" className="underline hover:text-amber-600">Política de Privacidade</a>.
              </p>
            </div>
            <div className="flex space-x-3 w-full md:w-auto">
              <button 
                onClick={handleAccept}
                className="flex-1 md:flex-none bg-slate-900 text-white px-8 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all"
              >
                Aceitar
              </button>
              <button 
                onClick={() => setShow(false)}
                className="flex-1 md:flex-none bg-slate-100 text-slate-600 px-8 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-slate-200 transition-all"
              >
                Recusar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;

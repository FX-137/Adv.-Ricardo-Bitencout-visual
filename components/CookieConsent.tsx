import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('fcl-cookies');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = (accepted: boolean) => {
    localStorage.setItem('fcl-cookies', accepted ? 'ok' : 'no');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 pointer-events-none"
        >
          <div className="container mx-auto max-w-4xl pointer-events-auto">
            <div className="bg-[#0f172a]/95 backdrop-blur-md border border-amber-600/30 shadow-2xl rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-amber-600/10 p-3 rounded-full shrink-0">
                  <i className="fas fa-cookie-bite text-amber-500 text-xl"></i>
                </div>
                <div className="text-left">
                  <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-1">Privacidade & Cookies</p>
                  <p className="text-gray-300 text-[10px] leading-relaxed">
                    Utilizamos cookies para personalizar sua experiência jurídica. Ao continuar, você concorda com nossos termos.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <button 
                  onClick={() => handleClose(false)}
                  className="flex-1 md:flex-none border border-amber-600/40 text-amber-500 hover:bg-amber-600/10 font-bold py-2.5 px-6 rounded-xl text-[10px] uppercase tracking-widest transition-all"
                >
                  Recusar
                </button>
                <button 
                  onClick={() => handleClose(true)}
                  className="flex-1 md:flex-none bg-amber-600 hover:bg-white hover:text-[#0f172a] text-white font-bold py-2.5 px-6 rounded-xl text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-amber-600/20"
                >
                  Aceitar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
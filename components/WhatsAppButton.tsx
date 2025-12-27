
import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/551132145566"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-24 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-all animate-float"
      title="Fale conosco via WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;

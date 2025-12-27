import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from '@google/genai';
import { DesignMode } from '../types';

interface FloatingAIChatProps {
  mode: DesignMode;
}

const FloatingAIChat: React.FC<FloatingAIChatProps> = ({ mode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: 'Bem-vindo ao canal de atendimento digital do escritório Ricardo Bitencourt. Como posso auxiliar em sua dúvida jurídica hoje?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: String(userMsg) }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `Você é a inteligência artificial do escritório de advocacia Ricardo Bitencourt. 
          Seu tom é extremamente formal, jurídico, mas acolhedor. 
          Mencione que o Dr. Ricardo Bitencourt e sua equipe atendem em Porto Alegre/RS.
          Áreas: Civil, Família, Trabalhista, Imobiliário.
          Local: Rua Senhor dos Passos, 372 - Sala 701.
          Aviso: Você é informativo, não substitui consulta com advogado.`,
          temperature: 0.5
        }
      });

      const aiText = response.text || 'Lamentamos, não conseguimos processar sua mensagem agora.';
      setMessages(prev => [...prev, { role: 'ai', text: String(aiText) }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: 'O sistema de inteligência está temporariamente indisponível. Por favor, utilize o botão de WhatsApp para falar conosco.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[70]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="mb-4 w-[360px] md:w-[420px] h-[550px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 flex flex-col overflow-hidden"
          >
            <div className="bg-[#0f172a] p-6 flex justify-between items-center text-white">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-gavel text-white text-sm"></i>
                </div>
                <div>
                  <p className="text-sm font-bold tracking-wide">Assistente Jurídico</p>
                  <p className="text-[10px] text-amber-500 uppercase font-bold tracking-[0.2em]">Dr. Ricardo Bitencourt</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/30">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed ${
                    m.role === 'user' 
                    ? 'bg-amber-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex space-x-1.5 items-center">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t bg-white">
              <div className="flex items-center space-x-3 bg-slate-50 rounded-xl px-4 py-2 border border-slate-200 focus-within:border-amber-600/50">
                <input
                  type="text"
                  placeholder="Digite sua dúvida aqui..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 text-sm bg-transparent border-none focus:ring-0 py-2"
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  className="text-amber-600 disabled:text-slate-300 hover:scale-110 transition-transform"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-xl transition-all duration-500 overflow-hidden relative group ${isOpen ? 'bg-slate-900 rotate-90' : 'bg-amber-600 hover:scale-105 active:scale-95'}`}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-headset'} text-white`}></i>
      </button>
    </div>
  );
};

export default FloatingAIChat;

import React from 'react';
import { motion } from 'framer-motion';
import { DesignMode } from '../types';

interface HeroProps {
  mode: DesignMode;
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="início" className="relative h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950/80 z-10"></div>
        <img 
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6N_8IijcJZWy2OMKOkZObwyspo18qhECFMu9NtxAw54wjTg2WeEIfhiod2FUkstV66jAABtO9rTU01QB952Ze_nH92G5uNfSinUvgeLsMqQumdcR1kJWUL9TfRMfgiwwBDVA3sulby8Ku11Mq79GeOc44vTPWvy8KPr1gevMfgsoEdfh5s-qWEpRUCnY/s1600/Tribunal.jpg" 
          alt="Tribunal" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-20 h-1 bg-amber-500 mx-auto mb-8"
        ></motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight uppercase font-serif tracking-tight"
        >
          Justiça e Compromisso <br/> com o seu Direito
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto mb-12"
        >
          Atuação estratégica em causas complexas, pautada pela ética e excelência jurídica.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;

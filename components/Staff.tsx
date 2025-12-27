
import React from 'react';
import { DesignMode } from '../types';

interface StaffProps {
  mode: DesignMode;
}

const Staff: React.FC<StaffProps> = () => {
  const members = [
    { name: 'Reinaldo Ferreira', role: 'Advogado Associado', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9prSrtTwayxMhMsj3V-5HAxirpjWagqAlxK86-Qtb8be9owQ8UImND5GE7eTvaMKcF5muwFUrnHoZi6TkRA56n_Ze-8yU0uYorUFsd6j6tnk_s2O4exD2p2ti3n5pIug26gLKk50TDvtPRcxWsqgG5FqIt5Bba8jFQoNnkU3yLfO0oKJWR8ikClYCdbU/s5184/Reinaldo%20Ferreira.jpg' },
    { name: 'Clarice Pereira', role: 'Advogada Sócia', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJF3dMUvIDG9z6eJkzOekT_9-Du_S9ysloriuIwU1mRgYS_MNUXk7dDHL6erbB5VzLdB28g3EQvT8quWQX4ZCUyGMzTrDifS7cfG41E8bL0F1QTwcuaWhCk6dcmKmuDlwy8WqT9CTu0MLHgChadM6KnTcHO1ov74uGhWM-oNrdV4bks6miA7zx2rNjQDM/s5000/Clarice%20Pereira.jpg' },
    { name: 'Jeferson Rodrigues', role: 'Advogado Especialista', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUZXlS1SDPwGUQK2pfT2SXoX6M9DU_g7t0seIvdNlXMK3Ds3p810ah9xPHnXpXuL3RdCMcGAGK0zGXcS9gQQ5wx94ynL6HbRC9JOB_Cy8qpOphbWZ95iyapGL53vGXWMCkWPqS_MWZOIuwANPPrIsqBFm5LDbDA1Fby7KUUQWeDVEcsvtwzcPCFbIwAM4/s5863/Jeferson%20Rodrigues.jpg' },
    { name: 'Silvia Marcondes', role: 'Advogada Associada', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkOrK3J-Fi5WoAER6Zgve-s7ootrXCeev7WnECMIIFkHVlCciD36BkvmU5Sz61SYZGwZTxqTB-tQjj7ub4StgSTJUPrHRXs_cMNMibPtu16lvcn9YK8dtqCrIJHUUqzJBIaVllWxCaBChXePipB-6OGvUQ14Hof6O5YhrZZhFGVlDjRvT3xe3u-fYaQZE/s6516/Silvia%20Marcondes.jpg' },
  ];

  return (
    <section id="equipe" className="py-24 bg-white text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h4 className="text-amber-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Conheça nossos Profissionais</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6 font-serif uppercase tracking-widest">Corpo Jurídico</h2>
        <div className="w-16 h-1 bg-amber-500 mx-auto mb-20"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m, i) => (
            <div key={i} className="group">
              <div className="relative overflow-hidden mb-6 rounded-sm shadow-xl aspect-[3/4]">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale-0 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#0f172a]/20 group-hover:bg-transparent transition-all"></div>
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] font-serif mb-1">{m.name}</h3>
              <p className="text-amber-600 text-[9px] uppercase tracking-widest font-bold">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;

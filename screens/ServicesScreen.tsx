import React from 'react';
import { ViewState } from '../types';

interface Props {
  setView: (view: ViewState) => void;
}

const ServicesScreen: React.FC<Props> = ({ setView }) => {
  return (
    <div className="flex flex-col min-h-screen pb-24 relative bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-40 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center justify-between p-4 max-w-md mx-auto w-full">
          <button 
            onClick={() => setView('HOME')}
            className="flex items-center justify-center p-2 rounded-full text-text-main dark:text-white hover:bg-primary/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <h1 className="text-lg font-bold text-text-main dark:text-white">Nuestros Servicios</h1>
          <div className="w-10"></div> {/* Spacer */}
        </div>
      </header>

      <main className="flex-1 px-5 pt-6 flex flex-col gap-6 max-w-md mx-auto w-full">
        <div className="space-y-2">
            <h2 className="text-[28px] font-bold leading-tight tracking-tight text-text-main dark:text-white">
                ¿Cómo podemos <br/> <span className="text-primary">ayudarte hoy?</span>
            </h2>
            <p className="text-base text-text-muted font-normal leading-relaxed">
                Explora nuestros servicios gratuitos y confidenciales diseñados para apoyarte en cada paso.
            </p>
        </div>

        <div className="flex flex-col gap-4">
            {/* Service 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-surface-light dark:bg-surface-dark shadow-[0_4px_20px_-8px_rgba(255,143,112,0.15)] border border-secondary/20 active:scale-[0.98] transition-all cursor-pointer">
                <div className="flex p-5 gap-4 items-start">
                    <div className="shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light/30 text-primary-dark">
                            <span className="material-symbols-outlined text-[26px]">psychology_alt</span>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-1">
                        <h3 className="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">Acompañamiento</h3>
                        <p className="text-sm font-normal text-text-muted leading-relaxed">
                            Consejería emocional en un espacio seguro, confidencial y libre de juicios para ti.
                        </p>
                    </div>
                    <div className="shrink-0 self-center">
                        <span className="material-symbols-outlined text-secondary text-[24px]">chevron_right</span>
                    </div>
                </div>
            </div>

             {/* Service 4 (Renumbered technically but kept as per instructions to only delete medical/material) */}
            <div className="group relative overflow-hidden rounded-2xl bg-surface-light dark:bg-surface-dark shadow-[0_4px_20px_-8px_rgba(255,143,112,0.15)] border border-secondary/20 active:scale-[0.98] transition-all cursor-pointer">
                <div className="flex p-5 gap-4 items-start">
                    <div className="shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-400">
                            <span className="material-symbols-outlined text-[26px]">diversity_3</span>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-1">
                        <h3 className="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">Grupos de Apoyo</h3>
                        <p className="text-sm font-normal text-text-muted leading-relaxed">
                             Conecta con otras mujeres que comparten tu camino en un ambiente de empatía.
                        </p>
                    </div>
                    <div className="shrink-0 self-center">
                        <span className="material-symbols-outlined text-secondary text-[24px]">chevron_right</span>
                    </div>
                </div>
            </div>
        </div>

      </main>

      <div className="fixed bottom-24 left-0 right-0 p-5 pointer-events-none flex justify-center w-full max-w-md mx-auto">
         <button onClick={() => setView('CHAT')} className="pointer-events-auto flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary-dark text-white font-bold text-base h-14 rounded-2xl shadow-lg shadow-primary/30 transition-all transform active:scale-[0.98]">
             <span className="material-symbols-outlined filled text-[24px]" style={{fontVariationSettings: "'FILL' 1"}}>chat_bubble</span>
             <span>¿Necesitas ayuda urgente?</span>
         </button>
      </div>
    </div>
  );
};

export default ServicesScreen;
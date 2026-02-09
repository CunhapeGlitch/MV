import React from 'react';
import { ViewState } from '../types';

interface Props {
  setView: (view: ViewState) => void;
}

const StoriesScreen: React.FC<Props> = ({ setView }) => {
  return (
    <div className="flex flex-col min-h-screen pb-24 relative bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 pt-12 pb-6 border-b border-primary/5">
        <div className="flex items-center justify-between h-12 mb-2">
            <button 
                onClick={() => setView('HOME')}
                className="flex size-10 items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark shadow-sm hover:bg-gray-50 transition-colors border border-gray-100"
            >
                <span className="material-symbols-outlined text-text-main dark:text-white">arrow_back</span>
            </button>
            <button className="flex items-center gap-2 rounded-full px-4 py-1.5 bg-secondary/20 hover:bg-secondary/30 transition-colors border border-secondary/10">
                <span className="material-symbols-outlined text-rose-500 text-[18px]">share</span>
                <span className="text-text-main dark:text-white text-sm font-semibold tracking-wide">Compartir</span>
            </button>
        </div>
        <div>
            <h1 className="text-text-main dark:text-white text-[28px] font-bold leading-tight">Historias de Vida</h1>
            <p className="text-text-muted text-sm font-normal leading-relaxed mt-1">
                Voces reales, esperanza real. Encuentra fuerza en quienes han caminado antes que tú.
            </p>
        </div>
      </header>

      <main className="flex flex-col gap-6 p-4 max-w-md mx-auto w-full">
         
         {/* Story Card 1 */}
         <article className="group relative flex flex-col justify-end overflow-hidden rounded-[2rem] h-[400px] shadow-lg transition-transform active:scale-[0.98]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-[#D84315]"></div>
            
            {/* Abstract shapes for visual interest instead of photo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

            <div className="relative z-10 flex flex-col gap-4 p-8">
                <div className="flex justify-between items-start">
                    <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/20 shadow-sm">
                        Apoyo Psicológico
                    </span>
                    <button className="flex size-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white hover:text-primary-dark transition-all backdrop-blur-sm">
                        <span className="material-symbols-outlined text-[20px] filled" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
                    </button>
                </div>
                <blockquote className="text-[24px] font-bold leading-tight text-white drop-shadow-sm">
                    "Pensé que estaba sola, pero aquí encontré una familia que me escuchó sin juzgar."
                </blockquote>
                <div className="flex items-center gap-3 border-t border-white/20 pt-4 mt-2">
                    <div className="flex size-10 items-center justify-center rounded-full bg-white/90 text-primary-dark shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">person</span>
                    </div>
                    <div className="flex flex-col">
                        <cite className="not-italic text-sm font-bold text-white">Anónimo</cite>
                        <span className="text-xs text-white/80 font-medium">Santa Cruz • Hace 2 días</span>
                    </div>
                </div>
            </div>
         </article>

         {/* Story Card 2 */}
         <article className="group relative flex flex-col justify-end overflow-hidden rounded-[2rem] h-[400px] shadow-lg transition-transform active:scale-[0.98]">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-teal-800"></div>
            
             {/* Abstract shapes */}
            <div className="absolute -top-10 -left-10 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-0 w-40 h-40 bg-teal-900/20 rounded-full blur-xl"></div>

            <div className="relative z-10 flex flex-col gap-4 p-8">
                <div className="flex justify-between items-start">
                    <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/20 shadow-sm">
                        Ayuda Médica
                    </span>
                </div>
                <blockquote className="text-[24px] font-bold leading-tight text-white drop-shadow-sm">
                    "Gracias a la ecografía gratuita, pude escuchar el corazón de mi bebé y todo cambió."
                </blockquote>
                <div className="flex items-center gap-3 border-t border-white/20 pt-4 mt-2">
                    <div className="flex size-10 items-center justify-center rounded-full bg-white/90 text-teal-700 shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">child_care</span>
                    </div>
                    <div className="flex flex-col">
                        <cite className="not-italic text-sm font-bold text-white">Joven madre, 19 años</cite>
                        <span className="text-xs text-white/80 font-medium">La Paz • Hace 1 semana</span>
                    </div>
                </div>
            </div>
         </article>

         {/* Secure Submission CTA */}
         <div className="mt-2 flex flex-col items-center justify-center gap-5 rounded-[2rem] bg-surface-light dark:bg-surface-dark p-8 text-center border border-primary/20 shadow-soft relative overflow-hidden">
             {/* Decorative background elements */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-light to-white text-primary-dark shadow-sm ring-1 ring-primary/10">
                <span className="material-symbols-outlined text-[32px] filled" style={{fontVariationSettings: "'FILL' 1"}}>shield_lock</span>
            </div>
            <div className="relative space-y-2">
                <h3 className="text-xl font-bold text-text-main dark:text-white">Comparte tu historia</h3>
                <p className="max-w-[280px] text-sm text-text-muted leading-relaxed mx-auto">
                    Para garantizar la seguridad de nuestra comunidad, todas las historias son revisadas y editadas por nuestro equipo antes de publicarse.
                </p>
            </div>
            <button 
                onClick={() => setView('CHAT')}
                className="relative flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 font-bold text-white shadow-lg shadow-primary/30 hover:brightness-110 transition-all active:scale-[0.98] w-full"
            >
                <span className="material-symbols-outlined text-[20px]">mail</span>
                Quiero dejar mi testimonio
            </button>
            <p className="text-[10px] text-gray-400 font-medium">Se enviará a un editor para revisión anónima</p>
         </div>

      </main>
    </div>
  );
};

export default StoriesScreen;
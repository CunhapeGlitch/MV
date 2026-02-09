import React from 'react';
import { ViewState } from '../types';

interface Props {
  setView: (view: ViewState) => void;
}

const HomeScreen: React.FC<Props> = ({ setView }) => {
  return (
    <div className="flex flex-col min-h-screen pb-24 relative overflow-x-hidden">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/5">
        <div className="flex items-center justify-between p-4 pt-6 max-w-md mx-auto w-full">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light/50 text-primary-dark shadow-sm">
              <span className="material-symbols-outlined text-rose-500 filled" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-text-main dark:text-white">Juntas</h1>
          </div>
          <div className="flex gap-2">
             <button onClick={() => setView('VOLUNTEER')} className="h-10 w-10 flex items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark border border-primary/20 text-text-muted">
                <span className="material-symbols-outlined text-[20px]">manage_accounts</span>
             </button>
             <button className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark border border-primary/20 text-text-muted hover:text-primary transition-colors shadow-sm">
               <span className="material-symbols-outlined">notifications</span>
             </button>
          </div>
        </div>
      </div>

      <main className="flex-1 flex flex-col px-4 pt-6 gap-8 max-w-md mx-auto w-full">
        
        {/* Hero Text */}
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="text-3xl font-bold leading-tight text-text-main dark:text-white">
            Estamos aquí para ti
          </h2>
          <p className="text-text-muted dark:text-gray-300 text-base max-w-xs mx-auto font-light leading-relaxed">
            Un espacio seguro y confidencial donde no estás sola.
          </p>
        </div>

        {/* Hero Card - Chat CTA */}
        <div 
          onClick={() => setView('CHAT')}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FFDAB9] via-[#FFC0CB] to-[#F8BBD0] shadow-soft ring-1 ring-white/40 cursor-pointer transform transition-all active:scale-[0.98]"
        >
          {/* Decorative blobs */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/30 blur-3xl"></div>
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/30 blur-3xl"></div>

          <div className="relative z-10 flex flex-col p-6 gap-6">
            <div className="flex justify-between items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/40 text-rose-700 backdrop-blur-md shadow-sm">
                <span className="material-symbols-outlined text-3xl">forum</span>
              </div>
              <span className="inline-flex items-center rounded-full bg-white/40 px-3 py-1 text-xs font-bold text-rose-800 ring-1 ring-inset ring-white/50 backdrop-blur-md uppercase tracking-wider">
                Disponible 24/7
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">Chat de Apoyo Anónimo</h3>
              <p className="text-gray-800 text-sm leading-relaxed font-medium opacity-90">
                Habla con un asesor de confianza ahora mismo. Es totalmente gratuito, seguro y confidencial.
              </p>
            </div>

            <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-white/90 py-3.5 px-4 text-rose-600 font-bold text-base hover:bg-white transition-colors shadow-sm">
              <span>Iniciar Chat Seguro</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Quick Access */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-text-main dark:text-white px-1">Accesos Rápidos</h3>
          <div className="grid grid-cols-2 gap-4">
            
            <div 
              onClick={() => setView('SERVICES')}
              className="col-span-1 flex flex-col gap-3 rounded-2xl bg-surface-light dark:bg-surface-dark p-4 shadow-sm border border-primary/10 hover:border-primary/30 transition-colors cursor-pointer group"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary-light/30 text-primary-dark group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">medical_services</span>
              </div>
              <div>
                <h4 className="font-bold text-text-main dark:text-white text-base">Nuestros Servicios</h4>
                <p className="text-xs text-text-muted dark:text-gray-400 mt-1">Acompañamiento y recursos</p>
              </div>
            </div>

            <div 
              onClick={() => setView('LOCATION')}
              className="col-span-1 flex flex-col gap-3 rounded-2xl bg-surface-light dark:bg-surface-dark p-4 shadow-sm border border-primary/10 hover:border-primary/30 transition-colors cursor-pointer group"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary/30 text-rose-500 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h4 className="font-bold text-text-main dark:text-white text-base">Ubicación</h4>
                <p className="text-xs text-text-muted dark:text-gray-400 mt-1">Encuentra el centro más cercano</p>
              </div>
            </div>

            <div 
              onClick={() => setView('PRIVACY')}
              className="col-span-2 flex items-center justify-between gap-4 rounded-2xl bg-surface-light dark:bg-surface-dark p-4 shadow-sm border border-primary/10 hover:border-primary/30 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white text-base">Privacidad y Seguridad</h4>
                  <p className="text-xs text-text-muted dark:text-gray-400 mt-0.5">Cómo protegemos tu identidad</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </div>
          </div>
        </div>

        {/* Stories Teaser */}
        <div className="flex flex-col gap-4 pb-4">
          <div className="flex justify-between items-center px-1">
             <h3 className="text-lg font-bold text-text-main dark:text-white">Historias de Esperanza</h3>
             <button onClick={() => setView('STORIES')} className="text-primary text-sm font-bold">Ver todas</button>
          </div>
          
          <div 
             onClick={() => setView('STORIES')}
             className="relative h-48 w-full overflow-hidden rounded-2xl bg-gray-100 shadow-md cursor-pointer group"
          >
            <img 
              alt="Woman smiling" 
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUl9YvgwdzY6u1JHNZbyJxySH41b0q3D0s4VS8dYsjXarDCqJ7FyL7YyoNuYBUm_pdrUvGvRPSEHNRq-Fe8RypPHwX20CCeriRQBHVVr2mlGh1t_1Ou25gaxHH2rJ0W9OMfTfLC1n0nCi-CBv4KtKmBuDrqZME7sFYfo8B8tOnWx_3PTEcTRhwF81DL8wtpFD1t-in7e_6NLJGQN8wbhlTOpHxwHsHop8JG_vc7w77EG4fE_mqzZrYiYSmH6GNBA0ZcTLObfng_-E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-5 w-full">
              <span className="inline-block rounded-md bg-[#FFDAB9] px-2 py-0.5 text-xs font-bold text-gray-800 mb-2 shadow-sm">
                Testimonio
              </span>
              <h4 className="text-white font-bold text-lg leading-tight mb-1">
                "Encontré la paz que necesitaba"
              </h4>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs text-gray-200 group-hover:text-white transition-colors">Leer historia completa</span>
                <span className="material-symbols-outlined text-xs text-secondary group-hover:text-white transition-colors">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default HomeScreen;
import React from 'react';
import { ViewState } from '../types';

interface Props {
  setView: (view: ViewState) => void;
}

const LocationScreen: React.FC<Props> = ({ setView }) => {
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
          <h1 className="text-lg font-bold text-text-main dark:text-white">Ubicación</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="flex-1 flex flex-col w-full max-w-md mx-auto pb-6">
        {/* Map Card */}
        <div className="px-4 py-3">
          <div className="relative w-full h-72 rounded-3xl overflow-hidden shadow-lg group cursor-pointer border border-primary/20">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDw9GXLN2LgvvXghhWGwSx_-wK7zHauJmpiuFiAPUj-KH6dp-5e7xwyUSxVd3JeIqJ-UnQGJwNLq-90CMTZ4m5_1MveO33MDQCYkjAz-6-KyLv2cMJbG33pdvRthIk5Tl0Uz08KzcMkNxOPpuhrUgKAueTPNVa_tO_hEk9at-oR6I2rg33gUgmO1rCEyEcDFrp6ky0C34pXjRu3DpeKDK7M2XAmmsHjtsdnirvk3i8rnNCfUmLSCS0ne-Gos4IYC4S9T3FPrtit7hg')"}}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            {/* Map Marker Pulse Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative flex items-center justify-center size-14 bg-gradient-to-br from-primary to-primary-dark rounded-full shadow-lg z-10 text-white transform transition-transform group-hover:-translate-y-1">
                 <span className="material-symbols-outlined filled" style={{fontVariationSettings: "'FILL' 1", fontSize: '30px'}}>medical_services</span>
              </div>
              <div className="mt-2 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-lg text-xs font-bold text-gray-900 shadow-md border border-gray-200 tracking-wide uppercase">
                  Juntas
              </div>
            </div>

            <button className="absolute bottom-3 right-3 bg-white text-gray-900 pl-3 pr-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 text-sm font-semibold hover:bg-gray-50 transition-all active:scale-95">
                <span className="material-symbols-outlined text-primary text-[20px]">near_me</span>
                <span>Cómo llegar</span>
            </button>
          </div>
        </div>

        {/* Address Info */}
        <div className="px-5 pt-2">
            <h2 className="text-2xl font-bold text-text-main dark:text-white">Nuestra Oficina</h2>
            <p className="text-text-muted text-sm mt-1">Estamos aquí para escucharte y apoyarte en un ambiente seguro.</p>
        </div>

        <div className="mx-4 my-4 p-4 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-primary/10 flex items-center justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
                <div className="text-primary bg-primary-light/20 flex items-center justify-center rounded-xl shrink-0 size-12">
                    <span className="material-symbols-outlined filled text-[24px]" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-text-main dark:text-white text-base font-bold leading-snug">Av. 6 de Agosto, Edificio Las Dos Torres</p>
                    <p className="text-text-muted text-sm font-normal mt-0.5">Piso 4, La Paz, Bolivia</p>
                </div>
            </div>
            <button className="shrink-0 text-primary-dark hover:bg-primary-light/20 rounded-full p-2 transition-colors">
                <span className="material-symbols-outlined text-[22px]">content_copy</span>
            </button>
        </div>

        {/* Hours */}
        <div className="mx-4 mb-4 p-5 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-primary/10">
            <div className="flex items-center gap-3 mb-5">
                <div className="size-8 rounded-full bg-primary-light/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-dark text-[20px]">schedule</span>
                </div>
                <h3 className="text-text-main dark:text-white text-lg font-bold">Horarios de Atención</h3>
            </div>
            <div className="space-y-4">
                <div className="flex justify-between items-center text-sm border-b border-gray-100 dark:border-gray-800 pb-3">
                    <span className="text-gray-500 font-medium">Lunes - Viernes</span>
                    <span className="text-text-main dark:text-white font-bold bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-gray-100 dark:border-gray-800 pb-3">
                    <span className="text-gray-500 font-medium">Sábado</span>
                    <span className="text-text-main dark:text-white font-bold bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between items-center text-sm pt-1">
                    <span className="text-gray-500 font-medium">Domingo</span>
                    <div className="flex items-center gap-1.5 text-red-500 font-bold bg-red-50 dark:bg-red-900/20 px-2.5 py-1 rounded-md text-xs uppercase tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                        Cerrado
                    </div>
                </div>
            </div>
        </div>

        {/* Call CTA */}
        <div className="mt-auto px-4 pb-6">
            <button className="w-full flex items-center justify-center rounded-2xl h-14 px-5 bg-gradient-to-r from-primary to-primary-dark hover:brightness-110 active:scale-[0.98] transition-all text-white gap-3 shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined filled text-[24px]" style={{fontVariationSettings: "'FILL' 1"}}>call</span>
                <span className="text-lg font-bold">Llamar Ahora</span>
            </button>
        </div>

      </main>
    </div>
  );
};

export default LocationScreen;
import React from 'react';
import { ViewState } from '../types';

interface Props {
  setView: (view: ViewState) => void;
}

const AdminScreen: React.FC<Props> = ({ setView }) => {
  return (
    <div className="flex flex-col min-h-screen relative bg-background-light dark:bg-background-dark text-text-main dark:text-white max-w-md mx-auto w-full">
      {/* Header */}
      <header className="flex flex-col gap-4 px-4 pb-4 pt-4 sticky top-0 z-20 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center justify-between h-10">
            <button onClick={() => setView('VOLUNTEER')} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors cursor-pointer">
                <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 hover:bg-primary/30 text-primary-dark cursor-pointer">
                <span className="material-symbols-outlined">add</span>
            </div>
        </div>
        <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold tracking-tight">Gestión de Contenido</h1>
            <p className="text-sm text-text-muted font-medium">Administrar recursos de la fundación</p>
        </div>
        {/* Tabs */}
        <div className="flex p-1 bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-primary/10">
            {['Servicios', 'Recursos', 'Testimonios'].map((tab, i) => (
                <div key={tab} className={`flex-1 flex items-center justify-center py-2 px-3 text-sm font-semibold rounded-lg transition-all cursor-pointer ${i === 0 ? 'bg-primary text-text-main shadow-sm' : 'text-text-muted hover:text-primary'}`}>
                    {tab}
                </div>
            ))}
        </div>
        {/* Search */}
        <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted">
                <span className="material-symbols-outlined">search</span>
            </div>
            <input className="block w-full pl-10 pr-3 py-3 rounded-xl border-none bg-surface-light dark:bg-surface-dark text-text-main placeholder:text-text-muted/70 focus:ring-2 focus:ring-primary/50 shadow-sm text-base" placeholder="Buscar..." type="text" />
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-4 pb-24 space-y-6">
         {/* Services Section */}
         <section>
            <div className="flex items-center justify-between mb-3 px-1">
                <h2 className="text-lg font-bold">Servicios Activos</h2>
                <button className="text-xs font-bold text-primary hover:underline uppercase tracking-wider">Ver todo</button>
            </div>
            <div className="flex flex-col gap-4">
                {/* Featured Service Card */}
                <div className="group relative overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm border border-primary/10">
                    <div className="absolute top-3 right-3 z-10">
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-700 border border-green-200">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            Activo
                        </span>
                    </div>
                    <div className="h-32 w-full bg-cover bg-center relative" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZ1BHcEBqxLsdcVOmj3AOI2lE7X_lAFJNDgY8N52-BxdySSnWo31myj6bT-QYyEKySlJ3fxkI4LtXLHEihjfXKerE5UW1ceqdZUfFG1V_4tjfSIu2R42UQRxnC_Wh5qZEPCS0uDtblgsn_DXt8XeYENtUk3410ndNsNLRWgirVtM-JsCaO0GEBN94LM1KPCaucFIhugTuFiHlb2f69f4hMBaoNzr0YC9RTemi1XK8Xhj_YEu56DQF59cXOEGAEqxI41FIYNrFN9JA')"}}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                            <h3 className="text-xl font-bold leading-tight">Línea de Ayuda 24/7</h3>
                            <p className="text-white/80 text-xs mt-1 font-medium">Atención psicológica inmediata</p>
                        </div>
                    </div>
                    <div className="p-4 flex items-center justify-between gap-3">
                        <div className="flex flex-col">
                            <span className="text-xs text-text-muted font-medium uppercase tracking-wide">Contacto</span>
                            <span className="text-sm font-semibold">800-10-20-30</span>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex items-center justify-center h-9 w-9 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors">
                                <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                            <button className="flex items-center justify-center h-9 px-4 rounded-lg bg-primary/10 text-primary-dark font-semibold text-sm gap-1">
                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                <span>Editar</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
         </section>
         
         {/* Resources Section */}
         <section>
            <div className="flex items-center justify-between mb-3 px-1 mt-4">
                <h2 className="text-lg font-bold">Recursos Educativos</h2>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-light text-text-muted">
                    <span className="material-symbols-outlined">filter_list</span>
                </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-surface-light dark:bg-surface-dark p-3 shadow-sm border border-primary/10 flex flex-col h-full">
                    <div className="h-24 w-full rounded-lg bg-cover bg-center mb-3 relative overflow-hidden bg-gray-200">
                         <div className="absolute top-1 right-1 bg-black/50 backdrop-blur-sm rounded-md px-1.5 py-0.5 text-[10px] text-white font-bold">PDF</div>
                    </div>
                    <h4 className="font-bold text-sm leading-snug mb-1">Guía de Autocuidado</h4>
                    <p className="text-xs text-text-muted line-clamp-2 mb-3">Técnicas básicas para manejar la ansiedad en crisis.</p>
                    <button className="mt-auto w-full py-1.5 rounded-lg bg-primary/10 text-primary-dark text-xs font-bold hover:bg-primary/20 transition-colors">
                        Gestionar
                    </button>
                </div>
                <div className="rounded-xl bg-surface-light dark:bg-surface-dark p-3 shadow-sm border border-primary/10 flex flex-col h-full">
                    <div className="h-24 w-full rounded-lg bg-cover bg-center mb-3 relative overflow-hidden bg-gray-200">
                        <div className="absolute top-1 right-1 bg-black/50 backdrop-blur-sm rounded-md px-1.5 py-0.5 text-[10px] text-white font-bold">Video</div>
                    </div>
                    <h4 className="font-bold text-sm leading-snug mb-1">Charla sobre derechos</h4>
                    <p className="text-xs text-text-muted line-clamp-2 mb-3">Grabación del taller mensual de junio.</p>
                    <button className="mt-auto w-full py-1.5 rounded-lg bg-primary/10 text-primary-dark text-xs font-bold hover:bg-primary/20 transition-colors">
                        Gestionar
                    </button>
                </div>
            </div>
         </section>
      </main>

       {/* Floating Action Button */}
       <button className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-text-main shadow-lg shadow-primary/30 flex items-center justify-center transition-transform active:scale-95 hover:shadow-xl hover:-translate-y-1 z-30 group">
            <span className="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform duration-300">add</span>
       </button>
    </div>
  );
};

export default AdminScreen;
import React from 'react';
import { ViewState } from '../types';

interface Props {
  setView: (view: ViewState) => void;
}

const VolunteerScreen: React.FC<Props> = ({ setView }) => {
  return (
    <div className="h-screen flex flex-col bg-slate-50 dark:bg-background-dark max-w-md mx-auto w-full overflow-hidden">
        {/* Header */}
        <header className="flex-none bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-primary/10 px-4 py-3 flex items-center justify-between z-20 shadow-sm">
            <div className="flex items-center gap-3">
                <button onClick={() => setView('HOME')} className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-white">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div>
                    <h1 className="text-lg font-bold leading-tight text-slate-800 dark:text-white">Panel de Voluntarios</h1>
                    <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-medium text-slate-500">En línea</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <button onClick={() => setView('ADMIN')} className="p-2 rounded-full hover:bg-slate-100 relative text-slate-600 dark:text-gray-300">
                    <span className="material-symbols-outlined">settings</span>
                </button>
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark font-bold text-sm border border-primary/30">
                    CV
                </div>
            </div>
        </header>

        {/* Active Chat Header */}
        <div className="flex-none px-4 py-3 flex items-center justify-between bg-white/50 dark:bg-surface-dark/50 backdrop-blur-md border-b border-slate-100 dark:border-primary/5 sticky top-0 z-10">
            <div className="flex items-center gap-3">
                <div className="bg-slate-200 dark:bg-slate-700 h-10 w-10 rounded-full flex items-center justify-center text-slate-500 font-bold shadow-inner">
                    <span className="material-symbols-outlined text-xl">person</span>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h2 className="font-bold text-slate-900 dark:text-white">Anónimo #492</h2>
                        <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider border border-green-200">Activo</span>
                    </div>
                    <p className="text-xs text-slate-500">Iniciado hace 15 min • Crisis leve</p>
                </div>
            </div>
            <button className="text-primary-dark hover:bg-primary/10 p-2 rounded-lg transition-colors">
                <span className="material-symbols-outlined">info</span>
            </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-white dark:bg-background-dark pb-32">
            <div className="flex justify-center">
                <span className="text-[10px] font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Hoy, 10:23 AM</span>
            </div>

            {/* User Message */}
            <div className="flex gap-3 max-w-[90%]">
                <div className="flex flex-col gap-1 items-start">
                    <div className="bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-slate-700 p-3.5 rounded-2xl rounded-tl-none shadow-sm text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
                        <p>Hola, no sé por dónde empezar. Me siento muy abrumado últimamente y no tengo con quién hablar.</p>
                    </div>
                    <span className="text-[10px] text-slate-400 ml-1">10:24 AM</span>
                </div>
            </div>

            {/* Volunteer Message */}
            <div className="flex gap-3 max-w-[90%] ml-auto flex-row-reverse">
                <div className="flex flex-col gap-1 items-end">
                    <div className="bg-primary/10 border border-primary/20 p-3.5 rounded-2xl rounded-tr-none text-slate-800 dark:text-white text-sm leading-relaxed">
                        <p>Hola. Gracias por confiar en nosotros. Estoy aquí para escucharte sin juzgar. ¿Quieres contarme qué es lo que te hace sentir así?</p>
                    </div>
                    <div className="flex items-center gap-1 mr-1">
                        <span className="text-[10px] text-slate-400">10:25 AM</span>
                        <span className="material-symbols-outlined text-[12px] text-primary">done_all</span>
                    </div>
                </div>
            </div>

             {/* User Message */}
             <div className="flex gap-3 max-w-[90%]">
                <div className="flex flex-col gap-1 items-start">
                    <div className="bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-slate-700 p-3.5 rounded-2xl rounded-tl-none shadow-sm text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
                        <p>Siento que todo se me viene encima en el trabajo y en casa. Es como si no pudiera respirar a veces.</p>
                    </div>
                    <span className="text-[10px] text-slate-400 ml-1">10:26 AM</span>
                </div>
            </div>
        </div>

        {/* Input Area */}
        <div className="flex-none bg-white dark:bg-surface-dark p-3 border-t border-slate-200 dark:border-primary/10 pb-8 sm:pb-3">
            <div className="flex gap-2 overflow-x-auto pb-3 no-scrollbar mb-1">
                <button className="shrink-0 flex items-center gap-1 px-3 py-1.5 bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-primary/10 rounded-full text-xs font-medium text-slate-600 dark:text-gray-300 transition-colors">
                    <span className="material-symbols-outlined text-[16px] text-primary">favorite</span>
                    Validación
                </button>
                <button className="shrink-0 flex items-center gap-1 px-3 py-1.5 bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-primary/10 rounded-full text-xs font-medium text-slate-600 dark:text-gray-300 transition-colors">
                    <span className="material-symbols-outlined text-[16px] text-primary">medical_services</span>
                    Recursos
                </button>
                <button className="shrink-0 flex items-center gap-1 px-3 py-1.5 bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-primary/10 rounded-full text-xs font-medium text-slate-600 dark:text-gray-300 transition-colors">
                    <span className="material-symbols-outlined text-[16px] text-primary">waving_hand</span>
                    Despedida
                </button>
            </div>
            <div className="flex items-end gap-2">
                <button className="p-3 text-slate-400 hover:text-primary transition-colors rounded-lg bg-slate-50 dark:bg-background-dark">
                    <span className="material-symbols-outlined">add_circle</span>
                </button>
                <div className="flex-1 bg-slate-50 dark:bg-background-dark rounded-xl flex items-center px-3 py-1 border border-transparent focus-within:border-primary/50 transition-all">
                    <textarea className="w-full bg-transparent border-none focus:ring-0 text-sm text-slate-800 dark:text-white placeholder-slate-400 resize-none py-2.5 max-h-24" placeholder="Escribe un mensaje de apoyo..." rows={1}></textarea>
                    <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">bolt</span>
                    </button>
                </div>
                <button className="p-3 bg-primary hover:bg-primary-dark text-white rounded-xl shadow-md flex items-center justify-center">
                    <span className="material-symbols-outlined filled" style={{fontVariationSettings: "'FILL' 1"}}>send</span>
                </button>
            </div>
        </div>
    </div>
  );
};

export default VolunteerScreen;
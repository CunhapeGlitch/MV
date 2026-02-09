import React from 'react';
import { ViewState } from '../types';

interface Props {
  setView: (view: ViewState) => void;
}

const PrivacyScreen: React.FC<Props> = ({ setView }) => {
  return (
    <div className="flex flex-col min-h-screen relative bg-background-light dark:bg-background-dark max-w-md mx-auto w-full">
      <header className="sticky top-0 z-40 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => setView('HOME')} className="flex items-center justify-center p-2 rounded-full hover:bg-primary/10 transition-colors text-text-main dark:text-white">
                <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
            </button>
            <h1 className="text-base font-semibold tracking-tight text-text-main dark:text-white">Privacidad y Seguridad</h1>
            <div className="w-10"></div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-32 px-5 pt-6">
        <div className="mb-8 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-secondary-light flex items-center justify-center shadow-sm relative overflow-hidden mb-6">
                <span className="material-symbols-outlined text-primary-dark text-4xl relative z-10">security</span>
            </div>
            <h2 className="text-2xl font-bold leading-tight text-center mb-3 text-text-main dark:text-white">Tu seguridad es nuestra prioridad</h2>
            <p className="text-text-muted text-center leading-relaxed text-sm px-2">
                Entendemos que este es un momento delicado. Aquí respondemos tus dudas sobre cómo protegemos tu identidad.
            </p>
        </div>

        <div className="flex flex-col gap-4">
            {[
                { question: "¿Es realmente anónimo?", icon: "visibility_off", answer: "Sí, totalmente. No rastreamos tu ubicación ni requerimos datos personales reales para iniciar una conversación." },
                { question: "¿Se guardan mis mensajes?", icon: "chat_bubble", answer: "Tus mensajes son confidenciales. Solo se utilizan para brindarte el apoyo que necesitas en el momento." },
                { question: "¿Debo dar mi nombre?", icon: "badge", answer: "No es necesario. Puedes usar un apodo o simplemente hablar con nosotras sin identificarte." },
                { question: "¿Puedo borrar mi historial?", icon: "delete_forever", answer: "Sí, nuestra aplicación incluye un 'botón de pánico' que cierra la sesión y limpia el caché local." }
            ].map((item, i) => (
                <details key={i} className="group rounded-xl bg-surface-light dark:bg-surface-dark border border-primary/10 shadow-sm transition-all duration-300 open:shadow-md open:border-primary/50">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 hover:bg-gray-50 dark:hover:bg-white/5 rounded-t-xl group-open:rounded-b-none transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-secondary-light/50 flex items-center justify-center text-primary-dark group-open:bg-primary group-open:text-white transition-colors">
                                <span className="material-symbols-outlined text-lg">{item.icon}</span>
                            </div>
                            <span className="font-semibold text-sm sm:text-base text-text-main dark:text-white">{item.question}</span>
                        </div>
                        <span className="material-symbols-outlined text-text-muted group-open:rotate-180 transition-transform">expand_more</span>
                    </summary>
                    <div className="px-5 pb-5 pt-1">
                        <div className="h-px w-full bg-secondary-light mb-4 opacity-70"></div>
                        <p className="text-text-muted text-sm leading-relaxed">{item.answer}</p>
                    </div>
                </details>
            ))}
        </div>
      </main>
      
      <div className="fixed bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background-light to-transparent dark:from-background-dark pointer-events-none max-w-md mx-auto">
        <button onClick={() => setView('CHAT')} className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] pointer-events-auto">
            <span className="material-symbols-outlined">support_agent</span>
            Hablar con una consejera
        </button>
      </div>
    </div>
  );
};

export default PrivacyScreen;
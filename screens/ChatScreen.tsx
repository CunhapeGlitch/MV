import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';

interface Props {
  setView: (view: ViewState) => void;
}

const ChatScreen: React.FC<Props> = ({ setView }) => {
  const [showPrivacyGate, setShowPrivacyGate] = useState(true);
  const [messages, setMessages] = useState<any[]>([
     { id: 1, type: 'agent', text: 'Hola, estamos aquí para escucharte. Este es un espacio seguro y confidencial. ¿En qué podemos ayudarte hoy?', time: '10:23 AM' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Simulate initial chat flow for demo
  useEffect(() => {
    if (!showPrivacyGate && messages.length === 1) {
        setTimeout(() => {
            setMessages(prev => [...prev, { id: 2, type: 'user', text: 'Hola, necesito hablar con alguien. Me siento un poco abrumada con una situación.', time: '10:24 AM' }]);
            setIsTyping(true);
            setTimeout(() => {
                 setIsTyping(false);
                 setMessages(prev => [...prev, { id: 3, type: 'agent', text: 'Entiendo. Es valiente de tu parte dar el primer paso. Estoy aquí para apoyarte. ¿Quieres contarme un poco más sobre lo que está pasando?', time: '10:25 AM' }]);
            }, 2000);
        }, 1000);
    }
  }, [showPrivacyGate, messages.length]);

  const handleSend = () => {
    if(!inputText.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: inputText, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }]);
    setInputText('');
    setIsTyping(true);
    setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, { id: Date.now()+1, type: 'agent', text: 'Gracias por compartirlo. Cuéntame más.', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }]);
    }, 2500);
  };

  return (
    <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark max-w-md mx-auto w-full relative shadow-2xl overflow-hidden">
      
      {/* Privacy Gate Modal */}
      {showPrivacyGate && (
        <div className="absolute inset-0 z-50 bg-background-dark/80 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
            <div className="w-full bg-surface-light dark:bg-surface-dark border border-primary/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
                <div className="h-32 w-full bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30" style={{backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "16px 16px"}}></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/30 blur-3xl rounded-full"></div>
                </div>
                
                <div className="p-8 flex flex-col items-center text-center -mt-12 relative z-10">
                    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-full border-4 border-surface-light dark:border-surface-dark shadow-lg mb-6 text-primary">
                        <span className="material-symbols-outlined text-4xl filled" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-text-main dark:text-white mb-3">Tu privacidad importa</h2>
                    <p className="text-text-muted dark:text-gray-300 text-sm leading-relaxed mb-8">
                        Este es un espacio de confianza. El chat es <span className="text-primary font-bold">100% anónimo</span>. No guardamos tu información personal.
                    </p>
                    
                    <div className="w-full space-y-3">
                        <button 
                            onClick={() => setShowPrivacyGate(false)}
                            className="w-full bg-gradient-to-r from-primary to-secondary hover:brightness-110 text-white font-bold py-4 px-6 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
                        >
                            <span>Iniciar Chat Anónimo</span>
                            <span className="material-symbols-outlined text-xl">arrow_forward</span>
                        </button>
                        <button 
                            onClick={() => setView('HOME')}
                            className="w-full bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-gray-500 font-medium py-3 px-6 rounded-xl transition-colors text-sm"
                        >
                            Cancelar y salir
                        </button>
                    </div>
                </div>
                
                <div className="p-4 bg-primary-light/20 dark:bg-black/20 border-t border-primary/10 flex items-center justify-center gap-2 text-xs text-primary-dark">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    Conexión segura y confidencial
                </div>
            </div>
        </div>
      )}

      {/* Chat Interface */}
      <header className="flex-none bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md border-b border-primary/10 p-4 z-20 shadow-sm">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <button onClick={() => setView('HOME')} className="text-text-muted hover:text-primary transition-colors p-2 -ml-2 rounded-full hover:bg-primary/5">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div className="relative">
                    <div className="size-10 rounded-full bg-gradient-to-tr from-primary to-secondary p-[2px]">
                        <div className="h-full w-full rounded-full bg-surface-light dark:bg-surface-dark flex items-center justify-center overflow-hidden">
                            <span className="material-symbols-outlined text-primary text-xl">spa</span>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 size-3 bg-green-400 border-2 border-surface-light rounded-full"></div>
                </div>
                <div>
                    <h1 className="text-base font-bold text-text-main dark:text-white leading-tight">Juntas</h1>
                    <p className="text-xs text-primary font-medium flex items-center gap-1">En línea para ti</p>
                </div>
            </div>
            <button onClick={() => setView('HOME')} className="text-primary hover:text-white bg-primary/10 hover:bg-primary px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 group">
                <span className="material-symbols-outlined text-sm group-hover:text-white transition-colors">logout</span>
                Salir
            </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-6 relative bg-gray-50/50 dark:bg-background-dark">
         {/* Background pattern */}
         <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ff9e80\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')", zIndex: 0}}></div>

         <div className="flex justify-center my-4 relative z-10">
            <span className="text-[10px] font-medium text-gray-500 bg-white/60 dark:bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/10 shadow-sm">Hoy, 10:23 AM</span>
         </div>

         {messages.map((msg) => (
             <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} relative z-10`}>
                <div className={`flex flex-col gap-1 max-w-[85%] ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                    
                    {msg.type === 'agent' && (
                        <div className="flex items-end gap-2 mb-1">
                             <div className="size-6 rounded-full overflow-hidden shrink-0 border border-primary/20">
                                <img alt="Agent" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjuE-Tt1or-Uue_Yf9UZK6uHjUjf5Qp8Zrim3yxdUO-0WjoDFM6QjdG4AbGTZ2m9ZCk9OEC_CRDe-w6MRJ2HFp2_0c8rKeygflwFq96gMg2kgj1lMiu6EuRr3xjkLA-4j3HpdjxOzeyj1LdG6AownmCc0W6VMgUyvsJlZFc4EJO1brY1qUUuGZu759eCTb_7xdCMrk9N8m5UuXAEsjiWcpXN2Q2oN6sbqqhbStwCqVypeMiDBA_KIqms_XIHyu9IhchlsX4GxbAvg" />
                            </div>
                            <span className="text-[10px] text-text-muted font-medium">Consejera Ana</span>
                        </div>
                    )}

                    <div className={`px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed ${
                        msg.type === 'user' 
                        ? 'bg-gradient-to-br from-primary to-primary-dark text-white rounded-tr-none shadow-primary/20' 
                        : 'bg-white dark:bg-surface-dark text-text-main dark:text-gray-200 rounded-tl-none border border-primary/10'
                    }`}>
                        <p>{msg.text}</p>
                    </div>
                    <span className="text-[10px] text-gray-400 mx-1">{msg.time}</span>
                </div>
             </div>
         ))}

         {isTyping && (
             <div className="flex items-start gap-3 max-w-[85%] mt-2 relative z-10">
                <div className="size-8 rounded-full overflow-hidden shrink-0 border border-primary/20 relative opacity-70 bg-gray-200"></div>
                <div className="flex items-center h-10 px-4 bg-white dark:bg-surface-dark rounded-2xl rounded-tl-none border border-primary/10 shadow-sm">
                    <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                    </div>
                </div>
            </div>
         )}
         <div className="h-4"></div>
      </main>

      <footer className="flex-none p-4 bg-background-light dark:bg-background-dark z-20 w-full">
         <div className="flex items-end gap-2 bg-white dark:bg-surface-dark p-2 rounded-2xl border border-primary/20 shadow-lg shadow-primary/5">
            <button className="p-3 text-primary hover:text-primary-dark transition-colors hover:bg-primary/5 rounded-xl shrink-0">
                <span className="material-symbols-outlined">add_circle</span>
            </button>
            <div className="flex-1 py-3">
                <textarea 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                    className="w-full bg-transparent border-none text-gray-700 dark:text-white placeholder-gray-400 focus:ring-0 resize-none max-h-32 text-sm leading-relaxed scrollbar-hide" 
                    placeholder="Escribe tu mensaje aquí..." 
                    rows={1}
                ></textarea>
            </div>
            <button onClick={handleSend} className="p-3 bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl font-bold hover:brightness-110 transition-all shadow-md active:scale-95 shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined filled" style={{fontVariationSettings: "'FILL' 1"}}>send</span>
            </button>
         </div>
      </footer>
    </div>
  );
};

export default ChatScreen;
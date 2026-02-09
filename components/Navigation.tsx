import React from 'react';
import { ViewState } from '../types';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const navItems: { view: ViewState; icon: string; label: string }[] = [
    { view: 'HOME', icon: 'home', label: 'Inicio' },
    { view: 'SERVICES', icon: 'medical_information', label: 'Recursos' },
    { view: 'STORIES', icon: 'favorite', label: 'Historias' },
    { view: 'LOCATION', icon: 'location_on', label: 'Centros' },
  ];

  if (currentView === 'CHAT' || currentView === 'VOLUNTEER' || currentView === 'ADMIN') return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface-light/90 dark:bg-surface-dark/95 backdrop-blur-lg border-t border-primary/10 pb-safe pt-2">
      <div className="grid grid-cols-4 gap-1 px-2 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = currentView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => setView(item.view)}
              className={`flex flex-col items-center justify-center p-2 transition-colors duration-300 ${
                isActive 
                  ? 'text-primary' 
                  : 'text-gray-400 dark:text-gray-500 hover:text-primary/70'
              }`}
            >
              <span className={`material-symbols-outlined text-[26px] mb-1 ${isActive ? 'filled' : ''}`} style={isActive ? {fontVariationSettings: "'FILL' 1"} : {}}>
                {item.icon}
              </span>
              <span className={`text-[10px] font-medium ${isActive ? 'font-bold' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomeScreen from './screens/HomeScreen';
import ServicesScreen from './screens/ServicesScreen';
import ChatScreen from './screens/ChatScreen';
import LocationScreen from './screens/LocationScreen';
import StoriesScreen from './screens/StoriesScreen';
import PrivacyScreen from './screens/PrivacyScreen';
import VolunteerScreen from './screens/VolunteerScreen';
import AdminScreen from './screens/AdminScreen';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');

  const renderScreen = () => {
    switch (currentView) {
      case 'HOME':
        return <HomeScreen setView={setCurrentView} />;
      case 'SERVICES':
        return <ServicesScreen setView={setCurrentView} />;
      case 'CHAT':
        return <ChatScreen setView={setCurrentView} />;
      case 'LOCATION':
        return <LocationScreen setView={setCurrentView} />;
      case 'STORIES':
        return <StoriesScreen setView={setCurrentView} />;
      case 'PRIVACY':
        return <PrivacyScreen setView={setCurrentView} />;
      case 'VOLUNTEER':
        return <VolunteerScreen setView={setCurrentView} />;
      case 'ADMIN':
        return <AdminScreen setView={setCurrentView} />;
      default:
        return <HomeScreen setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-black flex justify-center items-start">
        {/* Container to mimic mobile device centered on desktop */}
        <div className="w-full max-w-md min-h-screen bg-background-light dark:bg-background-dark relative shadow-2xl overflow-hidden">
            {renderScreen()}
            <Navigation currentView={currentView} setView={setCurrentView} />
        </div>
    </div>
  );
};

export default App;
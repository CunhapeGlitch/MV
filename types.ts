export type ViewState = 
  | 'HOME' 
  | 'SERVICES' 
  | 'CHAT' 
  | 'LOCATION' 
  | 'STORIES' 
  | 'PRIVACY' 
  | 'VOLUNTEER' 
  | 'ADMIN';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  colorClass: string;
}

export interface Story {
  id: string;
  quote: string;
  author: string;
  location: string;
  time: string;
  category: 'Psicológico' | 'Médico' | 'Legal' | 'Material';
  image: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  time: string;
}

export interface VolunteerChatPreview {
  id: string;
  alias: string;
  lastMessage: string;
  time: string;
  status: 'active' | 'waiting' | 'new' | 'closed';
  unread?: boolean;
}
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg w-80 mb-4 overflow-hidden animate-fade-in">
          <div className="bg-green-500 text-white p-4 flex items-center justify-between">
            <h3 className="font-semibold">WhatsApp Chat</h3>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-4">
            <p className="text-gray-700 mb-4">
              Hello! How can we help you today? Send us a message and we'll get back to you as soon as possible.
            </p>
            
            <a 
              href="https://wa.me/971123456789" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 text-center"
            >
              Start Chat
            </a>
          </div>
        </div>
      )}
      
      <button 
        onClick={toggleChat}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default WhatsAppChat;
import React from 'react';

interface ChatToggleButtonProps {
    onClick: () => void;
}

const WhatsAppButton: React.FC<ChatToggleButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            aria-label="Abrir chat com assistente virtual"
            className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 animate-fade-in-up"
        >
            <img 
                src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" 
                alt="WhatsApp Icon" 
                className="w-full h-full object-cover rounded-full"
            />
        </button>
    );
};

export default WhatsAppButton;
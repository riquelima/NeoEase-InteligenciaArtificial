import React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            // FIX: Using React.DetailedHTMLProps to be more explicit and ensure the custom element type is correctly resolved by TypeScript.
            'dotlottie-wc': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                src: string;
                speed?: string;
                autoplay?: boolean;
                loop?: boolean;
            };
        }
    }
}

const WhatsAppButton: React.FC = () => {
    const phoneNumber = '5551989130351';
    const message = encodeURIComponent('Olá! Tenho interesse nos serviços da NeoEase e gostaria de mais informações.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco no WhatsApp"
            className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 animate-fade-in-up"
        >
            <dotlottie-wc 
                src="https://lottie.host/be169fb1-1543-4e1b-b1e6-d31defb304e0/ktcgmobv6b.lottie" 
                style={{ width: '64px', height: '64px' }} 
                speed="1" 
                autoplay 
                loop
            >
            </dotlottie-wc>
        </a>
    );
};

export default WhatsAppButton;
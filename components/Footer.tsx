
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark-bg border-t border-dark-border">
            <div className="container mx-auto px-6 py-8 max-w-7xl text-center text-medium-text relative">
                <a href="#hero" className="mb-4 inline-block">
                     <img src="https://i.imgur.com/hLWBAk1.png" alt="NeoEase Logo" className="h-24 mx-auto" />
                </a>
                <p className="mb-4">Menos esforço, mais resultado. Com IA, tudo é possível.</p>
                <p className="text-sm">&copy; {new Date().getFullYear()} NeoEase. Todos os direitos reservados.</p>
                 <div className="absolute bottom-8 right-6">
                    <a href="#/login" aria-label="Admin Login" className="text-medium-text hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
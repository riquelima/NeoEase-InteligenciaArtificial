
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark-bg border-t border-dark-border">
            <div className="container mx-auto px-6 py-8 max-w-7xl text-center text-medium-text">
                <a href="#hero" className="text-2xl font-bold mb-4 inline-block tracking-wider">
                     <span className="text-primary">NEOEASE</span>
                </a>
                <p className="mb-4">Menos esforço, mais resultado. Com IA, tudo é possível.</p>
                <p className="text-sm">&copy; {new Date().getFullYear()} NeoEase. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark-bg border-t border-dark-border">
            <div className="container mx-auto px-6 py-8 max-w-7xl text-center text-medium-text">
                <a href="#hero" className="mb-4 inline-block">
                     <img src="https://raw.githubusercontent.com/riquelima/NeoEase-InteligenciaArtificial/refs/heads/main/logoSite2.png" alt="NeoEase Logo" className="h-24 mx-auto" />
                </a>
                <p className="mb-4">Menos esforço, mais resultado. Com IA, tudo é possível.</p>
                <p className="text-sm">&copy; {new Date().getFullYear()} NeoEase. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#beneficios', label: 'Benefícios' },
        { href: '#portfolio', label: 'Projetos' },
        { href: '#processo', label: 'Processo' },
        { href: '#contato', label: 'Contato' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/80 backdrop-blur-lg border-b border-dark-border' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex justify-between items-center h-28">
                    <a href="#hero">
                        <img src="https://raw.githubusercontent.com/riquelima/NeoEase-InteligenciaArtificial/refs/heads/main/logoSite2.png" alt="NeoEase Logo" className="h-20" />
                    </a>
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                             <a key={link.href} href={link.href} className="text-medium-text hover:text-primary transition-colors duration-300 text-lg">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                     <a href="#contato" className="hidden md:inline-block bg-primary hover:bg-primary-hover text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                        Falar com Especialista
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
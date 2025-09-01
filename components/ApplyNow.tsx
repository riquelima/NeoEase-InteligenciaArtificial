import React from 'react';

const ApplyNow: React.FC = () => {
    return (
        <section id="apply-now" className="py-24 bg-dark-bg">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <div className="bg-dark-card border border-dark-border rounded-2xl p-10 md:p-16 shadow-2xl shadow-primary/10 relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-50"></div>
                     <div className="relative z-10 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Pronto para <span className="text-primary">Transformar</span> seu Negócio?
                        </h2>
                        <p className="text-lg text-medium-text mb-10 max-w-2xl mx-auto">
                            Agende uma demonstração gratuita e veja como a NeoEase pode automatizar seus processos e impulsionar seus resultados.
                        </p>
                        <a 
                            href="#contato" 
                            className="inline-block bg-primary hover:bg-primary-hover text-black px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/20 text-lg"
                        >
                            Aplicar Agora
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApplyNow;
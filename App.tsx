
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ApplyNow from './components/ApplyNow';
import WhatsAppButton from './components/WhatsAppButton';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Section = ({ id, children, className = '' }: { id: string; children: React.ReactNode; className?: string }) => (
    <section id={id} className={`py-24 scroll-mt-28 ${className}`}>
        <div className="container mx-auto px-6 max-w-7xl">
            {children}
        </div>
    </section>
);


const BenefitsSection = () => {
    const benefits = [
        "Redução de custos operacionais",
        "Aumento da capacidade de atendimento",
        "Melhora na satisfação do cliente",
        "Otimização de processos internos",
        "Tomada de decisão baseada em dados",
        "Disponibilidade 24/7 para seus clientes"
    ];
    return (
        <Section id="beneficios" className="bg-dark-bg">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Vantagens que <span className="text-primary">Impulsionam</span></h2>
                <p className="mt-4 text-lg text-medium-text max-w-3xl mx-auto">Nossas soluções de IA não são apenas tecnologia, são resultados tangíveis para o seu negócio.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start p-6 bg-dark-card border border-dark-border rounded-2xl space-x-4">
                        <CheckIcon />
                        <span className="text-lg text-light-text">{benefit}</span>
                    </div>
                ))}
            </div>
        </Section>
    );
};

const ProcessSection = () => (
    <Section id="processo">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Nosso Processo: <span className="text-secondary">Simples e Eficaz</span></h2>
            <p className="mt-4 text-lg text-medium-text max-w-3xl mx-auto">Da ideia ao resultado em 4 passos transparentes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {['Diagnóstico', 'Desenvolvimento', 'Implementação', 'Otimização'].map((step, index) => (
                <div key={index} className="bg-dark-card p-8 rounded-2xl border border-dark-border flex flex-col items-center">
                    <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 ring-8 ring-primary/5">{index + 1}</div>
                    <h3 className="text-2xl font-semibold mb-2">{step}</h3>
                    <p className="text-medium-text">Analisamos suas necessidades para criar a solução ideal e personalizada.</p>
                </div>
            ))}
        </div>
    </Section>
);

const App: React.FC = () => {
    return (
        <div className="bg-dark-bg min-h-screen">
            <Header />
            <main>
                <Hero />
                <BenefitsSection />
                <Portfolio />
                <ProcessSection />
                <ApplyNow />
                <ContactForm />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default App;
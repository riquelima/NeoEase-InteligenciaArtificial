import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
                poster="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'><rect width='1' height='1' fill='%2305140A'/></svg>"
            >
                <source src="https://cdn.pixabay.com/video/2019/08/14/26041-355469036_large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl" style={{ lineHeight: 1.3 }}>
                    Menos esforço, mais resultado. <br /> Com IA, tudo é possível.
                </h1>
                <p className="text-lg md:text-xl text-medium-text mb-8 max-w-3xl">
                    Transforme sua operação com IA em tempo recorde.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                        href="#contato" 
                        className="bg-primary hover:bg-primary-hover text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/20">
                        Quero automatizar agora
                    </a>
                    <a 
                        href="#portfolio"
                        className="border border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                        Ver projetos
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Formulário enviado! (Simulação)\n' + JSON.stringify(formData, null, 2));
        // Reset form
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    };

    return (
        <section id="contato" className="py-24 bg-dark-card/50">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Vamos Conversar?</h2>
                        <p className="mt-4 text-lg text-medium-text max-w-lg">Pronto para automatizar e escalar seu negócio? Preencha o formulário e um de nossos especialistas entrará em contato em breve.</p>
                        <p className="mt-8 text-lg font-semibold">Slogan:</p>
                        <p className="text-2xl text-primary font-medium italic">Menos esforço, mais resultado. Com IA, tudo é possível.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6 bg-dark-card p-8 rounded-2xl border border-dark-border shadow-2xl shadow-primary/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField name="name" label="Nome" value={formData.name} onChange={handleChange} required />
                            <InputField name="email" type="email" label="E-mail" value={formData.email} onChange={handleChange} required />
                            <InputField name="phone" label="Telefone" value={formData.phone} onChange={handleChange} />
                            <InputField name="company" label="Empresa" value={formData.company} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-medium-text mb-2">Sua Mensagem</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                required
                                className="w-full bg-dark-bg border border-dark-border rounded-lg p-3 text-light-text focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                                placeholder="Como podemos ajudar?"
                            />
                        </div>
                        <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-lg">
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

const InputField = ({ name, label, type = 'text', value, onChange, required = false }: { name: string, label: string, type?: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, required?: boolean }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-medium-text mb-2">{label}</label>
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full bg-dark-bg border border-dark-border rounded-lg p-3 text-light-text focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
            placeholder={label}
        />
    </div>
);


export default ContactForm;

import React, { useState, useEffect, useReducer } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ApplyNow from './components/ApplyNow';
import WhatsAppButton from './components/WhatsAppButton';
import { PROJECTS, FILTERS } from './constants';
import { Project } from './types';
import ProjectCard from './components/ProjectCard';


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

const HomePage = ({ projects }: { projects: Project[] }) => {
    return (
        <div className="bg-dark-bg min-h-screen">
            <Header />
            <main>
                <Hero />
                <BenefitsSection />
                <Portfolio projects={projects} />
                <ProcessSection />
                <ApplyNow />
                <ContactForm />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

const LoginPage = ({ onLogin }: { onLogin: (user: string, pass: string) => void }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (username === 'admin' && password === '1234') {
            onLogin(username, password);
        } else {
            setError('Usuário ou senha inválidos.');
        }
    };

    return (
        <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                 <a href="/#/" className="flex justify-center mb-8">
                    <img src="https://i.imgur.com/hLWBAk1.png" alt="NeoEase Logo" className="h-28" />
                </a>
                <form onSubmit={handleSubmit} className="bg-dark-card p-8 rounded-2xl border border-dark-border shadow-2xl shadow-primary/10 space-y-6">
                    <h1 className="text-center text-3xl font-bold text-light-text">Acesso Administrativo</h1>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-medium-text mb-2">Usuário</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full bg-dark-bg border border-dark-border rounded-lg p-3 text-light-text focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                            placeholder="admin"
                        />
                    </div>
                    <div>
                        {/* FIX: Corrected typo from cclassName to className */}
                        <label htmlFor="password" className="block text-sm font-medium text-medium-text mb-2">Senha</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full bg-dark-bg border border-dark-border rounded-lg p-3 text-light-text focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                            placeholder="••••••••"
                        />
                    </div>
                     {error && <p className="text-alert text-sm text-center">{error}</p>}
                    <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-black px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-lg">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
};

const ProjectFormModal = ({ project, onClose, onSave }: { project: Partial<Project> | null, onClose: () => void, onSave: (project: Project) => void }) => {
    const [formData, setFormData] = useState<Partial<Project>>(project || { results: [{label: '', value: ''}] });
    const isEditing = !!project?.id;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCategoryChange = (category: string) => {
        const currentCategories = formData.category || [];
        const newCategories = currentCategories.includes(category)
            ? currentCategories.filter(c => c !== category)
            : [...currentCategories, category];
        setFormData(prev => ({ ...prev, category: newCategories }));
    };

    const handleResultChange = (index: number, field: 'label' | 'value', value: string) => {
        const newResults = [...(formData.results || [])];
        newResults[index] = { ...newResults[index], [field]: value };
        setFormData(prev => ({ ...prev, results: newResults }));
    };

    const addResult = () => {
        const newResults = [...(formData.results || []), { label: '', value: '' }];
        setFormData(prev => ({ ...prev, results: newResults }));
    };

    const removeResult = (index: number) => {
        const newResults = (formData.results || []).filter((_, i) => i !== index);
        setFormData(prev => ({ ...prev, results: newResults }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData as Project);
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-dark-card border border-dark-border rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <h2 className="text-3xl font-bold text-light-text">{isEditing ? 'Editar Projeto' : 'Novo Projeto'}</h2>
                    
                    <InputField name="title" label="Título" value={formData.title || ''} onChange={handleChange} required />
                    <TextAreaField name="description" label="Descrição" value={formData.description || ''} onChange={handleChange} required />
                    <InputField name="imageUrl" label="URL da Imagem" value={formData.imageUrl || ''} onChange={handleChange} required />
                    
                    <div>
                        <label className="block text-sm font-medium text-medium-text mb-2">Categorias</label>
                        <div className="flex flex-wrap gap-2">
                            {FILTERS.categories.map(cat => (
                                <label key={cat} className="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" checked={(formData.category || []).includes(cat)} onChange={() => handleCategoryChange(cat)} className="form-checkbox bg-dark-bg border-dark-border text-primary focus:ring-primary"/>
                                    <span className="text-light-text">{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                     <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-medium-text mb-2">Setor</label>
                        <select id="industry" name="industry" value={formData.industry || ''} onChange={handleChange} required className="w-full bg-dark-bg border border-dark-border rounded-lg p-3 text-light-text focus:ring-2 focus:ring-primary focus:outline-none transition-shadow">
                            <option value="" disabled>Selecione um setor</option>
                            {FILTERS.industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-medium-text mb-2">Resultados</label>
                        { (formData.results || []).map((result, index) => (
                             <div key={index} className="flex items-center gap-2 mb-2">
                                <InputField name={`result-label-${index}`} placeholder="Rótulo" value={result.label} onChange={(e) => handleResultChange(index, 'label', e.target.value)} />
                                <InputField name={`result-value-${index}`} placeholder="Valor" value={result.value} onChange={(e) => handleResultChange(index, 'value', e.target.value)} />
                                <button type="button" onClick={() => removeResult(index)} className="text-alert p-2 rounded-full hover:bg-alert/10">&times;</button>
                             </div>
                        ))}
                        <button type="button" onClick={addResult} className="text-primary hover:underline text-sm">+ Adicionar Resultado</button>
                    </div>

                    <div className="flex justify-end gap-4 pt-4">
                        <button type="button" onClick={onClose} className="border border-dark-border text-medium-text hover:bg-dark-border/50 px-6 py-2 rounded-lg font-semibold transition-colors">Cancelar</button>
                        <button type="submit" className="bg-primary hover:bg-primary-hover text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">Salvar Projeto</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const InputField = ({ name, label, ...props }: { name: string, label?: string, [key: string]: any }) => (
    <div className="w-full">
        {label && <label htmlFor={name} className="block text-sm font-medium text-medium-text mb-2">{label}</label>}
        <input
            id={name}
            name={name}
            type="text"
            className="w-full bg-dark-bg border border-dark-border rounded-lg p-3 text-light-text focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
            {...props}
        />
    </div>
);

const TextAreaField = ({ name, label, ...props }: { name: string, label?: string, [key: string]: any }) => (
    <div>
        {label && <label htmlFor={name} className="block text-sm font-medium text-medium-text mb-2">{label}</label>}
        <textarea
            id={name}
            name={name}
            rows={4}
            className="w-full bg-dark-bg border border-dark-border rounded-lg p-3 text-light-text focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
            {...props}
        />
    </div>
);


const AdminDashboard = ({ projects, setProjects, onLogout }: { projects: Project[], setProjects: React.Dispatch<React.SetStateAction<Project[]>>, onLogout: () => void }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState<Partial<Project> | null>(null);

    const handleOpenModal = (project: Partial<Project> | null = null) => {
        setEditingProject(project);
        setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingProject(null);
    };

    const handleSaveProject = (projectToSave: Project) => {
        if (projectToSave.id) { // Editing existing project
            setProjects(prev => prev.map(p => p.id === projectToSave.id ? projectToSave : p));
        } else { // Creating new project
            const newProject = { ...projectToSave, id: `neo-${Date.now()}` };
            setProjects(prev => [newProject, ...prev]);
        }
        handleCloseModal();
    };
    
    const handleDeleteProject = (projectId: string) => {
        if (window.confirm('Tem certeza que deseja apagar este projeto?')) {
            setProjects(prev => prev.filter(p => p.id !== projectId));
        }
    };

    return (
        <div className="bg-dark-bg min-h-screen text-light-text">
            { isModalOpen && <ProjectFormModal project={editingProject} onClose={handleCloseModal} onSave={handleSaveProject} /> }
            <header className="bg-dark-card border-b border-dark-border">
                <div className="container mx-auto px-6 max-w-7xl h-28 flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Painel Administrativo</h1>
                    <button onClick={onLogout} className="border border-dark-border text-medium-text hover:bg-dark-border/50 px-6 py-2 rounded-lg font-semibold transition-colors">Sair</button>
                </div>
            </header>
            <main className="container mx-auto px-6 max-w-7xl py-12">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-semibold">Gerenciar Projetos</h2>
                    <button onClick={() => handleOpenModal()} className="bg-primary hover:bg-primary-hover text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                        Adicionar Novo Projeto
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <div key={project.id} className="relative">
                            <ProjectCard project={project} />
                            <div className="absolute top-4 right-4 flex gap-2">
                                <button onClick={() => handleOpenModal(project)} className="bg-dark-card/80 backdrop-blur-sm p-2 rounded-full text-light-text hover:text-primary transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
                                </button>
                                <button onClick={() => handleDeleteProject(project.id)} className="bg-dark-card/80 backdrop-blur-sm p-2 rounded-full text-light-text hover:text-alert transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};


const App: React.FC = () => {
    const [route, setRoute] = useState(window.location.hash || '#/');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [projects, setProjects] = useState<Project[]>(PROJECTS);

    useEffect(() => {
        const handleHashChange = () => {
            setRoute(window.location.hash || '#/');
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);
    
    useEffect(() => {
        // Persist auth state on refresh
        if (sessionStorage.getItem('isAuthenticated') === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = () => {
        setIsAuthenticated(true);
        sessionStorage.setItem('isAuthenticated', 'true');
        window.location.hash = '#/admin';
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('isAuthenticated');
        window.location.hash = '#/';
    };
    
     // Simple client-side redirect if not authenticated
    if (route === '#/admin' && !isAuthenticated) {
        window.location.hash = '#/login';
        return null; // or a loading spinner
    }

    switch (route) {
        case '#/login':
            return <LoginPage onLogin={handleLogin} />;
        case '#/admin':
            return <AdminDashboard projects={projects} setProjects={setProjects} onLogout={handleLogout} />;
        default:
            return <HomePage projects={projects} />;
    }
};

export default App;

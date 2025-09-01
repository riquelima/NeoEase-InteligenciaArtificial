import React, { useState, useMemo } from 'react';
import { PROJECTS, FILTERS } from '../constants';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

type FilterType = 'category' | 'industry';

const Portfolio: React.FC = () => {
    const [activeFilters, setActiveFilters] = useState<{ type: FilterType; value: string }[]>([]);

    const handleFilterClick = (type: FilterType, value: string) => {
        setActiveFilters(prev => {
            const existingFilterIndex = prev.findIndex(f => f.value === value);
            if (existingFilterIndex > -1) {
                return prev.filter((_, index) => index !== existingFilterIndex);
            } else {
                return [...prev, { type, value }];
            }
        });
    };
    
    const clearFilters = () => {
        setActiveFilters([]);
    };

    const filteredProjects = useMemo<Project[]>(() => {
        if (activeFilters.length === 0) {
            return PROJECTS;
        }
        return PROJECTS.filter(project => {
            return activeFilters.every(filter => {
                if (filter.type === 'category') {
                    return project.category.includes(filter.value);
                }
                if (filter.type === 'industry') {
                    return project.industry === filter.value;
                }
                return false;
            });
        });
    }, [activeFilters]);
    
    const FilterButton = ({ type, value }: { type: FilterType, value: string }) => {
        const isActive = activeFilters.some(f => f.value === value);
        return (
            <button
                onClick={() => handleFilterClick(type, value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    isActive
                        ? 'bg-primary border-primary text-black'
                        : 'bg-dark-card border-dark-border text-medium-text hover:border-primary hover:text-primary'
                }`}
            >
                {value}
            </button>
        );
    };

    return (
        <section id="portfolio" className="py-24 scroll-mt-28">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Projetos que Geram <span className="text-secondary">Resultados Reais</span></h2>
                    <p className="mt-4 text-lg text-medium-text max-w-3xl mx-auto">Explore alguns dos desafios que transformamos em sucesso para nossos clientes.</p>
                </div>

                <div className="flex flex-col gap-6 mb-12">
                    <div className="flex flex-wrap items-center gap-3">
                         <span className="font-semibold text-light-text mr-2">Tecnologias:</span>
                        {FILTERS.categories.map(cat => <FilterButton key={cat} type="category" value={cat} />)}
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="font-semibold text-light-text mr-2">Setores:</span>
                        {FILTERS.industries.map(ind => <FilterButton key={ind} type="industry" value={ind} />)}
                    </div>
                     {activeFilters.length > 0 && (
                        <button onClick={clearFilters} className="text-primary hover:underline self-start mt-2">Limpar filtros</button>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
                {filteredProjects.length === 0 && (
                    <div className="text-center col-span-full py-16 bg-dark-card rounded-2xl border border-dark-border">
                        <p className="text-xl text-medium-text">Nenhum projeto encontrado com os filtros selecionados.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;

import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="card group bg-dark-card rounded-2xl border border-dark-border shadow-lg transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
            <div className="overflow-hidden rounded-t-2xl">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.category.map(cat => (
                        <span key={cat} className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">{cat}</span>
                    ))}
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-light-text">{project.title}</h3>
                <p className="text-medium-text mb-6 leading-relaxed">{project.description}</p>
                <div className="border-t border-dark-border pt-4 flex justify-around">
                    {project.results.map(result => (
                        <div key={result.label} className="text-center">
                            <p className="text-2xl font-bold text-secondary">{result.value}</p>
                            <p className="text-sm text-medium-text">{result.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

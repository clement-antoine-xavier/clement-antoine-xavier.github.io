import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { title, description, icon: Icon, iconColor, tags, link } = project;
  
  // Staggered animation based on index
  const delay = `${100 * (index % 3)}ms`;

  return (
    <div 
      className="group bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full"
      style={{ animationDelay: delay }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-md ${iconColor.split(' ')[0].replace('text', 'bg')}/10`}>
            <Icon className={`w-6 h-6 ${iconColor}`} />
          </div>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              aria-label={`Visit ${title} project`}
            >
              <ArrowUpRight size={20} />
            </a>
          )}
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
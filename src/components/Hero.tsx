import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    if (title) {
      title.style.opacity = '0';
      title.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        title.style.transition = 'opacity 1s ease, transform 1s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 300);
    }
  }, []);

  return (
    <section className="min-h-screen pt-24 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-64 w-[600px] h-[600px] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-64 w-[600px] h-[600px] bg-teal-400/10 dark:bg-teal-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
          >
            XAVIER Clément Antoine
            <span className="block text-2xl sm:text-3xl lg:text-4xl text-blue-600 dark:text-blue-400 mt-4">
              Backend Developer & DevOps Engineer
            </span>
            <span className="block text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mt-2">
              Epitech Student 2022-2027
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
            From Réunion Island, crafting robust backend systems and streamlining deployment pipelines. 
            Passionate about scalable architecture, automation, and infrastructure as code.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center px-5 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              View my projects <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="https://github.com/xavierAntoineAssociation" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 text-base font-medium text-slate-700 dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded-lg transition-colors"
            >
              <Github size={18} className="mr-2" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
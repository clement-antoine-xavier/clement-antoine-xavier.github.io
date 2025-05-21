import React from 'react';
import { Lock, Users, Zap, Lightbulb } from 'lucide-react';

const Beliefs: React.FC = () => {
  return (
    <section id="beliefs" className="py-20 bg-white dark:bg-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 dark:from-blue-900/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What I Believe In</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            The principles and values that guide my work and shape my approach to technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Digital Sovereignty</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I believe users should have control over their data and digital lives. 
                Technology should empower people, not exploit them. I design with privacy 
                and user agency as first principles.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl">
                <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Community-Centered Design</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                The best software emerges from deep understanding of the communities 
                it serves. I prioritize inclusive, accessible design that considers diverse 
                needs and creates genuine value for users.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl">
                <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Technical Excellence</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Great user experiences are built on solid technical foundations. 
                I'm committed to writing clean, maintainable code and building 
                systems that are secure, performant, and resilient.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
                <Lightbulb className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Thoughtful Innovation</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Innovation should solve real problems, not create new ones. 
                I believe in applying technology thoughtfully, considering its 
                broader impacts and focusing on sustainable, meaningful progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beliefs;
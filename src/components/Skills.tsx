import React, { useState } from 'react';
import { skillCategories } from '../data/skills';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const selectedCategory = skillCategories.find(cat => cat.id === activeCategory) || skillCategories[0];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Skills & Tools</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            The technologies, languages, and tools I use to bring ideas to life.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 mx-2 mb-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Skills List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedCategory.skills.map((skill) => (
              <div key={skill.name} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-slate-900 dark:text-white">{skill.name}</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {skill.level}/5
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
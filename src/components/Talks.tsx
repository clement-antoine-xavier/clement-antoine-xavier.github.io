import React from 'react';
import { talks } from '../data/talks';
import { Calendar, Users } from 'lucide-react';

const Talks: React.FC = () => {
  // Sort talks by date (newest first)
  const sortedTalks = [...talks].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="talks" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Talks & Workshops</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Sharing knowledge and experiences through presentations and interactive sessions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {sortedTalks.map((talk) => (
              <div 
                key={talk.id}
                className="bg-slate-50 dark:bg-slate-900 rounded-lg shadow-sm overflow-hidden border border-slate-200 dark:border-slate-700"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        talk.type === 'talk'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                      }`}
                    >
                      {talk.type === 'talk' ? 'Talk' : 'Workshop'}
                    </span>
                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {formatDate(talk.date)}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                    {talk.title}
                  </h3>
                  
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    {talk.description}
                  </p>
                  
                  <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
                    <Users size={16} className="mr-1" />
                    <span>{talk.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talks;
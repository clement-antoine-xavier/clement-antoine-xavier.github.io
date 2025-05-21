import React from 'react';
import { Code, Cloud, Cpu, Layout } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Backend Developer and DevOps Engineer from Réunion Island, currently pursuing my studies at Epitech (2022-2027).
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="relative bg-slate-50 dark:bg-slate-900 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="absolute top-0 left-0 transform -translate-y-1/2 -translate-x-1/2">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">My Journey</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              As an Epitech student, I've developed a strong foundation in backend development 
              and DevOps practices. My journey from Réunion Island has given me a unique perspective 
              on building scalable solutions that can serve diverse, global communities.
            </p>
          </div>
          
          <div className="relative bg-slate-50 dark:bg-slate-900 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="absolute top-0 left-0 transform -translate-y-1/2 -translate-x-1/2">
              <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-3">
                <Cloud className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">My Approach</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              I specialize in building robust backend systems and automating deployment pipelines. 
              My focus is on creating scalable architectures that can handle complex business logic 
              while maintaining high performance and reliability.
            </p>
          </div>
          
          <div className="relative bg-slate-50 dark:bg-slate-900 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="absolute top-0 left-0 transform -translate-y-1/2 -translate-x-1/2">
              <div className="rounded-full bg-indigo-100 dark:bg-indigo-900/30 p-3">
                <Cpu className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Technical Focus</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              My expertise lies in containerization, CI/CD pipelines, and infrastructure as code. 
              I'm particularly interested in cloud-native technologies and microservices architecture, 
              always looking for ways to optimize system performance and reliability.
            </p>
          </div>
          
          <div className="relative bg-slate-50 dark:bg-slate-900 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="absolute top-0 left-0 transform -translate-y-1/2 -translate-x-1/2">
              <div className="rounded-full bg-amber-100 dark:bg-amber-900/30 p-3">
                <Layout className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Beyond Code</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              When I'm not optimizing backend systems or configuring deployment pipelines, 
              I enjoy participating in cybersecurity challenges and contributing to the tech 
              community. I believe in continuous learning and staying updated with the latest 
              DevOps practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
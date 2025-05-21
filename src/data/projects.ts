import { ArrowUpRight, Layers, Cloud, Database, Terminal } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: typeof ArrowUpRight;
  iconColor: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AREA - Action REAction',
    description: 'An automation platform similar to IFTTT/Zapier that enables users to connect various web services and automate workflows between them. Currently in development as part of my Epitech projects.',
    icon: Layers,
    iconColor: 'text-blue-500 dark:text-blue-400',
    tags: ['APIs', 'Automation', 'Backend Development', 'DevOps'],
  },
  {
    id: 2,
    title: 'Zourit',
    description: 'A platform that simplifies access to digital services for associations and educational institutions. Developed a comprehensive solution that streamlines organizational operations.',
    icon: Cloud,
    iconColor: 'text-teal-500 dark:text-teal-400',
    tags: ['Ruby on Rails', 'Cloud Services', 'Education Tech'],
  },
  {
    id: 3,
    title: 'Survivor Seminar',
    description: 'A real-world project simulation that challenges participants to adapt to unexpected changes and solve complex problems. Focuses on resilience and creative problem-solving in software development.',
    icon: Terminal,
    iconColor: 'text-orange-500 dark:text-orange-400',
    tags: ['Project Management', 'Agile', 'Problem Solving'],
  },
  {
    id: 4,
    title: 'Mithril Informatique Projects',
    description: 'Contributed to web applications using Ruby on Rails, focusing on performance optimization and feature implementation. Worked in a professional development environment.',
    icon: Database,
    iconColor: 'text-indigo-500 dark:text-indigo-400',
    tags: ['Ruby on Rails', 'Web Development', 'Performance Optimization'],
  }
];
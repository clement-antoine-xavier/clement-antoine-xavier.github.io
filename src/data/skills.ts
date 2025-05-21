export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    name: 'Backend & DevOps',
    skills: [
      { name: 'API Development', level: 5 },
      { name: 'Ruby on Rails', level: 4 },
      { name: 'Database Management', level: 4 },
      { name: 'CI/CD', level: 4 },
      { name: 'Microservices', level: 4 },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud & Infrastructure',
    skills: [
      { name: 'Cloud Computing', level: 4 },
      { name: 'Infrastructure as Code', level: 4 },
      { name: 'Docker', level: 4 },
      { name: 'Security Best Practices', level: 4 },
      { name: 'Version Control (Git)', level: 5 },
    ],
  },
  {
    id: 'methodologies',
    name: 'Methodologies & Practices',
    skills: [
      { name: 'Agile Development', level: 4 },
      { name: 'Quality Assurance', level: 4 },
      { name: 'Technical Documentation', level: 4 },
      { name: 'Problem Solving', level: 5 },
      { name: 'Data Analytics', level: 4 },
    ],
  }
];
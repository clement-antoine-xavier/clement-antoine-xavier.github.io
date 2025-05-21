export interface Talk {
  id: number;
  title: string;
  type: 'talk' | 'workshop';
  description: string;
  date: string;
  venue: string;
}

export const talks: Talk[] = [
  {
    id: 1,
    title: 'Pedagogical Assistant at Epitech',
    type: 'workshop',
    description: 'As an AER (Pedagogical Assistant), I create and deliver educational materials, support classroom activities, and provide academic assistance to students.',
    date: '2024-02-01',
    venue: 'Epitech La Réunion',
  },
  {
    id: 2,
    title: 'Ruby on Rails Development at Mithril Informatique',
    type: 'talk',
    description: 'Sharing insights and experiences from my time as a Ruby on Rails Developer, focusing on web application development and performance optimization.',
    date: '2023-12-01',
    venue: 'Professional Experience',
  },
  {
    id: 3,
    title: 'Survivor Seminar Leadership',
    type: 'workshop',
    description: 'Led sessions on adapting to unexpected challenges and developing resilience in software development projects.',
    date: '2024-09-01',
    venue: 'Epitech Project',
  }
];
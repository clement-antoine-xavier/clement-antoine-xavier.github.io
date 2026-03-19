export type Project = {
  title: string;
  description: string;
  stack: string;
  href: string;
};

export type BlogPost = {
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  tags: string[];
};

export const skills = [
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "UI/UX",
  "Performance",
  "Accessibility",
];

export const projects: Project[] = [
  {
    title: "Portfolio V3",
    description: "A nostalgic desktop-inspired personal site built with React95.",
    stack: "Next.js, React95, TypeScript",
    href: "#",
  },
  {
    title: "Design System",
    description: "Reusable components and tokens for consistent product UI.",
    stack: "Storybook, Figma, TypeScript",
    href: "#",
  },
  {
    title: "Data Dashboard",
    description: "Fast analytics interface with clear visual storytelling.",
    stack: "React, D3, API integration",
    href: "#",
  },
  {
    title: "Landing Generator",
    description: "Template engine for quickly shipping campaign pages.",
    stack: "Next.js, CMS, automation",
    href: "#",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Why I still sketch interfaces on paper",
    date: "2026-02-20",
    readingTime: "5 min",
    excerpt:
      "A simple habit that keeps products understandable before code ever starts.",
    tags: ["Design", "Product"],
  },
  {
    title: "Performance budgets that actually work",
    date: "2026-01-29",
    readingTime: "7 min",
    excerpt:
      "How to define realistic thresholds and keep a frontend fast over time.",
    tags: ["Web Performance", "Frontend"],
  },
  {
    title: "Shipping a tiny design system in 10 days",
    date: "2025-12-14",
    readingTime: "6 min",
    excerpt:
      "What to include first, what to postpone, and how to avoid overengineering.",
    tags: ["Design Systems", "Team"],
  },
];

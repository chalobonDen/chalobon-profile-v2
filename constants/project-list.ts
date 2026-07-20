export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Palm Connect',
    description:
      'Community management platform built with Next.js and TypeScript.',
    image: '/projects/palm-connect.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    github: '',
    demo: '',
  },
  {
    id: 2,
    title: 'Portfolio',
    description: 'Personal portfolio with GSAP animations.',
    image: '/projects/portfolio.webp',
    tags: ['Next.js', 'GSAP'],
    github: '',
    demo: '',
  },
];

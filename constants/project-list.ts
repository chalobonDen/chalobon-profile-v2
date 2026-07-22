export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Dropright',
    description:
      'Contributed to the frontend development of an existing corporate website by implementing new features, improving user interfaces, and maintaining reusable components.',
    image: '',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demo: 'https://dropright.com/',
  },
  {
    id: 2,
    title: 'Wonder Seas',
    description:
      'Enhanced and maintained an existing business website, focusing on responsive design, performance improvements, and UI consistency.',
    image: '',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demo: 'https://wonder-seas.com',
  },
  {
    id: 3,
    title: 'Education Fair',
    description:
      'Implemented interactive UI and smooth animations for an event landing page while collaborating with the development team.',
    image: '',
    tags: ['Next.js', 'GSAP'],
    demo: '',
  },
  {
    id: 4,
    title: 'OT Bar',
    description:
      'Added new frontend features and interactive animations to enhance the user experience of an existing website.',
    image: '',
    tags: ['Next.js', 'GSAP'],
    demo: '',
  },
  {
    id: 5,
    title: 'S Plus Consultant',
    description:
      'Maintained and improved the frontend of a corporate website, implementing responsive layouts and reusable UI components.',
    image: '',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demo: 'https://splusconsultant.com/',
  },
  {
    id: 6,
    title: 'TCG Thailand',
    description:
      'Contributed to the frontend development of an e-commerce platform for trading card products by implementing responsive user interfaces and maintaining existing features.',
    image: '/portfolio/tcg.png',
    tags: ['Nuxt.js', 'Vue.js', 'JavaScript'],
    demo: 'https://www.tcgthailand.com/',
  },
  {
    id: 7,
    title: 'Fan Delivery',
    description:
      'Developed and enhanced frontend features for a delivery platform, focusing on responsive layouts, reusable components, and API integration.',
    image: '/portfolio/fan.png',
    tags: ['Next.js', 'React', 'TypeScript'],
    demo: 'https://fandelivery.net/',
  },
  {
    id: 8,
    title: 'Jetlag',
    description:
      'Maintained and improved an existing web application by implementing new features, fixing UI issues, and collaborating with the development team.',
    image: '/portfolio/jetlag.png',
    tags: ['Nuxt.js', 'Vue.js'],
    demo: 'https://www.jetlagapplication.com/',
  },
  {
    id: 9,
    title: 'GameConnext',
    description:
      'Contributed to the frontend development of a gaming platform with responsive interfaces and reusable UI components.',
    image: '/portfolio/gameconnext.png',
    tags: ['Nuxt.js', 'Vue.js'],
    demo: 'http://www.gameconnext.com/',
  },
];

import { FaReact } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiNextdotjs, SiNuxt } from 'react-icons/si';
import { IoLogoVue } from 'react-icons/io5';
import { SiShadcnui } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { BiLogoTypescript } from 'react-icons/bi';
import { FigmaIcon } from '@/components/icon/FigmaIcon';

export const skills = [
  // Core Language
  {
    name: 'TypeScript',
    icon: BiLogoTypescript,
    color: 'text-blue-500',
  },
  {
    name: 'JavaScript',
    icon: IoLogoJavascript,
    color: 'text-yellow-400',
  },

  // Framework
  {
    name: 'React',
    icon: FaReact,
    color: 'text-sky-500',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: 'text-black',
  },
  {
    name: 'Vue',
    icon: IoLogoVue,
    color: 'text-emerald-500',
  },
  {
    name: 'Nuxt',
    icon: SiNuxt,
    color: 'text-green-500',
  },
  {
    name: 'React Native',
    icon: TbBrandReactNative,
    color: 'text-cyan-500',
  },

  // UI / Design
  {
    name: 'Shadcn/ui',
    icon: SiShadcnui,
    color: 'text-black dark:text-white',
  },
  {
    name: 'Figma',
    icon: FigmaIcon,
    color: 'text-zinc-700',
  },
];

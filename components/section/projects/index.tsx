'use client';

import { useRef } from 'react';

import ProjectCard from './project-card';
// import { useProjectAnimation } from './use-project-animation';
import { projects } from '@/constants/project-list';
import { useProjectAnimation } from '@/hook/use-project-animation';
import { portfoliosData } from '@/constants/portfolio';

export default function ProjectSection() {
  const container = useRef<HTMLDivElement>(null);

  useProjectAnimation(container);

  return (
    <section id='project' className='py-32'>
      <div className='container'>
        <div className='mb-16 text-center'>
          <p className='text-primary'>Portfolio</p>

          <h2 className='mt-2 text-5xl font-bold'>Featured Projects</h2>
        </div>

        <div
          ref={container}
          className='grid gap-8 md:grid-cols-2 xl:grid-cols-3'
        >
          {portfoliosData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

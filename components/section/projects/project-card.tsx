'use client';

import { Project } from '@/constants/project-list';
import Image from 'next/image';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className='project-card group rounded-3xl border bg-card overflow-hidden'>
      <div className='relative aspect-video overflow-hidden'>
        {/* <Image
          src={project.image}
          alt={project.title}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-110'
        /> */}
      </div>

      <div className='space-y-4 p-6'>
        <h3 className='text-xl font-bold'>{project.title}</h3>

        <p className='text-muted-foreground'>{project.description}</p>

        <div className='flex flex-wrap gap-2'>
          {project.tags.map(tag => (
            <span
              key={tag}
              className='rounded-full bg-primary/10 px-3 py-1 text-sm'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

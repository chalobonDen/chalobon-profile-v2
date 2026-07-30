'use client';

import { Badge } from '@/components/ui/badge';
import { PortfolioStatus } from '@/enums/portfolio';
import { Portfolio } from '@/types/portfolio';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: Portfolio;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations('portfolioSection');
  const tStatus = useTranslations('status');

  return (
    <div className='group h-96 [perspective:1200px]'>
      <div className='relative h-full w-full rounded-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
        {/* Front */}
        <div className='absolute inset-0 overflow-hidden rounded-xl border bg-card [backface-visibility:hidden]'>
          <div className='relative h-full w-full'>
            {project.image ? (
              // <Image
              //   src={project.image}
              //   alt={t(`${project.translationKey}.title`)}
              //   fill
              //   sizes='800px'
              //   className='object-cover'
              //   priority
              // />
              <div className='relative h-56 overflow-hidden'>
                <Image
                  src={project.image}
                  alt={t(`${project.translationKey}.title`)}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 400px'
                />
              </div>
            ) : (
              <div className='flex h-full w-full items-center justify-center bg-muted'>
                <span className='text-lg font-semibold text-muted-foreground'>
                  {t(`${project.translationKey}.title`)}
                </span>
              </div>
            )}

            <div className='absolute inset-0 bg-black/50' />

            <div className='absolute bottom-0 w-full p-6 bg-white h-40'>
              <h3 className='text-base font-bold text-foreground'>
                {t(`${project.translationKey}.title`)}
              </h3>
              <p className='text-xs'>
                {t(`${project.translationKey}.description`)}
              </p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className='absolute inset-0 flex flex-col rounded-xl border bg-card p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
          <h3 className='mb-3 text-xl font-bold'>
            {t(`${project.translationKey}.title`)}{' '}
          </h3>

          {project.status === PortfolioStatus.CLOSE && (
            <Badge className='absolute top-6 right-6 bg-accent/30 text-muted-foreground'>
              {tStatus(project.status)}
            </Badge>
          )}

          {t
            .raw(`${project.translationKey}.responsibilities`)
            .map((item: string) => (
              <li key={item} className='text-xs'>
                {item}
              </li>
            ))}

          <div className='mt-4 flex flex-wrap gap-2'>
            {project.techStack.map(tech => (
              <span
                key={tech}
                className='rounded-full bg-primary/10 px-3 py-1 text-xs'
              >
                {tech}
              </span>
            ))}
          </div>

          {project.link && (
            <div className='mt-auto flex gap-3'>
              <Link
                href={project.link}
                target='_blank'
                className='text-foreground text-xs hover:underline'
              >
                {project.link}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

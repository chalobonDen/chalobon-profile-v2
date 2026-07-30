'use client';

import type { FC } from 'react';
import { useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { Experience } from '@/types/experience';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

interface IExperienceProps {
  data: Experience[];
}

const Experience: FC<IExperienceProps> = ({ data }) => {
  const t = useTranslations();

  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // animate vertical line
      gsap.fromTo(
        lineRef.current,
        {
          height: 0,
        },
        {
          height: '100%',
          ease: 'none',

          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        },
      );

      // animate item
      gsap.fromTo(
        '.timeline-item',
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.25,
          duration: 0.8,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          },
        },
      );
    }, containerRef);

    gsap.utils.toArray<HTMLElement>('.timeline-item').forEach(item => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from(item.querySelector('.exp-year'), {
        opacity: 0,
        y: 20,
        duration: 0.3,
      })
        .from(
          item.querySelector('.exp-title'),
          {
            opacity: 0,
            y: 20,
            duration: 0.35,
          },
          '-=0.15',
        )
        .from(
          item.querySelector('.exp-position'),
          {
            opacity: 0,
            y: 20,
            duration: 0.35,
          },
          '-=0.15',
        )
        .from(
          item.querySelectorAll('.exp-detail li'),
          {
            opacity: 0,
            x: -15,
            stagger: 0.12,
            duration: 0.25,
          },
          '-=0.1',
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id='experience' ref={containerRef} className='bg-black-100 py-20'>
      <div className='container'>
        <h2 className='mt-5 text-3xl font-bold md:text-4xl mb-10'>
          {t('experience')}
        </h2>

        <div className='relative mx-auto max-w-4xl'>
          {/* background line */}
          <div className='absolute left-5 top-0 h-full w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-1/2' />

          {/* animated line */}
          <div
            ref={lineRef}
            className='absolute left-5 top-0 w-0.5 bg-primary md:left-1/2 md:-translate-x-1/2'
          />

          {data.map((work, index) => (
            <div
              key={index}
              className='timeline-item relative mb-12 flex md:justify-between'
            >
              {/* dot */}
              <div className='absolute left-2.5 z-10 h-5 w-5 rounded-full bg-primary shadow-lg md:left-1/2 md:-translate-x-1/2' />

              {/* content */}
              <div
                className={cn(
                  'ml-12 md:ml-0 w-full md:w-[45%]',
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto',
                )}
              >
                <p className='exp-year text-sm text-primary'>{work.year}</p>

                {work.webpage ? (
                  <Link
                    className='exp-title mt-2 text-xl font-bold hover:underline'
                    href={work.webpage}
                  >
                    {work.name}
                  </Link>
                ) : (
                  <h2 className='exp-title mt-2 text-xl font-bold'>
                    {work.name}
                  </h2>
                )}

                <p className='exp-position mt-1 font-semibold'>
                  {work.position}
                </p>

                <ul className='exp-detail mt-4 list-disc space-y-1 pl-5 text-sm text-black-950/80'>
                  {work.detail?.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

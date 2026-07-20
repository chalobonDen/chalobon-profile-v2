'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations();
  const scope = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('[data-hero="badge"]', { opacity: 0, y: 16, duration: 0.5 })
        .from(
          '[data-hero="line"]',
          { opacity: 0, y: 30, duration: 0.7, stagger: 0.12 },
          '-=0.2',
        )
        .from(
          '[data-hero="tagline"]',
          { opacity: 0, y: 20, duration: 0.6 },
          '-=0.3',
        )
        .from(
          '[data-hero="cta"]',
          { opacity: 0, y: 16, duration: 0.5, stagger: 0.1 },
          '-=0.3',
        )
        .from(
          '[data-hero="avatar"]',
          {
            opacity: 0,
            scale: 0.85,
            y: 20,
            duration: 0.8,
            ease: 'back.out(1.5)',
          },
          '-=0.9',
        );

      gsap.to('[data-hero="avatar-wrap"]', {
        y: -14,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
      gsap.to('[data-hero="blob"]', {
        rotate: 360,
        duration: 24,
        ease: 'none',
        repeat: -1,
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id='top'
      ref={scope}
      className='relative overflow-hidden px-5 pt-28 pb-16 sm:pt-32 md:pb-24'
    >
      <div className='mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1.5fr_1fr]'>
        <div className='order-2 md:order-1'>
          <span
            data-hero='badge'
            className='inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground'
          >
            <Sparkles className='size-3.5 text-primary' />
            Hello
          </span>

          <h1 className='mt-5 font-display text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl'>
            <span data-hero='line' className='block'>
              Chalobon Denninnart
            </span>
            <span data-hero='line' className='block text-primary'>
              Frontend Developer
            </span>
          </h1>

          <p
            data-hero='tagline'
            className='mt-5 max-w-md text-base leading-relaxed text-muted-foreground text-pretty'
          >
            {`I'm a middle-level Frontend
              Developer skilled in React, Next.js, and
              TypeScript. I have experience building
              e-commerce and marketplace
              platforms, as well as leading PoC
              projects to evaluate and select
              libraries for scalable solutions.`}
          </p>

          <div className='mt-8 flex flex-wrap items-center gap-3'>
            <a
              data-hero='cta'
              href='#projects'
              className='inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:scale-105'
            >
              ctaProjects
            </a>
            <a
              data-hero='cta'
              href='#contact'
              className='inline-flex h-11 items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-medium transition-colors hover:bg-secondary'
            >
              ctaContact
            </a>
          </div>
        </div>

        <div className='order-1 md:order-2 flex justify-center md:justify-end'>
          <div data-hero='avatar-wrap' className='relative'>
            <div
              data-hero='blob'
              aria-hidden='true'
              className='absolute -inset-6 -z-10 rounded-[42%_58%_60%_40%/45%_45%_55%_55%] bg-accent'
            />
            <div
              data-hero='avatar'
              className='relative size-56 overflow-hidden rounded-[42%_58%_60%_40%/45%_45%_55%_55%] border-4 border-card bg-secondary shadow-lg sm:size-64'
            >
              <Image
                src='https://pbs.twimg.com/media/HNT79RsbcAAt2Me?format=jpg&name=medium'
                alt='profile-image'
                fill
                sizes='256px'
                className='object-cover'
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto mt-14 flex max-w-5xl justify-center md:justify-start'>
        <span className='flex items-center gap-2 text-xs text-muted-foreground'>
          <ArrowDown className='size-4 animate-bounce' />
          about
        </span>
      </div>
    </section>
  );
}

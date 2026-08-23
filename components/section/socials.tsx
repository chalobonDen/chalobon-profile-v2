'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { FaGithubAlt, FaLinkedinIn, FaGitlab } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Socials() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Reveal
      gsap.from('[data-social]', {
        opacity: 0,
        y: 30,
        scale: 0.5,
        stagger: 0.15,
        duration: 0.6,
        ease: 'back.out(2)',
      });

      // Floating
      gsap.to('[data-social]', {
        y: -6,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.2,
          from: 'start',
        },
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className='mt-8 flex items-center gap-4'>
      <a
        href='https://github.com/chalobonDen'
        target='_blank'
        data-social
        className='group flex h-12 w-12 items-center justify-center rounded-2xl border bg-card transition-colors hover:bg-primary hover:text-white'
      >
        <FaGithubAlt className='text-xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125' />
      </a>

      <a
        href='https://gitlab.com/chalobon129'
        target='_blank'
        data-social
        className='group flex h-12 w-12 items-center justify-center rounded-2xl border bg-card transition-colors hover:bg-primary hover:text-white'
      >
        <FaGitlab className='text-xl transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125' />
      </a>

      <a
        href='mailto:chalobon0815@gmail.com'
        data-social
        className='group flex h-12 w-12 items-center justify-center rounded-2xl border bg-card transition-colors hover:bg-primary hover:text-white'
      >
        <MdEmail className='text-xl transition-transform duration-300 group-hover:scale-125' />
      </a>
    </section>
  );
}

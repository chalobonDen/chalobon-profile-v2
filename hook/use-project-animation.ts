'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function useProjectAnimation(
  container: React.RefObject<HTMLDivElement | null>,
) {
  useGSAP(
    () => {
      gsap.from('.project-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        },
      });
    },
    { scope: container },
  );
}

'use client';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { skills } from '@/constants/skills';
import { Card, CardContent } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const SkillSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const iconRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRefs.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleHover = (index: number) => {
    const card = cardRefs.current[index];
    const icon = iconRefs.current[index];

    if (!card || !icon) return;

    gsap.to(card, {
      y: -8,
      scale: 1.03,
      duration: 0.3,
      ease: 'power2.out',
    });

    gsap.to(icon, {
      rotate: 10,
      scale: 1.2,
      duration: 0.3,
      ease: 'back.out(2)',
    });
  };

  const handleLeave = (index: number) => {
    const card = cardRefs.current[index];
    const icon = iconRefs.current[index];

    if (!card || !icon) return;

    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });

    gsap.to(icon, {
      rotate: 0,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <section ref={sectionRef} id='skills' className='bg-black-100 py-20'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='mt-5 text-3xl font-bold md:text-4xl mb-10'>Skill</h2>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {skills.map(({ name, icon: Icon, color }, index) => {
            return (
              <Card
                key={name}
                ref={el => {
                  if (el) cardRefs.current[index] = el;
                }}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleLeave(index)}
                className='group cursor-pointer py-2 transition-shadow hover:shadow-lg'
              >
                <CardContent className='flex items-center gap-2 px-3'>
                  <Icon
                    className={`size-6 shrink-0 transition-transform duration-300 group-hover:scale-110 ${color}`}
                  />

                  <span className='text-xs font-semibold'>{name}</span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;

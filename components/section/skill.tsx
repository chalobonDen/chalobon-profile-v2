import { FaReact } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiNextdotjs, SiNuxt } from 'react-icons/si';
import { IoLogoVue } from 'react-icons/io5';
import { SiShadcnui } from 'react-icons/si';
import { Card, CardContent } from '../ui/card';

const skills = [
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
    name: 'Nuxt',
    icon: SiNuxt,
    color: 'text-green-500',
  },
  {
    name: 'Vue',
    icon: IoLogoVue,
    color: 'text-emerald-500',
  },
  {
    name: 'React Native',
    icon: TbBrandReactNative,
    color: 'text-cyan-500',
  },
  {
    name: 'Shadcn/ui',
    icon: SiShadcnui,
    color: 'text-zinc-700',
  },
];

const SkillSection = () => {
  return (
    <section id='skill' className='bg-black-100 py-20'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='mt-5 text-4xl font-bold md:text-5xl mb-10'>Skill</h2>

        <div className='grid grid-cols-4 gap-4'>
          {skills.map(({ name, icon: Icon, color }, index) => {
            return (
              <Card
                key={index}
                // className='border rounded-lg px-2 py-2 flex items-center space-x-2'
              >
                <CardContent className='flex items-center space-x-2'>
                  <Icon
                    className={`text-2xl transition-transform duration-300 group-hover:scale-110 ${color}`}
                  />

                  <span className='text-sm font-semibold'>{name}</span>
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

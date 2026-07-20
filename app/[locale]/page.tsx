import { Navbar } from '@/components/layout/navbar';

import { HeroSection } from '@/components/section/hero-section';

export default async function Home() {
  return (
    <div className='container'>
      <Navbar />
      <div className='mt-20'>
        <HeroSection />
      </div>
      {/* <Projects /> */}
    </div>
  );
}

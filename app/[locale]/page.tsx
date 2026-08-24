import { Navbar } from "@/components/layout/navbar";
import EducationSection from "@/components/section/education";
import ExperienceSection from "@/components/section/experience";

import { HeroSection } from "@/components/section/hero-section";
import ProjectSection from "@/components/section/projects";
import SkillSection from "@/components/section/skill";
import { experience } from "@/constants/experience";

export default async function Home() {
  return (
    <div
    // className='container'
    >
      <div className="mt-20">
        <HeroSection />
      </div>
      <SkillSection />
      <ExperienceSection data={experience} />
      <ProjectSection />
      <EducationSection />
    </div>
  );
}

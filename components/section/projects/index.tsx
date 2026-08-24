"use client";

import { useRef } from "react";

import ProjectCard from "./project-card";
// import { useProjectAnimation } from './use-project-animation';
import { projects } from "@/constants/project-list";
import { useProjectAnimation } from "@/hook/use-project-animation";
import { portfoliosData } from "@/constants/portfolio";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ProjectSection() {
  const container = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  useProjectAnimation(container);

  return (
    <section id="project" className="py-32">
      <div className="container">
        <div className="mb-16 text-center">
          <p className="text-primary">{t("portfolio")}</p>

          <h2 className="mt-2 text-5xl font-bold">Selected Projects</h2>
        </div>

        <Link
          href="/projects"
          className="flex justify-end mb-2 hover:underline text-primary"
        >
          {t("more")}
        </Link>

        <div
          ref={container}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {portfoliosData.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

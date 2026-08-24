import ProjectCard from "@/components/section/projects/project-card";
import { portfoliosData } from "@/constants/portfolio";
import { getTranslations } from "next-intl/server";

const ProjectPage = async () => {
  const t = await getTranslations();

  return (
    <div>
      <section className="mt-20">
        <div className="container">
          <div className="mb-16 text-center">
            <p className="text-primary">{t("portfolio")}</p>

            <h2 className="mt-2 text-5xl font-bold">Selected Projects</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {portfoliosData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;

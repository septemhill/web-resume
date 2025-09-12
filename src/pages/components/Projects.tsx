import { useTranslation } from "next-i18next";

interface ProjectProps {
  name: string;
  techStack: string;
  description: string;
  projectUrl?: string;
  githubUrl?: string;
}

const Project: React.FC<ProjectProps> = ({ name, techStack, description, projectUrl, githubUrl }) => {
  const { t } = useTranslation("common");
  return (
    <div>
      <div className="flex items-center gap-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="mt-0.5 space-x-4">
          {projectUrl && <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{t("projects.projectLink")}</a>}
          {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{t("projects.githubRepo")}</a>}
        </div>
      </div>
      <p className="mt-2">{description}</p>
      <p className="text-sm text-gray-700 mt-2"><strong>{techStack}</strong></p>
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslation("common");

  const projectsData = t("projects.items", { returnObjects: true }) as ProjectProps[] | undefined;

  const projects = Array.isArray(projectsData) ? projectsData : [];

  return (
    <section id="projects">
      <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2">{t("projects.title")}</h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
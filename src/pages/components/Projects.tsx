import { useTranslation } from "next-i18next";

interface ProjectProps {
  name: string;
  techStack: string;
  description: string;
  contributions: string[];
  projectUrl?: string;
  githubUrl?: string;
}

const Project: React.FC<ProjectProps> = ({ name, techStack, description, contributions, projectUrl, githubUrl }) => {
  const { t } = useTranslation("common");
  return (
    <div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">
        <strong>{t("projects.techUsed")}</strong> {techStack}
      </p>
      <p className="mt-2">{description}</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        {contributions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="mt-2 space-x-4">
        {projectUrl && <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{t("projects.projectLink")}</a>}
        {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{t("projects.githubRepo")}</a>}
      </div>
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslation("common");

  const projectData = t("projects", { returnObjects: true }) as any;
  const projects: ProjectProps[] = Array.isArray(projectData)
    ? projectData
    : [
        {
          name: projectData.projectName,
          techStack: projectData.techStack,
          description: projectData.description,
          contributions: projectData.contributions,
          projectUrl: "[專案連結]", // 您可以在此處或 common.json 中管理 URL
          githubUrl: "[GitHub Repo 連結]", // 您可以在此處或 common.json 中管理 URL
        },
      ];

  return (
    <section id="projects">
      <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2">{t("projects.title")}</h2>
      <div className="space-y-6">
        {projects.map((proj, index) => (
          <Project key={index} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
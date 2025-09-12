import { useTranslation } from "next-i18next";

interface SkillProps {
  name: string;
  level: number; // 0-100
}

const SkillBar: React.FC<SkillProps> = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-800">{name}</span>
        <span className="text-sm font-medium text-gray-800">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { t } = useTranslation("common");

  const skillsData = t("skills.items", { returnObjects: true }) as SkillProps[] | undefined;

  const skills = Array.isArray(skillsData) ? skillsData : [];

  return (
    <section id="skills">
      <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2">{t("skills.title")}</h2>
      {skills.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </section>
  );
};

export default Skills;
import { useTranslation } from "next-i18next";

interface SkillProps {
  name: string;
  level: number; // 0-100
}

interface SkillCategoryProps {
  name: string;
  items: SkillProps[];
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
          className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { t } = useTranslation("common");

  const skillCategories = t("skills.categories", { returnObjects: true }) as SkillCategoryProps[] | undefined;

  const categories = Array.isArray(skillCategories) ? skillCategories : [];

  return (
    <section id="skills">
      <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2">{t("skills.title")}</h2>
      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.name}>
            <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
            {category.items.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
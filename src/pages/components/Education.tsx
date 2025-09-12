import { useTranslation } from "next-i18next";

interface EducationItemProps {
  school: string;
  date: string;
  degree: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ school, date, degree }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold">{school}</h3>
      <p className="text-sm text-gray-700">{date}</p>
      <p>{degree}</p>
    </div>
  );
};

const Education = () => {
  const { t } = useTranslation("common");

  const educationData = t("education.items", { returnObjects: true }) as EducationItemProps[] | undefined;

  const educations = Array.isArray(educationData) ? educationData : [];

  return (
    <section id="education">
      <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2">{t("education.title")}</h2>
      <div className="space-y-4">
        {educations.map((edu, index) => (
          <EducationItem
            key={index}
            {...edu}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
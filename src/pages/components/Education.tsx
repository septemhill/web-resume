import { useTranslation } from "next-i18next";

const Education = () => {
  const { t } = useTranslation("common");

  return (
    <section id="education">
      <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2">{t("education.title")}</h2>
      <div>
        <h3 className="text-xl font-semibold">{t("education.school")}</h3>
        <p className="text-sm text-gray-700">{t("education.date")}</p>
        <p>{t("education.degree")}</p>
      </div>
    </section>
  );
};

export default Education;
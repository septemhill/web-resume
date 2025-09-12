import { useTranslation } from "next-i18next";

const Summary = () => {
  const { t } = useTranslation("common");

  return (
    <section id="summary">
      <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2">
        {t("summary.title")}
      </h2>
      <p>{t("summary.content")}</p>
    </section>
  );
};

export default Summary;
import { useTranslation } from "next-i18next";

interface SummaryItemProps {
  title: string;
  description: string;
}

const SummaryItem: React.FC<SummaryItemProps> = ({ title, description }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-gray-700">{description}</p>
    </div>
  );
};

const Summary = () => {
  const { t } = useTranslation("common");

  const summaryData = t("summary.items", { returnObjects: true }) as SummaryItemProps[] | undefined;

  const summaries = Array.isArray(summaryData) ? summaryData : [];

  return (
    <section id="summary">
      <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2">
        {t("summary.title")}
      </h2>
      <div className="space-y-4">
        {summaries.map((item, index) => (
          <SummaryItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Summary;
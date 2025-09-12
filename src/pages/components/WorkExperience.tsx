import { useTranslation } from "next-i18next";

interface JobProps {
  company: string;
  title: string;
  period: string;
  duties: string[];
}

const Job: React.FC<JobProps> = ({ company, title, period, duties }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold">{`${company} - ${title}`}</h3>
      <p className="text-sm text-gray-600">{period}</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        {duties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
    </div>
  );
};

const WorkExperience = () => {
  const { t } = useTranslation("common");

  // 從 i18n 檔案中讀取工作經歷資料
  // 注意：t 函數的 { returnObjects: true } 選項可以取得整個物件或陣列
  const jobData = t("workExperience", { returnObjects: true }) as any;
  const jobs: JobProps[] = Array.isArray(jobData)
    ? jobData
    : [
        {
          company: jobData.company,
          title: jobData.position,
          period: jobData.date,
          duties: jobData.responsibilities,
        },
      ];

  return (
    <section id="work-experience">
      <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2">
        {t("workExperience.title")}
      </h2>
      <div className="space-y-6">
        {jobs.map((job, index) => (
          <Job key={index} {...job} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
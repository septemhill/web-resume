import { useTranslation } from "next-i18next";

interface JobProps {
  company: string;
  title: string; // 新增的職位標題
  position: string; // 原本的 title，代表職位
  period: string;
  duties: string[];
}

const Job: React.FC<JobProps> = ({ company, title, position, period, duties }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-md text-gray-700">{`${company} - ${position}`}</p>
      <p className="text-sm text-gray-500 mt-1">{period}</p>
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

  // 從 i18n 檔案中讀取工作經歷陣列
  // t 函數的 { returnObjects: true } 選項可以取得整個物件或陣列
  const jobsOrJob = t("workExperience.jobs", { returnObjects: true });

  // 確保 jobsData 永遠是陣列
  const jobsData = Array.isArray(jobsOrJob) ? jobsOrJob : (typeof jobsOrJob === 'object' && jobsOrJob !== null ? [jobsOrJob] : []);

  const jobs: JobProps[] =
    jobsData.length > 0
      ? jobsData.map((job: any) => ({
          title: job.title,
          company: job.company,
          position: job.position,
          period: job.date,
          duties: job.responsibilities,
        }))
      : [];

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
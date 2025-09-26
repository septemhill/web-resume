import { useTranslation } from "next-i18next";

// 從 i18n JSON 檔案讀取的原始資料結構
interface JobData {
  title: string;
  company: string;
  position: string;
  date: string;
  responsibilities: string[];
  techStack?: string[];
}
interface JobProps {
  company: string;
  position: string; // 原本的 title，代表職位
  period: string;
  duties: string[];
  techStack?: string[];
}

const Job: React.FC<JobProps> = ({ company, position, period, duties, techStack }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold">{company}</h3>
      <p className="text-md text-gray-800">{position}</p>
      <p className="text-sm text-gray-600 mt-1">{period}</p>
      <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
        {duties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
      {techStack && techStack.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      )}
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
      ? jobsData.map((job: JobData) => ({
          company: job.company,
          position: job.position,
          period: job.date,
          duties: job.responsibilities,
          techStack: job.techStack,
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
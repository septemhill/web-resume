import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Education from "./components/Education";
import PersonalInfo from "./components/PersonalInfo";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  const { t } = useTranslation("common");
  const router = useRouter();

  const handleLocaleChange = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      <div className="container mx-auto flex max-w-4xl justify-end p-4 sm:p-8">
        <button onClick={() => handleLocaleChange('en')} className={`px-2 py-1 ${router.locale === 'en' ? 'font-bold' : ''}`}>
          {t('language.switch_to_en')}
        </button>
        <button onClick={() => handleLocaleChange('zh-TW')} className={`px-2 py-1 ${router.locale === 'zh-TW' ? 'font-bold' : ''}`}>
          {t('language.switch_to_zh-TW')}
        </button>
      </div>
      <main className="container mx-auto max-w-4xl p-4 sm:p-8">
        <div className="space-y-10 rounded-lg bg-white p-6 shadow-md sm:p-10">
          <PersonalInfo />
          <WorkExperience />
          <Projects />
          <Education />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale?: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
      ])),
    },
  };
}

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import Education from "./components/Education";
import PersonalInfo from "./components/PersonalInfo";
import Projects from "./components/Projects";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  const { t, i18n } = useTranslation("common");
  const name = t('personalInfo.name');
  const title = t('personalInfo.title');

  const pageTitle = t('metadata.title', { name });
  const pageDescription = t('metadata.description', { name, title });

  const handleLocaleChange = (locale: string) => {
    i18n.changeLanguage(locale);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster position="top-left" />
      <div className="container mx-auto flex max-w-4xl justify-end p-4 sm:p-8">
        <button onClick={() => handleLocaleChange('en')} className={`px-2 py-1 transition-colors ${i18n.language === 'en' ? 'font-bold text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}>
          {t('language.switch_to_en')}
        </button>
        <button onClick={() => handleLocaleChange('zh-TW')} className={`px-2 py-1 transition-colors ${i18n.language.startsWith('zh') ? 'font-bold text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}>
          {t('language.switch_to_zh-TW')}
        </button>
      </div>
      <main className="container mx-auto max-w-4xl p-4 sm:p-8">
        <div className="space-y-10 rounded-lg bg-white p-6 shadow-md sm:p-10 text-gray-800">
          <PersonalInfo />
          <Summary />
          <WorkExperience />
          <Skills />
          <Projects />
          <Education />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale?: string }) {
  // With `output: 'export'`, we need to manually load all translations
  // on the initial page load so that the client-side `i18n.changeLanguage`
  // can work without needing to fetch new data.
  const currentLocale = locale ?? 'en';
  const props_en = await serverSideTranslations('en', ['common']);
  const props_zh = await serverSideTranslations('zh-TW', ['common']);

  return {
    props: {
      // Manually merge the translations from all locales into one props object.
      _nextI18Next: {
        initialI18nStore: {
          ...(props_en._nextI18Next?.initialI18nStore ?? {}),
          ...(props_zh._nextI18Next?.initialI18nStore ?? {}),
        },
        initialLocale: currentLocale,
        userConfig: props_en._nextI18Next?.userConfig ?? props_zh._nextI18Next?.userConfig ?? null,
      },
    },
  };
}

import { useTranslation } from "next-i18next";

const PersonalInfo = () => {
  const { t } = useTranslation("common");

  // 將您的個人連結集中管理
  const socialLinks = [
    {
      name: t("personalInfo.email"),
      url: "mailto:[你的Email]",
    },
    {
      name: t("personalInfo.linkedin"),
      url: "[你的LinkedIn]",
    },
    {
      name: t("personalInfo.github"),
      url: "[你的GitHub]",
    },
    {
      name: t("personalInfo.website"),
      url: "[你的個人網站]",
    },
  ];

  return (
    <section id="personal-info" className="text-center">
      <h1 className="text-4xl font-bold mb-2">{t("personalInfo.name")}</h1>
      <p className="text-lg text-gray-600 mb-4">{t("personalInfo.title")}</p>
      <div className="flex justify-center gap-4 mb-4">
        {socialLinks.map((link, index) => (
          <>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {link.name}
            </a>
            {index < socialLinks.length - 1 && <span>&middot;</span>}
          </>
        ))}
      </div>
      <p className="max-w-2xl mx-auto">{t("personalInfo.summary")}</p>
    </section>
  );
};

export default PersonalInfo;
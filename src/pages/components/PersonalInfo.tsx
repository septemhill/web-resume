import { useTranslation } from "next-i18next";
// import React, { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

// --- Icon Components (Consider moving to a separate file if they grow) ---
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6.1 0-1.3-.5-2.4-1.3-3.2.1-.3.5-1.5-.1-3.2 0 0-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1c-.6 1.7-.2 2.9-.1 3.2-.8.8-1.3 1.9-1.3 3.2 0 4.7 2.7 5.8 5.5 6.1-.6.5-.9 1.2-.9 2.2v3.5" />
  </svg>
);

// const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//   </svg>
// );

// const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <circle cx="12" cy="12" r="10" />
//     <line x1="2" y1="12" x2="22" y2="12" />
//     <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
//   </svg>
// );

const PersonalInfo = () => {
  const { t } = useTranslation("common");
  
  const handleCopy = async (textToCopy: string, label: string) => {
    // Special handling for phone
    if (label === t("personalInfo.phone")) {
      toast.error(t("toast.phoneCopyNotSupported"));
      return;
    }

    // 檢查剪貼簿 API 是否可用
    if (!navigator.clipboard) {
      console.error("Clipboard API not available. This might be due to an insecure context (non-HTTPS).");
      toast.error(t("toast.copyNotSupported"));
      return;
    }

    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success(t("toast.copied", { item: label }));
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast.error(t("toast.copyFailed"));
    }
  };

  // 將您的個人連結集中管理
  const socialLinks = [
    {
      id: "email",
      label: t("personalInfo.email"),
      url: "mailto:ching.huan.li@gmail.com",
      copyValue: "septemhill@gmail.com",
      icon: <MailIcon className="h-6 w-6" />,
    },
    // {
    //   id: "phone",
    //   label: t("personalInfo.phone"),
    //   url: "tel:0975-630-637",
    //   copyValue: "0975-630-637",
    //   icon: <PhoneIcon className="h-6 w-6" />,
    // },
    {
      id: "linkedin",
      label: t("personalInfo.linkedin"),
      url: "https://www.linkedin.com/in/septem-li-7bb9a128/",
      copyValue: "https://www.linkedin.com/in/septem-li-7bb9a128/",
      icon: <LinkedInIcon className="h-6 w-6" />,
    },
    {
      id: "github",
      label: t("personalInfo.github"),
      url: "https://github.com/septemhill",
      copyValue: "https://github.com/septemhill",
      icon: <GitHubIcon className="h-6 w-6" />,
    },
    // {
    //   id: "website",
    //   label: t("personalInfo.website"),
    //   url: "https://septem-li.github.io/",
    //   copyValue: "https://septem-li.github.io/",
    //   icon: <GlobeIcon className="h-6 w-6" />,
    // },
  ];

  return (
    <section id="personal-info" className="text-center">
      <Image
        src={t("personalInfo.avatarUrl")}
        alt={t("personalInfo.name")}
        width={128}
        height={128}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        priority
      />
      <h1 className="text-4xl font-bold mb-2">{t("personalInfo.name")}</h1>
      <p className="text-lg text-gray-700 mb-4">{t("personalInfo.nickname")}</p>
      <div className="flex justify-center gap-6 mb-4">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            onClick={(e) => {
              e.preventDefault();
              handleCopy(link.copyValue, link.label);
            }}
            // 讓使用者仍然可以透過右鍵或中鍵在新分頁開啟連結
            onAuxClick={(e) => e.button === 1 && window.open(link.url, '_blank')}
            aria-label={link.label}
            className="text-gray-700 hover:text-blue-500 transition-colors cursor-pointer"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default PersonalInfo;
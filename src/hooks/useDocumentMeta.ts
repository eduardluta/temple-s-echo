import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const setMeta = (selector: string, content: string) => {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.content = content;
};

export const useDocumentMeta = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const title = t("meta.title");
    const description = t("meta.description");
    const ogDescription = t("meta.ogDescription");
    const siteName = t("meta.siteName");

    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', ogDescription);
    setMeta('meta[property="og:site_name"]', siteName);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', ogDescription);

    const lang = (i18n.language || "en").slice(0, 2);
    const localeMap: Record<string, string> = {
      de: "de_DE",
      he: "he_IL",
      en: "en_US",
    };
    setMeta('meta[property="og:locale"]', localeMap[lang] || "en_US");
  }, [t, i18n.language]);
};

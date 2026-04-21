import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import de from "./locales/de.json";
import he from "./locales/he.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
      he: { translation: he },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "de", "he"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

const syncHtmlLang = (lng: string) => {
  const base = (lng || "en").slice(0, 2).toLowerCase();
  const code = ["de", "he"].includes(base) ? base : "en";
  if (typeof document !== "undefined") {
    document.documentElement.lang = code;
    document.documentElement.dir = code === "he" ? "rtl" : "ltr";
  }
};

syncHtmlLang(i18n.language);
i18n.on("languageChanged", syncHtmlLang);

export default i18n;

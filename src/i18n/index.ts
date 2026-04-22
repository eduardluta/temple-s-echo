import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import de from "./locales/de.json";
import he from "./locales/he.json";

// Hebrew is loaded but hidden from the public UI (client review pending).
// Re-add "he" to supportedLngs + the language selector to re-enable.
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
    supportedLngs: ["en", "de"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

// If an older session stored "he", force back to English so users don't get stuck
if (typeof localStorage !== "undefined" && localStorage.getItem("i18nextLng") === "he") {
  localStorage.setItem("i18nextLng", "en");
  i18n.changeLanguage("en");
}

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

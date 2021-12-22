import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { DateTime } from "luxon";

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en-US",
    interpolation: {
      format: (value, format, lng) => {
        if (value instanceof Date) {
          return DateTime.fromJSDate(value)
            .setLocale(lng)
            .toLocaleString(DateTime[format]);
        }
        return value;
      }
    }
  });

export const languages = {
  "en-US": { nativeName: "English" },
  "es-ES": { nativeName: "Spanish " }
};

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { useTranslationsStore } from "@/lib/stores/translations";
import en from "../translations/en.json";
import es from "../translations/es.json";

const resources = {
  en: { translation: en },
  es: { translation: es },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "es",
  lng: useTranslationsStore.getState().language,
  interpolation: {
    escapeValue: false,
  },
});

useTranslationsStore.subscribe((state) => {
  const language = state.language;
  i18n.changeLanguage(language);
});

export default i18n;

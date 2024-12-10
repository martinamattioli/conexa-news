import { t } from "i18next";

export const languageOptions = (setLanguage: (lang: string) => void) => ({
  en: { label: t("es"), action: () => setLanguage("es") },
  es: { label: t("en"), action: () => setLanguage("en") },
});

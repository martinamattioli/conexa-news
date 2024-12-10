import { createPersistentStore } from "../utils";
import { TranslationState } from "./types";

export const useTranslationsStore = createPersistentStore<TranslationState>(
  (set) => ({
    language: "es",
    setLanguage: (language) => set((state) => ({ ...state, language })),
  }),
  {
    name: "language-storage",
  }
);

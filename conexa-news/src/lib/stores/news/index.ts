import { createPersistentStore } from "../utils";
import { NewsStore } from "./types";
import { News } from "@/lib/services/News/types";

export const useNewsStore = createPersistentStore<NewsStore>(
  (set) => ({
    favorites: [],

    setFavorite: (favorite: News) =>
      set((state) => ({ ...state, favorites: [...state.favorites, favorite] })),

    clearFavorite: (favorite: News) =>
      set((state) => ({
        ...state,
        favorites: state.favorites.filter((f) => f.id !== favorite.id),
      })),

    clearFavorites: () => set((state) => ({ ...state, favorites: [] })),
  }),
  {
    name: "news-store",
    partialize: (state) => ({
      ...state,
    }),
  }
);

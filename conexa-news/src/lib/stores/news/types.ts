import { News } from "@/lib/services/News/types";

export interface NewsStore {
  favorites?: News[];
  setFavorite: (favorite: News) => void;
  clearFavorite: (favorite: News) => void;
  clearFavorites: () => void;
}

import { useGetNewsById } from "@/lib/api/news/useGetNewsById";
import { useNewsStore } from "@/lib/stores/news";
import { useLocalSearchParams } from "expo-router";

export const useFavorite = () => {
  const { id } = useLocalSearchParams();

  const { favorites, setFavorite, clearFavorite } = useNewsStore();

  const isFavorite = favorites?.some((f) => `${f.id}` === id);
  const newsId = Array.isArray(id) ? id[0] : id;
  const { data } = useGetNewsById({ variables: { id: newsId } });

  const handleSetFavorite = () => {
    isFavorite ? clearFavorite(data) : setFavorite(data);
  };

  const { title, body } = data || {};

  return {
    title,
    body,
    isFavorite,
    handleSetFavorite,
  };
};

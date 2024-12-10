import LoadingWrapper from "@/components/LoadingWrapper";
import { NewsCard } from "@/components/NewsCard";
import { useGetNews } from "@/lib/api/news/useGetNews";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";

export function Home() {
  const { t } = useTranslation();
  const { data, isLoading } = useGetNews();
  const [searchQuery, setSearchQuery] = useState("");
  const [news, setNews] = useState(data);

  useEffect(() => {
    setNews(data);
  }, [data]);

  useEffect(() => {
    const filteredNews = data?.filter(
      (news) =>
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.body.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setNews(filteredNews);
  }, [searchQuery]);

  return (
    <LoadingWrapper isLoading={isLoading}>
      <View className="flex gap-y-4">
        <Searchbar
          placeholder={t("home.search")}
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={{
            borderRadius: 10,
            backgroundColor: "white",
            borderColor: "black",
            borderWidth: 0.5,
          }}
        />
        <FlatList
          data={news}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: { id, ...news } }) => (
            <NewsCard key={id} id={id} {...news} />
          )}
          keyExtractor={({ id }) => `${id}`}
        />
      </View>
    </LoadingWrapper>
  );
}

import { NewsCard } from "@/components/NewsCard";
import { useGetNews } from "@/lib/api/news/useGetNews";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

// TODO: loading state and empty state

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

  return isLoading ? (
    <Text className="bg-black">loading....</Text>
  ) : (
    <View className="flex flex-1 bg-white py-4 px-6 gap-y-4">
      <Searchbar
        placeholder={t("home.search")}
        value={searchQuery}
        onChangeText={setSearchQuery}
        // check if className is available
        style={{
          borderRadius: 10,
          backgroundColor: "white",
          borderColor: "black",
          borderWidth: 0.5,
        }}
      />
      <FlatList
        // TODO: fix scroll on the left
        data={news}
        renderItem={({ item: { id, ...news } }) => (
          <NewsCard key={id} id={id} {...news} />
        )}
        keyExtractor={({ id }) => `${id}`}
      />
    </View>
  );
}

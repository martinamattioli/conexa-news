import { NewsCard } from "@/components/NewsCard";
import { useGetNews } from "@/lib/api/news/useGetNews";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Searchbar } from "react-native-paper";

// TODO: loading state and empty state

export function Home() {
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
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{
          borderRadius: 10,
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

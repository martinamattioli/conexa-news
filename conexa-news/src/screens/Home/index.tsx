import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Searchbar } from "react-native-paper";

// TODO:
export function Home() {
  const onPress = async () => {
    // clear token
    // await clearSession();
  };

  const NewsItem = ({
    title,
    description,
    onPress,
  }: {
    title: string;
    description: string;
    onPress: () => void;
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
      >
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
        <Text>{description}</Text>
      </TouchableOpacity>
    );
  };

  const MOCK = [
    {
      id: "1",
      title: "Noticia MUCHAS LETRAS",
      description: "Descripción de la noticia 1",
    },
    {
      id: "2",
      title: "OTRA NOTICIA",
      description: "Descripción de la noticia 2",
    },
    {
      id: "3",
      title: "Noticia 3",
      description: "Descripción de la noticia 3",
    },
    {
      id: "4",
      title: "Noticia 4",
      description: "Descripción de la noticia 4",
    },
    {
      id: "5",
      title: "Noticia 5",
      description: "Descripción de la noticia 5",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [news, setNews] = useState(MOCK);

  useEffect(() => {
    // TODO: fetch news
    const filteredNews = MOCK.filter(
      (news) =>
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setNews(filteredNews);
  }, [searchQuery]);

  const handleNewsPress = (id: string) => {
    router.push(`/news/${id}`);
  };

  return (
    <View className="flex flex-1 bg-white p-6">
      <Text className="text-2xl font-bold mb-3">Conexa News</Text>
      <View className="w-full p-2 gap-y-4">
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{
            borderRadius: 10,
          }}
        />
        <FlatList
          data={news}
          renderItem={({ item }) => (
            <NewsItem
              title={item.title}
              description={item.description}
              onPress={() => handleNewsPress(item.id)}
            />
          )}
          keyExtractor={({ id }) => id}
        />
      </View>
    </View>
  );
}

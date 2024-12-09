import { NewsCard } from "@/components/NewsCard";
import { useNewsStore } from "@/lib/stores/news";
import React from "react";
import { ScrollView, View } from "react-native";

export default function Favorites() {
  const { favorites } = useNewsStore();
  return (
    <View className="flex flex-1 bg-white py-4 px-6">
      <ScrollView className="w-full gap-y-4">
        {favorites.map((news) => (
          <NewsCard key={news.id} {...news} />
        ))}
      </ScrollView>
    </View>
  );
}

import { Image, Text, View } from "react-native";
import { useFavorite } from "@/hooks/useFavorite";

export default function NewsDetail() {
  const { title, body } = useFavorite();

  return (
    <View className="bg-white p-8 flex-1">
      <Text className="text-xl font-bold mb-3 uppercase">{title}</Text>
      <Text className="mb-8">{body}</Text>
      <Image
        className="rounded-lg"
        source={{ uri: "https://picsum.photos/200" }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}

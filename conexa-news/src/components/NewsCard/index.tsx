import { useNewsStore } from "@/lib/stores/news";
import { Link, router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface NewsCardProps {
  id: number;
  title: string;
  body: string;
}

// TODO: style

export function NewsCard({ id, title, body }: NewsCardProps) {
  // TODO: set favorite
  const { setFavorite } = useNewsStore();

  return (
    <Link
      href={`/home/${id}`}
      className="w-full p-2 bg-slate-200 rounded-lg flex flex-row my-1 gap-x-2"
    >
      <Image
        className="rounded-lg w-24 h-24"
        source={{ uri: "https://picsum.photos/200" }}
      />
      <View className="w-3/4 gap-y-2 px-3">
        <Text className="font-bold uppercase text-ellipsis" numberOfLines={1}>
          {title}
        </Text>
        <Text className="text-ellipsis" numberOfLines={3}>
          {body}
        </Text>
      </View>
    </Link>
  );
}

import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import IconButton from "../IconButton";
import Icon from "@expo/vector-icons/FontAwesome";
import { useFavorite } from "@/hooks/useFavorite";

interface NewsCardProps {
  id: number;
  title: string;
  body: string;
}

// TODO: style

export function NewsCard({ id, title, body }: NewsCardProps) {
  const { isFavorite, handleSetFavorite } = useFavorite({ key: `${id}` });
  const router = useRouter();

  const handleCardPress = () => {
    router.push(`/home/${id}`);
  };

  return (
    <TouchableOpacity onPress={handleCardPress} className="w-full my-1">
      <View className="w-full p-2 bg-gray-100 rounded-lg flex flex-row gap-x-2">
        <Image
          className="rounded-lg w-24 h-24"
          source={{ uri: "https://picsum.photos/200" }}
        />
        <View className="w-3/4 gap-y-2 px-3">
          <View className="flex flex-row w-full justify-between">
            <Text
              className="font-bold uppercase text-ellipsis w-4/5"
              numberOfLines={1}
            >
              {title}
            </Text>
            <IconButton onPress={handleSetFavorite}>
              <Icon
                name={isFavorite ? "star" : "star-o"}
                size={16}
                color="black"
              />
            </IconButton>
          </View>
          <Text className="text-ellipsis" numberOfLines={3}>
            {body}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

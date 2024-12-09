import IconButton from "@/components/IconButton";
import { useFavorite } from "@/hooks/useFavorite";
import NewsDetail from "@/screens/Home/NewsDetail";
import { Stack } from "expo-router";
import { View } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";

export default function NewsDetailScreen() {
  const { isFavorite, handleSetFavorite } = useFavorite();

  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          // TODO: change title
          headerBackTitle: "Back",
          headerShown: true,
          headerTitle: "News Detail",
          headerRight: () => (
            <IconButton onPress={handleSetFavorite}>
              <Icon
                name={isFavorite ? "star" : "star-o"}
                size={24}
                color="black"
              />
            </IconButton>
          ),
        }}
      />
      <NewsDetail />
    </View>
  );
}

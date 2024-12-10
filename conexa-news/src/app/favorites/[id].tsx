import IconButton from "@/components/IconButton";
import { useFavorite } from "@/hooks/useFavorite";
import NewsDetail from "@/screens/Home/NewsDetail";
import { Stack } from "expo-router";
import { View } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";
import { useTranslation } from "react-i18next";

export default function NewsDetailScreen() {
  const { t } = useTranslation();
  const { isFavorite, handleSetFavorite } = useFavorite();

  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          headerBackTitle: t("goBack"),
          headerShown: true,
          headerTitle: t("newsDetail.title"),
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

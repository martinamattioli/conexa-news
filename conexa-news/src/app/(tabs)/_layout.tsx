import { Tabs } from "expo-router";
import Icon from "@expo/vector-icons/FontAwesome";
import IconButton from "@/components/IconButton";
import Logout from "@expo/vector-icons/MaterialIcons";
import Home from "@expo/vector-icons/Ionicons";
import User from "@expo/vector-icons/FontAwesome";

import { useAuth } from "@/hooks/useAuth";
import { useNewsStore } from "@/lib/stores/news";
import { useTranslation } from "react-i18next";

export default function Layout() {
  const { t } = useTranslation();
  const { handleLogout } = useAuth();
  const { clearFavorites } = useNewsStore();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopColor: "black/10",
          borderTopWidth: 1,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: t("home.title"),
          headerTitle: t("home.header"),
          headerRight: () => (
            <IconButton onPress={handleLogout} className="mr-4">
              <Logout name="logout" color="black" size={24} />
            </IconButton>
          ),
          tabBarIcon: ({ color, size }) => (
            <Home name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: t("users.title"),
          headerTitle: t("users.title"),
          tabBarIcon: ({ color, size }) => (
            <User name="users" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: t("favorites.title"),
          headerTitle: t("favorites.header"),
          headerRight: () => (
            <IconButton onPress={clearFavorites} className="mr-4">
              <Icon name="trash-o" size={24} color="black" />
            </IconButton>
          ),
          tabBarIcon: ({ color, size }) => (
            <Icon name="star" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: t("profile.title"),
          headerTitle: t("profile.title"),
          headerRight: () => (
            <IconButton onPress={handleLogout} className="mr-4">
              <Logout name="logout" color="black" size={24} />
            </IconButton>
          ),
          tabBarIcon: ({ color, size }) => (
            <User name="user" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

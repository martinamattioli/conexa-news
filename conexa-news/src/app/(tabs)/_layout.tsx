import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "@expo/vector-icons/FontAwesome";
import IconButton from "@/components/IconButton";
import Logout from "@expo/vector-icons/MaterialIcons";

import { useAuth } from "@/hooks/useAuth";
import { useNewsStore } from "@/lib/stores/news";

// TODO: refactor

export default function Layout() {
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
          headerTitle: "Conexa News",
          headerRight: () => (
            <IconButton onPress={handleLogout} className="mr-4">
              <Logout name="logout" color="black" size={24} />
            </IconButton>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          headerTitle: "Users",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          headerTitle: "Favorite News",
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
    </Tabs>
  );
}

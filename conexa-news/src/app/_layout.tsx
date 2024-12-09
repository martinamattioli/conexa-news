import "../global.css";
import React, { useEffect, useState } from "react";
import { Stack, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native";
import { AUTH_STACK_ROUTES } from "@/constants/routes";

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const userToken = await AsyncStorage.getItem("userToken");
      setIsAuthenticated(!!userToken);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        router.replace("/");
      } else {
        router.replace("/login");
      }
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return null; // TODO: Loading
  }

  return (
    <SafeAreaView className="flex flex-1">
      <Stack screenOptions={{ headerShown: false }}>
        {AUTH_STACK_ROUTES.map((route) => (
          <Stack.Screen key={route} name={route} />
        ))}
      </Stack>
    </SafeAreaView>
  );
}

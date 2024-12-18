import "../global.css";
import "../config/i18n";
import React, { useEffect, useState } from "react";
import { Stack, useRouter } from "expo-router";
import { AUTH_STACK_ROUTES } from "@/constants/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ActivityIndicator, View } from "react-native";
import { useAuth } from "@/hooks/useAuth";

export default function Layout() {
  const [queryClient] = useState(() => new QueryClient());
  const { token } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      setIsAuthenticated(!!token);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        router.replace("/home");
      } else {
        router.replace("/login");
      }
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        {AUTH_STACK_ROUTES.map((route) => (
          <Stack.Screen key={route} name={route} />
        ))}
      </Stack>
    </QueryClientProvider>
  );
}

import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  // TODO: use constants
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="detail" />
    </Stack>
  );
}

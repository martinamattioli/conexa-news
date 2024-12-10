import { useGetUsers } from "@/lib/api/users/useGetUsers";
import React from "react";
import { ScrollView, Text, View } from "react-native";

// TODO: styles, loading and empty state

export default function Users() {
  const { data } = useGetUsers();

  return (
    <View className="flex flex-1 bg-white py-4 px-6">
      <ScrollView
        // TODO: fix scroll on the left
        className="w-full gap-y-4"
      >
        {data?.map(({ id, name, email, phone }) => (
          <View key={id} className="my-1 rounded p-6 border-2 border-slate-200">
            <Text className="text-lg font-bold">{name}</Text>
            <Text>{email}</Text>
            <Text>{phone}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

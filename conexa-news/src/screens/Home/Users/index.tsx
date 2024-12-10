import LoadingWrapper from "@/components/LoadingWrapper";
import { useGetUsers } from "@/lib/api/users/useGetUsers";
import React, { Fragment } from "react";
import { ScrollView, Text, View } from "react-native";

export default function Users() {
  const { data, isLoading } = useGetUsers();

  return (
    <LoadingWrapper isLoading={isLoading}>
      <View className="flex gap-y-4">
        <ScrollView
          className="w-full gap-y-4"
          showsVerticalScrollIndicator={false}
        >
          {data?.map(({ id, name, email, phone }) => (
            <Fragment key={id}>
              <View className="mb-1 p-6">
                <Text className="text-lg font-bold">{name}</Text>
                <Text>{email}</Text>
                <Text>{phone}</Text>
              </View>
              <View className="h-px bg-gray-300 my-2" />
            </Fragment>
          ))}
        </ScrollView>
      </View>
    </LoadingWrapper>
  );
}

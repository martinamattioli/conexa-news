import { ActivityIndicator, View } from "react-native";

interface LoadingWrapperProps {
  children: React.ReactNode;
  isLoading: boolean;
}

export default function LoadingWrapper({
  children,
  isLoading,
}: LoadingWrapperProps) {
  return (
    <View className="flex flex-1 bg-white">
      {isLoading ? (
        <View className="flex flex-1 bg-white justify-center items-center">
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View className="py-4 px-6 w-full">{children}</View>
      )}
    </View>
  );
}

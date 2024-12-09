import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

// TODO:
export default function NewsDetail() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>News Detail</Text>
      <Text>{id}</Text>
    </View>
  );
}

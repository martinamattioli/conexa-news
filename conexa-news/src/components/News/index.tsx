import { Image, Text, TouchableOpacity } from "react-native";

type NewsItemProps = {
  title: string;
  description: string;
  image: string;
  onPress: () => void;
};

// TODO:

export default function NewsItem({
  title,
  description,
  image,
  onPress,
}: NewsItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
    >
      <Text style={{ fontWeight: "bold" }}>{title}</Text>
      <Text>{description}</Text>
      <Image
        source={{ uri: image }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
    </TouchableOpacity>
  );
}

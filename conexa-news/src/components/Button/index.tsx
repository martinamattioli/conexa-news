import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
  View,
} from "react-native";
import { buttonVariantClasses, textVariantClasses } from "./variants";

interface ButtonProps extends PressableProps {
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  title: string;
  variant?: "primary" | "secondary" | "link";
}

export function Button({
  variant = "primary",
  onPress,
  disabled,
  loading,
  title,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`w-full flex-row items-center justify-center rounded-lg px-6 py-4 ${
        buttonVariantClasses[variant]
      } ${disabled ? "opacity-25" : "opacity-100"}`}
    >
      {({ pressed }) => (
        <View>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text
              className={`text-lg font-medium ${textVariantClasses[variant]}`}
            >
              {title}
            </Text>
          )}
        </View>
      )}
    </Pressable>
  );
}

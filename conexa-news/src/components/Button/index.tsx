import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
  View,
} from "react-native";
import { buttonVariantClasses, textVariantClasses } from "./variants";

interface ButtonProps extends PressableProps {
  className?: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  title: string;
  variant?: "primary" | "secondary" | "link";
}

export function Button({
  className,
  variant = "primary",
  onPress,
  disabled,
  loading,
  title,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      className={`w-full flex-row items-center justify-center rounded-lg ${
        buttonVariantClasses[variant]
      } ${disabled ? "opacity-25" : "opacity-100"} ${className}`}
    >
      <View>
        {loading ? (
          <ActivityIndicator testID="ActivityIndicator" />
        ) : (
          <Text
            className={`text-lg font-medium ${textVariantClasses[variant]}`}
          >
            {title}
          </Text>
        )}
      </View>
    </Pressable>
  );
}

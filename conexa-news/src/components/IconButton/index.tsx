import { TouchableOpacity } from "react-native";

interface IconButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function IconButton({
  children,
  className,
  onPress,
}: IconButtonProps) {
  return (
    <TouchableOpacity className={className} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

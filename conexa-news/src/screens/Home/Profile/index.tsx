import { Button } from "@/components/Button";
import { useAuth } from "@/hooks/useAuth";
import { useTranslationsStore } from "@/lib/stores/translations";
import { useTranslation } from "react-i18next";
import { Image, Text, View } from "react-native";
import { languageOptions } from "./utils";

export default function Profile() {
  const { t } = useTranslation();
  const { loginData } = useAuth();
  const { setLanguage, language } = useTranslationsStore();

  const { label, action } = languageOptions(setLanguage)[language];
  return (
    <View className="flex-1 bg-white gap-y-6 p-8">
      <View className="items-center">
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          className="w-36 h-36 rounded-full"
        />
      </View>
      <View className="flex items-start gap-y-3">
        <View>
          <Text className="font-bold text-lg capitalize">
            {t("login.email")}
          </Text>
          <Text>{loginData.email}</Text>
        </View>
        <View>
          <Text className="font-bold text-lg capitalize">
            {t("profile.language")}
          </Text>
          <Text>{language}</Text>
        </View>
        <View className="flex flex-row gap-x-2">
          <Text className="font-bold text-lg">
            {t("profile.changeLanguage")}
          </Text>
          <Button
            title={label}
            onPress={action}
            variant="link"
            className="flex !justify-start"
          />
        </View>
      </View>
    </View>
  );
}

import { Button } from "@/components/Button";
import TextInput from "@/components/TextInput";
import { isIos } from "@/constants/platform";
import { useLoginStore } from "@/lib/stores/login";
import { hideKeyboard } from "@/utils/keyboard";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export function Login() {
  const { t } = useTranslation();
  const { setToken, storeLoginData } = useLoginStore();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    hideKeyboard();
    storeLoginData(data);
    const token = Math.random().toString(36).substring(7);
    setToken(token);

    router.replace("/home");
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View className="flex-1 items-center justify-between p-8 bg-white">
        <KeyboardAvoidingView
          className="w-full"
          // TODO: verify behavior
          behavior={isIos ? "padding" : undefined}
          style={{ flex: 1 }}
        >
          <View className="w-full gap-y-16">
            <Text className="text-2xl font-bold">{t("login.welcome")}</Text>
            <View className="w-full flex gap-y-6">
              <TextInput
                control={control}
                name="email"
                placeholder={t("login.enter", { field: t("login.email") })}
                keyboardType="email-address"
                label={t("email")}
                rules={{
                  required: t("login.required", { field: t("login.email") }),
                }}
              />
              <TextInput
                control={control}
                name="password"
                placeholder={t("login.enter", { field: t("login.password") })}
                label={t("password")}
                rules={{
                  required: t("login.required", { field: t("login.password") }),
                }}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        <Button
          onPress={handleSubmit(onSubmit)}
          title={t("login.login")}
          loading={isSubmitting}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

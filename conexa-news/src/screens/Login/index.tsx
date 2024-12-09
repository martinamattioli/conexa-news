import { Button } from "@/components/Button";
import TextInput from "@/components/TextInput";
import { isIos } from "@/constants/platform";
import { hideKeyboard } from "@/utils/keyboard";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export function Login() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    // TODO: check keyboard bug
    hideKeyboard();
    console.log("Submitted Data:", data);
    router.replace("/news");
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View className="flex-1 items-center justify-between p-8 bg-white">
        <KeyboardAvoidingView
          className="w-full"
          behavior={isIos ? "padding" : undefined}
          style={{ flex: 1 }}
        >
          <View className="w-full gap-y-16">
            <Text className="text-2xl font-bold">Welcome to Conexa News</Text>
            <View className="w-full flex gap-y-6">
              <TextInput
                control={control}
                name="email"
                placeholder="Ingrese su email"
                keyboardType="email-address"
                label="Email"
                // TODO: uncomment
                // rules={{
                //   required: "You must enter your email",
                //   pattern: {
                //     value: /^\S+@\S+$/i,
                //     message: "Enter a valid email address",
                //   },
                // }}
              />
              <TextInput
                control={control}
                name="password"
                placeholder="Ingrese su contraseña"
                label="Contraseña"
                // TODO: uncomment
                // rules={{
                //   required: "You must enter your password",
                //   minLength: {
                //     value: 8,
                //     message: "Password must be at least 8 characters",
                //   },
                // }}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        <Button
          onPress={handleSubmit(onSubmit)}
          title="Login"
          loading={isSubmitting}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

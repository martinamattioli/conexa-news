import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import {
  Text,
  View,
  TextInput as RNTextInput,
  TextInputProps,
} from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  onChange?: () => void;
  name: string;
  control: Control<FieldValues>;
  rules?: RegisterOptions;
}

export default function TextInput({
  label,
  name,
  control,
  rules,
  ...props
}: InputProps) {
  return (
    <View className="w-full gap-y-2">
      {!!label && <Text>{label}</Text>}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({
          field: { ref, onChange, ...field },
          formState: { errors },
        }) => (
          <View>
            <RNTextInput
              ref={ref}
              className="w-full p-4 mb-4 border border-gray-300 rounded"
              onChangeText={onChange}
              {...field}
              {...props}
            />
            {errors[name]?.message &&
              typeof errors[name].message === "string" && (
                <Text className="text-red-700">{errors[name].message}</Text>
              )}
          </View>
        )}
      />
    </View>
  );
}

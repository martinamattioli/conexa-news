import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { useForm } from "react-hook-form";
import TextInput from "@/components/TextInput";
import { Button, View } from "react-native";

describe("TextInput Component", () => {
  const Wrapper = ({ name, rules = {}, placeholder = "", ...props }) => {
    const { control, handleSubmit } = useForm();
    const onSubmit = jest.fn();
    return (
      <View>
        <TextInput
          name={name}
          control={control}
          rules={rules}
          placeholder={placeholder}
          {...props}
        />
        <Button onPress={handleSubmit(onSubmit)} title="Submit" />
      </View>
    );
  };

  it("renders correctly with label", () => {
    const { getByText } = render(<Wrapper name="test" label="Test Label" />);
    expect(getByText("Test Label")).toBeTruthy();
  });

  it("shows error message when validation fails", async () => {
    const { getByText, getByPlaceholderText } = render(
      <Wrapper
        name="test"
        rules={{ required: "This field is required" }}
        placeholder="Enter text"
      />
    );

    const input = getByPlaceholderText("Enter text");
    fireEvent.changeText(input, "");
    fireEvent.press(getByText("Submit"));

    await waitFor(() => {
      expect(getByText("This field is required")).toBeTruthy();
    });
  });

  it("handles text input correctly", () => {
    const { getByPlaceholderText } = render(
      <Wrapper name="test" placeholder="Enter text" />
    );
    const input = getByPlaceholderText("Enter text");
    fireEvent.changeText(input, "New Text");
    expect(input.props.value).toBe("New Text");
  });
});

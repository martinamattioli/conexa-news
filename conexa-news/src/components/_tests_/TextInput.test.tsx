import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { useForm } from "react-hook-form";
import TextInput from "@/components/TextInput";

describe("TextInput Component", () => {
  const Wrapper = ({ name, rules = {}, ...props }) => {
    const { control } = useForm();
    return <TextInput name={name} control={control} rules={rules} {...props} />;
  };

  it("renders correctly with label", () => {
    const { getByText } = render(<Wrapper name="test" label="Test Label" />);
    expect(getByText("Test Label")).toBeTruthy();
  });

  // TODO: Fix this test
  //   it("shows error message when validation fails", () => {
  //     const { getByText } = render(
  //       <Wrapper name="test" rules={{ required: "This field is required" }} />
  //     );
  //     fireEvent.changeText(getByText("This field is required"));
  //     expect(getByText("This field is required")).toBeTruthy();
  //   });

  it("handles text input correctly", () => {
    const { getByPlaceholderText } = render(
      <Wrapper name="test" placeholder="Enter text" />
    );
    const input = getByPlaceholderText("Enter text");
    fireEvent.changeText(input, "New Text");
    expect(input.props.value).toBe("New Text");
  });
});

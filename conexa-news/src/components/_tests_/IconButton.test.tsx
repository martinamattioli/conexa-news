import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import IconButton from "@/components/IconButton";
import { Text } from "react-native";

describe("IconButton Component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <IconButton onPress={() => {}}>
        <Text>Icon</Text>
      </IconButton>
    );
    expect(getByText("Icon")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <IconButton onPress={mockOnPress}>
        <Text>Icon</Text>
      </IconButton>
    );
    fireEvent.press(getByText("Icon"));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});

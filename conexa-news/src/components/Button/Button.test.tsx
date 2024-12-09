import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "@/components/Button";

describe("Button Component", () => {
  it("renders correctly with default props", () => {
    const { getByText } = render(
      <Button title="Click Me" onPress={() => {}} />
    );
    expect(getByText("Click Me")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <Button title="Click Me" onPress={mockOnPress} />
    );
    fireEvent.press(getByText("Click Me"));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("shows loading indicator when loading is true", () => {
    const { getByTestId } = render(
      <Button title="Click Me" onPress={() => {}} loading={true} />
    );
    expect(getByTestId("ActivityIndicator")).toBeTruthy();
  });

  it("disables button when disabled is true", () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <Button title="Click Me" onPress={mockOnPress} disabled={true} />
    );
    fireEvent.press(getByText("Click Me"));
    expect(mockOnPress).not.toHaveBeenCalled();
  });
});

import { render, fireEvent } from "@testing-library/react-native";
import { useRouter } from "expo-router";
import { useFavorite } from "@/hooks/useFavorite";
import { NewsCard } from "../NewsCard";

jest.mock("expo-font", () => {
  const module: typeof import("expo-font") = {
    ...jest.requireActual("expo-font"),
    isLoaded: jest.fn(() => true),
  };

  return module;
});

jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/hooks/useFavorite", () => ({
  useFavorite: jest.fn(),
}));

jest.mock("@expo/vector-icons/FontAwesome", () => "Icon");

describe("NewsCard", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    const mockHandleSetFavorite = jest.fn();
    (useFavorite as jest.Mock).mockReturnValue({
      isFavorite: false,
      handleSetFavorite: mockHandleSetFavorite,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render NewsCard correctly", () => {
    const { getByText } = render(
      <NewsCard id={1} title="News Title" body="News body content" />
    );

    expect(getByText("News Title")).toBeTruthy();
    expect(getByText("News body content")).toBeTruthy();
  });

  it("should navigate when the card is pressed", () => {
    const { getByRole } = render(
      <NewsCard id={1} title="News Title" body="News body content" />
    );

    const card = getByRole("button");
    fireEvent.press(card);

    expect(mockPush).toHaveBeenCalledWith("/home/1");
  });

  it("should call handleSetFavorite when the favorite icon is pressed", () => {
    const { getByTestId } = render(
      <NewsCard id={1} title="News Title" body="News body content" />
    );

    const favoriteIcon = getByTestId("favorite-icon");
    fireEvent.press(favoriteIcon);

    expect(useFavorite).toHaveBeenCalledTimes(1);
  });

  it("should render a filled star icon when the news is a favorite", () => {
    (useFavorite as jest.Mock).mockReturnValue({
      isFavorite: true,
      handleSetFavorite: jest.fn(),
    });

    const { getByTestId } = render(
      <NewsCard id={1} title="News Title" body="News body content" />
    );

    const favoriteIcon = getByTestId("favorite-icon");
    expect(favoriteIcon.props.name).toBe("star");
  });

  it("should render an empty star icon when the news is not a favorite", () => {
    (useFavorite as jest.Mock).mockReturnValue({
      isFavorite: false,
      handleSetFavorite: jest.fn(),
    });

    const { getByTestId } = render(
      <NewsCard id={1} title="News Title" body="News body content" />
    );

    const favoriteIcon = getByTestId("favorite-icon");
    expect(favoriteIcon.props.name).toBe("star-o");
  });
});

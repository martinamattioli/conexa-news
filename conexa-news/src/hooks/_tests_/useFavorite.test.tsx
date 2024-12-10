import { renderHook, act } from "@testing-library/react-hooks";
import { useNewsStore } from "@/lib/stores/news";
import { useLocalSearchParams } from "expo-router";
import { useGetNewsById } from "@/lib/api/news/useGetNewsById";
import { useFavorite } from "../useFavorite";

jest.mock("@/lib/stores/news");
jest.mock("expo-router");
jest.mock("@/lib/api/news/useGetNewsById");

describe("useFavorite", () => {
  it("should toggle favorite when handleSetFavorite is called", () => {
    const setFavoriteMock = jest.fn();
    const clearFavoriteMock = jest.fn();
    const mockData = { id: 1, title: "Test Title", body: "Test Body" };

    (useNewsStore as unknown as jest.Mock).mockReturnValue({
      favorites: [{ id: 1 }],
      setFavorite: setFavoriteMock,
      clearFavorite: clearFavoriteMock,
    });

    (useLocalSearchParams as jest.Mock).mockReturnValue({ id: "1" });

    (useGetNewsById as unknown as jest.Mock).mockReturnValue({
      data: mockData,
    });

    const { result } = renderHook(() => useFavorite());

    expect(result.current.title).toBe("Test Title");
    expect(result.current.body).toBe("Test Body");
    expect(result.current.isFavorite).toBe(true);

    act(() => {
      result.current.handleSetFavorite();
    });

    expect(clearFavoriteMock).toHaveBeenCalledTimes(1);
  });
});

import { renderHook, act } from "@testing-library/react-hooks";
import { router } from "expo-router";
import { useLoginStore } from "@/lib/stores/login";
import { useAuth } from "../useAuth";

jest.mock("@/lib/stores/login");
jest.mock("expo-router");

describe("useAuth", () => {
  it("should call clearToken, setIsLogged, clearLoginData and router.replace when handleLogout is called", () => {
    const setIsLoggedMock = jest.fn();
    const clearTokenMock = jest.fn();
    const clearLoginDataMock = jest.fn();

    (useLoginStore as unknown as jest.Mock).mockReturnValue({
      setIsLogged: setIsLoggedMock,
      clearToken: clearTokenMock,
      clearLoginData: clearLoginDataMock,
    });

    const replaceMock = jest.fn();
    router.replace = replaceMock;

    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.handleLogout();
    });

    expect(clearTokenMock).toHaveBeenCalledTimes(1);
    expect(clearLoginDataMock).toHaveBeenCalledTimes(1);
    expect(setIsLoggedMock).toHaveBeenCalledWith(false);
    expect(replaceMock).toHaveBeenCalledWith("login");
  });
});

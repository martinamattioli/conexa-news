import { useLoginStore } from "@/lib/stores/login";
import { router } from "expo-router";

export const useAuth = () => {
  const { token, loginData, setIsLogged, clearToken, clearLoginData } =
    useLoginStore();

  const handleLogout = () => {
    clearToken();
    clearLoginData();
    setIsLogged(false);
    router.replace("login");
  };

  return {
    token,
    loginData,
    handleLogout,
  };
};

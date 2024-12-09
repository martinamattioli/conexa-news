import { useLoginStore } from "@/lib/stores/login";
import { router } from "expo-router";

export const useAuth = () => {
  const { setIsLogged, clearToken } = useLoginStore();

  const handleLogout = () => {
    clearToken();
    setIsLogged(false);
    router.replace("login");
  };

  return {
    handleLogout,
  };
};

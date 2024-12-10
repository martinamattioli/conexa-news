import { LoginParameters } from "@/lib/services/Users/types";

// TODO: check
export interface LoginStore {
  token?: string;
  loginData?: LoginParameters;
  isLogged?: boolean;
  setToken: (token: string) => void;
  clearToken: () => void;
  storeLoginData: (data: LoginParameters) => void;
  clearLoginData: () => void;
  setIsLogged: (isLogged: boolean) => void;
}

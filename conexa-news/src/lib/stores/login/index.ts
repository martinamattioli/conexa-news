import { createPersistentStore } from "../utils";
import { LoginStore } from "./types";

export const useLoginStore = createPersistentStore<LoginStore>(
  (set) => ({
    token: undefined,
    loginData: undefined,
    isLogged: false,

    setToken: (token: string) => set((state) => ({ ...state, token })),

    clearToken: () => set((state) => ({ ...state, token: undefined })),

    storeLoginData: (loginData: any) =>
      set((state) => ({ ...state, loginData })),

    clearLoginData: () => set((state) => ({ ...state, loginData: undefined })),

    setIsLogged: (isLogged: boolean) =>
      set((state) => ({ ...state, isLogged })),
  }),

  {
    name: "login-store",
    partialize: (state) => ({
      ...state,
      isLogged: undefined,
    }),
  }
);

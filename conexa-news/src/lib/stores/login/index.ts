import { createPersistentStore } from "../utils";
import { LoginStore } from "./types";

export const useLoginStore = createPersistentStore<LoginStore>(
  (set) => ({
    token: undefined,
    loginEmail: undefined,
    loginData: undefined,
    isLogged: false,

    setToken: (token: string) => set((state) => ({ ...state, token })),

    setLoginEmail: (loginEmail: string) =>
      set((state) => ({ ...state, loginEmail })),

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
      // TODO: borrar
      // Mantener isLogged como no persistente ya que este es un valor que cambia constantemente durante
      // la ejecucion de la aplicacion y no necesitamos almacenarlo
    }),
  }
);

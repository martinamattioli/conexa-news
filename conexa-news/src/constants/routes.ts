export const ROUTES = {
  Login: "login",
  App: "(tabs)",
} as const;

export const AUTH_STACK_ROUTES = [ROUTES.Login, ROUTES.App] as const;

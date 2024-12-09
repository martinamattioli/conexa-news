// TODO: fix naming and use

export const ROUTES = {
  Login: "login",
  App: "(tabs)",
} as const;

// export const ROUTE_NAMES = {
//   Login: "Login",
//   App: "App",
//   Home: "Home",
//   Users: "Users",
//   Favorites: "Favorites",
// } as const;

// export const ROUTE_LINKS = {
//   Login: "/login",
//   App: "/",
//   Home: "/",
//   Users: "/users",
//   Favorites: "/favorites",
// } as const;

export const AUTH_STACK_ROUTES = [ROUTES.Login, ROUTES.App] as const;

// export const MAIN_STACK_ROUTES = [ROUTES.Home];

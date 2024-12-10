import { create } from "apisauce";

const baseURL = process.env.EXPO_PUBLIC_API_URL;

const api = create({
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

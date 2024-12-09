import api, { baseURL } from "@/config/api";
import { API_ROUTES } from "../constants";
import { News } from "./types";

export const getNews = () => api.get<News[]>(`${API_ROUTES.NEWS}`);

export const getNewsById = (id: string) =>
  api.get<News>(`${API_ROUTES.NEWS}/${id}`);

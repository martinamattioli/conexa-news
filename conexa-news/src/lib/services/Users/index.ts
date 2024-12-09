import api, { baseURL } from "@/config/api";
import { API_ROUTES } from "../constants";
import { User } from "./types";

export const getUsers = () => api.get<User[]>(`${API_ROUTES.USERS}`);

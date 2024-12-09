import { ApiError } from "@/types/api";
import { ApiResponse, create } from "apisauce";

export const baseURL = process.env.EXPO_PUBLIC_API_URL;

const api = create({
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

/*
This is the proposal for the ApiResonseHandler, the idea is that every response from an andpoint passes through this function before being sent to the react-query-kit hook.

For example the getHealth function would end up like this:
export const getHealth = () => api.get<GetHealthResponse, ApiError>('/health').then(handleApiResponse);

doing it like this, if the request fails, an error would be thrown with the standard ApiError message structure followed
by the back-end. Wich then would trigger the onError function from react-query.

Apisauce has a method called "addResponseTransform", which lets you set a function that gets called every time a response is recieved, this would avoid having to call the handler on every response, but i don't think this method transfers through the response's typings very well. If anyone figures out a way to implement "addResponseTransform" in a Typescript friendly way you are very welcome to do so
*/

export const handleApiResponse = <TResponse>(
  res: ApiResponse<TResponse, ApiError>
) => {
  if (!res.ok) {
    const error = res.data;
    throw error;
  }
  return res.data;
};

export default api;

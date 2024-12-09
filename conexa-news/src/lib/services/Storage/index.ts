import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_TOKEN_KEY = "@Auth:token";

interface LocalStorage<T> {
  get: () => Promise<T | null>;
  set: (item: T) => Promise<void>;
  remove: () => Promise<void>;
}

export function buildLocalStorage<T>(key: string): LocalStorage<T> {
  return {
    get: async () => {
      const item = await AsyncStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    },
    set: (item: T) => AsyncStorage.setItem(key, JSON.stringify(item)),
    remove: () => AsyncStorage.removeItem(key),
  };
}

export const authTokenStorage = buildLocalStorage(AUTH_TOKEN_KEY);

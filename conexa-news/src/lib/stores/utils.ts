import AsyncStorage from "@react-native-async-storage/async-storage";
import { StateCreator, create } from "zustand";
import { PersistOptions, createJSONStorage, persist } from "zustand/middleware";

export function createPersistentStore<
  T extends object,
  PersistedState extends object = T,
  StateCreatorParams extends Parameters<StateCreator<T>> = Parameters<
    StateCreator<T>
  >,
  SetState extends StateCreatorParams[0] = StateCreatorParams[0]
>(
  creator: (
    set: (
      state: Parameters<SetState>[0],
      replace?: Parameters<SetState>[1],
      name?: string
    ) => void,
    get: StateCreatorParams[1],
    api: StateCreatorParams[2]
  ) => ReturnType<StateCreator<T>>,
  options: PersistOptions<T, PersistedState>
) {
  return create<T>()(
    persist(creator as StateCreator<T>, {
      storage: createJSONStorage<PersistedState>(() => AsyncStorage),
      ...options,
    })
  );
}

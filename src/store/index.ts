import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { createGameSlice, type GameSlice } from "./gameSlice";
import { createSettingsSlice, type SettingsSlice } from "./settingsSlice";
import { createUserSlice, type UserSlice } from "./userSlice";

const useAppStore = create<SettingsSlice & UserSlice & GameSlice>()(
  persist(
    (...a) => ({
      ...createSettingsSlice(...a),
      ...createUserSlice(...a),
      ...createGameSlice(...a),
    }),
    {
      name: "bor-tycoon",
      version: 1,
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useAppStore;

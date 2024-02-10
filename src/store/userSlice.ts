import { StateCreator } from "zustand";

import { userLevels } from "@/data/userLevels";

export interface UserSlice {
  level: number;
  experiencePoints: number;
  money: number;
  addExperiencePoints: (experiencePoints: number) => void;
}

// addExperiencePoints: (state, action: PayloadAction<number>) => {
//   const experiencePoints = action.payload;

//   state.experiencePoints += experiencePoints;
//   const maxLevel = Object.keys(userLevels).length - 1;
//   if (state.level >= maxLevel) {
//     return; // Son seviyedeyse işlem yapma
//   }

//   // Seviye atlamayı kontrol et
//   const currentLevel = state.level;
//   let nextLevelXP = userLevels[currentLevel].requiredExp;

//   while (state.experiencePoints >= nextLevelXP) {
//     state.level++;
//     state.experiencePoints -= nextLevelXP;
//     nextLevelXP = userLevels[state.level]?.requiredExp ?? Infinity; // Son seviye için önlem
//   }
// },

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  level: 1,
  experiencePoints: 0,
  money: 0,
  addExperiencePoints: (exp: number) => {
    set((state) => ({ experiencePoints: state.experiencePoints + exp }));
  },
});

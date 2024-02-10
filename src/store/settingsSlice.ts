import { StateCreator } from "zustand";

export interface SettingsSlice {
  isOnboardingCompleted: boolean;
  companyName: string | null;
  setOnboardingCompleted: () => void;
  setCompanyName: (companyName: string) => void;
}

export const createSettingsSlice: StateCreator<SettingsSlice> = (set) => ({
  isOnboardingCompleted: false,
  companyName: null,
  setOnboardingCompleted: () => set({ isOnboardingCompleted: true }),
  setCompanyName: (companyName: string) => set({ companyName }),
});

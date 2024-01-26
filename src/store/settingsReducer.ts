import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface SettingsState {
  isOnboardingCompleted: boolean;
  companyName: string | null;
}

const initialState: SettingsState = {
  isOnboardingCompleted: false,
  companyName: null,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setOnboardingCompleted: (state) => {
      state.isOnboardingCompleted = true;
    },
    setCompanyName: (state, action: PayloadAction<string>) => {
      state.companyName = action.payload;
    },
  },
});

export const { setOnboardingCompleted, setCompanyName } = settingsSlice.actions;

export default settingsSlice.reducer;

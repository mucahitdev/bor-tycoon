import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UsersState {
  metarialCount: {
    [key: number]: number;
  };
  rawStorageCapacity: number;
  products: {
    [key: number]: number;
  };
  productsStorageCapacity: number;
}

const initialState: UsersState = {
  metarialCount: {},
  rawStorageCapacity: 100,
  products: {},
  productsStorageCapacity: 100,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addMaterial: (
      state,
      // eslint-disable-next-line prettier/prettier
      action: PayloadAction<{ materialId: number; quantity: number }>
    ) => {
      const { materialId, quantity } = action.payload;
      state.metarialCount[materialId] =
        (state.metarialCount[materialId] || 0) + quantity;
    },
    updateProduct: (
      state,
      // eslint-disable-next-line prettier/prettier
      action: PayloadAction<{ productId: number; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;
      state.products[productId] = (state.products[productId] || 0) + quantity;
    },
  },
});

export const { addMaterial, updateProduct } = userSlice.actions;

export default userSlice.reducer;

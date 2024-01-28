import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface gameState {
  metarialCount: {
    [key: number]: number;
  };
  rawStorageCapacity: number;
  products: {
    [key: number]: number;
  };
  productsStorageCapacity: number;
  mineData: {
    [key: number]: {
      capacity: number;
      rawCount: number;
      level: number;
    };
  };
}

const initialState: gameState = {
  metarialCount: {},
  rawStorageCapacity: 100,
  products: {},
  productsStorageCapacity: 100,
  mineData: {
    1: {
      capacity: 100,
      rawCount: 0,
      level: 1,
    },
    2: {
      capacity: 200,
      rawCount: 0,
      level: 0,
    },
    3: {
      capacity: 300,
      rawCount: 0,
      level: 0,
    },
  },
};

export const gameSlice = createSlice({
  name: "game",
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

    // MINE
    // İlgili madenin seciyesini 1 arttırır
    updateMineDataLevelOne: (
      state,
      // eslint-disable-next-line prettier/prettier
      action: PayloadAction<{ mineId: number }>
    ) => {
      const { mineId } = action.payload;
      state.mineData[mineId].level += 1;
    },
    // Gelen sayı kadar ham madde ekler
    updateMineDataRawCount: (
      state,
      // eslint-disable-next-line prettier/prettier
      action: PayloadAction<{ mineId: number; quantity: number }>
    ) => {
      const { mineId, quantity } = action.payload;
      state.mineData[mineId].rawCount += quantity;
    },
  },
});

export const {
  addMaterial,
  updateProduct,
  updateMineDataLevelOne,
  updateMineDataRawCount,
} = gameSlice.actions;

export default gameSlice.reducer;

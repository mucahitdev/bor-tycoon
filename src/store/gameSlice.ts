import { StateCreator } from "zustand";

export interface GameSlice {
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
  addMaterial: (materialId: number, quantity: number) => void;
  updateProduct: (productId: number, quantity: number) => void;
  updateMineDataLevelOne: (mineId: number) => void;
  updateMineDataRawCount: (mineId: number, quantity: number) => void;
}

export const createGameSlice: StateCreator<GameSlice> = (set, get) => ({
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
  addMaterial: (materialId: number, quantity: number) => {
    const metarialCount = get().metarialCount;
    set({
      metarialCount: {
        ...metarialCount,
        [materialId]: (metarialCount[materialId] || 0) + quantity,
      },
    });
  },
  updateProduct: (productId: number, quantity: number) => {
    const products = get().products;
    set({
      products: {
        ...products,
        [productId]: (products[productId] || 0) + quantity,
      },
    });
  },
  updateMineDataLevelOne: (mineId: number) => {
    set((state) => ({
      mineData: {
        ...state.mineData,
        [mineId]: {
          ...state.mineData[mineId],
          level: state.mineData[mineId].level + 1,
        },
      },
    }));
  },
  updateMineDataRawCount: (mineId: number, quantity: number) => {
    set((state) => ({
      mineData: {
        ...state.mineData,
        [mineId]: {
          ...state.mineData[mineId],
          rawCount: state.mineData[mineId].rawCount + quantity,
        },
      },
    }));
  },
});

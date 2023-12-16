import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import {
  createGameStore,
  createVideoGameStore,
  createAddGameAndVideoGameStore,
} from "../utils/stores";

import type {
  VideoGameSlice,
  GameSlice,
  SharedGameAndVideoGameSlice,
} from "../utils/stores";

export const useShoppingCartStore = create<
  VideoGameSlice & GameSlice & SharedGameAndVideoGameSlice
>()(
  persist(
    (...a) => ({
      ...createVideoGameStore(...a),
      ...createGameStore(...a),
      ...createAddGameAndVideoGameStore(...a),
    }),
    { name: "game-store", storage: createJSONStorage(() => sessionStorage) }
  )
);

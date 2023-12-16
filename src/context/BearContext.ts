import { createContext, useContext } from "react";
import { BearState, BearStore } from "../stores/useBearContextStore";
import { useStore } from "zustand";

export const BearContext = createContext<BearStore | null>(null);

export function useBearStoreContext<T>(selector: (state: BearState) => T): T {
  const store = useContext(BearContext);
  if (!store) {
    throw new Error("Missing BearContext.Provider in the tree");
  }

  return useStore(store, selector);
}

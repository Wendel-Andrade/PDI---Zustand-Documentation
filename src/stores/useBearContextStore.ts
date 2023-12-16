import { createStore } from "zustand";

export interface BearProps {
  bears: number;
}

export interface BearState extends BearProps {
  addBear: () => void;
  removeBear: () => void;
  resetBear: () => void;
}

export type BearStore = ReturnType<typeof createBearStore>;

export const createBearStore = (initProps?: Partial<BearProps>) => {
  const DEFAULT_PROPS: BearProps = {
    bears: 0,
  };

  return createStore<BearState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    addBear: () => set((state) => ({ bears: ++state.bears })),
    removeBear: () => set((state) => ({ bears: state.bears - 1 })),
    resetBear: () => set(DEFAULT_PROPS),
  }));
};

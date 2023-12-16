import { create } from "zustand";

interface StateCounter {
  bears: number;
}

interface ActionsCounter {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useCountStore = create<StateCounter & ActionsCounter>((set) => ({
  bears: 0,
  increment: () => set((state) => ({ bears: state.bears + 1 })),
  decrement: () => set((state) => ({ bears: state.bears - 1 })),
  reset: () => set((state) => ({ bears: (state.bears = 0) })),
  removeAllBears: () => set({ bears: 0 }),
}));

import { StateCreator } from "zustand";

export interface VideoGameSlice {
  videoGame: number;
  addVideoGame: () => void;
  removeVideoGame: () => void;
}

export interface GameSlice {
  game: number;
  addGame: () => void;
  removeGame: () => void;
}

export interface SharedGameAndVideoGameSlice {
  addGameAndVideoGame: () => void;
  removeGameAndVideoGame: () => void;
  getGameAndVideoGame: () => void;
}

export const createVideoGameStore: StateCreator<
  VideoGameSlice & GameSlice,
  [],
  [],
  VideoGameSlice
> = (set) => ({
  videoGame: 0,
  addVideoGame: () =>
    set((state) => ({
      videoGame: state.videoGame + 1,
    })),
  removeVideoGame: () =>
    set((state) => ({
      videoGame: state.videoGame - 1,
    })),
});

export const createGameStore: StateCreator<
  GameSlice & VideoGameSlice,
  [],
  [],
  GameSlice
> = (set) => ({
  game: 0,
  addGame: () =>
    set((state) => ({
      game: state.game + 1,
    })),
  removeGame: () =>
    set((state) => ({
      game: state.game - 1,
    })),
});

export const createAddGameAndVideoGameStore: StateCreator<
  VideoGameSlice & GameSlice,
  [],
  [],
  SharedGameAndVideoGameSlice
> = (_set, get) => ({
  addGameAndVideoGame: () => {
    get().addGame();
    get().addVideoGame();
  },
  removeGameAndVideoGame: () => {
    get().removeGame();
    get().removeVideoGame();
  },
  getGameAndVideoGame: () => get().game + get().videoGame,
});

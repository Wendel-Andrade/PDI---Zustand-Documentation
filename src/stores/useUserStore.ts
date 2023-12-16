import { create } from "zustand";

type User = {
  name: string;
  email: string;
  password: string;
  users?: User[];
};

type Actions = {
  addUser: (user: User) => void;
  resetUser: () => void;
};

const initialState: User = {
  name: "",
  email: "",
  password: "",
};

export const useUserStore = create<User & Actions>()((set) => ({
  users: [],
  ...initialState,
  addUser: (user: User) => {
    set((state) => ({
      ...state,
      users: [...(state.users || []), user],
    }));
  },
  resetUser: () => {
    set(() => ({ users: [], ...initialState }));
  },
}));

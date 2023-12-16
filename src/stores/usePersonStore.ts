import { create } from "zustand";

interface StatePerson {
  firstName: string;
  lastName: string;
}

interface ActionPerson {
  updateFirstName: (firstName: StatePerson["firstName"]) => void;
  updateLastName: (lastName: StatePerson["lastName"]) => void;
}

export const usePersonStore = create<StatePerson & ActionPerson>((set) => ({
  firstName: "",
  lastName: "",
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}));

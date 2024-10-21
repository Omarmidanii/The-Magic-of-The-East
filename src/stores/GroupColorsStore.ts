import { create } from "zustand";

interface GroupcolorsStore {
  colors: number[] | undefined;
  setColors: (color: number) => void;
}

const useGroupcolorsStore = create<GroupcolorsStore>()((set) => ({
  colors: undefined,
  setColors: (color) =>
    set((state) => ({
      colors: state.colors ? [...state.colors, color] : [color],
    })),
}));

export default useGroupcolorsStore;

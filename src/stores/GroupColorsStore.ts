import { create } from "zustand";

interface GroupcolorsStore {
  colors: string[] | undefined;
  setColors: (color: string[]) => void;
}

const useGroupcolorsStore = create<GroupcolorsStore>()((set) => ({
  colors: undefined,
  setColors: (color) =>
    set(() => ({
      colors: color,
    })),
}));

export default useGroupcolorsStore;

import { create } from "zustand";

interface GroupItemsStore {
  items: { name: string; sizes: Record<string, number> }[] | undefined;
  setItems: (item: { name: string; sizes: Record<string, number> }) => void;
  removeItems: (ind: number) => void;
}

const useGroupItemsStore = create<GroupItemsStore>()((set) => ({
  items: undefined,
  setItems: (item) =>
    set((state) => ({
      items: state.items ? [...state.items, item] : [item],
    })),
  removeItems: (index) =>
    set((state) => ({
      items: state.items?.filter((_, ind) => ind != index),
    })),
}));

export default useGroupItemsStore;

import { create } from "zustand";
import Item from "../entities/Item";

interface GroupItemsStore {
  items: Item[] | undefined;
  setItems: (item: Item[]) => void;
  removeItems: (ind: number) => void;
}

const useGroupItemsStore = create<GroupItemsStore>()((set) => ({
  items: undefined,
  setItems: (item) =>
    set(() => ({
      items: item,
    })),
  removeItems: (index) =>
    set((state) => ({
      items: state.items?.filter((_, ind) => ind != index),
    })),
}));

export default useGroupItemsStore;

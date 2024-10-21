import { create } from "zustand";

interface GroupItemsStore {
  items: { name: string; sizes: Record<string, number> }[] | undefined;
  setItems: (item: { name: string; sizes: Record<string, number> }) => void;
}

const useGroupItemsStore = create<GroupItemsStore>()((set) => ({
  items: undefined,
  setItems: (item) =>
    set((state) => ({
      items: state.items ? [...state.items, item] : [item],
    })),
}));

export default useGroupItemsStore;

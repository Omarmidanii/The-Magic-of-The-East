import { create } from "zustand";

interface searchStore {
  search: string | undefined;
  setSearch: (search: string | undefined) => void;
}

const useSearchStore = create<searchStore>((set) => ({
  search: undefined,
  setSearch: (search) => set(() => ({ search: search })),
}));
export default useSearchStore;

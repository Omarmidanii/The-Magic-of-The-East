import { create } from "zustand";

interface PathStore {
  path: string;
  setPath: (path: string) => void;
}

const usePathStore = create<PathStore>((set) => ({
  path: window.location.pathname,
  setPath: (path) => set(() => ({ path: path })),
}));
export default usePathStore;

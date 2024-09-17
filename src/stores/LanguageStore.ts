import { create } from "zustand";

interface Language {
  lng: string;
  setLng: (lng: string) => void;
}

const useLanguage = create<Language>((set) => ({
  lng: "ar",
  setLng: (lng) => set(() => ({ lng: lng })),
}));
export default useLanguage;
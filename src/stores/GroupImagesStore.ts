import { create } from "zustand";

interface GroupImagesStore {
  images: File[] | undefined;
  setImages: (image: File) => void;
}

const useGroupImagesStore = create<GroupImagesStore>()((set) => ({
  images: undefined,
  setImages: (image) =>
    set((state) => ({
      images: state.images ? [...state.images, image] : [image],
    })),
}));

export default useGroupImagesStore;

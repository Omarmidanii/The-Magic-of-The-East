import { create } from "zustand";

interface GroupImagesStore {
  images: File[] | undefined;
  setImages: (image: File) => void;
  removeImage: (ind: string) => void;
}

const useGroupImagesStore = create<GroupImagesStore>()((set) => ({
  images: undefined,
  setImages: (image) =>
    set((state) => ({
      images: state.images ? [...state.images, image] : [image],
    })),
  removeImage: (imageName) =>
    set((state) => ({
      images: state.images?.filter((img) => img.name !== imageName),
    })),
}));

export default useGroupImagesStore;

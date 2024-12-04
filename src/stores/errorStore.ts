import { create } from "zustand";

interface errorMessage {
  email: string;
  password: string;
  message: string;
  images: string;
  password_confirmation: string;
  salary: string;
  position: string;
  lastname: string;
  firstname: string;
  phonenumber: string;
  address: string;
  name: string;
  description: string;
  classification_id: string;
  photos: string;
  colors: string;
  items: string;
  customer_id: string;
  groups: string;
  notes: string;
  total_sell_price: string;
}

interface ErrorStore {
  message?: errorMessage;
  setMessage: (message: errorMessage) => void;
}

const useErrorStore = create<ErrorStore>()((set) => ({
  message: undefined,
  setMessage: (message) => set(() => ({ message: message })),
}));

export default useErrorStore;

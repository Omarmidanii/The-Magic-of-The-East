import { create } from "zustand";

interface errorMessage {
  email: string;
  password: string;
  message: string;
  password_confirmation: string;
  salary: string;
  position: string;
  lastname: string;
  firstname: string;
  phonenumber: string;
  address: string;
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

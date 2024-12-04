import { create } from "zustand";
import customer from "../entities/customer";

interface AddBillStore {
  notes: string;
  setNotes: (notes: string) => void;
  customer?: customer;
  setCustomer: (customer?: customer) => void;
  total_sell_price: number;
  setTotal_Sell_Price: (total_sell_price: number) => void;
  resetAddBill: () => void;
}

const useAddBillStore = create<AddBillStore>()((set) => ({
  notes: "",
  setNotes: (notes) => set({ notes: notes }),
  customer: undefined,
  setCustomer: (customer) => set({ customer: customer }),
  total_sell_price: 0,
  setTotal_Sell_Price: (total_sell_price) =>
    set({ total_sell_price: total_sell_price }),
  resetAddBill: () =>
    set({ notes: "", customer: undefined, total_sell_price: 0 }),
}));

export default useAddBillStore;

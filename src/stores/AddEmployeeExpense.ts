import { create } from "zustand";
import employer from "../entities/employer";

interface AddEmployeeExpense {
  employee?: employer;
  setEmployee: (employee?: employer) => void;
  isReward: boolean;
  setIsReward: (reward?: boolean) => void;
  cost: string;
  setCost: (cost: string) => void;
  reset: () => void;
}

const useAddEmployeeExpense = create<AddEmployeeExpense>()((set) => ({
  customer: undefined,
  setEmployee: (employee) => set({ employee: employee }),
  isReward: true,
  setIsReward: (r) => set({ isReward: r }),
  cost: "",
  setCost: (cost) => set({ cost: cost }),
  reset: () => set({ employee: undefined, isReward: true }),
}));

export default useAddEmployeeExpense;

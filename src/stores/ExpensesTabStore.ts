import { create } from "zustand";

interface ExpensesTab {
  tab : string;
  setTab : (tab : string) => void;
}

const useExpensesTab = create<ExpensesTab>((set) => ({
 tab : "tab1",
 setTab : (tab) => set(() => ({tab : tab})),
}));
export default useExpensesTab;
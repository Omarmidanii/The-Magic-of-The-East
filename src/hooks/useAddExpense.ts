import addexpense from "../entities/addexpense";
import useCreate from "./useCreate";

const useAddExpense = (type: string) => {
  return useCreate<"", addexpense>(type != "4" ? "expenses" : "additionals");
};

export default useAddExpense;

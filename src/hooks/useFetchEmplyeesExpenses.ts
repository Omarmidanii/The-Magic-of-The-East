import employeesExpenses from "../entities/employeesExpenses";
import useIndex from "./useIndex";

const useFetchEmplyeesExpenses = (month:string) => {
  return useIndex<employeesExpenses>(`expenses/getExpenseDetails/4/${month}`);
};

export default useFetchEmplyeesExpenses;

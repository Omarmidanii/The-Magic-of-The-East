import expensesDetails from "../entities/expensesDetails";
import useFetchData from "./useFetchWithoutPaj";

const useFetchExpenseDetails = (tap: number, month: string) => {
  return useFetchData<expensesDetails>(
    `expenses/getExpenseDetails/${tap}/${month}`
  );
};

export default useFetchExpenseDetails;

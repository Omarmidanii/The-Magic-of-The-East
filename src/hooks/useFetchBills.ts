import billInfo from "../entities/billinfo";
import useIndex from "./useIndex";

const useFetchBills = () => {
  return useIndex<billInfo>("invoices");
};

export default useFetchBills;

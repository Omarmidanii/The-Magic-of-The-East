import expenses from "../entities/Expenses";
import useIndex from "./useIndex";

const useFetchExpesesTable = (tap: number) => {
  return useIndex<expenses>(`expenses/getall/${tap}`);
};

export default useFetchExpesesTable;

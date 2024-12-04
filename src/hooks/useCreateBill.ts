import bill from "../entities/bill";
import useCreate from "./useCreate";

const useCreateBill = () => {
  return useCreate<bill, FormData>("invoices");
};

export default useCreateBill;

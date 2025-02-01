import bill from "../entities/bill";
import useShow from "./useShow";

const usefetchbilldetails = (id: number) => {
  return useShow<bill>(id, "invoices");
};

export default usefetchbilldetails;

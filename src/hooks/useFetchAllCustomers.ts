import useIndex from "./useIndex";
import customer from "../entities/customer";

const useFetchAllCustomers = (filters?: string) => {
  return useIndex<customer>(filters ? `customers${filters}` : "customers");
};

export default useFetchAllCustomers;

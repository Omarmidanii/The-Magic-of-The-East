import useIndex from "./useIndex";
import customer from "../entities/customer";

const useFetchAllCustomers = () => {
  return useIndex<customer>("customers");
};

export default useFetchAllCustomers;

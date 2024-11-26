import useUpdate from "./useUpdate";
import customer from "../entities/customer";

const useUpdateCustomer = (id: number) => {
  return useUpdate<customer, customer>(id, "customers");
};

export default useUpdateCustomer;

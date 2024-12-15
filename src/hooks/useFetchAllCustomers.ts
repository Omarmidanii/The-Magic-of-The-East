import useIndex from "./useIndex";
import customer from "../entities/customer";
import useSearchStore from "../stores/searchSrote";

const useFetchAllCustomers = (filters?: string) => {
  const { search } = useSearchStore();

  return useIndex<customer>(
    window.location.pathname == "/dash/customers" && search
      ? `customers?filter[name]=${search}`
      : filters
      ? `customers${filters}`
      : "customers"
  );
};

export default useFetchAllCustomers;

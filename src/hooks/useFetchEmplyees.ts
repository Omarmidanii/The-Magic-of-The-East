import employer from "../entities/employer";
import useSearchStore from "../stores/searchSrote";
import useIndex from "./useIndex";

const useFetchEmplyees = (filters?: string) => {
  const { search } = useSearchStore();
  return useIndex<employer>(
    window.location.pathname == "/dash/employers" && search
      ? `employees?filter[name]=${search}`
      : filters
      ? `employees${filters}`
      : "employees"
  );
};

export default useFetchEmplyees;

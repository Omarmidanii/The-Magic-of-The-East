import employer from "../entities/employer";
import useSearchStore from "../stores/searchSrote";
import useIndex from "./useIndex";

const useFetchEmplyees = () => {
  const { search } = useSearchStore();
  return useIndex<employer>(
    window.location.pathname == "/dash/employers" && search
      ? `employees?filter[name]=${search}`
      : "employees"
  );
};

export default useFetchEmplyees;

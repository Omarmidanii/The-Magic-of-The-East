import employer from "../entities/employer";
import useIndex from "./useIndex";

const useFetchEmplyees = () => {
    //const { data, error, isLoading, fetchNextPage, hasNextPage } =
    return useIndex<employer>("employees");
}

export default useFetchEmplyees
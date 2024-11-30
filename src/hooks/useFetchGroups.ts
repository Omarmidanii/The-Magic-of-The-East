import useIndex from "./useIndex";
import { Card } from "./useFetchAllClassGroups";

const useFetchGroups = (id?: number) => {
  return useIndex<Card>(id ? `groups?filter[classification]=${id}` : "groups");
};

export default useFetchGroups;

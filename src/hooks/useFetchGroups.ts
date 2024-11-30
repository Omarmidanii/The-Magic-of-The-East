import useIndex from "./useIndex";
import { Card } from "./useFetchAllClassGroups";

const useFetchGroups = (id?: number, customerId?: number) => {
  return useIndex<Card>(
    customerId
      ? `customers/getgroups/${customerId}`
      : id
      ? `groups?filter[classification]=${id}`
      : "groups"
  );
};

export default useFetchGroups;

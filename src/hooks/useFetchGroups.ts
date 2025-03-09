import { Card } from "../entities/classGroups";
import useIndex from "./useIndex";

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

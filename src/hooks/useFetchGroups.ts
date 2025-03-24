import useIndex from "./useIndex";
import { Card } from "../entities/classGroups";

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

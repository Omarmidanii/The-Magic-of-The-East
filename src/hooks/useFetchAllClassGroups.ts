import { Card } from "@chakra-ui/react";
import useFetchData from "./useFetchWithoutPaj";

interface classGroups {
  classification_id: number;
  classification_name: string;
  groups: Card[];
}

export interface Card {
  id: number;
  name: string;
  photos: string[];
  state:string;
}

const useFetchAllClassGroups = () => {
  return useFetchData<classGroups>("classifications/getgroups");
};

export default useFetchAllClassGroups;
